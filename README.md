# Simple Book Management Application


## Tujuan 

1. Mendefinisikan tipe data custom menggunakan **type alias**
2. Memilih tipe data primitif yang tepat untuk sebuah nilai
3. Membuat fungsi dengan parameter yang bertipe spesifik
4. Menerapkan **optional parameter** dan menangani kasus saat nilainya tidak ada
5. Memahami return type `void` dan kapan ia dipakai

## Struktur Project

```
.
├── src/
│   ├── types/
│   │   └── index.ts          # Tugas 1 — definisi tipe Book
│   ├── data/
│   │   └── books.ts          # Tugas 2 — array penyimpanan buku
│   ├── functions/
│   │   └── bookManager.ts    # Tugas 3 — addBook, listBooks, searchBook
│   └── main.ts               # Tugas 4 — entry point & tempat menguji
├── package.json
├── tsconfig.json
└── .gitignore
```

Setiap file sudah berisi panduan lengkap di dalam komentarnya **Baca komentar di file sebelum menulis kode.**

## Cara Menjalankan

Butuh Node.js versi 18 atau lebih baru.

```bash
npm install       # sekali saja di awal
npm run dev       # compile lalu jalankan
```

Perintah lain yang berguna:

| Perintah            | Fungsinya                                             |
|---------------------|-------------------------------------------------------|
| `npm run typecheck` | Cek error tipe **tanpa** menghasilkan file di `dist/` |
| `npm run build`     | Compile TypeScript ke JavaScript di folder `dist/`   |
| `npm start`         | Jalankan hasil compile                                |
| `npm run clean`     | Hapus folder `dist/`                                  |

Saat masih menulis kode, `npm run typecheck` adalah teman terbaik — jauh lebih
cepat daripada build penuh.

## Alur 

1. **`src/types/index.ts`** — definisikan struktur data `Book`.
2. **`src/data/books.ts`** — buat array penyimpanan bertipe `Book[]`.
3. **`src/functions/bookManager.ts`** — implementasikan ketiga fungsi, satu per
   satu, sambil diuji.
4. **`src/main.ts`** — panggil dan uji semuanya, termasuk kasus pinggirnya.

## Checklist Penyelesaian

- [ ] Tipe `Book` dibuat dengan type alias, punya `title`, `author`, `publicationYear`
- [ ] `publicationYear` bertipe angka, bukan teks
- [ ] Array `books` dibuat dengan tipe `Book[]` yang eksplisit
- [ ] `addBook()` menambahkan buku ke array dan menampilkan konfirmasi
- [ ] `listBooks()` menampilkan semua buku dengan format yang mudah dibaca
- [ ] `listBooks()` tetap memberi pesan yang jelas saat daftar masih kosong
- [ ] `searchBook()` punya parameter `title` yang opsional (`?`)
- [ ] `searchBook()` menangani tiga kasus: ketemu, tidak ketemu, dan tanpa argumen
- [ ] Ketiga fungsi punya return type `void` yang ditulis eksplisit
- [ ] `npm run typecheck` bersih, tanpa satu pun error



Saat review, siapkan diri untuk menjelaskan tiga hal: kenapa `publicationYear`
bertipe angka, bagaimana kamu menangani `title` yang `undefined` di
`searchBook`, dan apa yang terjadi kalau `listBooks()` dipanggil saat daftar
masih kosong.
