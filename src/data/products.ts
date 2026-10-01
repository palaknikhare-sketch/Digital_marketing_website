export type ColorKey = 'midnight' | 'charcoal' | 'sand' | 'olive' | 'navy' | 'cream' | 'burgundy' | 'taupe' | 'stone' | 'brown';

export interface ProductColor {
  key: ColorKey;
  name: string;
  hex: string;
}

export interface ProductGallery {
  front: string;
  side: string;
  back: string;
  inside: string;
  lifestyle: string;
  detail: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  colors: ColorKey[];
  defaultColor: ColorKey;
  featuredImage: string;
  dimensions: string;
  gallery: Partial<Record<ColorKey, ProductGallery>>;
  popular?: boolean;
}

export const COLORS: Record<ColorKey, ProductColor> = {
  midnight: { key: 'midnight', name: 'Midnight Black', hex: '#1C1A19' },
  charcoal: { key: 'charcoal', name: 'Charcoal', hex: '#3A3633' },
  sand: { key: 'sand', name: 'Sand', hex: '#C7B291' },
  olive: { key: 'olive', name: 'Deep Olive', hex: '#5F6E4F' },
  navy: { key: 'navy', name: 'Navy', hex: '#2C3A52' },
  cream: { key: 'cream', name: 'Cream', hex: '#EDE5D6' },
  burgundy: { key: 'burgundy', name: 'Burgundy', hex: '#6B2D30' },
  taupe: { key: 'taupe', name: 'Taupe', hex: '#8C7F70' },
  stone: { key: 'stone', name: 'Stone', hex: '#A89B8C' },
  brown: { key: 'brown', name: 'Dark Brown', hex: '#4A3B2E' },
};

// ---------------------------------------------------------------------------
// IMAGE PATH HELPERS
//
// All images are served from /images/ (maps to public/images/ on disk).
// Upload your own files there and update the paths below as needed.
//
// Naming convention for product gallery images:
//   /images/{productId}-{color}-{view}.jpg
// where {view} is one of: front, side, back, inside, lifestyle, detail
//
// Example: /images/metro-midnight-front.jpg
// ---------------------------------------------------------------------------

const IMG = (file: string) => `/images/${file}`;

const G = (
  front: string,
  side: string,
  back: string,
  inside: string,
  lifestyle: string,
  detail: string,
): ProductGallery => ({ front, side, back, inside, lifestyle, detail });

// Convenience: generate all 6 gallery paths for a single product+color combo
// using the standard naming convention. Replace with G() calls once you
// upload non-uniform images.
const gal = (productId: string, color: ColorKey): ProductGallery => ({
  front:     IMG(`${productId}-${color}-front.jpg`),
  side:      IMG(`${productId}-${color}-side.jpg`),
  back:      IMG(`${productId}-${color}-back.jpg`),
  inside:    IMG(`${productId}-${color}-inside.jpg`),
  lifestyle: IMG(`${productId}-${color}-lifestyle.jpg`),
  detail:    IMG(`${productId}-${color}-detail.jpg`),
});

