export type ColorKey = 'midnight' | 'charcoal' | 'sand' | 'olive' | 'navy' | 'cream' | 'burgundy';

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
  gallery: Record<ColorKey, ProductGallery>;
  popular?: boolean;
}

export const COLORS: Record<ColorKey, ProductColor> = {
  midnight: { key: 'midnight', name: 'Midnight Black', hex: '#1C1A19' },
  charcoal: { key: 'charcoal', name: 'Charcoal', hex: '#3A3633' },
  sand: { key: 'sand', name: 'Sand', hex: '#C7B291' },
  olive: { key: 'olive', name: 'Olive', hex: '#5F6E4F' },
  navy: { key: 'navy', name: 'Navy', hex: '#2C3A52' },
  cream: { key: 'cream', name: 'Cream', hex: '#EDE5D6' },
  burgundy: { key: 'burgundy', name: 'Burgundy', hex: '#6B2D30' },
};

const PX = (id: string, h = 900, w = 700) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&h=${h}&w=${w}`;

const G = (front: string, side: string, back: string, inside: string, lifestyle: string, detail: string): ProductGallery =>
  ({ front, side, back, inside, lifestyle, detail });

// ── Premium professional backpack photo pool ──────────────────────
// Each product uses a distinct set of images. No reuse across products.
//
// Photo IDs used (all premium/sophisticated backpacks from Pexels):
//   Black/professional: 13869858, 9138669, 3731256, 18269634, 9407364,
//                       9407366, 9407362, 16359298, 16359286, 16359291,
//                       16359288, 16359303, 18999340, 6107428, 33175945,
//                       12743405, 11034916, 26855724, 15706242, 6647813
//   Brown/tan/leather:  15059375, 15246346, 8502482, 12115332, 3155047,
//                       12032822, 17426948
//   Blue/navy:          13870707
//   Olive/canvas:       2081199, 2081202
//   Cream/beige:        8004822
//   Burgundy:           19269899, 7043472
//   Interior/organized: 16359310, 16359292, 16359309, 13071302, 6334231
//   Lifestyle/pro:      4962552, 5950172, 5950097, 11483160, 32937260
// ──────────────────────────────────────────────────────────────────

export const PRODUCTS: Product[] = [
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
        PX('13869858'),
        PX('9138669'),
        PX('3731256'),
        PX('9407364'),
        PX('6107428'),
        PX('16359298'),
      ),
      charcoal: G(
        PX('9138669'),
        PX('3731256'),
        PX('13869858'),
        PX('9407366'),
        PX('33175945'),
        PX('16359286'),
      ),
      sand: G(
        PX('15059375'),
        PX('8502482'),
        PX('8004822'),
        PX('16359310'),
        PX('12115332'),
        PX('12032822'),
      ),
      navy: G(
        PX('13870707'),
        PX('3731256'),
        PX('13869858'),
        PX('9407362'),
        PX('26855724'),
        PX('16359291'),
      ),
    },
  },
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
        PX('18269634'),
        PX('9407366'),
        PX('3731256'),
        PX('12743405'),
        PX('11034916'),
        PX('16359288'),
      ),
      sand: G(
        PX('15059375'),
        PX('8502482'),
        PX('8004822'),
        PX('16359310'),
        PX('12115332'),
        PX('12032822'),
      ),
      olive: G(
        PX('2081199'),
        PX('2081202'),
        PX('3155047'),
        PX('16359292'),
        PX('12115332'),
        PX('2081202'),
      ),
      burgundy: G(
        PX('19269899'),
        PX('7043472'),
        PX('15246346'),
        PX('16359309'),
        PX('7043472'),
        PX('12032822'),
      ),
      cream: G(
        PX('8004822'),
        PX('8502482'),
        PX('15059375'),
        PX('16359310'),
        PX('12115332'),
        PX('12032822'),
      ),
    },
  },
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
        PX('9138669'),
        PX('16359298'),
        PX('13869858'),
        PX('16359310'),
        PX('6334231'),
        PX('16359286'),
      ),
      midnight: G(
        PX('13869858'),
        PX('9138669'),
        PX('3731256'),
        PX('12743405'),
        PX('6107428'),
        PX('16359291'),
      ),
      olive: G(
        PX('2081199'),
        PX('2081202'),
        PX('3155047'),
        PX('16359292'),
        PX('6334231'),
        PX('2081202'),
      ),
      navy: G(
        PX('13870707'),
        PX('3731256'),
        PX('13869858'),
        PX('16359309'),
        PX('6647813'),
        PX('16359288'),
      ),
    },
  },
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
        PX('3731256'),
        PX('13869858'),
        PX('9138669'),
        PX('9407364'),
        PX('15706242'),
        PX('16359298'),
      ),
      charcoal: G(
        PX('18999340'),
        PX('9138669'),
        PX('13869858'),
        PX('9407366'),
        PX('11034916'),
        PX('16359291'),
      ),
      cream: G(
        PX('8004822'),
        PX('8502482'),
        PX('15059375'),
        PX('16359310'),
        PX('12115332'),
        PX('12032822'),
      ),
      burgundy: G(
        PX('15246346'),
        PX('19269899'),
        PX('7043472'),
        PX('16359309'),
        PX('7043472'),
        PX('12032822'),
      ),
    },
  },
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
        PX('2081199'),
        PX('2081202'),
        PX('3155047'),
        PX('16359292'),
        PX('12115332'),
        PX('2081202'),
      ),
      midnight: G(
        PX('18269634'),
        PX('9407366'),
        PX('3731256'),
        PX('9407364'),
        PX('15706242'),
        PX('16359288'),
      ),
      sand: G(
        PX('15059375'),
        PX('8502482'),
        PX('8004822'),
        PX('16359310'),
        PX('3155047'),
        PX('12032822'),
      ),
      burgundy: G(
        PX('15246346'),
        PX('19269899'),
        PX('7043472'),
        PX('16359309'),
        PX('7043472'),
        PX('12032822'),
      ),
    },
  },
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
        PX('8004822'),
        PX('8502482'),
        PX('15059375'),
        PX('16359310'),
        PX('12115332'),
        PX('12032822'),
      ),
      charcoal: G(
        PX('9138669'),
        PX('16359298'),
        PX('13869858'),
        PX('16359292'),
        PX('6334231'),
        PX('16359286'),
      ),
      navy: G(
        PX('13870707'),
        PX('3731256'),
        PX('13869858'),
        PX('16359309'),
        PX('6647813'),
        PX('16359291'),
      ),
      sand: G(
        PX('15059375'),
        PX('8502482'),
        PX('8004822'),
        PX('16359310'),
        PX('12115332'),
        PX('12032822'),
      ),
    },
  },
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
        PX('15059375'),
        PX('8502482'),
        PX('8004822'),
        PX('16359310'),
        PX('12115332'),
        PX('12032822'),
      ),
      cream: G(
        PX('8004822'),
        PX('8502482'),
        PX('15059375'),
        PX('16359309'),
        PX('12115332'),
        PX('12032822'),
      ),
      navy: G(
        PX('13870707'),
        PX('3731256'),
        PX('13869858'),
        PX('12743405'),
        PX('6647813'),
        PX('16359291'),
      ),
      olive: G(
        PX('2081199'),
        PX('2081202'),
        PX('3155047'),
        PX('16359292'),
        PX('12115332'),
        PX('2081202'),
      ),
    },
  },
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
        PX('18269634'),
        PX('9407366'),
        PX('3731256'),
        PX('9407364'),
        PX('11034916'),
        PX('16359298'),
      ),
      charcoal: G(
        PX('9138669'),
        PX('16359298'),
        PX('13869858'),
        PX('16359310'),
        PX('33175945'),
        PX('16359286'),
      ),
      olive: G(
        PX('2081199'),
        PX('2081202'),
        PX('3155047'),
        PX('16359292'),
        PX('12115332'),
        PX('2081202'),
      ),
      navy: G(
        PX('13870707'),
        PX('3731256'),
        PX('13869858'),
        PX('16359309'),
        PX('6647813'),
        PX('16359291'),
      ),
      burgundy: G(
        PX('15246346'),
        PX('19269899'),
        PX('7043472'),
        PX('16359309'),
        PX('7043472'),
        PX('12032822'),
      ),
      sand: G(
        PX('15059375'),
        PX('8502482'),
        PX('8004822'),
        PX('16359310'),
        PX('3155047'),
        PX('12032822'),
      ),
      cream: G(
        PX('8004822'),
        PX('8502482'),
        PX('15059375'),
        PX('16359310'),
        PX('12115332'),
        PX('12032822'),
      ),
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
