# JOOYBEE — Neo-Brutalist Astro Blog

Blog **JOOYBEE** · *Enjoy Being Everything*  
Design system ala Slab (border 3px, hard shadow, press buttons).

## Fitur

- Homepage + sections (Hero, Marquee, Features, Pricing, FAQ, CTA)
- Blog index max **6 posts / halaman** + pagination
- **Search box** (client-side filter by title/tag/author)
- **Single post** page dengan typography Neo-Brutalist
- **7 contoh post** (Markdown, lorem ipsum panjang)
- **No-image placeholder** geometris jika post tanpa cover
- **Contact form** Formspree → `https://formspree.io/f/mnpabvbn`
- Config satu file: `src/config/site.ts`

## Setup

```bash
npm create astro@latest my-jooybee
cd my-jooybee
npx astro add tailwind
npm install @fontsource/archivo @fontsource/space-mono

# Copy seluruh folder src/ dan public/ dari paket ini
npm run dev
```

Pastikan Astro 5+ (content layer / `content.config.ts`).

## Struktur penting

```
src/
  config/site.ts
  content.config.ts
  content/blog/*.md          ← 7 posts
  components/…               ← UI Neo-Brutalist
  pages/
    index.astro
    contact.astro
    blog/index.astro         ← page 1 (6 posts)
    blog/page/[page].astro   ← page 2+
    blog/[...slug].astro     ← single post
```

## Posts tanpa gambar

3 post punya cover SVG di `/public/images/posts/`.  
4 post tanpa `image` di frontmatter → otomatis render `NoImage.astro`.

## Formspree

Form di `/contact` POST ke endpoint di `site.formspree`.
