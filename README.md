# Rey · Creative technologist

Website statis dari desain Doop. Foto dan font Geist disertakan dalam folder `assets`.

## Deploy ke VPS

1. Ekstrak ZIP.
2. Salin isi folder `dist/` ke document root domain di Nginx, Caddy, atau Apache.
3. Buka domain dan cek tombol **Portofolio** serta **Discuss a workflow**.

Tidak perlu Node.js, database, atau perintah build. Untuk tes lokal, jalankan `python3 -m http.server 8080 --directory dist` dan buka `http://localhost:8080/`.

Panel kontak memakai teks placeholder dari desain. Edit `dist/index.html` pada bagian `id="contact"` untuk memasukkan detail kontak. Lisensi Geist ada di `dist/assets/Geist-OFL.txt`.
