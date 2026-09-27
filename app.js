const products = [
  { slug: "nexa-intelligence", number: "01", name: "NEXA Intelligence", category: "AI Business Intelligence", art: "nexa", tagline: "Data yang bicara. Keputusan yang bergerak.", description: "Platform artificial intelligence untuk membantu perusahaan memahami data, menemukan pola, memonitor performa bisnis, dan menghasilkan insight untuk pengambilan keputusan.", price: "Mulai Rp499.000 / bulan", rating: "4.9 / 5 · data simulasi", ratings: "8.421 ulasan · data simulasi", features: ["AI Analytics", "Automated Reports", "Business Forecasting", "Real-time Dashboard", "Natural Language Query", "Team Collaboration", "API Integration"], plans: [["Starter", "Rp499.000 / bulan"], ["Business", "Rp4.999.000 / bulan"], ["Enterprise", "Custom"]], useCases: ["Membaca tren dari data lintas tim", "Menyusun laporan performa otomatis", "Mengeksplorasi data dengan pertanyaan bahasa natural", "Menyelaraskan keputusan lewat dashboard bersama"] },
  { slug: "optura", number: "02", name: "OPTURA", category: "AI Business Optimization", art: "optura", tagline: "Mengubah data operasional menjadi keputusan.", description: "Platform intelligence untuk bisnis F&B dan UMKM yang membantu pemilik bisnis memonitor stok, pembelian, produksi, penjualan, waste, HPP, margin, dan rekomendasi restock.", price: "Gratis · Pro Rp149.000 / bulan", rating: "4.9 / 5 · data simulasi", ratings: "3.842 ulasan · data simulasi", features: ["Inventory monitoring", "Purchasing insights", "Production planning", "Waste intelligence", "HPP & margin analytics", "Sales dashboard", "Restock recommendations"], plans: [["Free", "Rp0"], ["Pro", "Rp149.000 / bulan"], ["Business", "Rp499.000 / bulan"]], useCases: ["Melihat posisi stok dan kebutuhan belanja", "Mengukur waste serta margin", "Merencanakan produksi berdasarkan penjualan", "Membuat keputusan restock dari data"] },
  { slug: "docmind-insight", number: "03", name: "DocMind Insight", category: "AI Knowledge & Document Intelligence", art: "docmind", tagline: "Jadikan jutaan dokumen menjadi satu sumber keputusan.", description: "Platform document intelligence berbasis AI untuk mencari, memahami, merangkum, dan menghubungkan informasi dari berbagai dokumen.", price: "Mulai Rp99.000 / bulan", rating: "4.8 / 5 · data simulasi", ratings: "2.117 ulasan · data simulasi", features: ["Document Search", "RAG", "AI Summary", "Knowledge Base", "Multi-Agent Analysis", "Automatic Sync", "Enterprise Permissions"], plans: [["Personal", "Rp99.000 / bulan"], ["Team", "Rp799.000 / bulan"], ["Enterprise", "Custom"]], useCases: ["Menelusuri arsip dan kebijakan", "Merangkum dokumen panjang", "Menghubungkan sumber pengetahuan", "Mengelola akses informasi tim"] },
  { slug: "farikhi-ai-api", number: "04", name: "FARIKHI AI API", category: "AI Infrastructure", art: "api", tagline: "AI infrastructure for builders.", description: "Infrastruktur API untuk developer dan perusahaan yang ingin mengintegrasikan kemampuan artificial intelligence ke dalam produk mereka.", price: "Paket berbasis penggunaan · simulasi", rating: "5.0 / 5 · simulasi", ratings: "1 ulasan simulasi", features: ["API access", "Developer console", "Usage monitoring", "Integration guides", "Access controls", "Enterprise support"], plans: [["Pay as you go", "Harga per penggunaan · simulasi"], ["Developer", "Rp1.499.000 / bulan · simulasi"], ["Enterprise", "Paket khusus · simulasi"]], useCases: ["Menambahkan AI ke aplikasi", "Menguji prototipe", "Memantau penggunaan layanan", "Mengelola integrasi organisasi"] },
  { slug: "farikhi-learn", number: "05", name: "FARIKHI Learn", category: "Education Technology", art: "learn", tagline: "Belajar teknologi tanpa dibuat ribet.", description: "Platform pembelajaran teknologi yang menggabungkan AI tutor, interactive learning, project-based education, dan personalized learning paths.", price: "Gratis · Student Rp79.000 / bulan", rating: "Informasi produk simulasi", ratings: "Belum ada ulasan terverifikasi", features: ["AI tutor", "Interactive learning", "Project-based education", "Personalized learning paths", "Progress tracking", "Learning resources"], plans: [["Free", "Rp0"], ["Student", "Rp79.000 / bulan"], ["Pro", "Rp199.000 / bulan"]], useCases: ["Mempelajari konsep teknologi", "Berlatih lewat proyek", "Mendapat arahan belajar personal", "Melihat perkembangan belajar"] }
];

const companies = [
  ["FARIKHI AI", "Artificial intelligence dan machine learning."], ["NEXA", "Software, SaaS, dan digital infrastructure."],
  ["FARIKHI CAPITAL", "Investasi dan venture capital."], ["FARIKHI LABS", "Riset dan teknologi lanjutan."],
  ["FARIKHI ENERGY", "Energi dan teknologi iklim."], ["FARIKHI ROBOTICS", "Robotika dan sistem otonom."],
  ["FARIKHI SPACE", "Riset teknologi antariksa."], ["FARIKHI FOUNDATION", "Pendidikan dan inisiatif kemanusiaan."]
];

const stories = [
  { slug: "respons-lampung", category: "Masyarakat", title: "FARIKHI FOUNDATION Menyiapkan Respons Komunitas di Lampung", date: "28 September 2026 · simulasi", location: "Lampung, Indonesia · simulasi", image: "community", excerpt: "Rencana respons komunitas berfokus pada distribusi kebutuhan dasar, dukungan kesehatan, perlindungan, dan koordinasi relawan setempat.", intro: "Dalam skenario portfolio ini, FARIKHI FOUNDATION membentuk tim respons bersama relawan lokal untuk menyalurkan kebutuhan dasar. Nama lembaga, lokasi kegiatan, tanggal, dan seluruh detail program di artikel ini adalah bagian dari simulasi fiktif; artikel ini bukan laporan kejadian nyata.", impact: ["Logistik komunitas", "Dukungan kesehatan", "Perlengkapan perlindungan", "Air bersih", "Paket makanan", "Koordinasi relawan"] },
  { slug: "beasiswa-stem", category: "Pendidikan", title: "Program Beasiswa STEM Membuka Jalur Belajar untuk Pelajar", date: "14 Agustus 2026 · simulasi", location: "Jakarta, Indonesia · simulasi", image: "schoolCommunity", excerpt: "Inisiatif pembelajaran STEM menghubungkan beasiswa, mentoring, dan proyek teknologi bagi pelajar Indonesia.", intro: "Dalam simulasi ini, program Beasiswa STEM menggabungkan bantuan pendidikan dengan pendampingan proyek sains dan teknologi. Nama organisasi, jadwal, penerima, dan seluruh kegiatan adalah bagian dari cerita fiktif portfolio.", impact: ["Beasiswa STEM", "Mentoring engineer", "Perangkat belajar", "Proyek siswa"] },
  { slug: "pusat-riset-ai", category: "Teknologi", title: "NEXA Memperkenalkan Laboratorium Riset AI Terapan", date: "22 Juli 2026 · simulasi", location: "Bandung, Indonesia · simulasi", image: "aiChip", excerpt: "Laboratorium konsep ini menyatukan eksperimen machine learning, robotika, dan rekayasa sistem produksi.", intro: "Laboratorium Riset NEXA digambarkan sebagai tempat engineer menguji model, sensor, dan sistem otonom dalam satu jalur dari prototipe menuju uji lapangan. Pengumuman serta organisasi pada kisah ini bersifat fiktif.", impact: ["Eksperimen AI", "Robotika terapan", "Sensor industri", "Kolaborasi kampus"] },
  { slug: "investasi-startup", category: "Perusahaan", title: "Fauzan Mendukung Tim AI untuk Logistik Asia Tenggara", date: "19 Mei 2026 · simulasi", location: "Singapura · simulasi", image: "startupTeam", excerpt: "Skenario investasi tahap awal pada perangkat lunak prediksi permintaan dan optimasi rute regional.", intro: "Kisah ini mengikuti tim fiktif Arunika Motion yang menguji perangkat lunak untuk perencanaan armada dan prediksi permintaan. Perusahaan, investasi, nilai transaksi, dan semua tokoh dalam artikel ini adalah simulasi.", impact: ["Prediksi permintaan", "Perencanaan armada", "Optimasi rute", "Investasi tahap awal"] },
  { slug: "ekspansi-asia-pasifik", category: "Perusahaan", title: "Ekosistem FARIKHI Memperluas Riset Engineering ke Asia Pasifik", date: "6 Agustus 2026 · simulasi", location: "Asia Pasifik · simulasi", image: "dataCenter", excerpt: "Rencana jaringan kolaborasi teknologi untuk bidang komputasi, mobilitas, energi, dan observasi bumi.", intro: "Dalam konsep ini, tim engineering regional menghubungkan laboratorium robotika, proyek komputasi AI, dan mitra energi bersih. Ekspansi dan organisasi dalam cerita ini adalah fiksi, bukan laporan operasi nyata.", impact: ["Lab robotika", "AI compute", "Mobilitas pintar", "Energi bersih"] }
];

