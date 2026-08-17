export const site = {
  name: "JOOYBEE",
  title: "JOOYBEE — Enjoy Being Everything",
  description: "Enjoy Being Everything",
  url: "https://www.jooybee.my.id",
  locale: "id",

  formspree: "https://formspree.io/f/mnpabvbn",

  /** Nama yang tampil sebagai author default & di About */
  author: "Aji Sasmito",

  about: {
    badge: "About me",
    titleLine1: "I write.",
    titleHighlight: "I build.",
    subtitle: "Enjoy Being Everything.",
    bio: [
      "Halo — saya penulis di balik JOOYBEE. Blog ini tempat saya menaruh esai, catatan produk, opini dan sedikit basa-basi.",
      "Saya suka ide yang tajam, liar, apa adanya dan metrik yang jujur. Di luar layar: kopi, musik, dan fesnuk.",
      "Kalau kamu punya kolaborasi, koreksi, atau sekadar mau sapa — lewat Contact saja.",
    ],
    facts: [
      { label: "Berbasis", value: "Indonesia" },
      { label: "Fokus", value: "Writing · Product · Culture" },
      { label: "Status", value: "Open for chat" },
    ],
  },

  /** Isi URL sosial media kamu — yang href kosong tidak ditampilkan */
  socials: [
    { id: "x", label: "X / Twitter", href: "https://x.com/jooybee_" },
    { id: "instagram", label: "Instagram", href: "https://instagram.com/jooybee__" },
    { id: "github", label: "GitHub", href: "https://github.com/jooybee" },
    { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@jooybee__" },
    { id: "youtube", label: "YouTube", href: "https://youtube.com/@jooybee" },
    { id: "email", label: "Email", href: "mailto:revbyaji@gmail.com" },
  ],

  nav: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About me", href: "/about" },
  ],

  cta: {
    primary: { label: "Contact", href: "/contact" },
    secondary: { label: "Read the blog", href: "/blog" },
  },

  hero: {
    badge: "Enjoy Being Everything",
    titleLine1: "Words that",
    titleHighlight: "punch back.",
    description:
      "JOOYBEE adalah sudut kecil di internet yang apa adanya — esai, catatan, opini dan sedikit basa-basi. Enjoy being everything.",
    checklist: [
      "Opini yang tajam, tapi nggak galak",
      "Sedikit omong kosong, tapi tetap memiliki makna",
      "Dibuat untuk saya sendiri, tapi boleh dibaca orang lain juga",
    ],
  },

  logos: [
    "ENJOY",
    "BEING",
    "EVERYTHING",
    "ENJOY",
    "BEING",
    "EVERYTHING",
    "ENJOY",
    "BEING",
    "EVERYTHING",
    "ENJOY",
    "BEING",
    "EVERYTHING",
  ],

  features: [
    {
      title: "Esai yang tajam",
      description:
        "Tulisan panjang yang menghargai waktu kamu. Bukan listicle, bukan konten SEO. Cuma ide yang layak dibaca sampai habis.",
    },
    {
      title: "Opini yang blak-blakan",
      description:
        "Kami bilang yang biasanya orang simpan sendiri. Kalau ada yang aneh, ya kami sebut aja.",
    },
    {
      title: "Gratis",
      description:
        "Semua tulisan bisa dibaca gratis. Langganan cuma kalau kamu mau saya cepat kaya.",
    },
    {
      title: "Jaminan privasi",
      description:
        "Nggak ada tracking pixel, nggak ada trik-trik aneh, pokoknya family-friendly",
    },
    {
      title: "Desain nyaman dibaca",
      description:
        "Pemilihan tipografi dan layout desain dibuat senyaman mungkin untuk dibaca bahkan untuk orang yang kurang suka membaca",
    },
    {
      title: "Arsip jangka panjang",
      description:
        "Kenangan untuk saya di masa depan, tapi kalian juga boleh baca",
    },
  ],

  pricing: [
    {
      name: "Reader",
      price: "$0",
      period: "/forever",
      description: "For people who just want to read.",
      features: [
        "All posts free",
        "RSS feed",
        "No account needed",
        "Community vibes",
      ],
      cta: "Start reading",
      href: "/blog",
      featured: false,
    },
    {
      name: "Supporter",
      price: "$5",
      period: "/mo",
      description: "For people who want the letter and zero ads forever.",
      features: [
        "Monthly essay letter",
        "Early access drafts",
        "Name in the credits",
        "Direct reply line",
      ],
      cta: "Become a supporter",
      href: "/contact",
      featured: true,
      badge: "Most popular",
    },
    {
      name: "Patron",
      price: "$15",
      period: "/mo",
      description: "For people who want to keep JOOYBEE alive.",
      features: [
        "Everything in Supporter",
        "Suggest topics",
        "Private Discord",
        "Annual print zine",
      ],
      cta: "Talk to us",
      href: "/contact",
      featured: false,
    },
  ],

  faq: [
    {
      q: "Apa itu JOOYBEE?",
      a: "Blog kecil independen tentang ide, gagasan, budaya, dan hal-hal random yang layak dinikmati. Enjoy Being Everything.",
    },
    {
      q: "Seberapa sering publish?",
      a: "Kalau ada yang layak dibicarain. Biasanya beberapa kali sebulan. Kualitas lebih penting dari pada kuantitas.",
    },
    {
      q: "Bolehkah re-publish tulisannya?",
      a: "Boleh kalau izin terlebih dahulu",
    },
    {
      q: "Menerima guest post?",
      a: "Jarang. Kalau kamu punya draf yang matang dan menarik bagi saya, kirim lewat form contact saja.",
    },
    {
      q: "Ada newsletter?",
      a: "Ada. tapi belum jadi masih dalam proses ",
    },
  ],

  footer: {
    tagline: "Enjoy Being Everything.",
    copyright: `${new Date().getFullYear()} JOOYBEE`,
  },

  /** Posts per page on /blog */
  postsPerPage: 6,
} as const;
