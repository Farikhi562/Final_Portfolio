# Foto asli portfolio

Taruh foto milikmu di folder sesuai bagian situs. Gunakan nama file yang tercantum di `README.md` dalam masing-masing folder. Format yang disarankan: JPG atau WebP; kalau memakai ekstensi lain, ubah nilai `local` untuk gambar terkait di `app.js`.

Foto lokal akan dipakai otomatis setelah tersedia. Kalau file lokal belum ada, situs menampilkan foto Unsplash saat ini sebagai cadangan.

| Folder | Isi |
|---|---|
| `hero/` | Foto utama halaman depan |
| `engineering/` | Delapan bidang engineering: robotika, kendaraan, orbit, IoT, komputasi, energi, observasi bumi, R&amp;D |
| `products/` | Foto pratinjau lima produk |
| `newsroom/` | Foto berita komunitas, beasiswa, riset AI, startup, dan data center |
| `blog/` | Foto sampul tiga artikel |
| `people/profile/` | Foto profil founder untuk bagian Tentang |
| `people/reviews/` | Foto profil lima review simulasi |
| `people/comments/` | Foto profil enam komentar simulasi |

## Kredit foto milik sendiri

Saat foto lokal berhasil dimuat, label sumber Unsplash diganti dengan pengingat kredit lokal. Untuk menampilkan kredit yang benar, buka entri gambar terkait di `app.js`, lalu isi `localCredit` dan `localPage`. Contoh:

```js
localCredit: "Foto: Nama Fotografer",
localPage: "assets/images/people/reviews/reviewer-01.jpg"
```

Kalau foto tidak menampilkan kredit, cek kembali nama file, folder, ekstensi, dan ejaan nilai `local` di `app.js`.
