/* ============================================================================
 * 3 — Implementasikan fungsi-fungsi manajemen buku
 * File: src/functions/bookManager.ts
 * ============================================================================
 *
 * Di sinilah logika aplikasi berada. Ada tiga fungsi yang harus dibuat.
 * Kerjakan SATU PER SATU dan uji lewat `src/main.ts` setiap kali satu fungsi
 * selesai. Jangan tulis ketiganya sekaligus lalu baru dijalankan — kalau ada
 * error, kamu akan sulit menebak fungsi mana penyebabnya.
 *
 * Sebelum mulai, import apa yang kamu butuhkan dari file sebelumnya:
 * - Tipe `Book` ada di `../types`
 * - Array `books` ada di `../data/books`
 * ========================================================================== */

// Tulis import kamu di bawah ini:

/* ----------------------------------------------------------------------------
 * FUNGSI 1 — addBook
 * ----------------------------------------------------------------------------
 * TUJUAN
 * Menambahkan satu buku baru ke dalam koleksi.
 * -------------------------------------------------------------------------- */

// Tulis fungsi addBook di bawah ini:

/* ----------------------------------------------------------------------------
 * FUNGSI 2 — listBooks
 * ----------------------------------------------------------------------------
 * TUJUAN
 * Menampilkan seluruh buku yang tersimpan.
 *
 * CONTOH OUTPUT YANG DIHARAPKAN
 *   Daftar Buku:
 *   1. Clean Code - Robert C. Martin (2008)
 *   2. The Pragmatic Programmer - Andrew Hunt (1999)
 * -------------------------------------------------------------------------- */

// Tulis fungsi listBooks di bawah ini:

/* ----------------------------------------------------------------------------
 * FUNGSI 3 — searchBook
 * ----------------------------------------------------------------------------
 * TUJUAN
 * Mencari buku berdasarkan judul. Ini bagian paling menantang di assignment ini,
 * karena parameternya OPSIONAL.
 *
 * CONTOH OUTPUT YANG DIHARAPKAN
 *   searchBook("clean") -> Hasil pencarian "clean": Clean Code - Robert C. Martin (2008)
 *   searchBook("xyz")   -> Buku dengan judul "xyz" tidak ditemukan.
 *   searchBook()        -> (menampilkan seluruh daftar buku)
 * -------------------------------------------------------------------------- */

// Tulis fungsi searchBook di bawah ini:

/* ----------------------------------------------------------------------------
 * Jangan lupa
 * Ketiga fungsi di atas dipakai dari `src/main.ts`, jadi semuanya harus
 * di-`export`.
 * -------------------------------------------------------------------------- */

import { Book } from "../types";
import { books } from "../data/books";

export function addBook(book: Book): void {
  books.push(book);
  console.log(`Buku "${book.title}" berhasil ditambahkan.`);
}

export function listBooks() {
  return books;
}

export function searchBook(title?: string): void {
  if (!title) {
    listBooks();
    return;
  }

  const foundBook = books.find(
    (book) => book.title.toLowerCase() === title.toLowerCase(),
  );

  if (foundBook) {
    console.log(
      `Hasil pencarian "${title}": ${foundBook.title} - ${foundBook.author} (${foundBook.publicationYear})`,
    );
  } else {
    console.log(`Buku dengan judul "${title}" tidak ditemukan.`);
  }
}