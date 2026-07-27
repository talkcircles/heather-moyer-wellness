export const site = {
  name: "Heather Moyer Wellness",
  tagline: "Grieve Fully To Live Fully",
  shortBlurb: "Transform into your inner warrior",
  email: "heather@heathermoyerwellness.com",
  calendly: "https://calendly.com/heathermoyerwellness/30min",
  stripeTribe: "https://buy.stripe.com/eVq9AUerFf6m6oN4g4bwk05",
  wetravel: "https://www.wetravel.com/users/heather-moyer-wellness-llc",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61580505699668",
    instagram: "https://www.instagram.com/heathermoyerwellness/",
    linkedin: "https://www.linkedin.com/company/heathermoyerwellness",
    tiktok: "https://www.tiktok.com/@heathermoyerwellness",
    google: "https://share.google/hZP51bCbPDDwYA4Np",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "1 on 1 Coaching", href: "/1-on-1-coaching" },
  { label: "Retreats", href: "/retreats" },
  { label: "Meet Heather", href: "/meet-heather" },
] as const;

export const footerLinks = [
  { label: "1 on 1 Coaching", href: "/1-on-1-coaching" },
  { label: "Intro Call", href: site.calendly, external: true },
  { label: "Retreats", href: "/retreats" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const pathways = [
  {
    title: "1-on-1 Coaching",
    body: "Personalized grief coaching, remote or in-person, to guide you on your grief journey. Specializing in helping grieving women overcome depression and reclaim hope for the future.",
    image: "/images/Heather-Moyer-grief-retreats-mount-shasta-1-2.avif",
    href: "/1-on-1-coaching",
  },
  {
    title: "Retreats",
    body: "Multi-day immersions in the breathtaking beauty of Mt. Shasta, held once a month with themed focuses on healing, grief, and self-discovery. Surround yourself with nature's energy, practice yoga and mindfulness, and connect deeply with like-minded souls.",
    image: "/images/2026/panther-meadow.jpg",
    href: "/retreats",
  },
  {
    title: "Private Women's Immersion",
    body: "A 5-Day Immersive Healing Experience in Sacred Mount Shasta. Nestled at the base of Mount Shasta, the retreat offers 1:1 world-class support, therapeutic guidance, somatic healing, and sacred nature immersion — creating an environment where transformation becomes inevitable.",
    image: "/images/2026/heather-jump-snow.jpg",
    href: "/retreats",
  },
  {
    title: "Custom Designed Experiences",
    body: "Curate your own retreat for yourself or a group of loved ones. Choose the location, dates, and themes to fit your unique needs — whether it's a private getaway in Mt. Shasta or beyond. Empower your healing on your terms.",
    image: "/images/Photo-Jul-29-2025-12-21-21.jpg",
    href: "/retreats#custom",
  },
];

/**
 * Live retreats sourced from her WeTravel profile (heather-moyer-wellness-llc).
 * NOTE: WeTravel sits behind Cloudflare bot protection so server-side scraping
 * is blocked. Sync this list manually when new trips appear (or wire a
 * headless browser job — see open-questions.md).
 */
export type Retreat = {
  name: string;
  location: string;
  /** Omit when there is no set price — the card shows a "contact for pricing" CTA instead. */
  pricePerPerson?: number;
  href: string;
};

export const retreats: Retreat[] = [
  {
    name: "Fix Your Shit",
    location: "Mt. Shasta, CA",
    pricePerPerson: 3989,
    href: "https://www.wetravel.com/trips/wellness-retreat-fix-your-shit-heather-moyer-wellness-llc-33192328",
  },
  {
    name: "Grief & Healing",
    location: "Mt. Shasta, CA",
    pricePerPerson: 3989,
    href: "https://www.wetravel.com/trips/wellness-retreat-grief-healing-heather-moyer-wellness-llc-43368304",
  },
  {
    name: "Radiant Essence",
    location: "Mt. Shasta, CA",
    pricePerPerson: 24999,
    href: site.wetravel,
  },
  {
    name: "Personalized Retreat",
    location: "Mt. Shasta, CA",
    href: "/contact",
  },
];

export const testimonials = [
  {
    name: "Gia",
    image: "/images/gia.png",
    quote:
      "I found this retreat at a time of emotional overwhelm. It was one of the most profound experiences of my life.",
  },
  {
    name: "Hayley",
    image: "/images/avatar-hayley.webp",
    quote:
      "Parts of me came back to life over the five days, just being seen in my grief.",
  },
  {
    name: "Dottie",
    image: "/images/avatar-dottie.png",
    quote:
      "Two years into grieving my son's suicide and my father's loss — I finally felt supported.",
  },
  {
    name: "Rona",
    image: "/images/avatar-rona.webp",
    quote:
      "I found sisterhood and real support through our shared grief journey.",
  },
  {
    name: "Hilary",
    image: "/images/avatar-hilary.webp",
    quote:
      "As a yoga instructor and healing program leader, this retreat still transformed me.",
  },
  {
    name: "Ivonne",
    image: "/images/avatar-ivonne.webp",
    quote:
      "Endless gratitude for Heather and my fellow BAB's. This work changed my life.",
  },
];

export const locations = [
  {
    name: "Nosara, Costa Rica",
    body: "Join me in a tropical paradise that will soothe your senses and rejuvenate your soul.",
  },
  {
    name: "Bali, Indonesia",
    body: "Jungle hideaways, sacred rivers, and vibrant wellness culture in the heart of nature.",
  },
  {
    name: "Punta Cana, Dominican Republic",
    body: "Immerse yourself in nature's serene symphony as cool tropical breezes guide your transformation.",
  },
];

export const expect = [
  {
    title: "Private Spa Rituals",
    body: "World-class spa therapies in serene, exclusive spaces.",
  },
  {
    title: "Personalized Yoga & Fitness",
    body: "Daily sessions tailored to your body's needs and goals.",
  },
  {
    title: "Gourmet Wellness Cuisine",
    body: "Artfully crafted plant-based menus designed for nourishment and pleasure.",
  },
  {
    title: "Mind-Body Therapies",
    body: "Massage, sound healing, and holistic treatments delivered by expert practitioners.",
  },
  {
    title: "Luxury Nature Escapes",
    body: "Scenic hikes, guided nature walks, and outdoor relaxation in stunning landscapes.",
  },
  {
    title: "Cultural Immersion Journeys",
    body: "Exclusive connections to local culture through art and traditions.",
  },
];

export const faqs = [
  {
    q: "Mt. Shasta flights & ground transportation?",
    a: "The nearest airports are Redding Municipal (RDD), 60 miles south, and Rogue Valley International Medford (MFR), 86 miles north. Sacramento International is 214 miles away, San Francisco International 288 miles. Ground transportation isn't included in retreat costs, but Heather will help arrange shared transportation.",
  },
  {
    q: "What if I need to stay the night in Mt. Shasta before or after?",
    a: "Recommended stays: Best Western Plus Tree House · Strawberry Valley Inn · LOGE Camp, Mt. Shasta · Mt. Shasta Resort and Golf Course · Summit Lofts, Mt. Shasta.",
  },
  {
    q: "Can I bring a friend or relative to share a room?",
    a: "Yes, absolutely. Check the booking options for rooms that accommodate two or more. Reach out if the option you need isn't visible.",
  },
  {
    q: "What's the weather like in spring and summer?",
    a: "May–June average high: 72°F. July–September average high: 81°F.",
  },
  {
    q: "What are some popular things to do in Mt. Shasta?",
    a: "Soul Connections emporium · Pipeline Craft Taps and Kitchen · Yaks Mt. Shasta · Garden Tap Outdoor Beer Garden · Castle Lake hiking · driving up Mt. Shasta via Everitt Memorial Highway.",
  },
];

export const blogPosts = [
  {
    slug: "the-echo-of-sorrow",
    title: "The Echo of Sorrow",
    date: "2025-10-21",
    excerpt:
      "You take your last breath with your loved one being here. And suddenly, unexpectedly, they're gone.",
    image: "/images/Photo-Aug-02-2025-22-45-10-1.jpg",
  },
  {
    slug: "10-biggest-things-to-look-for-in-a-holistic-wellness-retreat",
    title: "10 Biggest Things To Look For In A Holistic Wellness Retreat",
    date: "2025-04-13",
    excerpt:
      "So you're interested in attending a holistic wellness retreat? Wonderful. Here's how to choose wisely.",
    image: "/images/TianaSheridanPhoto-HMW-12.jpg",
  },
];