export const PRODUCTS: Product[] = [
  // 1 — NOVA Metro — sleek black commuter
  {
    id: 'metro',
    name: 'NOVA Metro',
    tagline: 'Minimal everyday commuter backpack',
    description: 'A streamlined silhouette for the daily commute — lighter, sleeker, always ready.',
    longDescription: 'The NOVA Metro is built for the rhythm of city life. Its slim profile hides a surprisingly spacious interior with a padded laptop sleeve, hidden anti-theft pocket, and USB-C charging port. Water-repellent nylon keeps your essentials dry through sudden showers.',
    price: 4499,
    originalPrice: 5999,
    rating: 4.8,
    reviews: 214,
    badge: 'Bestseller',
    colors: ['midnight', 'charcoal', 'sand', 'navy'],
    defaultColor: 'midnight',
    featuredImage: IMG('metro-midnight-front.jpg'),
    dimensions: '30 × 18 × 42 cm · 18 L · 0.9 kg',
    popular: true,
    gallery: {
      midnight: gal('metro', 'midnight'),
      charcoal: gal('metro', 'charcoal'),
      sand: gal('metro', 'sand'),
      navy: gal('metro', 'navy'),
    },
  },
  // 2 — NOVA Campus — student/college
  {
    id: 'campus',
    name: 'NOVA Campus',
    tagline: 'Designed for students and daily college use',
    description: 'Carry textbooks, laptop, and lunch without the bulk. Made for long campus days.',
    longDescription: 'The NOVA Campus was designed around student life. A wide main compartment fits textbooks and notebooks, while the padded sleeve protects your laptop. Side pockets hold a water bottle and compact umbrella. The breathable mesh back panel keeps you cool across campus.',
    price: 3999,
    originalPrice: 5299,
    rating: 4.7,
    reviews: 328,
    badge: 'Popular',
    colors: ['midnight', 'sand', 'olive', 'burgundy', 'cream'],
    defaultColor: 'sand',
    featuredImage: IMG('campus-sand-front.jpg'),
    dimensions: '32 × 20 × 45 cm · 22 L · 1.0 kg',
    popular: true,
    gallery: {
      midnight: gal('campus', 'midnight'),
      sand: gal('campus', 'sand'),
      olive: gal('campus', 'olive'),
      burgundy: gal('campus', 'burgundy'),
      cream: gal('campus', 'cream'),
    },
  },
  // 3 — NOVA Tech — programmer/creator organization
  {
    id: 'tech',
    name: 'NOVA Tech',
    tagline: 'Maximum organization for programmers and creators',
    description: 'Every cable, adapter, and device has its place. Built for people who carry their desk.',
    longDescription: 'The NOVA Tech is engineered for makers. A dedicated cable management pouch keeps chargers and adapters tangle-free. The shock-proof laptop sleeve fits a MacBook Air and similar laptops. An RFID-blocking pocket protects your cards, and a hidden lower-back pocket secures your phone and transit cash.',
    price: 5499,
    originalPrice: 6999,
    rating: 4.9,
    reviews: 187,
    badge: 'Editor\u2019s Pick',
    colors: ['charcoal', 'midnight', 'olive', 'navy'],
    defaultColor: 'charcoal',
    featuredImage: IMG('tech-charcoal-front.jpg'),
    dimensions: '31 × 19 × 44 cm · 20 L · 1.1 kg',
    popular: true,
    gallery: {
      charcoal: gal('tech', 'charcoal'),
      midnight: gal('tech', 'midnight'),
      olive: gal('tech', 'olive'),
      navy: gal('tech', 'navy'),
    },
  },
  // 4 — NOVA Urban — premium city
  {
    id: 'urban',
    name: 'NOVA Urban',
    tagline: 'Minimal premium city backpack',
    description: 'Clean lines, refined materials, and a quiet confidence for the city.',
    longDescription: 'The NOVA Urban brings a premium feel to everyday carry. Its smooth water-repellent shell and subtle leather accents pair as well with a blazer as with a hoodie. A TSA-approved combination lock and hidden zippers keep your belongings secure on crowded transit.',
    price: 4999,
    rating: 4.6,
    reviews: 142,
    colors: ['midnight', 'charcoal', 'cream', 'burgundy'],
    defaultColor: 'charcoal',
    featuredImage: IMG('urban-charcoal-front.jpg'),
    dimensions: '29 × 17 × 41 cm · 16 L · 0.85 kg',
    gallery: {
      midnight: gal('urban', 'midnight'),
      charcoal: gal('urban', 'charcoal'),
      cream: gal('urban', 'cream'),
      burgundy: gal('urban', 'burgundy'),
    },
  },
  // 5 — NOVA Explorer — travel/weekend
  {
    id: 'explorer',
    name: 'NOVA Explorer',
    tagline: 'Designed for travel and weekend trips',
    description: 'Extra capacity, weather resistance, and a TSA-approved lock for the road.',
    longDescription: 'The NOVA Explorer is ready for weekend getaways and longer journeys. An expanded main compartment fits a change of clothes alongside your tech, while durable water-repellent canvas shrugs off rain. The external TSA-approved combination lock secures your bag in transit and at the hostel.',
    price: 5999,
    originalPrice: 7499,
    rating: 4.8,
    reviews: 96,
    colors: ['olive', 'midnight', 'sand', 'burgundy'],
    defaultColor: 'olive',
    featuredImage: IMG('explorer-olive-front.jpg'),
    dimensions: '34 × 22 × 50 cm · 28 L · 1.3 kg',
    popular: true,
    gallery: {
      olive: gal('explorer', 'olive'),
      midnight: gal('explorer', 'midnight'),
      sand: gal('explorer', 'sand'),
      burgundy: gal('explorer', 'burgundy'),
    },
  },
  // 6 — NOVA Studio — creator/professional
  {
    id: 'studio',
    name: 'NOVA Studio',
    tagline: 'Designed for creators and professionals',
    description: 'Protect your gear and look the part. A refined carry for the creative life.',
    longDescription: 'The NOVA Studio balances professional polish with creator utility. A padded sleeve guards your laptop, while dedicated compartments organize a camera, notebook, and accessories. The water-repellent shell and RFID-blocking pocket keep both your gear and your data safe.',
    price: 5299,
    rating: 4.7,
    reviews: 78,
    colors: ['cream', 'charcoal', 'navy', 'sand'],
    defaultColor: 'cream',
    featuredImage: IMG('studio-cream-front.jpg'),
    dimensions: '31 × 19 × 43 cm · 20 L · 1.0 kg',
    gallery: {
      cream: gal('studio', 'cream'),
      charcoal: gal('studio', 'charcoal'),
      navy: gal('studio', 'navy'),
      sand: gal('studio', 'sand'),
    },
  },
  // 7 — NOVA Flex — lightweight everyday
  {
    id: 'flex',
    name: 'NOVA Flex',
    tagline: 'Lightweight everyday backpack',
    description: 'Barely there weight, all-day comfort. The featherweight of the lineup.',
    longDescription: 'The NOVA Flex is our lightest pack, perfect for warm commutes and minimal carry days. Breathable mesh back padding and weight-distributing shoulder straps keep it comfortable for hours. Side pockets hold a water bottle and compact umbrella for everyday readiness.',
    price: 3499,
    originalPrice: 4499,
    rating: 4.5,
    reviews: 165,
    colors: ['sand', 'cream', 'navy', 'olive'],
    defaultColor: 'navy',
    featuredImage: IMG('flex-navy-front.jpg'),
    dimensions: '28 × 16 × 40 cm · 14 L · 0.7 kg',
    gallery: {
      sand: gal('flex', 'sand'),
      cream: gal('flex', 'cream'),
      navy: gal('flex', 'navy'),
      olive: gal('flex', 'olive'),
    },
  },
  // 8 — NOVA Pro — flagship high-capacity
  {
    id: 'pro',
    name: 'NOVA Pro',
    tagline: 'Premium high-capacity smart backpack',
    description: 'Our flagship. Maximum capacity, full smart features, uncompromising comfort.',
    longDescription: 'The NOVA Pro is the most capable pack we make. A high-capacity main compartment handles everything from a long workday to a weekend trip. Full smart features include a USB-C charging port, RFID-blocking pocket, hidden anti-theft zippers, a TSA-approved lock, and a hidden quick-access lower-back pocket. Weight-distributing straps and breathable mesh make heavy loads feel lighter.',
    price: 6499,
    originalPrice: 8499,
    rating: 4.9,
    reviews: 253,
    badge: 'Flagship',
    colors: ['midnight', 'charcoal', 'olive', 'navy', 'burgundy', 'sand', 'cream'],
    defaultColor: 'midnight',
    featuredImage: IMG('pro-midnight-front.jpg'),
    dimensions: '35 × 23 × 52 cm · 32 L · 1.4 kg',
    popular: true,
    gallery: {
      midnight: gal('pro', 'midnight'),
      charcoal: gal('pro', 'charcoal'),
      olive: gal('pro', 'olive'),
      navy: gal('pro', 'navy'),
      burgundy: gal('pro', 'burgundy'),
      sand: gal('pro', 'sand'),
      cream: gal('pro', 'cream'),
    },
  },
  // 9 — NOVA Executive — structured business
  {
    id: 'executive',
    name: 'NOVA Executive',
    tagline: 'Structured business backpack for the modern professional',
    description: 'Sharp lines, leather accents, and a boardroom-ready silhouette.',
    longDescription: 'The NOVA Executive is tailored for the professional who refuses to compromise. Its structured shell holds its shape whether full or empty, while full-grain leather accents add a touch of quiet luxury. A dedicated laptop compartment, RFID-blocking pocket, and hidden anti-theft zipper keep your work essentials secure and organized.',
    price: 6999,
    originalPrice: 8999,
    rating: 4.8,
    reviews: 112,
    badge: 'New',
    colors: ['midnight', 'brown', 'charcoal', 'navy'],
    defaultColor: 'brown',
    featuredImage: IMG('executive-brown-front.jpg'),
    dimensions: '33 × 21 × 46 cm · 24 L · 1.2 kg',
    popular: true,
    gallery: {
      midnight: gal('executive', 'midnight'),
      brown: gal('executive', 'brown'),
      charcoal: gal('executive', 'charcoal'),
      navy: gal('executive', 'navy'),
    },
  },
  // 10 — NOVA Graphite — sleek minimalist tech
  {
    id: 'graphite',
    name: 'NOVA Graphite',
    tagline: 'Sleek minimalist tech backpack',
    description: 'A clean, architectural silhouette for the design-conscious professional.',
    longDescription: 'The NOVA Graphite is defined by its clean lines and architectural structure. A matte water-repellent shell pairs with a magnetic quick-access flap and a hidden USB-C charging port. The interior features a padded 15-inch laptop sleeve, cable management pouch, and a dedicated tablet slot.',
    price: 5499,
    rating: 4.7,
    reviews: 89,
    colors: ['charcoal', 'midnight', 'stone', 'navy'],
    defaultColor: 'charcoal',
    featuredImage: IMG('graphite-charcoal-front.jpg'),
    dimensions: '30 × 18 × 43 cm · 19 L · 1.0 kg',
    gallery: {
      charcoal: gal('graphite', 'charcoal'),
      midnight: gal('graphite', 'midnight'),
      stone: gal('graphite', 'stone'),
      navy: gal('graphite', 'navy'),
    },
  },
  // 11 — NOVA Commute — transit-optimized
  {
    id: 'commute',
    name: 'NOVA Commute',
    tagline: 'Transit-optimized commuter backpack',
    description: 'Built for the daily grind — quick-access pockets, USB-C port, weatherproof shell.',
    longDescription: 'The NOVA Commute is designed around the realities of public transit. A luggage pass-through sleeve slides over your suitcase handle, while the quick-access front pocket keeps your transit card and phone within reach. The USB-C charging port connects to an internal power-bank pocket, and the hidden lower-back pocket secures valuables on crowded platforms.',
    price: 4799,
    originalPrice: 5999,
    rating: 4.6,
    reviews: 156,
    colors: ['midnight', 'navy', 'charcoal', 'taupe'],
    defaultColor: 'midnight',
    featuredImage: IMG('commute-midnight-front.jpg'),
    dimensions: '31 × 19 × 44 cm · 21 L · 1.0 kg',
    popular: true,
    gallery: {
      midnight: gal('commute', 'midnight'),
      navy: gal('commute', 'navy'),
      charcoal: gal('commute', 'charcoal'),
      taupe: gal('commute', 'taupe'),
    },
  },
  // 12 — NOVA Atlas — high-capacity travel-tech
  {
    id: 'atlas',
    name: 'NOVA Atlas',
    tagline: 'High-capacity travel-tech backpack',
    description: 'Carry your entire workspace plus a weekend wardrobe. TSA-ready, weatherproof.',
    longDescription: 'The NOVA Atlas is the ultimate travel-tech hybrid. A clamshell opening lays flat for TSA scanning, while the dedicated tech compartment fits a 16-inch laptop and tablet. An expandable main section grows from 28L to 35L for weekend trips. The USB-C charging port, RFID-blocking pocket, and TSA-approved lock make it the only bag you need for a business trip.',
    price: 7499,
    originalPrice: 9499,
    rating: 4.9,
    reviews: 67,
    badge: 'New',
    colors: ['midnight', 'olive', 'charcoal', 'navy', 'sand'],
    defaultColor: 'midnight',
    featuredImage: IMG('atlas-midnight-front.jpg'),
    dimensions: '36 × 24 × 52 cm · 28–35 L · 1.5 kg',
    popular: true,
    gallery: {
      midnight: gal('atlas', 'midnight'),
      olive: gal('atlas', 'olive'),
      charcoal: gal('atlas', 'charcoal'),
      navy: gal('atlas', 'navy'),
      sand: gal('atlas', 'sand'),
    },
  },
  // 13 — NOVA Vesta — women's professional
  {
    id: 'vesta',
    name: 'NOVA Vesta',
    tagline: 'Refined professional backpack for the modern woman',
    description: 'A structured, elegant silhouette that transitions from office to evening.',
    longDescription: 'The NOVA Vesta combines professional polish with everyday practicality. Its structured shell and refined hardware complement any outfit, while the padded laptop sleeve and organized interior keep your work essentials in place. The USB-C charging port and RFID-blocking pocket add smart functionality without bulk.',
    price: 5299,
    rating: 4.7,
    reviews: 94,
    colors: ['burgundy', 'cream', 'navy', 'brown'],
    defaultColor: 'burgundy',
    featuredImage: IMG('vesta-burgundy-front.jpg'),
    dimensions: '30 × 18 × 42 cm · 17 L · 0.9 kg',
    gallery: {
      burgundy: gal('vesta', 'burgundy'),
      cream: gal('vesta', 'cream'),
      navy: gal('vesta', 'navy'),
      brown: gal('vesta', 'brown'),
    },
  },
  // 14 — NOVA Ledger — leather executive
  {
    id: 'ledger',
    name: 'NOVA Ledger',
    tagline: 'Full-grain leather executive backpack',
    description: 'Premium leather, hand-finished hardware, and a timeless executive silhouette.',
    longDescription: 'The NOVA Ledger is crafted from full-grain leather with hand-finished brass hardware. Its structured silhouette holds its shape beautifully, while the padded laptop sleeve and organized interior provide modern functionality. A TSA-approved lock and hidden anti-theft zipper protect your essentials on every business trip.',
    price: 8999,
    originalPrice: 11999,
    rating: 4.9,
    reviews: 43,
    badge: 'Premium',
    colors: ['brown', 'midnight', 'burgundy'],
    defaultColor: 'brown',
    featuredImage: IMG('ledger-brown-front.jpg'),
    dimensions: '32 × 20 × 44 cm · 22 L · 1.3 kg',
    gallery: {
      brown: gal('ledger', 'brown'),
      midnight: gal('ledger', 'midnight'),
      burgundy: gal('ledger', 'burgundy'),
    },
  },
  // 15 — NOVA Drift — water-resistant commuter
  {
    id: 'drift',
    name: 'NOVA Drift',
    tagline: 'Water-resistant urban commuter backpack',
    description: 'Roll-top closure, weatherproof shell, and USB-C charging for all-weather commuting.',
    longDescription: 'The NOVA Drift is built for unpredictable weather. A roll-top closure with magnetic buckle seals out rain, while the water-repellent shell shrugs off splashes and spills. The USB-C charging port connects to an internal power-bank pocket, and the padded laptop sleeve keeps your device dry and secure. Side pockets hold a water bottle and compact umbrella.',
    price: 4299,
    originalPrice: 5499,
    rating: 4.6,
    reviews: 138,
    colors: ['charcoal', 'navy', 'olive', 'stone'],
    defaultColor: 'charcoal',
    featuredImage: IMG('drift-charcoal-front.jpg'),
    dimensions: '30 × 18 × 45 cm · 20 L · 0.95 kg',
    gallery: {
      charcoal: gal('drift', 'charcoal'),
      navy: gal('drift', 'navy'),
      olive: gal('drift', 'olive'),
      stone: gal('drift', 'stone'),
    },
  },
];