const images = {
  robotLab: { local: "assets/images/engineering/robotika-industri.jpg", src: "https://images.unsplash.com/photo-1606206873764-fd15e242df52?auto=format&fit=crop&w=1600&q=84", page: "https://unsplash.com/photos/industrial-robotic-arm-in-blue-lit-factory-9xHsWmh3m_4", credit: "Testalize.me" },
  robotStudio: { local: "assets/images/engineering/lab-robotika.jpg", src: "https://images.unsplash.com/photo-1784821856280-401b76b03266?auto=format&fit=crop&w=1400&q=84", page: "https://unsplash.com/photos/a-robotic-arm-in-a-clean-minimalist-laboratory-setting-gEtezQMsu64", credit: "Brecht Corbeel" },
  autoFactory: { local: "assets/images/engineering/manufaktur-kendaraan.jpg", src: "https://images.unsplash.com/photo-1777383975764-bec6f5cabf00?auto=format&fit=crop&w=1600&q=84", page: "https://unsplash.com/photos/robotic-arms-assembling-a-car-chassis-on-a-factory-line-EyqUxJuOb1Q", credit: "Lilian Do Khac" },
  satellite: { local: "assets/images/engineering/satelit-orbit.jpg", src: "https://images.unsplash.com/photo-1712512161586-1038175f1e01?auto=format&fit=crop&w=1600&q=84", page: "https://unsplash.com/photos/a-space-station-with-a-satellite-attached-to-it-ToF0V-Dfw7Q", credit: "NASA Hubble Space Telescope" },
  earth: { local: "assets/images/engineering/observasi-bumi.jpg", src: "https://images.unsplash.com/photo-1777047023536-8e47688b77f9?auto=format&fit=crop&w=1600&q=84", page: "https://unsplash.com/photos/view-of-planet-earth-from-space-with-clouds-JZz2UYtHo1s", credit: "NASA" },
  circuit: { local: "assets/images/engineering/iot-edge.jpg", src: "https://images.unsplash.com/photo-1751887687766-c18728bc238a?auto=format&fit=crop&w=1400&q=84", page: "https://unsplash.com/photos/a-circuit-board-filled-with-electronic-components-5oUWerS9zYg", credit: "Kontributor Unsplash" },
  energy: { local: "assets/images/engineering/energi-terbarukan.jpg", src: "https://images.unsplash.com/photo-1591038985161-fc723828f6a2?auto=format&fit=crop&w=1600&q=84", page: "https://unsplash.com/photos/wind-turbine-on-green-grass-field-under-white-clouds-xG79esLZJ7U", credit: "Colin Watts" },
  compute: { local: "assets/images/engineering/infrastruktur-komputasi.jpg", src: "https://images.unsplash.com/photo-1775519520461-6b6e068d9250?auto=format&fit=crop&w=1600&q=84", page: "https://unsplash.com/photos/two-server-racks-filled-with-electronic-components-and-wires-k27hkqXuveo", credit: "Eric Stoynov" },
  dataCenter: { local: "assets/images/newsroom/ekspansi-asia-pasifik.jpg", src: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?auto=format&fit=crop&w=1400&q=84", page: "https://unsplash.com/photos/server-racks-in-data-center-klWUhr-wPJ8", credit: "imgix" },
  community: { local: "assets/images/newsroom/respons-komunitas.jpg", src: "https://images.unsplash.com/photo-1755599629285-91cc09a185c7?auto=format&fit=crop&w=1600&q=84", page: "https://unsplash.com/photos/volunteers-stacking-boxes-of-food-for-distribution-eL92sUzd53I", credit: "Anosh Ahmed" },
  serverRoom: { local: "assets/images/hero/ruang-server.jpg", src: "https://images.unsplash.com/photo-1564457461758-8ff96e439e83?auto=format&fit=crop&w=1600&q=84", page: "https://unsplash.com/photos/server-room-with-network-cabinets-aWslrFhs1w4", credit: "Taylor Vick" },
  founderProfile: { local: "assets/images/people/profile/foto-profile.jpg", src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&h=1100&q=84", page: "https://unsplash.com/", credit: "ilustrasi founder", localCredit: "Foto pribadi · Muhamad Fauzan Al Farikhi", localPage: "assets/images/people/profile/foto-profile.jpg" },
  productNexa: { local: "assets/images/products/nexa-intelligence.jpg", src: "https://images.unsplash.com/photo-1785522318345-67f8549614f6?auto=format&fit=crop&w=1400&q=84", page: "https://unsplash.com/photos/robotic-arm-assembling-a-complex-geometric-structure-under-green-light-V6lpEsglnVE", credit: "Danny Pérez" },
  productOptura: { local: "assets/images/products/optura.jpg", src: "https://images.unsplash.com/photo-1758876017768-458c975e92ed?auto=format&fit=crop&w=1400&q=84", page: "https://unsplash.com/photos/woman-working-at-a-desk-with-laptop-and-notebook-N3BArCmKE9o", credit: "Vitaly Gariev" },
  productDocmind: { local: "assets/images/products/docmind-insight.jpg", src: "https://images.unsplash.com/photo-1772396867158-e26d9e6256b2?auto=format&fit=crop&w=1400&q=84", page: "https://unsplash.com/photos/an-open-notebook-with-a-pen-on-a-wooden-desk-6e7F96dBlAA", credit: "Gabriel Cox" },
  productApi: { local: "assets/images/products/farikhi-ai-api.jpg", src: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1400&q=84", page: "https://unsplash.com/photos/person-coding-in-modern-workspace-G1N9kDHqBrQ", credit: "Arif Riyanto" },
  productLearn: { local: "assets/images/products/farikhi-learn.jpg", src: "https://images.unsplash.com/photo-1719159381981-1327b22aff9b?auto=format&fit=crop&w=1400&q=84", page: "https://unsplash.com/photos/students-working-in-school-computer-lab-LKySOH0mr38", credit: "Haseeb Modi" },
  schoolCommunity: { local: "assets/images/newsroom/beasiswa-stem.jpg", src: "https://images.unsplash.com/photo-1770621650976-8fa1ac8cdb31?auto=format&fit=crop&w=1400&q=84", page: "https://unsplash.com/photos/students-in-school-uniforms-looking-out-from-balconies-G5BHv8zU2Dc", credit: "Gowtham AGM" },
  aiChip: { local: "assets/images/newsroom/riset-ai.jpg", src: "https://images.unsplash.com/photo-1782330301019-5fc4ab9710a7?auto=format&fit=crop&w=1400&q=84", page: "https://unsplash.com/photos/detailed-computer-circuit-board-with-a-central-processing-unit-IVK7sioAQ3Q", credit: "Brecht Corbeel" },
  startupTeam: { local: "assets/images/newsroom/investasi-startup.jpg", src: "https://images.unsplash.com/photo-1780072773684-028dafcfff0b?auto=format&fit=crop&w=1400&q=84", page: "https://unsplash.com/photos/seven-diverse-men-standing-together-in-a-modern-office-g_KMuIrWsqk", credit: "Matt Imhof · Corridor Advisors" },
  avatarA: { local: "assets/images/people/reviews/reviewer-01.jpg", src: "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?auto=format&fit=crop&w=240&h=240&q=82", page: "https://unsplash.com/photos/a-man-smiling-for-the-camera-N8lRH2uxih4", credit: "The Connected Narrative" },
  avatarB: { local: "assets/images/people/reviews/reviewer-02.jpg", src: "https://images.unsplash.com/photo-1572879251990-8675f7264845?auto=format&fit=crop&w=240&h=240&q=82", page: "https://unsplash.com/photos/portrait-photography-of-a-smiling-woman-f0xTzv7TUiI", credit: "Sherise Van Dyk" },
  avatarC: { local: "assets/images/people/reviews/reviewer-03.jpg", src: "https://images.unsplash.com/photo-1534399315465-2b91232de345?auto=format&fit=crop&w=240&h=240&q=82", page: "https://unsplash.com/photos/smiling-man-Z-bgD8pMv30", credit: "Morten Pedersen" },
  avatarD: { local: "assets/images/people/reviews/reviewer-04.jpg", src: "https://images.unsplash.com/photo-1488234548165-b2ec9b6d7a24?auto=format&fit=crop&w=240&h=240&q=82", page: "https://unsplash.com/photos/smiling-woman-nt_oOuRObNY", credit: "Luca Campioni" },
  avatarE: { local: "assets/images/people/reviews/reviewer-05.jpg", src: "https://images.unsplash.com/photo-1659422440915-d516c6dc932e?auto=format&fit=crop&w=240&h=240&q=82", page: "https://unsplash.com/photos/a-man-smiling-for-the-camera-d-MsvR4MzUc", credit: "Kolapo Oladapo" },
  avatarF: { local: "assets/images/people/comments/comment-01.jpg", src: "https://images.unsplash.com/photo-1782669828408-8ec9ccdaf426?auto=format&fit=crop&w=240&h=240&q=82", page: "https://unsplash.com/photos/smiling-woman-in-white-dress-outdoors-with-green-background-Y8vzJmut1CU", credit: "Sou Jest" },
  avatarG: { local: "assets/images/people/comments/comment-02.jpg", src: "https://images.unsplash.com/photo-1783094269325-4ba186e8e01b?auto=format&fit=crop&w=240&h=240&q=82", page: "https://unsplash.com/photos/smiling-woman-working-on-laptop-at-a-desk-y4fKLIZl_sY", credit: "Cabri Caldwell" },
  avatarH: { local: "assets/images/people/comments/comment-03.jpg", src: "https://images.unsplash.com/photo-1781674330664-b2495f5dfd3f?auto=format&fit=crop&w=240&h=240&q=82", page: "https://unsplash.com/photos/smiling-woman-in-blue-dress-leaning-against-a-tree-Ealvd0RtJag", credit: "Raju Kumar" },
  avatarI: { local: "assets/images/people/comments/comment-04.jpg", src: "https://images.unsplash.com/photo-1745434159123-5b99b94206ca?auto=format&fit=crop&w=240&h=240&q=82", page: "https://unsplash.com/photos/a-smiling-woman-poses-for-a-portrait-cdZcNIca4w0", credit: "Brooke Balentine" },
  avatarJ: { local: "assets/images/people/comments/comment-05.jpg", src: "https://images.unsplash.com/photo-1515212799670-2481411f0d64?auto=format&fit=crop&w=240&h=240&q=82", page: "https://unsplash.com/photos/smiling-womans-face-SEopPfow6Tg", credit: "Carol Oliver" },
  avatarK: { local: "assets/images/people/comments/comment-06.jpg", src: "https://images.unsplash.com/photo-1781715779302-9d16abf6fd43?auto=format&fit=crop&w=240&h=240&q=82", page: "https://unsplash.com/photos/smiling-man-in-white-t-shirt-holding-a-mug-outdoors-l3LFKhphiuo", credit: "Bruno Dias" },
  blogAi: { local: "assets/images/blog/ai-systems.jpg", src: "https://images.unsplash.com/photo-1782330301019-5fc4ab9710a7?auto=format&fit=crop&w=1400&q=84", page: "https://unsplash.com/photos/detailed-computer-circuit-board-with-a-central-processing-unit-IVK7sioAQ3Q", credit: "Brecht Corbeel" },
  blogIot: { local: "assets/images/blog/iot-prototype.jpg", src: "https://images.unsplash.com/photo-1751887687766-c18728bc238a?auto=format&fit=crop&w=1400&q=84", page: "https://unsplash.com/photos/a-circuit-board-filled-with-electronic-components-5oUWerS9zYg", credit: "Kontributor Unsplash" },
  blogEngineering: { local: "assets/images/blog/engineering-practice.jpg", src: "https://images.unsplash.com/photo-1784821856280-401b76b03266?auto=format&fit=crop&w=1400&q=84", page: "https://unsplash.com/photos/a-robotic-arm-in-a-clean-minimalist-laboratory-setting-gEtezQMsu64", credit: "Brecht Corbeel" }
};

const testimonials = [
  { name: "Nadia Putri", role: "Head of Operations", company: "KarsaGrid Systems", product: "OPTURA", quote: "Tim operasional bisa melihat stok, waste, dan margin dalam satu alur yang mudah dibaca. Diskusi harian kami jadi jauh lebih terarah.", image: "avatarB" },
  { name: "Rafi Mahendra", role: "VP of Data", company: "Asterion Works", product: "NEXA Intelligence", quote: "Dashboard ini membantu kami menghubungkan sinyal dari banyak tim tanpa mengorbankan konteks di balik angkanya.", image: "avatarA" },
  { name: "Dimas Prakoso", role: "Engineering Lead", company: "Arunika Motion", product: "DocMind Insight", quote: "Tim engineering lebih cepat menemukan spesifikasi dan keputusan lama di arsip teknis yang terus bertambah.", image: "avatarC" },
  { name: "Maya Salsabila", role: "Founder", company: "Kirana Learning Lab", product: "FARIKHI Learn", quote: "Belajar lewat proyek kecil membuat topik teknis terasa lebih dekat dengan pekerjaan yang ingin saya bangun.", image: "avatarD" },
  { name: "Aditya Ramadhan", role: "Platform Engineer", company: "Sagara Compute", product: "FARIKHI AI API", quote: "Dokumentasi endpoint dan pemantauan penggunaan memberi tim kami jalur yang rapi dari prototipe ke integrasi.", image: "avatarE" }
];

const storyComments = [
  { name: "Rina Maharani", role: "Relawan logistik", location: "Lampung, Indonesia", language: "Bahasa Indonesia", date: "28 Sep 2026 · simulasi", text: "Di lapangan, jadwal distribusi yang berubah cepat sering bikin warga datang dua kali. Akan sangat membantu kalau titik dan jam pembagian diperbarui di satu tempat.", image: "avatarF" },
  { name: "Arjun Mehta", role: "Embedded systems engineer", location: "Bengaluru, India", language: "English · terjemahan", date: "28 Sep 2026 · simulasi", text: "An offline-first needs map could help when connectivity drops. It would also be useful to show when each update was last verified.", translation: "Peta kebutuhan yang bisa dipakai offline akan membantu saat koneksi terputus. Waktu verifikasi terakhir setiap pembaruan juga sebaiknya terlihat.", image: "avatarH" },
  { name: "Chinatsu Mori", role: "Disaster-risk researcher", location: "Sendai, Jepang", language: "日本語 · terjemahan", date: "28 Sep 2026 · simulasi", text: "地図だけでなく、ニーズの確認方法や住民が情報を訂正できる窓口も知りたいです。", translation: "Selain peta, saya ingin tahu bagaimana kebutuhan diverifikasi dan ke mana warga dapat mengirim koreksi informasi.", image: "avatarG" },
  { name: "Ifeoma Okafor", role: "Community operations lead", location: "Lagos, Nigeria", language: "English", date: "28 Sep 2026 · simulasi", text: "If an update lists packages delivered, please separate confirmed counts from estimates. That makes it easier for local volunteers to explain what is known without overstating progress.", image: "avatarK" },
  { name: "Lena Fischer", role: "Humanitarian logistics analyst", location: "Berlin, Jerman", language: "Deutsch · terjemahan", date: "28 Sep 2026 · simulasi", text: "Barrierefreiheit sollte bei der Auswahl der Ausgabestellen von Anfang an mitgedacht werden, nicht erst wenn sich die Schlange bildet.", translation: "Aksesibilitas perlu dipertimbangkan sejak memilih titik distribusi, bukan setelah antrean terbentuk.", image: "avatarI" },
  { name: "Camila Nunes", role: "Public-health volunteer", location: "Recife, Brasil", language: "Português · terjemahan", date: "28 Sep 2026 · simulasi", text: "As atualizações de saúde devem mostrar necessidades gerais, sem expor nomes ou detalhes das famílias que pedem ajuda.", translation: "Pembaruan kesehatan sebaiknya menjelaskan kebutuhan umum tanpa membuka nama atau detail keluarga yang meminta bantuan.", image: "avatarJ" }
];

const journalEntries = [
  {
    slug: "membangun-ai-yang-bisa-dipercaya", number: "001", category: "AI SYSTEMS", date: "28 Sep 2026 · simulasi", readTime: "6 menit baca", title: "Membangun AI bukan tentang membuat model yang lebih besar.",
    excerpt: "Kualitas AI terlihat dari keputusan yang dibantu, bukan ukuran modelnya. Mulailah dari pekerjaan pengguna, ukur kegagalan, lalu rancang konteks dan evaluasi yang bisa diperiksa.", image: "blogAi",
    blocks: [
      { type: "p", text: "Ketika sebuah tim memulai proyek AI, percakapan sering langsung menuju pilihan model, jumlah parameter, dan benchmark. Pertanyaan yang lebih berguna datang lebih awal: pekerjaan apa yang ingin dibantu, siapa yang mengerjakannya, dan apa yang berubah jika sistem berhasil? Tanpa jawaban itu, tim bisa membangun demo yang tampak pintar tetapi tidak mengurangi pekerjaan siapa pun." },
      { type: "h2", text: "Mulai dari satu pekerjaan yang jelas" },
      { type: "p", text: "Pilih alur kecil yang sering terjadi dan punya batas akhir yang bisa diamati. Contohnya: menyusun ringkasan awal dari laporan inspeksi agar teknisi bisa menemukan temuan penting lebih cepat. Petakan sumber informasi, keputusan yang tetap di tangan manusia, waktu yang dipakai sekarang, dan jenis kesalahan yang berisiko." },
      { type: "p", text: "Peta ini membantu membedakan kebutuhan model dari kebutuhan produk. Kadang masalahnya bukan jawaban yang kurang fasih, melainkan dokumen yang sulit ditemukan, data yang kedaluwarsa, atau antarmuka yang tidak menunjukkan sumber. Memperbaiki fondasi tersebut sering lebih bernilai daripada mengganti model." },
      { type: "h2", text: "Konteks harus bisa ditelusuri" },
      { type: "p", text: "Jika sistem menjawab dari dokumen, simpan hubungan antara jawaban dan bagian sumbernya. Tampilkan tanggal, pemilik, serta versi dokumen ketika konteks itu berpengaruh. Pengguna perlu bisa memeriksa apakah jawaban berasal dari kebijakan terbaru, catatan lama, atau informasi yang belum lengkap." },
      { type: "quote", text: "Jawaban yang berguna bukan cuma terdengar benar; pengguna juga perlu tahu mengapa ia muncul." },
      { type: "h2", text: "Ukur pekerjaan selesai dan kesalahan" },
      { type: "p", text: "Buat kumpulan contoh dari pekerjaan nyata yang sudah dianonimkan dan dapatkan izin yang diperlukan. Catat hasil yang diharapkan, variasi pertanyaan, serta kasus yang tidak boleh dijawab tanpa pemeriksaan. Uji kualitas informasi, kemampuan menolak, waktu penyelesaian, dan jumlah koreksi yang dilakukan manusia." },
      { type: "p", text: "Evaluasi tidak berhenti saat peluncuran. Periksa perubahan sumber data, kategori pertanyaan baru, dan laporan pengguna. Simpan versi prompt dan konfigurasi agar tim bisa mengetahui apa yang berubah saat mutu turun. Dengan cara ini, ukuran keberhasilan tetap terhubung ke pekerjaan pengguna, bukan ke angka demo yang mudah dipilih." },
      { type: "h2", text: "Rilis kecil, pelajari dampaknya" },
      { type: "p", text: "Mulai dari kelompok kecil dengan jalur eskalasi yang jelas. Beri pengguna cara mengoreksi hasil, jelaskan batas sistem, dan siapkan prosedur ketika layanan tidak tersedia. Setelah pola aman dan manfaatnya terukur, perluas pemakaian bertahap. Model yang lebih besar bisa membantu, tetapi ia tetap bagian dari sistem yang mencakup data, produk, operasi, dan tanggung jawab manusia." }
    ]
  },
  {
    slug: "tiga-sensor-prototipe-pertama", number: "002", category: "IoT & EMBEDDED SYSTEMS", date: "18 Sep 2026 · simulasi", readTime: "5 menit baca", title: "Tiga sensor di meja kerja: cara memulai prototipe IoT.",
    excerpt: "Prototipe IoT yang baik menguji satu asumsi. Mulai dari sensor, catat kondisi uji, periksa kualitas sinyal, dan rencanakan apa yang terjadi saat jaringan terputus.", image: "blogIot",
    blocks: [
      { type: "p", text: "Proyek perangkat terhubung mudah melebar. Satu ide tentang pemantauan suhu bisa berubah menjadi dashboard, aplikasi mobile, analitik prediktif, dan kontrol jarak jauh sebelum sensor pertamanya stabil. Prototipe yang lebih tajam memilih satu pertanyaan: apakah pengukuran ini cukup konsisten untuk membantu keputusan tertentu?" },
      { type: "h2", text: "Tentukan sinyal dan kondisi pengukuran" },
      { type: "p", text: "Tulis apa yang diukur, satuannya, rentang yang wajar, lokasi sensor, serta seberapa sering nilai dibaca. Bandingkan pembacaan dengan alat acuan jika tersedia. Catat perubahan suhu, getaran, posisi, dan catu daya saat pengujian supaya hasil yang menyimpang punya konteks." },
      { type: "p", text: "Pilih satu sensor untuk kebutuhan inti dan tambahkan sensor kedua hanya jika ia menjawab pertanyaan berbeda. Sensor kelembapan dan temperatur, misalnya, bisa membantu memahami kondisi ruang bersama; tiga sensor yang membaca hal serupa justru menambah pekerjaan kalibrasi tanpa memperjelas keputusan." },
      { type: "h2", text: "Buat alur data yang bisa diperiksa" },
      { type: "p", text: "Beri setiap perangkat identitas yang stabil. Sertakan waktu pengukuran, unit, status baterai, dan penanda kualitas data. Simpan beberapa sampel lokal saat jaringan putus, lalu kirim ulang dengan urutan waktu yang benar. Dashboard perlu membedakan nilai baru dari nilai terakhir yang tersimpan agar orang tidak salah membaca data lama sebagai kondisi sekarang." },
      { type: "quote", text: "Uji juga kegagalan yang akan ditemui perangkat: koneksi putus, baterai lemah, sensor bergeser, dan jam yang tidak cocok." },
      { type: "h2", text: "Amati penggunaan di lingkungan sebenarnya" },
      { type: "p", text: "Perangkat yang bekerja di meja belum tentu cocok dipasang di lapangan. Periksa pelindung, konektor, pemasangan, akses servis, dan cara pengguna mengganti baterai atau membersihkan perangkat. Minta orang yang akan membaca hasilnya menilai apakah informasi tersebut jelas dan apakah tindak lanjutnya memang tersedia." },
      { type: "p", text: "Setelah satu siklus uji, tulis temuan dan keputusan berikutnya. Simpan diagram kabel, versi firmware, konfigurasi jaringan, serta langkah pemulihan. Dokumentasi kecil ini membuat prototipe bisa direplikasi dan memudahkan tim memisahkan masalah perangkat keras dari masalah sistem." }
    ]
  },
  {
    slug: "dari-prototipe-ke-sistem-andal", number: "003", category: "ENGINEERING PRACTICE", date: "12 Sep 2026 · simulasi", readTime: "5 menit baca", title: "Dari prototipe bengkel ke sistem yang bisa dirawat.",
    excerpt: "Transisi engineering bukan sekadar membuat casing lebih rapi. Sistem lapangan perlu dirakit ulang, dipantau, diperbaiki, dan dijelaskan oleh orang lain.", image: "blogEngineering",
    blocks: [
      { type: "p", text: "Prototipe membuktikan bahwa sebuah ide bisa bekerja sekali. Sistem yang siap dipakai harus bisa bekerja berulang kali, di tangan orang yang berbeda, dalam kondisi yang berubah. Jarak antara keduanya sering muncul pada hal-hal praktis: sambungan kabel, prosedur kalibrasi, ketersediaan suku cadang, dan cara mengetahui bahwa perangkat berhenti mengirim data." },
      { type: "h2", text: "Catat keputusan saat masih segar" },
      { type: "p", text: "Simpan diagram, nomor komponen, versi firmware, konfigurasi, dan alasan perubahan desain. Foto proses perakitan dapat membantu, tetapi tambahkan catatan tentang torsi, urutan pemasangan, toleransi, serta alat yang diperlukan. Tim berikutnya seharusnya bisa mengikuti instruksi tanpa menebak-nebak maksud pembuat prototipe." },
      { type: "p", text: "Buat daftar pemeriksaan sebelum dan sesudah uji. Periksa catu daya, konektor, nilai sensor awal, status jaringan, dan kondisi mekanis. Jika suatu pengujian gagal, tulis gejala, kondisi, dan langkah yang sudah dicoba. Catatan kegagalan yang konkret mengurangi pengulangan dan membantu tim memprioritaskan perbaikan." },
      { type: "h2", text: "Rancang pemulihan, bukan hanya kondisi ideal" },
      { type: "p", text: "Tentukan apa yang perangkat lakukan setelah listrik padam, jaringan hilang, sensor memberi nilai tidak masuk akal, atau pembaruan firmware terhenti. Buat mekanisme kembali ke konfigurasi aman, indikator status yang mudah dilihat, dan cara mengambil log tanpa membongkar seluruh sistem." },
      { type: "quote", text: "Keandalan dibangun dari gangguan yang dikenali dan jalur pulih yang sudah pernah diuji." },
      { type: "h2", text: "Serahkan ke orang yang tidak ikut membuatnya" },
      { type: "p", text: "Uji panduan dengan teknisi atau operator yang belum melihat perangkat sebelumnya. Perhatikan bagian yang membuat mereka berhenti, bertanya, atau mengambil langkah yang berbeda. Jika hanya pembuat prototipe yang bisa menjalankan alatnya, dokumentasi dan desainnya belum selesai." },
      { type: "p", text: "Tutup setiap iterasi dengan keputusan yang dapat ditindaklanjuti: perubahan apa yang akan dibuat, risiko apa yang diterima, dan siapa yang memeriksa hasilnya. Sistem yang bisa dirawat lahir dari kebiasaan engineering yang konsisten, bukan dari satu demonstrasi yang mulus." }
    ]
  }
];

const engineeringProjects = [
  { category: "01 / ROBOTIKA", title: "Presisi yang bergerak", copy: "Robotika industri · kontrol gerak · machine vision", image: "robotLab", alt: "Lengan robot industri bekerja di lingkungan laboratorium dengan pencahayaan biru" },
  { category: "02 / SMART MOBILITY", title: "Mobilitas otonom", copy: "Kendaraan listrik · sensor · sistem produksi", image: "autoFactory", alt: "Robot merakit rangka kendaraan di jalur produksi otomotif" },
  { category: "03 / SPACE SYSTEMS", title: "Jaringan di orbit", copy: "Satelit · komunikasi · observasi bumi", image: "satellite", alt: "Astronaut memasang perangkat pada teleskop Hubble di luar angkasa" },
  { category: "04 / IoT & EDGE", title: "Dari sensor ke aksi", copy: "Embedded systems · edge AI · telemetry", image: "circuit", alt: "Close-up papan sirkuit dan komponen elektronik" },
  { category: "05 / AI COMPUTE", title: "Infrastruktur berpikir", copy: "High-performance compute · data center · model serving", image: "compute", alt: "Rak server dan kabel komputasi dalam fasilitas riset" },
  { category: "06 / CLIMATE TECH", title: "Energi untuk jangka panjang", copy: "Energi terbarukan · grid intelligence · penyimpanan", image: "energy", alt: "Turbin angin di lanskap perbukitan hijau" },
  { category: "07 / EARTH OBSERVATION", title: "Melihat sistem dari atas", copy: "Remote sensing · climate data · geospatial AI", image: "earth", alt: "Bumi dan awan terlihat dari orbit" },
  { category: "08 / ADVANCED R&D", title: "Lab sebagai mesin penemuan", copy: "Rapid prototyping · robotics · materials research", image: "robotStudio", alt: "Lengan robot dalam studio riset dan manufaktur modern" }
];

const app = document.querySelector("#app");
const header = document.querySelector(".site-header");
const nav = document.querySelector("#site-nav");
const menu = document.querySelector(".menu-toggle");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const productImages = { "nexa-intelligence": "productNexa", optura: "productOptura", "docmind-insight": "productDocmind", "farikhi-ai-api": "productApi", "farikhi-learn": "productLearn" };

function safeText(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function photoCredit(key) {
  const image = images[key];
  return `<a class="photo-credit" data-photo-credit-key="${safeText(key)}" href="${image.page}" target="_blank" rel="noopener noreferrer">Foto ${safeText(image.credit)} / Unsplash <span aria-hidden="true">↗</span></a>`;
}

function markLocalPhotoLoaded(element, imageKey) {
  const image = images[imageKey];
  if (element.getAttribute("src") !== image.local) return;
  document.querySelectorAll(`[data-photo-credit-key="${imageKey}"]`).forEach((credit) => {
    credit.href = image.localPage || "assets/images/README.md";
    credit.removeAttribute("target");
    credit.removeAttribute("rel");
    credit.innerHTML = `${safeText(image.localCredit || "Foto lokal · kredit belum dicantumkan")} <span aria-hidden=\"true\">↗</span>`;
  });
}

document.addEventListener("load", (event) => {
  const image = event.target;
  if (image?.tagName === "IMG" && image.dataset.photoKey) markLocalPhotoLoaded(image, image.dataset.photoKey);
}, true);

document.addEventListener("error", (event) => {
  const image = event.target;
  if (image?.tagName !== "IMG" || !image.dataset.fallback) return;
  const fallback = image.dataset.fallback;
  delete image.dataset.fallback;
  image.src = fallback;
}, true);

function photo(imageKey, alt, className = "", eager = false) {
  const image = images[imageKey];
  const loading = eager ? "eager" : "lazy";
  const priority = eager ? " fetchpriority=\"high\"" : "";
  return `<img class="${className}" src="${image.local}" data-fallback="${image.src}" data-photo-key="${safeText(imageKey)}" alt="${safeText(alt)}" loading="${loading}" decoding="async"${priority}>`;
}

function footer() {
  const columns = [
    ["Fauzan", [["Tentang", "about"], ["Ekosistem", "ecosystem"], ["Founder Journal", "journal"], ["Dampak", "impact"]]],
    ["Companies", [["FARIKHI GLOBAL", "ecosystem"], ["FARIKHI AI", "ecosystem"], ["FARIKHI CAPITAL", "ecosystem"], ["FARIKHI FOUNDATION", "impact"]]],
    ["Products", products.map((product) => [product.name, `#/product/${product.slug}`])],
    ["Resources", [["Blog", "journal"], ["Newsroom", "newsroom"], ["Research", "journal"], ["Press", "newsroom"]]],
    ["Connect", [["LinkedIn", "contact"], ["Instagram", "contact"], ["GitHub", "contact"], ["Email", "contact"]]]
  ];
  const link = (href) => href.startsWith("#/") ? href : `#/home/${href}`;
  return `<footer class="site-footer" id="footer"><div class="footer-inner"><div class="footer-top"><div class="footer-brand"><a class="brand" href="#/home" aria-label="Kembali ke beranda"><span class="brand-mark">F<span>.</span></span><span class="brand-name">FARIKHI<br>GLOBAL</span></a><h2>BUILD WHAT <em>COMES NEXT.</em></h2><p>Muhamad Fauzan Al Farikhi<br>Founder &amp; CEO — FARIKHI GLOBAL · portfolio concept</p></div>${columns.map(([title, links]) => `<div class="footer-column"><h3>${safeText(title)}</h3>${links.map(([label, href]) => `<a href="${link(href)}">${safeText(label)}</a>`).join("")}</div>`).join("")}</div><div class="footer-bottom"><span>© 2026 Muhamad Fauzan Al Farikhi · All Rights Reserved</span><span class="fiction-label">This website concept contains fictional and aspirational information.</span><span>Privacy · Terms · Cookies · Accessibility</span></div></div></footer>`;
}

function newsCard(story) {
  const imageKey = story.image || "robotLab";
  return `<article class="news-card" data-news-category="${safeText(story.category)}" data-reveal><div class="news-card-art">${photo(imageKey, `Foto editorial ilustrasi untuk ${story.category}: ${story.title}`, "news-photo")}</div><div class="news-card-body"><div class="news-meta"><span>${safeText(story.category)}</span><span>${safeText(story.date)}</span></div><h3>${safeText(story.title)}</h3><p>${safeText(story.excerpt)}</p>${photoCredit(imageKey)}<a class="text-link" href="#/news/${safeText(story.slug)}">Baca cerita <span aria-hidden="true">↗</span></a></div></article>`;
}

function journalCard(entry, featured = false) {
  const className = featured ? "journal-feature" : "journal-card";
  return `<article class="${className}" data-reveal><span class="card-meta">${safeText(entry.category)} · ${safeText(entry.date)} · ${safeText(entry.readTime)}</span><h3>${safeText(entry.title)}</h3><p>${safeText(entry.excerpt)}</p><a class="text-link" href="#/blog/${safeText(entry.slug)}">Baca artikel lengkap <span aria-hidden="true">↗</span></a></article>`;
}

function homePage() {
  const companyCards = companies.map(([name, description], index) => `<article class="company-card" data-reveal><span class="company-number">DIVISION / ${String(index + 1).padStart(2, "0")}</span><h3>${safeText(name)}</h3><p>${safeText(description)}</p></article>`).join("");
  const productCards = products.map((product) => {
    const key = productImages[product.slug];
    return `<article class="product-card" data-category="${safeText(product.category)}" data-reveal><div class="product-art">${photo(key, `Visual editorial teknologi untuk konsep ${product.name}`, "product-photo")}<span class="product-photo-tag">CONCEPT / ${product.number}</span></div><div class="product-card-body"><span class="card-meta">${safeText(product.category)}</span><h3>${safeText(product.name)}</h3><p class="product-tagline">${safeText(product.tagline)}</p><p class="product-summary">${safeText(product.description)}</p><div class="product-card-foot"><span class="rating">${safeText(product.rating)}</span><span class="price">${safeText(product.price)}</span></div>${photoCredit(key)}<a class="product-link" href="#/product/${safeText(product.slug)}">Lihat detail produk <span aria-hidden="true">↗</span></a></div></article>`;
  }).join("");
  const filters = [...new Set(stories.map((story) => story.category))].map((category) => `<button class="filter-button news-filter" type="button" data-news-filter="${safeText(category)}" aria-pressed="false">${safeText(category)}</button>`).join("");

  return `
    <section class="hero" id="home" aria-labelledby="hero-title"><div class="hero-inner"><div class="hero-copy"><p class="eyebrow">Founder · AI Engineer · Investor · Builder</p><h1 id="hero-title">Saya membangun perusahaan untuk dunia <em>yang belum datang.</em></h1><p class="hero-lede">Muhamad Fauzan Al Farikhi adalah founder, AI engineer, investor, dan technology builder yang membangun perusahaan di bidang artificial intelligence, software, data, infrastructure, dan teknologi masa depan.</p><div class="hero-actions"><a class="button" href="#ecosystem">Jelajahi ekosistem <span class="button-arrow" aria-hidden="true">↘</span></a><a class="button button-secondary" href="#ecosystem">Lihat perusahaan <span class="button-arrow" aria-hidden="true">↗</span></a></div><p class="hero-note">Portfolio concept · engineering in motion</p></div><figure class="hero-visual">${photo("serverRoom", "Deretan rak server dalam ruang infrastruktur jaringan", "hero-photo", true)}<figcaption class="visual-label"><span>AI compute · resilient infrastructure</span>${photoCredit("serverRoom")}</figcaption><span class="hero-photo-index">SYSTEMS / 001</span></figure></div><span class="hero-index">01 — 09 &nbsp; / &nbsp; BUILD WHAT COMES NEXT</span></section>
    <div class="notice-bar"><strong>PORTFOLIO SIMULASI</strong><span>Nama, profil, statistik, produk, berita, komentar, dan testimoni di sini fiktif. Foto Unsplash adalah ilustrasi dan bukan dokumentasi proyek atau foto pemberi komentar.</span></div>
    <section class="section section-paper" id="about" aria-labelledby="about-title"><div class="section-inner about-grid"><div class="about-aside" data-reveal><p class="eyebrow">01 / Tentang founder</p><blockquote class="about-quote" id="about-title">Teknologi bukan tujuan. Ia adalah alat untuk membangun <em>masa depan.</em></blockquote><figure class="about-founder-portrait">${photo("founderProfile", "Foto profil Muhamad Fauzan Al Farikhi untuk bagian Tentang", "about-founder-photo")}<figcaption>${photoCredit("founderProfile")}<span>FOTO PROFIL FOUNDER</span></figcaption></figure></div><div class="about-copy" data-reveal><p>Muhamad Fauzan Al Farikhi membayangkan perusahaan teknologi yang menyatukan artificial intelligence, software, data, dan infrastruktur dalam satu ekosistem yang saling menguatkan.</p><p>Portfolio ini menyajikan konsep perjalanan seorang builder dari Indonesia: merancang produk, membentuk tim, mendukung riset, lalu mengarahkan teknologi pada kebutuhan yang berarti.</p><p>Konten biografi, skala perusahaan, dan pencapaian pada halaman ini bersifat fiktif. Ganti dengan data nyata dan dapat diverifikasi sebelum dipublikasikan.</p><div class="about-signature">Membangun untuk jangka panjang</div></div></div></section>
    <section class="section section-soft" id="stats" aria-labelledby="stats-title"><div class="section-inner"><div class="section-heading"><div class="section-heading-copy"><p class="section-kicker">02 / Dalam angka</p><h2 id="stats-title">Sebuah visi dengan <em>skala global.</em></h2><p class="section-description">Angka berikut adalah elemen demonstrasi dari semesta portfolio fiktif. Gunakan angka resmi setelah tersedia.</p></div></div><div class="stats-grid"><div class="stat"><span class="stat-value" data-count="27" data-suffix="+">0</span><span class="stat-label">Perusahaan aktif · simulasi</span></div><div class="stat"><span class="stat-value" data-count="84">0</span><span class="stat-label">Negara operasi · simulasi</span></div><div class="stat"><span class="stat-value" data-count="128" data-suffix="K+">0</span><span class="stat-label">Karyawan · simulasi</span></div><div class="stat"><span class="stat-value" data-count="12" data-suffix="K+">0</span><span class="stat-label">Klien · simulasi</span></div></div></div></section>
    <section class="section section-ink" id="ecosystem" aria-labelledby="ecosystem-title"><div class="section-inner"><div class="section-heading"><div class="section-heading-copy"><p class="section-kicker">03 / Company ecosystem</p><h2 id="ecosystem-title">Satu visi. Banyak cara <em>mewujudkannya.</em></h2><p class="section-description">Ekosistem konseptual FARIKHI GLOBAL mencakup perusahaan dan inisiatif yang saling terhubung.</p></div><a class="text-link" href="#contact">Kenali visi ini <span aria-hidden="true">↗</span></a></div><div class="company-grid">${companyCards}</div></div></section>
    <section class="section section-paper" id="products" aria-labelledby="products-title"><div class="section-inner"><div class="section-heading"><div class="section-heading-copy"><p class="section-kicker">04 / Product ecosystem</p><h2 id="products-title">Produk yang <em>kami bangun.</em></h2><p class="section-description">Teknologi yang lahir dari kebutuhan nyata, bukan sekadar demo yang terlihat keren selama tiga menit.</p></div><a class="text-link" href="#contact">Diskusikan kolaborasi <span aria-hidden="true">↗</span></a></div><div class="filter-row" role="group" aria-label="Filter produk"><button class="filter-button" type="button" data-product-filter="all" aria-pressed="true">Semua produk</button><button class="filter-button" type="button" data-product-filter="ai-data" aria-pressed="false">AI &amp; Data</button><button class="filter-button" type="button" data-product-filter="business" aria-pressed="false">Business</button><button class="filter-button" type="button" data-product-filter="education" aria-pressed="false">Education</button></div><div class="card-grid" id="product-grid">${productCards}</div><p class="product-disclaimer">Harga, rating, jumlah ulasan, dan deskripsi produk merupakan data konsep/simulasi.</p></div></section>
    <section class="section section-ink" id="projects" aria-labelledby="projects-title"><div class="section-inner"><div class="section-heading"><div class="section-heading-copy"><p class="section-kicker">05 / Engineering fields</p><h2 id="projects-title">Dari atom hingga <em>orbit.</em></h2><p class="section-description">Delapan bidang rekayasa yang membentuk ekosistem: perangkat keras, kendaraan, satelit, komputasi, dan energi.</p></div><span class="engineering-count">08 SYSTEMS / 01 VISION</span></div><div class="engineering-grid">${engineeringProjects.map((item, index) => `<article class="engineering-card engineering-card-${index + 1}" data-reveal>${photo(item.image, item.alt)}<div class="engineering-shade"></div><div class="engineering-content"><span class="engineering-category">${safeText(item.category)}</span><h3>${safeText(item.title)}</h3><p>${safeText(item.copy)}</p>${photoCredit(item.image)}</div></article>`).join("")}</div></div></section>
    <section class="section section-paper" id="clients" aria-labelledby="clients-title"><div class="section-inner"><div class="section-heading"><div class="section-heading-copy"><p class="section-kicker">06 / Global collaborations</p><h2 id="clients-title">Kolaborasi tumbuh lewat <em>kepercayaan.</em></h2><p class="section-description">Lima mitra fiktif dari skenario portfolio, dengan identitas visual yang disusun sebagai konsep.</p></div></div><div class="logo-grid" aria-label="Mitra simulasi"><div class="partner-wordmark">KARSA<span>GRID</span></div><div class="partner-wordmark">ASTERION<br>SYSTEMS</div><div class="partner-wordmark">ARUNIKA<br>MOTION</div><div class="partner-wordmark">KIRANA<br>LEARNING LAB</div><div class="partner-wordmark">ORBITALIS<br>RESEARCH</div></div><div class="review-heading"><div><p class="section-kicker">Engineering teams, not slogans</p><h3>Suara tim yang membangun bersama.</h3></div><span>SIMULASI · IDENTITAS FIKTIF<br>FOTO PROFIL ADALAH FOTO ILUSTRASI</span></div><div class="review-grid">${testimonials.map((review) => `<article class="review-card"><div class="review-person">${photo(review.image, `Foto ilustrasi untuk profil simulasi ${review.name}`, "review-avatar")}<div><strong>${safeText(review.name)}</strong><span>${safeText(review.role)} · ${safeText(review.company)}</span></div></div><span class="review-product">${safeText(review.product)} · ULASAN SIMULASI</span><span class="review-stars" aria-label="Lima bintang, rating simulasi">★★★★★</span><blockquote>“${safeText(review.quote)}”</blockquote>${photoCredit(review.image)}</article>`).join("")}</div><p class="product-disclaimer">Seluruh nama, organisasi, ulasan, dan penilaian pada bagian ini dibuat untuk konsep. Foto adalah model dari Unsplash, bukan orang yang memberi testimoni.</p></div></section>
    <section class="section section-ink" id="achievements" aria-labelledby="achievements-title"><div class="section-inner"><div class="section-heading"><div class="section-heading-copy"><p class="section-kicker">07 / Awards &amp; areas of focus</p><h2 id="achievements-title">Ambisi perlu dibuktikan lewat <em>pekerjaan.</em></h2><p class="section-description">Empat disiplin utama yang menjadi arah dunia portfolio ini.</p></div></div><div class="company-grid"><article class="company-card"><span class="company-number">FOCUS / 01</span><h3>Technology founder</h3><p>Membangun perusahaan dan produk teknologi.</p></article><article class="company-card"><span class="company-number">FOCUS / 02</span><h3>AI research</h3><p>Mengembangkan kecerdasan buatan dan sistem otonom.</p></article><article class="company-card"><span class="company-number">FOCUS / 03</span><h3>Global engineering</h3><p>Menghubungkan tim, laboratorium, dan infrastruktur.</p></article><article class="company-card"><span class="company-number">FOCUS / 04</span><h3>Social impact</h3><p>Mengarahkan teknologi untuk kebutuhan masyarakat.</p></article></div><div class="press-row"><div><p class="section-kicker">Recognition · concept universe</p><h3>Penghargaan dalam skenario portfolio.</h3></div><div class="press-tags"><span>Frontier Systems Design Award · 2026</span><span>Applied AI Builder Prize · 2025</span><span>Next Generation Engineer List · 2025</span><span>FUTURE BUILDER JOURNAL · PRESS CONCEPT</span></div></div><p class="product-disclaimer">Nama penghargaan dan publikasi di sini adalah bagian dari skenario fiktif, bukan pengakuan yang pernah diterima.</p></div></section>
    <section class="section section-ink" id="impact" aria-labelledby="impact-title"><div class="section-inner impact-layout"><div class="impact-visual" role="img" aria-label="Visual abstrak jangkauan dampak global"><span class="impact-cross">FROM INDONESIA, FOR THE WORLD</span><div class="impact-visual-caption"><span>Global presence · concept</span><span>06°12′ S / 106°49′ E</span></div></div><div class="impact-copy"><p class="section-kicker">08 / Social impact</p><h2 id="impact-title">Teknologi harus memiliki <em>dampak.</em></h2><p>Kekayaan, teknologi, dan perusahaan hanya memiliki nilai jika sebagian kekuatannya dapat digunakan untuk menciptakan perubahan yang nyata.</p><div class="impact-programs"><div class="impact-program"><strong>Education</strong><span>Beasiswa STEM dan pembelajaran.</span></div><div class="impact-program"><strong>Disaster response</strong><span>Dukungan kemanusiaan berbasis kebutuhan.</span></div><div class="impact-program"><strong>Digital access</strong><span>Perangkat dan konektivitas.</span></div><div class="impact-program"><strong>Research</strong><span>Dukungan untuk penelitian.</span></div><div class="impact-program"><strong>Entrepreneurship</strong><span>Program untuk founder muda.</span></div></div><p class="impact-note">Statistik dampak: 1.000.000+ siswa · 10.000+ beasiswa · 500+ sekolah · semua angka adalah data simulasi.</p></div></div></section>
    <section class="section section-ink" id="newsroom" aria-labelledby="news-title"><div class="section-inner"><div class="section-heading"><div class="section-heading-copy"><p class="section-kicker">09 / Fauzan newsroom</p><h2 id="news-title">Cerita di balik <em>setiap langkah.</em></h2><p class="section-description">Berita tentang teknologi, perusahaan, pendidikan, dan dampak sosial dalam semesta fiksi ini.</p></div><a class="text-link" href="#news-list">Jelajahi berita <span aria-hidden="true">↘</span></a></div><article class="featured-news" data-reveal><div class="news-feature-art">${photo("community", "Relawan menyusun paket makanan untuk dibagikan kepada komunitas", "feature-photo")}<div class="news-art-tag">FOTO ILUSTRASI · KEGIATAN INI FIKTIF</div></div><div class="news-feature-copy"><div class="news-meta"><span>Masyarakat</span><span>28 September 2026 · simulasi</span></div><h3>${safeText(stories[0].title)}</h3><p>${safeText(stories[0].excerpt)} Kisah ini fiktif; foto hanya ilustrasi distribusi bantuan.</p>${photoCredit("community")}<a class="text-link" href="#/news/${safeText(stories[0].slug)}">Baca cerita newsroom <span aria-hidden="true">↗</span></a></div></article><div class="filter-row" role="group" aria-label="Filter kategori berita" style="margin-top:2rem"><button class="filter-button news-filter" type="button" data-news-filter="all" aria-pressed="true">Semua</button>${filters}</div><div class="news-grid" id="news-list">${stories.slice(1).map(newsCard).join("")}</div><form class="newsletter-form"><label class="visually-hidden" for="newsletter-email">Email untuk buletin</label><input id="newsletter-email" type="email" autocomplete="email" required aria-label="Alamat email untuk buletin"><button type="submit">Daftar buletin</button><span class="newsletter-status" aria-live="polite"></span></form><p class="editorial-disclaimer">Semua berita, tanggal, lokasi, dan pihak dalam cerita adalah fiksi. Foto editorial memiliki kredit di bawah masing-masing gambar dan bukan bukti kejadian nyata.</p></div></section>
    <section class="section section-paper" id="journal" aria-labelledby="journal-title"><div class="section-inner"><div class="section-heading"><div class="section-heading-copy"><p class="section-kicker">10 / Founder journal · blog</p><h2 id="journal-title">Mencatat hal yang sedang <em>dibangun.</em></h2><p class="section-description">Artikel penuh tentang AI, IoT, prototyping, engineering, dan kepemimpinan teknis. Pilih judul untuk membaca seluruh tulisan.</p></div></div><div class="journal-grid">${journalCard(journalEntries[0], true)}<div class="journal-side">${journalEntries.slice(1).map((entry) => journalCard(entry)).join("")}</div></div><div class="topic-tags"><span>Artificial Intelligence</span><span>Robotics</span><span>IoT &amp; Edge</span><span>Software Engineering</span><span>Space Systems</span><span>Clean Energy</span><span>Research</span><span>Leadership</span></div></div></section>
    <section class="section section-paper" id="contact" aria-labelledby="contact-title" style="padding-top:0"><div class="section-inner"><div class="contact-panel" data-reveal><div><p class="section-kicker">Kontak &amp; kolaborasi</p><h2 id="contact-title">Mari bangun sesuatu yang punya alasan untuk ada.</h2><p>Membangun sesuatu yang besar membutuhkan lebih dari sekadar ide. Mari membangun teknologi yang memiliki alasan untuk ada.</p></div><a class="button" href="#footer">Hubungi Fauzan <span class="button-arrow" aria-hidden="true">↗</span></a></div></div></section>${footer()}`;
}

function artWindow(index) {
  const bars = [34,56,43,77,52,90,63,72,45].map((height) => `<span style="--bar:${height}%"></span>`).join("");
  return `<div class="art-window"><div class="art-topline"><span>OVERVIEW</span><span>PREVIEW / ${index}</span></div><div class="art-chart">${bars}</div></div>`;
}

function productPage(product) {
  const imageKey = productImages[product.slug];
  const planCards = product.plans.map(([name, price]) => `<article class="pricing-card"><strong>${safeText(name)}</strong><span>${safeText(price)}</span><p>Informasi harga pada konsep ini bersifat simulasi.</p></article>`).join("");
  const review = testimonials.find((item) => item.product === product.name);
  return `<div class="detail-page"><section class="detail-hero"><div class="detail-inner"><p class="detail-breadcrumb"><a href="#/home/products">Beranda</a><span>/</span><a href="#/home/products">Produk</a><span>/</span>${safeText(product.name)}</p><p class="section-kicker">${safeText(product.number)} / ${safeText(product.category)}</p><h1 class="detail-title">${safeText(product.name)}<br><em>${safeText(product.tagline)}</em></h1><p class="detail-lede">${safeText(product.description)}</p><div class="detail-meta-row"><span>${safeText(product.rating)}</span><span>${safeText(product.ratings)}</span><span>${safeText(product.price)}</span><span>Konsep / belum dirilis</span></div><figure class="detail-visual">${photo(imageKey, `Visual editorial teknologi untuk konsep ${product.name}`, "detail-product-photo")}<figcaption>${photoCredit(imageKey)}<span>VISUAL TEKNOLOGI · BUKAN TAMPILAN PRODUK</span></figcaption></figure></div></section>
  <section class="detail-section"><div class="detail-inner detail-columns"><div><p class="section-kicker">The problem</p><h2>Informasi yang tersebar membuat keputusan terasa lambat.</h2></div><div><p>Tim sering bekerja dengan data, dokumen, dan proses yang tumbuh di banyak tempat. Konsep ${safeText(product.name)} dirancang untuk menyatukan sinyal yang relevan dan membantu orang bergerak dari pertanyaan menuju langkah yang lebih jelas.</p><p>Uraian ini merupakan konsep produk, bukan klaim kinerja layanan yang telah diluncurkan.</p></div></div></section>
  <section class="detail-section section-soft"><div class="detail-inner detail-columns"><div><p class="section-kicker">The solution</p><h2>Berikan konteks agar data bisa digunakan.</h2></div><div><p>${safeText(product.description)} Fokusnya adalah alur yang mudah dipahami: temukan informasi, lihat hubungan, lalu gunakan hasilnya untuk keputusan berikutnya.</p><ul class="detail-list">${product.useCases.map((item) => `<li>${safeText(item)}</li>`).join("")}</ul></div></div></section>
  <section class="detail-section"><div class="detail-inner"><p class="section-kicker">Capabilities</p><h2>Fitur untuk pekerjaan sehari-hari.</h2><ul class="detail-list">${product.features.map((feature) => `<li>${safeText(feature)}</li>`).join("")}</ul><div class="section-heading" style="margin:3rem 0 0"><div><p class="section-kicker">How it works</p><p class="section-description">Hubungkan sumber data, pilih konteks kerja, lalu tinjau insight bersama tim. Integrasi dan teknologi final perlu ditentukan sesuai kebutuhan produk nyata.</p></div></div><p class="card-meta" style="margin-top:2rem">STATUS PRODUK · KONSEP / BELUM DIRILIS</p></div></section>
  <section class="detail-section section-soft"><div class="detail-inner"><p class="section-kicker">Plans · pricing concept</p><h2>Pilih skala yang sesuai.</h2><div class="pricing-grid">${planCards}</div></div></section>
  <section class="detail-section"><div class="detail-inner"><p class="section-kicker">Customer stories · simulasi</p><h2>Perspektif tim yang memakai sistem.</h2><p class="section-description">Ulasan, nama, jabatan, organisasi, dan foto di bagian ini merupakan materi fiktif. Foto profil hanya ilustrasi stok.</p><article class="review-card product-review">${photo(review.image, `Foto ilustrasi profil simulasi ${review.name}`, "review-avatar")}<div><span class="review-product">${safeText(review.product)} · ULASAN SIMULASI</span><span class="review-stars" aria-label="Lima bintang, rating simulasi">★★★★★</span><blockquote>“${safeText(review.quote)}”</blockquote><strong>${safeText(review.name)}</strong><span class="review-byline">${safeText(review.role)} · ${safeText(review.company)}</span>${photoCredit(review.image)}</div></article></div></section>
  <section class="detail-section section-soft"><div class="detail-inner"><p class="section-kicker">FAQ</p><h2>Pertanyaan yang sering diajukan.</h2><div class="faq-list"><details><summary>Apakah produk ini sudah tersedia?</summary><p>Belum. Halaman ini menampilkan konsep produk, bukan layanan yang telah dirilis.</p></details><details><summary>Apakah harga di halaman ini resmi?</summary><p>Tidak. Semua paket dan nominal harga pada halaman ini adalah simulasi.</p></details><details><summary>Bagaimana dengan detail teknis dan integrasi?</summary><p>Spesifikasi, keamanan, integrasi, dan dokumentasi teknis akan bergantung pada kebutuhan produk final.</p></details></div><a class="button back-home" href="#/home/contact">Diskusikan produk <span class="button-arrow" aria-hidden="true">↗</span></a></div></section>${footer()}</div>`;
}

function newsPage(story) {
  const storyImage = story.image || "robotLab";
  const comments = storyComments.map((comment) => `<article class="comment-card"><div class="comment-person">${photo(comment.image, `Foto ilustrasi untuk komentar simulasi ${comment.name}`, "comment-avatar")}<div><strong>${safeText(comment.name)}</strong><span>${safeText(comment.role)} · ${safeText(comment.location)} · ${safeText(comment.language)} · ${safeText(comment.date)}</span></div></div><span class="community-badge">KOMUNITAS GLOBAL · SIMULASI</span><p class="comment-text">“${safeText(comment.text)}”</p>${comment.translation ? `<p class="comment-translation"><span>TERJEMAHAN</span> “${safeText(comment.translation)}”</p>` : ""}<div class="comment-actions"><button class="comment-action" type="button" data-comment-action="like" aria-pressed="false">♡ Suka</button><button class="comment-action" type="button" data-comment-action="reply">Balas</button><button class="comment-action" type="button" data-comment-action="report">Laporkan</button></div><p class="comment-status" aria-live="polite"></p></article>`).join("");
  const galleryPool = ["robotLab", "robotStudio", "autoFactory", "satellite", "earth", "circuit", "energy", "compute", "dataCenter"];
  const galleryKeys = galleryPool.filter((key) => key !== storyImage).slice(0, 5);
  const gallery = galleryKeys.map((key, index) => `<figure class="gallery-item">${photo(key, `Foto editorial ilustrasi ${index + 1}: ${images[key].credit}`)}<figcaption>VISUAL EDITORIAL ${String(index + 1).padStart(2, "0")} ${photoCredit(key)}</figcaption></figure>`).join("");
  return `<div class="detail-page"><section class="detail-hero"><div class="detail-inner"><p class="detail-breadcrumb"><a href="#/home">Beranda</a><span>/</span><a href="#/home/newsroom">Newsroom</a><span>/</span>${safeText(story.category)}</p><div class="news-meta"><span>${safeText(story.category)}</span><span>${safeText(story.date)}</span><span>${safeText(story.location)}</span></div><h1 class="detail-title" style="margin-top:1.2rem">${safeText(story.title)}</h1><p class="detail-lede">${safeText(story.excerpt)}</p><figure class="detail-visual">${photo(storyImage, `Foto editorial ilustrasi untuk kisah simulasi: ${story.title}`, "detail-product-photo", true)}<figcaption>${photoCredit(storyImage)}<span>FOTO ILUSTRASI · BUKAN DOKUMENTASI KEJADIAN</span></figcaption></figure><div class="detail-meta-row"><span>Oleh: Fauzan Newsroom · simulasi</span><span>${safeText(story.location)}</span><span>${safeText(story.date)}</span></div></div></section>
  <section class="detail-section"><article class="article-body"><p class="section-kicker">Cerita utama · simulasi</p><p>${safeText(story.intro)}</p><h2 style="margin-top:2rem">Menyatukan niat baik dengan pelaksanaan yang terukur.</h2><p>${safeText(story.excerpt)} Dalam skenario ini, setiap tahap memiliki penanggung jawab, jalur koordinasi, dan catatan tindak lanjut agar pembelajaran dari lapangan bisa dipakai pada respons berikutnya.</p><p>Tim konsep memulai dengan mendengar kebutuhan warga, menyusun prioritas bersama relawan lokal, lalu meninjau kembali alur distribusi dan akses layanan. Seluruh angka, lokasi, organisasi, serta kejadian pada cerita ini adalah fiksi.</p><div class="article-impact">${story.impact.map((item) => `<span>${safeText(item)}</span>`).join("")}</div><blockquote class="quote-panel">“Teknologi paling berguna ketika membantu orang mengambil langkah berikutnya dengan lebih jelas.”<br><span class="card-meta">KUTIPAN EDITORIAL FIKTIF · FAUZAN NEWSROOM</span></blockquote><p class="section-kicker">Galeri editorial · foto ilustrasi</p><div class="photo-gallery">${gallery}</div></article></section>
  <section class="detail-section section-soft"><div class="detail-inner"><p class="section-kicker">Community conversation · simulasi</p><h2>Suara komunitas.</h2><p>Nama, foto, peran, tanggal, dan komentar di bawah ini adalah bagian dari simulasi editorial. Foto model tidak menggambarkan penulis komentar.</p><div class="comment-list">${comments}</div></div></section><section class="detail-section"><div class="detail-inner"><p class="section-kicker">Related stories</p><h2>Berita lainnya.</h2><div class="news-grid">${stories.filter((item) => item.slug !== story.slug).slice(0,3).map(newsCard).join("")}</div><a class="button button-secondary back-home" href="#/home/newsroom">Kembali ke newsroom <span class="button-arrow" aria-hidden="true">↗</span></a></div></section>${footer()}</div>`;
}

function blogPage(entry) {
  const content = entry.blocks.map((block) => {
    if (block.type === "h2") return `<h2>${safeText(block.text)}</h2>`;
    if (block.type === "quote") return `<blockquote class="quote-panel">“${safeText(block.text)}”</blockquote>`;
    return `<p>${safeText(block.text)}</p>`;
  }).join("");
  const related = journalEntries.filter((item) => item.slug !== entry.slug).map((item) => `<article class="journal-card"><span class="card-meta">${safeText(item.category)} · ${safeText(item.readTime)}</span><h3>${safeText(item.title)}</h3><a class="text-link" href="#/blog/${safeText(item.slug)}">Baca artikel <span aria-hidden="true">↗</span></a></article>`).join("");
  return `<div class="detail-page"><section class="detail-hero"><div class="detail-inner"><p class="detail-breadcrumb"><a href="#/home">Beranda</a><span>/</span><a href="#/home/journal">Founder Journal</a><span>/</span>${safeText(entry.category)}</p><p class="section-kicker">Artikel ${safeText(entry.number)} · ${safeText(entry.date)} · ${safeText(entry.readTime)}</p><h1 class="detail-title">${safeText(entry.title)}</h1><p class="detail-lede">${safeText(entry.excerpt)}</p><figure class="detail-visual">${photo(entry.image, `Foto ilustrasi untuk artikel ${entry.title}`, "detail-product-photo")}<figcaption>${photoCredit(entry.image)}<span>ILUSTRASI EDITORIAL</span></figcaption></figure><div class="detail-meta-row"><span>Fauzan Journal · konsep editorial</span><span>${safeText(entry.readTime)}</span><span>Konten simulasi</span></div></div></section><section class="detail-section"><article class="article-body blog-article"><p class="section-kicker">Catatan lengkap · konsep editorial</p>${content}<p class="blog-disclaimer">Artikel ini ditulis untuk portfolio konsep. Isinya adalah panduan umum, bukan catatan pengalaman nyata Fauzan.</p></article></section><section class="detail-section section-soft"><div class="detail-inner"><p class="section-kicker">Lanjut membaca</p><h2>Artikel lainnya.</h2><div class="journal-side related-journal">${related}</div><a class="button button-secondary back-home" href="#/home/journal">Kembali ke jurnal <span class="button-arrow" aria-hidden="true">↗</span></a></div></section>${footer()}</div>`;
}

function notFoundPage() {
  return `<div class="detail-page"><section class="detail-hero"><div class="detail-inner"><p class="section-kicker">Halaman tidak ditemukan</p><h1 class="detail-title">Cerita ini belum <em>tersedia.</em></h1><p class="detail-lede">Periksa tautan yang dibuka atau kembali ke portfolio.</p><a class="button back-home" href="#/home">Kembali ke beranda <span class="button-arrow" aria-hidden="true">↗</span></a></div></section>${footer()}</div>`;
}

function closeMenu() {
  nav.classList.remove("is-open");
  menu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-label", "Buka navigasi");
  document.body.classList.remove("menu-open");
}

function setupReveal() {
  if (reduceMotion || !("IntersectionObserver" in window)) {
    document.documentElement.classList.add("reduced-motion");
    document.querySelectorAll("[data-reveal]").forEach((node) => node.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); currentObserver.unobserve(entry.target); }
  }), { threshold: .12 });
  document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const setFinal = (node) => { node.textContent = `${Number(node.dataset.count).toLocaleString("id-ID")}${node.dataset.suffix || ""}`; };
  if (reduceMotion || !("IntersectionObserver" in window)) { counters.forEach(setFinal); return; }
  const observer = new IntersectionObserver((entries, currentObserver) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const node = entry.target;
    const target = Number(node.dataset.count);
    const start = performance.now();
    const animate = (time) => {
      const progress = Math.min((time - start) / 1100, 1);
      node.textContent = `${Math.round(target * (1 - (1 - progress) ** 4)).toLocaleString("id-ID")}${node.dataset.suffix || ""}`;
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    currentObserver.unobserve(node);
  }), { threshold: .45 });
  counters.forEach((node) => observer.observe(node));
}

