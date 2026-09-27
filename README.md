# Portfolio Muhamad Fauzan Al Farikhi

Portfolio satu halaman dengan gaya editorial, fotografi engineering, dan halaman detail produk serta berita. Konten founder, perusahaan, produk, angka, mitra, penghargaan, artikel, komentar, dan review di situs ini adalah skenario fiktif untuk presentasi konsep. Foto Unsplash merupakan gambar stok untuk ilustrasi, bukan dokumentasi produk, peristiwa, atau orang yang memberi komentar/review.

## Menjalankan

Tidak membutuhkan dependency build. Jalankan server statis dari folder proyek:

```bash
python -m http.server 8000
```

Buka `http://localhost:8000`. Situs juga dapat dibuka langsung melalui `index.html`, meskipun server lokal lebih sesuai untuk pemeriksaan routing dan gambar.

## Deploy ke Vercel

Project ini berupa HTML, CSS, dan JavaScript statis, jadi tidak memerlukan dependency install atau build command. Dari dashboard Vercel, impor repository lalu pilih root project ini; biarkan Framework Preset sebagai `Other` dan Build Command serta Output Directory kosong. Header keamanan untuk situs dikonfigurasi di [`vercel.json`](vercel.json).

Untuk deploy lewat CLI dari folder project, buat preview terlebih dahulu dengan `vercel`. Setelah URL preview dibuka dan diperiksa, deploy ke production dengan `vercel --prod`. Situs ini tidak membutuhkan environment variable atau backend untuk fitur demo saat ini.

## Isi situs

- Homepage dengan profil, metrik simulasi, ekosistem konsep, produk, dampak sosial, newsroom, jurnal, dan kontak.
- Delapan kartu foto bidang engineering, termasuk robotika, manufaktur mobil, IoT/edge, satelit, observasi bumi, komputasi AI, energi, dan laboratorium.
- Foto editorial pada pratinjau produk, kartu berita, serta galeri artikel.
- Lima review simulasi dan enam komentar pembaca simulasi dari Indonesia, India, Jepang, Nigeria, Jerman, dan Brasil. Komentar ditulis dalam bahasa setempat/Inggris, disertai terjemahan Indonesia bila perlu. Tiap profil memakai foto berbeda; nama dan foto stok tidak menggambarkan orang yang menulis komentar.
- Tiga artikel blog lengkap tentang evaluasi AI, prototipe IoT, dan praktik engineering. Tautan “Baca artikel lengkap” membuka halaman tulisan tersendiri.
- Rute produk: `#/product/nexa-intelligence`, `#/product/optura`, `#/product/docmind-insight`, `#/product/farikhi-ai-api`, dan `#/product/farikhi-learn`.
- Rute artikel: `#/news/<slug>`, contohnya `#/news/respons-lampung`.
- Rute blog: `#/blog/membangun-ai-yang-bisa-dipercaya`, `#/blog/tiga-sensor-prototipe-pertama`, dan `#/blog/dari-prototipe-ke-sistem-andal`.
- Filter produk dan berita, navigasi mobile, interaksi komentar, serta formulir newsletter demo. Interaksi formulir tidak mengirim atau menyimpan data.
- Layout responsif, skip link, label kontrol, teks alternatif foto, fokus keyboard, dan pengaturan reduced motion.

## Kredit foto

Gambar dimuat dari CDN Unsplash dan setiap gambar pada situs memiliki tautan kredit. Foto bisa memerlukan koneksi internet. Periksa halaman sumber untuk informasi kontributor dan lisensi Unsplash saat akan menerbitkan situs.

Untuk memakai koleksi foto sendiri, salin file ke folder kategori di [`assets/images`](assets/images/README.md). Situs otomatis memakai file lokal yang tersedia dan memakai Unsplash sebagai cadangan untuk file yang belum ditambahkan. Daftar nama file, ukuran yang disarankan, dan pengaturan kredit ada di panduan tersebut.