export interface Review {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  initials: string;
}

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Ananya R.',
    role: 'College Student',
    rating: 5,
    initials: 'AR',
    text: 'The NOVA Campus carries my textbooks, laptop, and lunch without feeling heavy. The USB port has saved me during long lecture days more times than I can count.',
  },
  {
    id: 2,
    name: 'Karthik S.',
    role: 'Software Developer',
    rating: 5,
    initials: 'KS',
    text: 'The cable management pouch is a dream. My chargers and adapters finally have a home. The laptop sleeve fits my MacBook Air perfectly and the back padding is genuinely comfortable.',
  },
  {
    id: 3,
    name: 'Meera P.',
    role: 'Young Professional',
    rating: 5,
    initials: 'MP',
    text: 'I take the NOVA Urban to work and everywhere after. It looks sharp with anything I wear, and the hidden zipper gives me peace of mind on crowded trains.',
  },
  {
    id: 4,
    name: 'Dev N.',
    role: 'Frequent Commuter',
    rating: 4,
    initials: 'DN',
    text: 'Weather resistance is real. I got caught in a downpour and everything inside stayed completely dry. The lower-back pocket is perfect for my transit card.',
  },
];

export const LIFESTYLE_IMAGES = {
  campus: IMG('lifestyle-campus.jpg'),
  study: IMG('lifestyle-study.jpg'),
  commute: IMG('lifestyle-commute.jpg'),
  coding: IMG('lifestyle-coding.jpg'),
};

export const FLAT_LAY_IMAGE = IMG('flat-lay.jpg');
export const OPEN_BAG_IMAGE = IMG('open-bag.jpg');
export const HERO_IMAGE = IMG('hero.jpg');