function setupPageInteractions() {
  document.querySelectorAll("[data-product-filter]").forEach((button) => button.addEventListener("click", () => {
    const selected = button.dataset.productFilter;
    document.querySelectorAll("[data-product-filter]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    document.querySelectorAll(".product-card").forEach((card) => {
      const category = card.dataset.category;
      const show = selected === "all" || (selected === "ai-data" && (category.includes("AI") || category.includes("Data"))) || (selected === "business" && category.includes("Business")) || (selected === "education" && category.includes("Education"));
      card.hidden = !show;
    });
  }));
  document.querySelectorAll("[data-news-filter]").forEach((button) => button.addEventListener("click", () => {
    const selected = button.dataset.newsFilter;
    document.querySelectorAll("[data-news-filter]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    document.querySelectorAll("[data-news-category]").forEach((card) => { card.hidden = selected !== "all" && card.dataset.newsCategory !== selected; });
  }));
  document.querySelectorAll("[data-comment-action]").forEach((button) => button.addEventListener("click", () => {
    const card = button.closest(".comment-card");
    const status = card.querySelector(".comment-status");
    if (button.dataset.commentAction === "like") {
      const pressed = button.getAttribute("aria-pressed") !== "true";
      button.setAttribute("aria-pressed", String(pressed));
      button.textContent = pressed ? "♥ Disukai" : "♡ Suka";
      status.textContent = "Interaksi demo ini hanya tersimpan selama halaman dibuka.";
    } else if (button.dataset.commentAction === "reply") {
      const currentForm = card.querySelector(".reply-form");
      if (currentForm) { currentForm.remove(); status.textContent = "Form balasan ditutup."; return; }
      const form = document.createElement("form");
      form.className = "reply-form";
      form.innerHTML = `<label class="visually-hidden">Tulis balasan komentar<input name="reply" maxlength="280" aria-label="Tulis balasan komentar" required></label><button class="comment-action" type="submit">Kirim demo</button>`;
      card.append(form);
      form.addEventListener("submit", (event) => { event.preventDefault(); status.textContent = "Balasan demo selesai. Data tidak dikirim atau disimpan."; form.remove(); });
      status.textContent = "Balasan ini hanya demonstrasi lokal.";
    }
    else status.textContent = "Tanda demo dibuat secara lokal dan tidak dikirim.";
  }));
  const newsletter = document.querySelector(".newsletter-form");
  if (newsletter) newsletter.addEventListener("submit", (event) => {
    event.preventDefault();
    newsletter.querySelector(".newsletter-status").textContent = "Form simulasi — data tidak dikirim atau disimpan.";
    newsletter.reset();
  });
}