| Penggunaan | Kontributor | Sumber |
|---|---|---|
| Robotika industri | Testalize.me | [Unsplash](https://unsplash.com/photos/industrial-robotic-arm-in-blue-lit-factory-9xHsWmh3m_4) |
| Robotika laboratorium | Brecht Corbeel | [Unsplash](https://unsplash.com/photos/a-robotic-arm-in-a-clean-minimalist-laboratory-setting-gEtezQMsu64) |
| Manufaktur kendaraan | Lilian Do Khac | [Unsplash](https://unsplash.com/photos/robotic-arms-assembling-a-car-chassis-on-a-factory-line-EyqUxJuOb1Q) |
| Sistem satelit | NASA Hubble Space Telescope | [Unsplash](https://unsplash.com/photos/a-space-station-with-a-satellite-attached-to-it-ToF0V-Dfw7Q) |
| Observasi bumi | NASA | [Unsplash](https://unsplash.com/photos/view-of-planet-earth-from-space-with-clouds-JZz2UYtHo1s) |
| Komponen IoT dan rangkaian | Kontributor Unsplash | [Unsplash](https://unsplash.com/photos/a-circuit-board-filled-with-electronic-components-5oUWerS9zYg) |
| Energi terbarukan | Colin Watts | [Unsplash](https://unsplash.com/photos/wind-turbine-on-green-grass-field-under-white-clouds-xG79esLZJ7U) |
| Infrastruktur komputasi | Eric Stoynov | [Unsplash](https://unsplash.com/photos/two-server-racks-filled-with-electronic-components-and-wires-k27hkqXuveo) |
| Infrastruktur data center | imgix | [Unsplash](https://unsplash.com/photos/server-racks-in-data-center-klWUhr-wPJ8) |
| Kegiatan komunitas | Anosh Ahmed | [Unsplash](https://unsplash.com/photos/volunteers-stacking-boxes-of-food-for-distribution-eL92sUzd53I) |
| Hero infrastruktur server | Taylor Vick | [Unsplash](https://unsplash.com/photos/server-room-with-network-cabinets-aWslrFhs1w4) |
| Pratinjau NEXA | Danny Pérez | [Unsplash](https://unsplash.com/photos/robotic-arm-assembling-a-complex-geometric-structure-under-green-light-V6lpEsglnVE) |
| Pratinjau OPTURA | Vitaly Gariev | [Unsplash](https://unsplash.com/photos/woman-working-at-a-desk-with-laptop-and-notebook-N3BArCmKE9o) |
| Pratinjau DocMind | Gabriel Cox | [Unsplash](https://unsplash.com/photos/an-open-notebook-with-a-pen-on-a-wooden-desk-6e7F96dBlAA) |
| Pratinjau API | Arif Riyanto | [Unsplash](https://unsplash.com/photos/person-coding-in-modern-workspace-G1N9kDHqBrQ) |
| Pratinjau FARIKHI Learn | Haseeb Modi | [Unsplash](https://unsplash.com/photos/students-working-in-school-computer-lab-LKySOH0mr38) |
| Artikel beasiswa STEM | Gowtham AGM | [Unsplash](https://unsplash.com/photos/students-in-school-uniforms-looking-out-from-balconies-G5BHv8zU2Dc) |
| Artikel riset AI | Brecht Corbeel | [Unsplash](https://unsplash.com/photos/detailed-computer-circuit-board-with-a-central-processing-unit-IVK7sioAQ3Q) |
| Artikel investasi startup | Matt Imhof; kredit tambahan Corridor Advisors | [Unsplash](https://unsplash.com/photos/seven-diverse-men-standing-together-in-a-modern-office-g_KMuIrWsqk) |
| Foto profil demo 1 | The Connected Narrative | [Unsplash](https://unsplash.com/photos/a-man-smiling-for-the-camera-N8lRH2uxih4) |
| Foto profil demo 2 | Sherise Van Dyk | [Unsplash](https://unsplash.com/photos/portrait-photography-of-a-smiling-woman-f0xTzv7TUiI) |
| Foto profil demo 3 | Morten Pedersen | [Unsplash](https://unsplash.com/photos/smiling-man-Z-bgD8pMv30) |
| Foto profil demo 4 | Luca Campioni | [Unsplash](https://unsplash.com/photos/smiling-woman-nt_oOuRObNY) |
| Foto profil demo 5 | Kolapo Oladapo | [Unsplash](https://unsplash.com/photos/a-man-smiling-for-the-camera-d-MsvR4MzUc) |
| Foto profil komentar 1 | Sou Jest | [Unsplash](https://unsplash.com/photos/smiling-woman-in-white-dress-outdoors-with-green-background-Y8vzJmut1CU) |
| Foto profil komentar 2 | Cabri Caldwell | [Unsplash](https://unsplash.com/photos/smiling-woman-working-on-laptop-at-a-desk-y4fKLIZl_sY) |
| Foto profil komentar 3 | Raju Kumar | [Unsplash](https://unsplash.com/photos/smiling-woman-in-blue-dress-leaning-against-a-tree-Ealvd0RtJag) |
| Foto profil komentar 4 | Brooke Balentine | [Unsplash](https://unsplash.com/photos/a-smiling-woman-poses-for-a-portrait-cdZcNIca4w0) |
| Foto profil komentar 5 | Carol Oliver | [Unsplash](https://unsplash.com/photos/smiling-womans-face-SEopPfow6Tg) |
| Foto profil komentar 6 | Bruno Dias | [Unsplash](https://unsplash.com/photos/smiling-man-in-white-t-shirt-holding-a-mug-outdoors-l3LFKhphiuo) |

## Pengujian

Jalankan pemeriksaan dengan Node.js, tanpa dependency tambahan:

```bash
node tests/smoke.test.js
node --check app.js
node --check tests/smoke.test.js
```

## Berkas utama

```text
index.html
styles.css
app.js
tests/smoke.test.js
ASSETS.md
README.md
assets/images/
  hero/
  engineering/
  products/
  newsroom/
  blog/
  people/reviews/
  people/comments/
```

## Sebelum publikasi

1. Verifikasi dan ganti seluruh identitas, cerita, angka, review, harga, dan mitra simulasi dengan informasi yang benar.
2. Dapatkan izin atas foto, logo, nama, dan kutipan yang akan dipakai; atau siapkan aset lokal dengan hak penggunaan yang sesuai.
3. Sambungkan form kontak/newsletter ke layanan dengan kebijakan privasi yang sesuai.
4. Lengkapi kanal kontak dan informasi legal resmi.
