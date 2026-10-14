/* ============================================================================
 * 4 — Uji implementasimu
 * File: src/main.ts  (entry point aplikasi)
 * ============================================================================
 *
 * File inilah yang dijalankan Node saat kamu mengetik `npm run dev`.
 * Anggap file ini sebagai "ruang uji": tempat memanggil fungsi-fungsi yang sudah
 * kamu buat dan memastikan hasilnya sesuai harapan.
 * ========================================================================== */

// Tulis import kamu di bawah ini:
declare const console: {
  log: (...args: any[]) => void;
};

console.log('Book Management Application - Week 6');
console.log('=====================================');

// Mulai pengujian di bawah ini:

import { addBook, listBooks, searchBook } from "./functions/bookManager";

addBook({
  title: "Clean Code",
  author: "Robert C. Martin",
  publicationYear: 2008,
});

addBook({
  title: "The Pragmatic Programmer",
  author: "Andrew Hunt",
  publicationYear: 1999,
});

console.log("\n=== Semua Buku ===");
listBooks();

console.log("\n=== Pencarian Buku ===");
searchBook("Clean Code");

console.log("\n=== Pencarian Buku Tidak Ditemukan ===");
searchBook("Harry Potter");

console.log("\n=== Pencarian Tanpa Judul ===");
searchBook();