function render() {
  closeMenu();
  const route = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
  const [type, slug] = route.split("/");
  if (type === "product" && slug) {
    const product = products.find((item) => item.slug === slug);
    app.innerHTML = product ? productPage(product) : notFoundPage();
    document.title = product ? `${product.name} — FARIKHI GLOBAL` : "Halaman tidak ditemukan — FARIKHI GLOBAL";
  } else if (type === "news" && slug) {
    const story = stories.find((item) => item.slug === slug);
    app.innerHTML = story ? newsPage(story) : notFoundPage();
    document.title = story ? `${story.title} — Fauzan Newsroom` : "Halaman tidak ditemukan — Fauzan Newsroom";
  } else if (type === "blog" && slug) {
    const entry = journalEntries.find((item) => item.slug === slug);
    app.innerHTML = entry ? blogPage(entry) : notFoundPage();
    document.title = entry ? `${entry.title} — Fauzan Journal` : "Artikel tidak ditemukan — Fauzan Journal";
  } else {
    app.innerHTML = homePage();
    document.title = "Muhamad Fauzan Al Farikhi — Building What Comes Next";
  }
  setupReveal();
  setupCounters();
  setupPageInteractions();
  if (location.hash.startsWith("#/")) {
    const target = type === "home" && slug ? document.getElementById(slug) : null;
    requestAnimationFrame(() => target ? target.scrollIntoView({ behavior: reduceMotion ? "instant" : "smooth" }) : window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" }));
  }
}

menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "Tutup navigasi" : "Buka navigasi");
  nav.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
});
nav.addEventListener("click", (event) => { if (event.target.closest("a")) closeMenu(); });
window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 24), { passive: true });
window.addEventListener("hashchange", () => {
  if (location.hash.startsWith("#/")) render();
  else if (location.hash && !document.getElementById(decodeURIComponent(location.hash.slice(1)))) {
    render();
    requestAnimationFrame(() => document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({ behavior: reduceMotion ? "instant" : "smooth" }));
  }
});
render();
