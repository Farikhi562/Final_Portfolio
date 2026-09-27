const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const read = (name) => fs.readFileSync(path.join(root, name), "utf8");
const html = read("index.html");
const app = read("app.js");
const css = read("styles.css");
const readme = read("README.md");
const imageGuide = read("assets/images/README.md");
const vercelConfig = JSON.parse(read("vercel.json"));

function createAppHarness(hash = "") {
  const listeners = {};
  const makeClassList = () => ({ add() {}, remove() {}, toggle() {} });
  const appRoot = { innerHTML: "" };
  const header = { classList: makeClassList() };
  const nav = { classList: makeClassList(), addEventListener() {} };
  const menu = { classList: makeClassList(), setAttribute() {}, addEventListener() {} };
  const document = {
    title: "",
    body: { classList: makeClassList() },
    documentElement: { classList: makeClassList() },
    querySelector(selector) { return ({ "#app": appRoot, ".site-header": header, "#site-nav": nav, ".menu-toggle": menu })[selector]; },
    querySelectorAll() { return []; },
    addEventListener() {},
    getElementById() { return null; }
  };
  const window = {
    matchMedia() { return { matches: true }; },
    addEventListener(name, callback) { listeners[name] = callback; },
    scrollTo() {}
  };
  const location = { hash };
  const context = vm.createContext({ document, window, location, decodeURIComponent, requestAnimationFrame(callback) { callback(0); } });
  vm.runInContext(app, context);
  return { appRoot, document, location, listeners };
}

test("static app shell loads its stylesheet and application script", () => {
  assert.match(html, /<html lang="id">/);
  assert.match(html, /href="styles\.css"/);
  assert.match(html, /src="app\.js"/);
  assert.match(html, /id="app"/);
});

test("homepage includes the main sections from the portfolio brief", () => {
  for (const id of ["about", "ecosystem", "products", "projects", "clients", "impact", "newsroom", "journal", "contact"]) {
    assert.ok(app.includes(id), `Missing homepage section: ${id}`);
  }
});

test("product, newsroom, and blog routes cover each concept", () => {
  for (const slug of ["nexa-intelligence", "optura", "docmind-insight", "farikhi-ai-api", "farikhi-learn", "respons-lampung", "beasiswa-stem", "pusat-riset-ai", "investasi-startup", "ekspansi-asia-pasifik", "membangun-ai-yang-bisa-dipercaya", "tiga-sensor-prototipe-pertama", "dari-prototipe-ke-sistem-andal"]) {
    assert.ok(app.includes(slug), `Missing route/content: ${slug}`);
  }
  assert.match(app, /productPage\(product\)/);
  assert.match(app, /newsPage\(story\)/);
});

