# 🌸 SkinRoutine - Smart Skincare Routine & Tracker

Aplikasi web & mobile PWA **SkinRoutine** untuk membantu mencatat, menjadwalkan, dan merawat kulit secara cerdas dengan fitur deteksi waktu pemakaian otomatis berdasarkan kandungan skincare.

---

## 🌟 Fitur Utama
1. **Pilihan Kandungan Skincare Cerdas (Auto-Detect)**:
   - Pilih bahan aktif (*Retinol, Vitamin C, AHA/BHA, Niacinamide, Ceramide, dll.*).
   - Sistem secara otomatis mengategorikan waktu pemakaian ideal (**Pagi / Malam / Pagi & Malam**).
2. **Kustomisasi Merk & Produk**:
   - Bebas menambah, mengubah, dan menghapus produk skincare sesuai koleksi pribadi (brand, nama produk, catatan).
3. **Penyimpanan Progres (localStorage)**:
   - Progres centang harian dan daftar produk tersimpan otomatis di HP / Browser tanpa perlu login.
4. **Animasi & Branding**:
   - Icon aplikasi menggunakan `Icon App.png`.
   - Animasi splash screen menggunakan `Loading Animation.gif`.
5. **Siap PWA & WebApp Mobile APK**.

---

## 🚀 Langkah Upload & Live di GitHub Pages (Username: `dntonfire`)

### Step 1: Push Kode dari Komputer
Buka Terminal / Command Prompt / PowerShell di folder `E:\Projek Aplikasi\Skincare Routine` lalu jalankan perintah berikut:

```bash
git remote add origin https://github.com/dntonfire/SkinRoutine.git
git push -u origin main
```

### Step 2: Aktifkan GitHub Pages
1. Masuk ke halaman repo kamu: [github.com/dntonfire/SkinRoutine](https://github.com/dntonfire/SkinRoutine).
2. Klik tab **Settings** (di sebelah kanan atas).
3. Pilih menu **Pages** di sebelah kiri (di bawah bagian *Code and automation*).
4. Pada bagian **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: Pilih `main` dan folder `/ (root)`
5. Klik **Save**.

Tunggu 1 - 2 menit, web aplikasi kamu akan **LIVE** di URL:
👉 **`https://dntonfire.github.io/SkinRoutine/`**

---

## 📱 Langkah Membuat WebApp APK untuk Android

Setelah situs kamu live di `https://dntonfire.github.io/SkinRoutine/`:

### Cara Paling Mudah (PWABuilder):
1. Buka situs [PWABuilder.com](https://www.pwabuilder.com/).
2. Masukkan URL web kamu: `https://dntonfire.github.io/SkinRoutine/` lalu tekan **Start**.
3. PWABuilder akan membaca `manifest.json` dan `Icon App.png`.
4. Klik **Package for Store** $\rightarrow$ Pilih **Android**.
5. Unduh file `.apk` yang dihasilkan dan install langsung di HP Android kamu!
