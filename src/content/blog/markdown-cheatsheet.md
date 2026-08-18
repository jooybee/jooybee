---
title: "Markdown cheatsheet"
description: "Semua sintaks Markdown yang dipakai di blog JOOYBEE — kode dan hasilnya dalam satu post."
pubDate: 2026-08-18
author: "JOOYBEE"
category: "Playbook"
tags: ["markdown", "writing", "cheatsheet"]
draft: false
---

Post ini adalah referensi cepat. Setiap bagian menampilkan **kode** lalu **hasil** yang kamu lihat di halaman ini.

---

## 1. Heading

Kode:

```
## Heading level 2
### Heading level 3
```

Hasil:

## Heading level 2

### Heading level 3

---

## 2. Paragraph & emphasis

Kode:

```
Teks biasa. **Tebal.** *Miring.* ***Tebal + miring.***
```

Hasil:

Teks biasa. **Tebal.** *Miring.* ***Tebal + miring.***

---

## 3. Link

Kode:

```
Kunjungi [JOOYBEE](https://www.jooybee.my.id/) atau [About](/about).
```

Hasil:

Kunjungi [JOOYBEE](https://www.jooybee.my.id/) atau [About](/about).

---

## 4. Inline code

Kode:

```
Pakai `npm run dev` untuk development.
```

Hasil:

Pakai `npm run dev` untuk development.

---

## 5. Code block

Kode (tiga backtick + bahasa):

````
```js
const site = "JOOYBEE";
console.log(site);
```
````

Hasil:

```js
const site = "JOOYBEE";
console.log(site);
```

---

## 6. List — unordered

Kode:

```
- Item satu
- Item dua
  - Nested
- Item tiga
```

Hasil:

- Item satu
- Item dua
  - Nested
- Item tiga

---

## 7. List — ordered

Kode:

```
1. Langkah pertama
2. Langkah kedua
3. Langkah ketiga
```

Hasil:

1. Langkah pertama
2. Langkah kedua
3. Langkah ketiga

---

## 8. Blockquote

Kode:

```
> Kalimat yang layak dikutip.
>
> Bisa multi-baris.
```

Hasil:

> Kalimat yang layak dikutip.
>
> Bisa multi-baris.

---

## 9. Horizontal rule

Kode: tiga tanda minus di baris sendiri.

Hasil (garis di bawah ini):

---

## 10. Image

Kode:

```
![Cover contoh](/images/posts/enjoy.svg)
```

Hasil:

![Cover contoh](/images/posts/enjoy.svg)

Kalau path salah atau `image` di frontmatter kosong, sistem pakai placeholder geometris.

---

## 11. Frontmatter (wajib)

Setiap post di `src/content/blog/` diawali YAML seperti di bagian atas file ini.

| Field | Wajib | Keterangan |
|-------|--------|------------|
| `title` | ya | Judul |
| `description` | ya | Meta + card |
| `pubDate` | ya | `YYYY-MM-DD` |
| `author` | tidak | default `JOOYBEE` |
| `category` | tidak | default `Essay` |
| `tags` | tidak | array string |
| `image` | tidak | path di `/public` atau URL |
| `draft` | tidak | `true` = tidak publish |

---

## 12. Kombinasi gaya blog

Kode:

```
## Multiplicity is not confusion

Being a designer and a runner is not "lack of focus." It is a full life.

- Pretend every post is evergreen SEO content
- Apologise for range
- Force a single "beat"

> Messy is closer to truth than a polished niche page.

Pakai perintah `astro build` sebelum deploy.
```

Hasil:

## Multiplicity is not confusion

Being a designer and a runner is not "lack of focus." It is a full life.

- Pretend every post is evergreen SEO content
- Apologise for range
- Force a single "beat"

> Messy is closer to truth than a polished niche page.

Pakai perintah `astro build` sebelum deploy.

---

## Catatan styling

Konten post dirender dengan `.prose-brutal`:

- heading tebal, tracking ketat
- link warna cobalt
- blockquote border 3px + hard shadow
- inline code latar kuning
- code block gelap dengan border

Cukup tulis Markdown biasa — tidak perlu HTML untuk konten standar.

---

*Enjoy Being Everything · JOOYBEE*
```