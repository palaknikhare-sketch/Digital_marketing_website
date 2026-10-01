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
  features?: string[];
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

const PX = (id: string, h = 900, w = 700) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&h=${h}&w=${w}`;

const G = (front: string, side: string, back: string, inside: string, lifestyle: string, detail: string): ProductGallery =>
  ({ front, side, back, inside, lifestyle, detail });

// Each product uses a distinct set of premium professional backpack photos.
// No two products share the same featured image. Images sourced from Pexels.

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
    featuredImage: PX('13869858'),
    dimensions: '30 × 18 × 42 cm · 18 L · 0.9 kg',
    popular: true,
    gallery: {
      midnight: G(
        PX('13869858'), PX('9138669'), PX('3731256'),
        PX('9407364'), PX('6107428'), PX('16359298'),
      ),
      charcoal: G(
        PX('9138669'), PX('3731256'), PX('13869858'),
        PX('9407366'), PX('33175945'), PX('16359286'),
      ),
      sand: G(
        PX('15059375'), PX('8502482'), PX('8004822'),
        PX('16359310'), PX('12115332'), PX('12032822'),
      ),
      navy: G(
        PX('13870707'), PX('3731256'), PX('13869858'),
        PX('9407362'), PX('26855724'), PX('16359291'),
      ),
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
    featuredImage: PX('15059375'),
    dimensions: '32 × 20 × 45 cm · 22 L · 1.0 kg',
    popular: true,
    gallery: {
      midnight: G(
        PX('18269634'), PX('9407366'), PX('3731256'),
        PX('12743405'), PX('11034916'), PX('16359288'),
      ),
      sand: G(
        PX('15059375'), PX('8502482'), PX('8004822'),
        PX('16359310'), PX('12115332'), PX('12032822'),
      ),
      olive: G(
        PX('2081199'), PX('2081202'), PX('3155047'),
        PX('16359292'), PX('12115332'), PX('2081202'),
      ),
      burgundy: G(
        PX('15246346'), PX('19269899'), PX('7043472'),
        PX('16359309'), PX('7043472'), PX('12032822'),
      ),
      cream: G(
        PX('8004822'), PX('8502482'), PX('15059375'),
        PX('16359310'), PX('12115332'), PX('12032822'),
      ),
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
    featuredImage: PX('9138669'),
    dimensions: '31 × 19 × 44 cm · 20 L · 1.1 kg',
    popular: true,
    gallery: {
      charcoal: G(
        PX('9138669'), PX('16359298'), PX('13869858'),
        PX('16359310'), PX('6334231'), PX('16359286'),
      ),
      midnight: G(
        PX('13869858'), PX('9138669'), PX('3731256'),
        PX('12743405'), PX('6107428'), PX('16359291'),
      ),
      olive: G(
        PX('2081199'), PX('2081202'), PX('3155047'),
        PX('16359292'), PX('6334231'), PX('2081202'),
      ),
      navy: G(
        PX('13870707'), PX('3731256'), PX('13869858'),
        PX('16359309'), PX('6647813'), PX('16359288'),
      ),
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
    featuredImage: PX('3731256'),
    dimensions: '29 × 17 × 41 cm · 16 L · 0.85 kg',
    gallery: {
      midnight: G(
        PX('3731256'), PX('13869858'), PX('9138669'),
        PX('9407364'), PX('15706242'), PX('16359298'),
      ),
      charcoal: G(
        PX('18999340'), PX('9138669'), PX('13869858'),
        PX('9407366'), PX('11034916'), PX('16359291'),
      ),
      cream: G(
        PX('8004822'), PX('8502482'), PX('15059375'),
        PX('16359310'), PX('12115332'), PX('12032822'),
      ),
      burgundy: G(
        PX('15246346'), PX('19269899'), PX('7043472'),
        PX('16359309'), PX('7043472'), PX('12032822'),
      ),
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
    featuredImage: PX('2081199'),
    dimensions: '34 × 22 × 50 cm · 28 L · 1.3 kg',
    popular: true,
    gallery: {
      olive: G(
        PX('2081199'), PX('2081202'), PX('3155047'),
        PX('16359292'), PX('12115332'), PX('2081202'),
      ),
      midnight: G(
        PX('18269634'), PX('9407366'), PX('3731256'),
        PX('9407364'), PX('15706242'), PX('16359288'),
      ),
      sand: G(
        PX('15059375'), PX('8502482'), PX('8004822'),
        PX('16359310'), PX('3155047'), PX('12032822'),
      ),
      burgundy: G(
        PX('15246346'), PX('19269899'), PX('7043472'),
        PX('16359309'), PX('7043472'), PX('12032822'),
      ),
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
    featuredImage: PX('8004822'),
    dimensions: '31 × 19 × 43 cm · 20 L · 1.0 kg',
    gallery: {
      cream: G(
        PX('8004822'), PX('8502482'), PX('15059375'),
        PX('16359310'), PX('12115332'), PX('12032822'),
      ),
      charcoal: G(
        PX('9138669'), PX('16359298'), PX('13869858'),
        PX('16359292'), PX('6334231'), PX('16359286'),
      ),
      navy: G(
        PX('13870707'), PX('3731256'), PX('13869858'),
        PX('16359309'), PX('6647813'), PX('16359291'),
      ),
      sand: G(
        PX('15059375'), PX('8502482'), PX('8004822'),
        PX('16359310'), PX('12115332'), PX('12032822'),
      ),
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
    featuredImage: PX('13870707'),
    dimensions: '28 × 16 × 40 cm · 14 L · 0.7 kg',
    gallery: {
      sand: G(
        PX('15059375'), PX('8502482'), PX('8004822'),
        PX('16359310'), PX('12115332'), PX('12032822'),
      ),
      cream: G(
        PX('8004822'), PX('8502482'), PX('15059375'),
        PX('16359309'), PX('12115332'), PX('12032822'),
      ),
      navy: G(
        PX('13870707'), PX('3731256'), PX('13869858'),
        PX('12743405'), PX('6647813'), PX('16359291'),
      ),
      olive: G(
        PX('2081199'), PX('2081202'), PX('3155047'),
        PX('16359292'), PX('12115332'), PX('2081202'),
      ),
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
    featuredImage: PX('18269634'),
    dimensions: '35 × 23 × 52 cm · 32 L · 1.4 kg',
    popular: true,
    gallery: {
      midnight: G(
        PX('18269634'), PX('9407366'), PX('3731256'),
        PX('9407364'), PX('11034916'), PX('16359298'),
      ),
      charcoal: G(
        PX('9138669'), PX('16359298'), PX('13869858'),
        PX('16359310'), PX('33175945'), PX('16359286'),
      ),
      olive: G(
        PX('2081199'), PX('2081202'), PX('3155047'),
        PX('16359292'), PX('12115332'), PX('2081202'),
      ),
      navy: G(
        PX('13870707'), PX('3731256'), PX('13869858'),
        PX('16359309'), PX('6647813'), PX('16359291'),
      ),
      burgundy: G(
        PX('15246346'), PX('19269899'), PX('7043472'),
        PX('16359309'), PX('7043472'), PX('12032822'),
      ),
      sand: G(
        PX('15059375'), PX('8502482'), PX('8004822'),
        PX('16359310'), PX('3155047'), PX('12032822'),
      ),
      cream: G(
        PX('8004822'), PX('8502482'), PX('15059375'),
        PX('16359310'), PX('12115332'), PX('12032822'),
      ),
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
    featuredImage: PX('15246346'),
    dimensions: '33 × 21 × 46 cm · 24 L · 1.2 kg',
    popular: true,
    gallery: {
      midnight: G(
        PX('13869858'), PX('9138669'), PX('3731256'),
        PX('9407364'), PX('4962552'), PX('16359298'),
      ),
      brown: G(
        PX('15246346'), PX('14601178'), PX('8502482'),
        PX('16359310'), PX('33342693'), PX('12032822'),
      ),
      charcoal: G(
        PX('9138669'), PX('16359298'), PX('13869858'),
        PX('16359310'), PX('6334231'), PX('16359286'),
      ),
      navy: G(
        PX('13870707'), PX('3731256'), PX('13869858'),
        PX('16359309'), PX('6647813'), PX('16359291'),
      ),
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
    featuredImage: PX('18999340'),
    dimensions: '30 × 18 × 43 cm · 19 L · 1.0 kg',
    gallery: {
      charcoal: G(
        PX('18999340'), PX('9138669'), PX('13869858'),
        PX('9407366'), PX('33175945'), PX('16359291'),
      ),
      midnight: G(
        PX('3731256'), PX('13869858'), PX('9138669'),
        PX('9407364'), PX('15706242'), PX('16359298'),
      ),
      stone: G(
        PX('2452345'), PX('32620409'), PX('8004822'),
        PX('16359310'), PX('12115332'), PX('12032822'),
      ),
      navy: G(
        PX('13870707'), PX('3731256'), PX('13869858'),
        PX('12743405'), PX('6647813'), PX('16359288'),
      ),
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
    featuredImage: PX('3731256'),
    dimensions: '31 × 19 × 44 cm · 21 L · 1.0 kg',
    popular: true,
    gallery: {
      midnight: G(
        PX('3731256'), PX('13869858'), PX('9138669'),
        PX('9407362'), PX('11483160'), PX('16359298'),
      ),
      navy: G(
        PX('13870707'), PX('3731256'), PX('13869858'),
        PX('16359309'), PX('15706242'), PX('16359291'),
      ),
      charcoal: G(
        PX('9138669'), PX('16359298'), PX('13869858'),
        PX('9407366'), PX('11034916'), PX('16359286'),
      ),
      taupe: G(
        PX('8004822'), PX('8502482'), PX('15059375'),
        PX('16359310'), PX('12115332'), PX('12032822'),
      ),
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
    featuredImage: PX('18269634'),
    dimensions: '36 × 24 × 52 cm · 28–35 L · 1.5 kg',
    popular: true,
    gallery: {
      midnight: G(
        PX('18269634'), PX('9407366'), PX('3731256'),
        PX('12743405'), PX('11034916'), PX('16359298'),
      ),
      olive: G(
        PX('2081199'), PX('2081202'), PX('3155047'),
        PX('16359292'), PX('12115332'), PX('2081202'),
      ),
      charcoal: G(
        PX('9138669'), PX('16359298'), PX('13869858'),
        PX('16359310'), PX('6334231'), PX('16359286'),
      ),
      navy: G(
        PX('13870707'), PX('3731256'), PX('13869858'),
        PX('16359309'), PX('6647813'), PX('16359291'),
      ),
      sand: G(
        PX('15059375'), PX('8502482'), PX('8004822'),
        PX('16359310'), PX('3155047'), PX('12032822'),
      ),
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
    featuredImage: PX('19269899'),
    dimensions: '30 × 18 × 42 cm · 17 L · 0.9 kg',
    gallery: {
      burgundy: G(
        PX('19269899'), PX('15246346'), PX('7043472'),
        PX('16359309'), PX('7043472'), PX('12032822'),
      ),
      cream: G(
        PX('8004822'), PX('8502482'), PX('15059375'),
        PX('16359310'), PX('12115332'), PX('12032822'),
      ),
      navy: G(
        PX('13870707'), PX('3731256'), PX('13869858'),
        PX('16359309'), PX('6647813'), PX('16359291'),
      ),
      brown: G(
        PX('15246346'), PX('14601178'), PX('8502482'),
        PX('16359310'), PX('33342693'), PX('12032822'),
      ),
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
    featuredImage: PX('14601178'),
    dimensions: '32 × 20 × 44 cm · 22 L · 1.3 kg',
    gallery: {
      brown: G(
        PX('14601178'), PX('15246346'), PX('8502482'),
        PX('16359310'), PX('33342693'), PX('12032822'),
      ),
      midnight: G(
        PX('13869858'), PX('9138669'), PX('3731256'),
        PX('9407364'), PX('4962552'), PX('16359298'),
      ),
      burgundy: G(
        PX('15246346'), PX('19269899'), PX('7043472'),
        PX('16359309'), PX('7043472'), PX('12032822'),
      ),
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
    featuredImage: PX('18999340'),
    dimensions: '30 × 18 × 45 cm · 20 L · 0.95 kg',
    gallery: {
      charcoal: G(
        PX('18999340'), PX('9138669'), PX('13869858'),
        PX('9407366'), PX('33175945'), PX('16359286'),
      ),
      navy: G(
        PX('13870707'), PX('3731256'), PX('13869858'),
        PX('12743405'), PX('6647813'), PX('16359291'),
      ),
      olive: G(
        PX('2081199'), PX('2081202'), PX('3155047'),
        PX('16359292'), PX('12115332'), PX('2081202'),
      ),
      stone: G(
        PX('2452345'), PX('32620409'), PX('8004822'),
        PX('16359310'), PX('12115332'), PX('12032822'),
      ),
    },
  },
  {
    id: 'nexus-metro',
    name: 'METRO',
    tagline: 'Smart everyday backpack with charging access',
    description: 'A streamlined smart backpack for commuting, study, and everyday carry.',
    longDescription: 'The NEXUS METRO combines a USB charging port, a 15.6-inch laptop compartment, and water-repellent protection in a clean everyday silhouette.',
    price: 4999,
    rating: 4.8,
    reviews: 124,
    colors: ['midnight', 'navy', 'charcoal', 'stone'],
    defaultColor: 'midnight',
    featuredImage: '/src/assets/images/products/01-metro.jpg',
    dimensions: '15.6-inch laptop compartment',
    features: ['USB Port', 'Laptop 15.6"', 'Water Repellent'],
    gallery: {
      midnight: { front: '/src/assets/images/products/01-metro.jpg', side: '/src/assets/images/products/01-metro.jpg', back: '/src/assets/images/products/01-metro.jpg', inside: '/src/assets/images/products/01-metro.jpg', lifestyle: '/src/assets/images/products/01-metro.jpg', detail: '/src/assets/images/products/01-metro.jpg' },
    },
  },
  {
    id: 'nexus-executive',
    name: 'EXECUTIVE',
    tagline: 'Secure smart backpack for larger laptops',
    description: 'A polished backpack with charging access, large laptop capacity, and anti-theft security.',
    longDescription: 'The NEXUS EXECUTIVE is built around a USB charging port, a 17-inch laptop compartment, and anti-theft protection for workdays and travel.',
    price: 5499,
    rating: 4.7,
    reviews: 98,
    colors: ['navy', 'charcoal', 'brown'],
    defaultColor: 'navy',
    featuredImage: '/src/assets/images/products/02-executive.jpg',
    dimensions: '17-inch laptop compartment',
    features: ['USB Port', 'Laptop 17"', 'Anti-Theft'],
    gallery: {
      navy: { front: '/src/assets/images/products/02-executive.jpg', side: '/src/assets/images/products/02-executive.jpg', back: '/src/assets/images/products/02-executive.jpg', inside: '/src/assets/images/products/02-executive.jpg', lifestyle: '/src/assets/images/products/02-executive.jpg', detail: '/src/assets/images/products/02-executive.jpg' },
    },
  },
  {
    id: 'nexus-slate',
    name: 'SLATE',
    tagline: 'Protected everyday tech backpack',
    description: 'A practical laptop backpack with weather resistance and RFID protection.',
    longDescription: 'The NEXUS SLATE protects a 15.6-inch laptop with water-repellent materials and an RFID pocket for cards and IDs.',
    price: 4799,
    rating: 4.6,
    reviews: 87,
    colors: ['charcoal', 'stone', 'taupe'],
    defaultColor: 'charcoal',
    featuredImage: '/src/assets/images/products/03-slate.jpg',
    dimensions: '15.6-inch laptop compartment',
    features: ['Laptop 15.6"', 'Water Repellent', 'RFID Pocket'],
    gallery: {
      charcoal: { front: '/src/assets/images/products/03-slate.jpg', side: '/src/assets/images/products/03-slate.jpg', back: '/src/assets/images/products/03-slate.jpg', inside: '/src/assets/images/products/03-slate.jpg', lifestyle: '/src/assets/images/products/03-slate.jpg', detail: '/src/assets/images/products/03-slate.jpg' },
    },
  },
  {
    id: 'nexus-verge',
    name: 'VERGE',
    tagline: 'Secure smart backpack for daily movement',
    description: 'A modern backpack with USB charging, laptop protection, and anti-theft security.',
    longDescription: 'The NEXUS VERGE pairs a USB charging port and 15.6-inch laptop compartment with anti-theft protection for daily commuting.',
    price: 5299,
    rating: 4.8,
    reviews: 110,
    colors: ['olive', 'charcoal', 'stone'],
    defaultColor: 'olive',
    featuredImage: '/src/assets/images/products/04-verge.jpg',
    dimensions: '15.6-inch laptop compartment',
    features: ['USB Port', 'Laptop 15.6"', 'Anti-Theft'],
    gallery: {
      olive: { front: '/src/assets/images/products/04-verge.jpg', side: '/src/assets/images/products/04-verge.jpg', back: '/src/assets/images/products/04-verge.jpg', inside: '/src/assets/images/products/04-verge.jpg', lifestyle: '/src/assets/images/products/04-verge.jpg', detail: '/src/assets/images/products/04-verge.jpg' },
    },
  },
  {
    id: 'nexus-apex',
    name: 'APEX',
    tagline: 'Lightweight smart backpack for everyday carry',
    description: 'A compact backpack with USB charging, laptop protection, and water-repellent materials.',
    longDescription: 'The NEXUS APEX keeps daily essentials protected with a USB charging port, 15.6-inch laptop compartment, and water-repellent finish.',
    price: 4499,
    rating: 4.5,
    reviews: 76,
    colors: ['taupe', 'navy', 'charcoal', 'stone'],
    defaultColor: 'taupe',
    featuredImage: '/src/assets/images/products/05-apex.jpg',
    dimensions: '15.6-inch laptop compartment',
    features: ['USB Port', 'Laptop 15.6"', 'Water Repellent'],
    gallery: {
      taupe: { front: '/src/assets/images/products/05-apex.jpg', side: '/src/assets/images/products/05-apex.jpg', back: '/src/assets/images/products/05-apex.jpg', inside: '/src/assets/images/products/05-apex.jpg', lifestyle: '/src/assets/images/products/05-apex.jpg', detail: '/src/assets/images/products/05-apex.jpg' },
    },
  },
  {
    id: 'nexus-pioneer',
    name: 'PIONEER',
    tagline: 'Travel-ready smart backpack for larger laptops',
    description: 'A durable travel backpack with large laptop capacity, anti-theft security, and TSA locking.',
    longDescription: 'The NEXUS PIONEER is designed for confident travel with a 17-inch laptop compartment, anti-theft protection, and a TSA lock.',
    price: 5999,
    rating: 4.9,
    reviews: 132,
    colors: ['midnight', 'olive', 'stone'],
    defaultColor: 'midnight',
    featuredImage: '/images/pioneer-main.jpg',
    dimensions: '17-inch laptop compartment',
    features: ['Laptop 17"', 'Anti-Theft', 'TSA Lock'],
    gallery: {
      midnight: { front: '/images/pioneer-main.jpg', side: '/images/pioneer-sub1.jpg', back: '/images/pioneer-sub2.jpg', inside: '/images/pioneer-sub3.jpg', lifestyle: '/images/pioneer-sub4.jpg', detail: '/images/pioneer-sub5.jpg' },
    },
  },
  {
    id: 'nexus-core',
    name: 'CORE',
    tagline: 'Organized smart backpack for everyday tech',
    description: 'A focused everyday pack with USB charging, laptop protection, and RFID security.',
    longDescription: 'The NEXUS CORE organizes daily technology with a USB charging port, 15.6-inch laptop compartment, and RFID pocket.',
    price: 4899,
    rating: 4.7,
    reviews: 95,
    colors: ['navy', 'midnight', 'stone'],
    defaultColor: 'navy',
    featuredImage: '/images/core-main.jpg',
    dimensions: '15.6-inch laptop compartment',
    features: ['USB Port', 'Laptop 15.6"', 'RFID Pocket'],
    gallery: {
      navy: { front: '/images/core-main.jpg', side: '/images/core-sub1.jpg', back: '/images/core-sub2.jpg', inside: '/images/core-sub3.jpg', lifestyle: '/images/core-sub4.jpg', detail: '/images/core-sub5.jpg' },
    },
  },
  {
    id: 'nexus-legacy',
    name: 'LEGACY',
    tagline: 'Classic travel backpack with modern protection',
    description: 'A refined larger-laptop backpack with water resistance and anti-theft security.',
    longDescription: 'The NEXUS LEGACY combines a 17-inch laptop compartment with water-repellent materials and anti-theft protection.',
    price: 5799,
    rating: 4.6,
    reviews: 82,
    colors: ['taupe', 'sand', 'brown'],
    defaultColor: 'brown',
    featuredImage: '/images/legacy-main.jpg',
    dimensions: '17-inch laptop compartment',
    features: ['Laptop 17"', 'Water Repellent', 'Anti-Theft'],
    gallery: {
      brown: { front: '/images/legacy-main.jpg', side: '/images/legacy-sub1.jpg', back: '/images/legacy-sub2.jpg', inside: '/images/legacy-sub3.jpg', lifestyle: '/images/legacy-sub4.jpg', detail: '/images/legacy-sub5.jpg' },
    },
  },
  {
    id: 'nexus-nova',
    name: 'NOVA',
    tagline: 'Essential smart backpack for daily carry',
    description: 'A dependable daily backpack with USB charging, laptop protection, and water resistance.',
    longDescription: 'The NEXUS NOVA keeps everyday gear ready with a USB charging port, 15.6-inch laptop compartment, and water-repellent protection.',
    price: 4699,
    rating: 4.7,
    reviews: 91,
    colors: ['midnight', 'charcoal', 'stone'],
    defaultColor: 'midnight',
    featuredImage: '/images/nova-main.jpg',
    dimensions: '15.6-inch laptop compartment',
    features: ['USB Port', 'Laptop 15.6"', 'Water Repellent'],
    gallery: {
      midnight: { front: '/images/nova-main.jpg', side: '/images/nova-sub1.jpg', back: '/images/nova-sub2.jpg', inside: '/images/nova-sub3.jpg', lifestyle: '/images/nova-sub4.jpg', detail: '/images/nova-sub5.jpg' },
    },
  },
  {
    id: 'nexus-vista',
    name: 'VISTA',
    tagline: 'Secure larger-laptop backpack for work and travel',
    description: 'A capable backpack with large laptop capacity, anti-theft security, and RFID protection.',
    longDescription: 'The NEXUS VISTA protects a 17-inch laptop with anti-theft construction and an RFID pocket for essential cards and IDs.',
    price: 5199,
    rating: 4.5,
    reviews: 68,
    colors: ['olive', 'charcoal', 'stone'],
    defaultColor: 'olive',
    featuredImage: '/images/vista-main.jpg',
    dimensions: '17-inch laptop compartment',
    features: ['Laptop 17"', 'Anti-Theft', 'RFID Pocket'],
    gallery: {
      olive: { front: '/images/vista-main.jpg', side: '/images/vista-sub1.jpg', back: '/images/vista-sub2.jpg', inside: '/images/vista-sub3.jpg', lifestyle: '/images/vista-sub4.jpg', detail: '/images/vista-sub5.jpg' },
    },
  },
  {
    id: 'nexus-solace',
    name: 'SOLACE',
    tagline: 'Comfortable smart backpack for everyday essentials',
    description: 'A soft neutral backpack with laptop protection, water resistance, and USB charging.',
    longDescription: 'The NEXUS SOLACE combines a 15.6-inch laptop compartment with water-repellent materials and a USB charging port.',
    price: 4299,
    rating: 4.6,
    reviews: 73,
    colors: ['cream', 'taupe', 'stone'],
    defaultColor: 'cream',
    featuredImage: '/images/solace-main.jpg',
    dimensions: '15.6-inch laptop compartment',
    features: ['Laptop 15.6"', 'Water Repellent', 'USB Port'],
    gallery: {
      cream: { front: '/images/solace-main.jpg', side: '/images/solace-sub1.jpg', back: '/images/solace-sub2.jpg', inside: '/images/solace-sub3.jpg', lifestyle: '/images/solace-sub4.jpg', detail: '/images/solace-sub5.jpg' },
    },
  },
  {
    id: 'nexus-atlas',
    name: 'ATLAS',
    tagline: 'Travel-ready smart backpack for larger laptops',
    description: 'A capable travel pack with USB charging, large laptop capacity, and TSA locking.',
    longDescription: 'The NEXUS ATLAS is ready for work and travel with a USB charging port, 17-inch laptop compartment, and TSA lock.',
    price: 5699,
    rating: 4.8,
    reviews: 118,
    colors: ['charcoal', 'stone', 'navy'],
    defaultColor: 'charcoal',
    featuredImage: '/images/atlas-main.jpg',
    dimensions: '17-inch laptop compartment',
    features: ['USB Port', 'Laptop 17"', 'TSA Lock'],
    gallery: {
      charcoal: { front: '/images/atlas-main.jpg', side: '/images/atlas-sub1.jpg', back: '/images/atlas-sub2.jpg', inside: '/images/atlas-sub3.jpg', lifestyle: '/images/atlas-sub4.jpg', detail: '/images/atlas-sub5.jpg' },
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
  campus: PX('4962552', 800, 1200),
  study: PX('5950172', 800, 1200),
  commute: PX('11483160', 800, 1200),
  coding: PX('5950097', 800, 1200),
};

export const FLAT_LAY_IMAGE = PX('12743405', 800, 1200);
export const OPEN_BAG_IMAGE = PX('16359310', 900, 1200);
export const HERO_IMAGE = PX('18269634', 1100, 900);
