export const site = {
  name: "JOOYBEE",
  title: "JOOYBEE — Enjoy Being Everything",
  description: "Enjoy Being Everything",
  url: "https://example.com",
  locale: "en",

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
      "Saya suka ide yang tajam, tools yang kecil, dan metrik yang jujur. Di luar layar: kopi, jalan kaki, dan arsip link yang terlalu banyak.",
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
      "JOOYBEE is a blunt little corner of the internet — essays, notes, and opinions without the filler. Enjoy being everything.",
    checklist: [
      "No fluff, no growth-hacking",
      "Sharp takes only",
      "Built for readers who stay",
    ],
  },

  logos: [
    "ENJOY",
    "BEING",
    "SQUARE",
    "ENJOY",
    "BEING",
    "RECTANGLE",
    "ENJOY",
    "BEING",
    "TRIANGLE",
    "ENJOY",
    "BEING",
    "STAR",
  ],

  features: [
    {
      title: "Sharp essays",
      description:
        "Long-form writing that respects your time. No listicles, no SEO bait — just ideas worth finishing.",
    },
    {
      title: "Blunt opinions",
      description:
        "We say the quiet part out loud. If something is broken, we name it.",
    },
    {
      title: "No paywall theatre",
      description:
        "Everything is free to read. Subscribe only if you want the monthly letter.",
    },
    {
      title: "Privacy-first",
      description:
        "No tracking pixels, no dark patterns. Your attention stays yours.",
    },
    {
      title: "Readable by design",
      description:
        "Typography and layout built for focus. Distraction is the enemy.",
    },
    {
      title: "Archive that lasts",
      description:
        "Posts stay up. Links don't rot. You can always come back.",
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
      q: "What is JOOYBEE?",
      a: "A small independent blog about ideas, product, culture, and the strange joy of being many things at once. Enjoy Being Everything.",
    },
    {
      q: "How often do you publish?",
      a: "When there's something worth saying. Usually a few times a month. Quality over cadence.",
    },
    {
      q: "Can I republish a post?",
      a: "Ask first. Most of the time we say yes with attribution and a link back.",
    },
    {
      q: "Do you take guest posts?",
      a: "Rarely. If you have a sharp, finished draft that fits the tone, use the contact form.",
    },
    {
      q: "Is there a newsletter?",
      a: "Yes. One email a month — a sharp essay and zero growth-hacking. Sign up from any page footer or the contact form.",
    },
  ],

  footer: {
    tagline: "Enjoy Being Everything.",
    copyright: `${new Date().getFullYear()} JOOYBEE`,
  },

  /** Posts per page on /blog */
  postsPerPage: 6,
} as const;