test("client-side routes render the home page, product detail, and news article", () => {
  const page = createAppHarness();
  assert.match(page.appRoot.innerHTML, /id="hero-title"/);
  assert.match(page.appRoot.innerHTML, /engineering-card-8/);
  assert.match(page.appRoot.innerHTML, /Foto editorial/);
  assert.match(page.appRoot.innerHTML, /FOTO PROFIL ADALAH FOTO ILUSTRASI/);
  const homePhotos = [...page.appRoot.innerHTML.matchAll(/<img\b[^>]*src="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(homePhotos.length, 25, "Homepage should have all unique photo cards and profile photos");
  assert.equal(new Set(homePhotos).size, homePhotos.length, "Homepage photo URLs should be unique");
  assert.ok(homePhotos.every((src) => src.startsWith("assets/images/")), "Homepage should use the local photo folders first");
  assert.match(page.appRoot.innerHTML, /data-fallback="https:\/\/images\.unsplash\.com\//);
  assert.equal((page.appRoot.innerHTML.match(/href="#\/blog\//g) || []).length, 3, "All three journal cards should open an article");
  page.location.hash = "#/product/optura";
  page.listeners.hashchange();
  assert.match(page.appRoot.innerHTML, /Konsep \/ belum dirilis/);
  assert.match(page.appRoot.innerHTML, /Restock recommendations/);
  assert.match(page.appRoot.innerHTML, /detail-product-photo/);
  const productPhotos = [...page.appRoot.innerHTML.matchAll(/<img\b[^>]*src="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(productPhotos).size, productPhotos.length, "Product visual and reviewer photo should differ");
  page.location.hash = "#/news/respons-lampung";
  page.listeners.hashchange();
  assert.match(page.appRoot.innerHTML, /FARIKHI/);
  assert.match(page.appRoot.innerHTML, /gallery-item/);
  assert.match(page.appRoot.innerHTML, /comment-avatar/);
  assert.equal((page.appRoot.innerHTML.match(/class="gallery-item"/g) || []).length, 5);
  assert.equal((page.appRoot.innerHTML.match(/class="comment-card"/g) || []).length, 6);
  const newsPhotos = [...page.appRoot.innerHTML.matchAll(/<img\b[^>]*src="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(newsPhotos).size, newsPhotos.length, "News, gallery, and commenter photos should not repeat");
  for (const country of ["Indonesia", "India", "Jepang", "Nigeria", "Jerman", "Brasil"]) {
    assert.match(page.appRoot.innerHTML, new RegExp(country));
  }
  assert.match(page.appRoot.innerHTML, /English · terjemahan/);
  assert.match(page.appRoot.innerHTML, /日本語 · terjemahan/);
  assert.match(page.appRoot.innerHTML, /Português · terjemahan/);
  assert.equal((page.appRoot.innerHTML.match(/class="comment-translation"/g) || []).length, 4);
  assert.match(page.appRoot.innerHTML, /data-comment-action="like"/);
  assert.doesNotMatch(page.appRoot.innerHTML, /PLACEHOLDER|KOMENTAR PLACEHOLDER/i);
  for (const slug of ["membangun-ai-yang-bisa-dipercaya", "tiga-sensor-prototipe-pertama", "dari-prototipe-ke-sistem-andal"]) {
    page.location.hash = `#/blog/${slug}`;
    page.listeners.hashchange();
    assert.match(page.appRoot.innerHTML, /blog-article/);
    assert.match(page.appRoot.innerHTML, /Artikel lainnya/);
    const blogBody = page.appRoot.innerHTML.match(/<article class="article-body blog-article">([\s\S]*?)<\/article>/)?.[1] || "";
    const paragraphCount = (blogBody.match(/<p>/g) || []).length;
    assert.ok(paragraphCount >= 6, `${slug} should include multiple article paragraphs (paragraphs: ${paragraphCount})`);
    const wordCount = blogBody.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    assert.ok(wordCount >= 180, `${slug} should render substantial article copy (words: ${wordCount})`);
  }
  assert.match(page.appRoot.innerHTML, /sistem yang bisa dirawat/i);
});

test("fictional claims and non-transmitting demo interactions are disclosed", () => {
  assert.match(app, /FOTO ILUSTRASI/);
  assert.match(app, /data simulasi/);
  assert.match(app, /Form simulasi — data tidak dikirim atau disimpan/);
  assert.match(readme, /skenario fiktif/i);
  assert.match(readme, /Kredit foto/);
  assert.match(readme, /satelit/i);
  assert.match(imageGuide, /cadangan/i);
  for (const folder of ["hero", "engineering", "products", "newsroom", "blog", "people/reviews", "people/comments"]) {
    assert.ok(fs.existsSync(path.join(root, "assets", "images", folder, "README.md")), `Missing photo folder guide: ${folder}`);
  }
  assert.match(app, /markLocalPhotoLoaded/);
});

test("Vercel config applies security headers and keeps scripts local", () => {
  const headers = new Map(vercelConfig.headers[0].headers.map(({ key, value }) => [key.toLowerCase(), value]));
  for (const name of ["content-security-policy", "x-content-type-options", "x-frame-options", "referrer-policy", "permissions-policy"]) {
    assert.ok(headers.has(name), `Missing security header: ${name}`);
  }
  assert.match(headers.get("content-security-policy"), /script-src 'self'/);
  assert.doesNotMatch(headers.get("content-security-policy"), /script-src[^;]*unsafe-inline/);
  assert.match(headers.get("content-security-policy"), /https:\/\/images\.unsplash\.com/);
  assert.doesNotMatch(app, /\son(?:load|error|click)=/i, "Images should use CSP-compatible event listeners");
});

test("responsive layout and reduced motion rules are present", () => {
  assert.match(css, /@media \(max-width: 740px\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(app, /prefers-reduced-motion: reduce/);
});
