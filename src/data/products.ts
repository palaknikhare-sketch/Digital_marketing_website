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

const G = (front: string, side: string, back: string, inside: string, lifestyle: string, detail: string): ProductGallery =>
  ({ front, side, back, inside, lifestyle, detail });

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
    featuredImage: 'https://images.pexels.com/photos/13869858/pexels-photo-13869858.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    dimensions: '30 × 18 × 42 cm · 18 L · 0.9 kg',
    popular: true,
    gallery: {
      midnight: G(
        'https://images.pexels.com/photos/13869858/pexels-photo-13869858.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/9138669/pexels-photo-9138669.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/10772791/pexels-photo-10772791.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16359294/pexels-photo-16359294.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      charcoal: G(
        'https://images.pexels.com/photos/9138669/pexels-photo-9138669.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/13869858/pexels-photo-13869858.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/36958694/pexels-photo-36958694.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/39492137/pexels-photo-39492137.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/17924253/pexels-photo-17924253.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      sand: G(
        'https://images.pexels.com/photos/15059375/pexels-photo-15059375.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/14601178/pexels-photo-14601178.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/8528285/pexels-photo-8528285.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/8528285/pexels-photo-8528285.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/18510443/pexels-photo-18510443.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      navy: G(
        'https://images.pexels.com/photos/13870707/pexels-photo-13870707.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/11463452/pexels-photo-11463452.png?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/3974135/pexels-photo-3974135.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16359290/pexels-photo-16359290.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
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
    featuredImage: 'https://images.pexels.com/photos/15059375/pexels-photo-15059375.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    dimensions: '32 × 20 × 45 cm · 22 L · 1.0 kg',
    popular: true,
    gallery: {
      midnight: G(
        'https://images.pexels.com/photos/36958694/pexels-photo-36958694.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/13869858/pexels-photo-13869858.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/9138669/pexels-photo-9138669.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/7972659/pexels-photo-7972659.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16359307/pexels-photo-16359307.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      sand: G(
        'https://images.pexels.com/photos/15059375/pexels-photo-15059375.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/8528285/pexels-photo-8528285.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/14601178/pexels-photo-14601178.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/7972319/pexels-photo-7972319.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/18510443/pexels-photo-18510443.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      olive: G(
        'https://images.pexels.com/photos/18510443/pexels-photo-18510443.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/9088788/pexels-photo-9088788.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/9630186/pexels-photo-9630186.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/8968484/pexels-photo-8968484.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16359294/pexels-photo-16359294.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      burgundy: G(
        'https://images.pexels.com/photos/1102874/pexels-photo-1102874.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/8807020/pexels-photo-8807020.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/17426948/pexels-photo-17426948.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/8807020/pexels-photo-8807020.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16339689/pexels-photo-16339689.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      cream: G(
        'https://images.pexels.com/photos/8330659/pexels-photo-8330659.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/14601178/pexels-photo-14601178.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/15059375/pexels-photo-15059375.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/7683693/pexels-photo-7683693.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/18510443/pexels-photo-18510443.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
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
    featuredImage: 'https://images.pexels.com/photos/9138669/pexels-photo-9138669.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    dimensions: '31 × 19 × 44 cm · 20 L · 1.1 kg',
    popular: true,
    gallery: {
      charcoal: G(
        'https://images.pexels.com/photos/9138669/pexels-photo-9138669.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16359294/pexels-photo-16359294.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/13869858/pexels-photo-13869858.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5473299/pexels-photo-5473299.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/17924253/pexels-photo-17924253.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      midnight: G(
        'https://images.pexels.com/photos/13869858/pexels-photo-13869858.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/9138669/pexels-photo-9138669.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5473309/pexels-photo-5473309.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16359294/pexels-photo-16359294.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      olive: G(
        'https://images.pexels.com/photos/18510443/pexels-photo-18510443.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/9630186/pexels-photo-9630186.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/9088788/pexels-photo-9088788.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16359294/pexels-photo-16359294.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      navy: G(
        'https://images.pexels.com/photos/13870707/pexels-photo-13870707.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/11463452/pexels-photo-11463452.png?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/6424590/pexels-photo-6424590.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16359290/pexels-photo-16359290.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
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
    featuredImage: 'https://images.pexels.com/photos/36958694/pexels-photo-36958694.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    dimensions: '29 × 17 × 41 cm · 16 L · 0.85 kg',
    gallery: {
      midnight: G(
        'https://images.pexels.com/photos/36958694/pexels-photo-36958694.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/13869858/pexels-photo-13869858.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/33666586/pexels-photo-33666586.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16339689/pexels-photo-16339689.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      charcoal: G(
        'https://images.pexels.com/photos/9138669/pexels-photo-9138669.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16359294/pexels-photo-16359294.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/13869858/pexels-photo-13869858.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/33666549/pexels-photo-33666549.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/17924253/pexels-photo-17924253.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      cream: G(
        'https://images.pexels.com/photos/8330659/pexels-photo-8330659.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/14601178/pexels-photo-14601178.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/15059375/pexels-photo-15059375.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/9433993/pexels-photo-9433993.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/18510443/pexels-photo-18510443.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      burgundy: G(
        'https://images.pexels.com/photos/1102874/pexels-photo-1102874.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/8807020/pexels-photo-8807020.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/17426948/pexels-photo-17426948.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/8807020/pexels-photo-8807020.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16339689/pexels-photo-16339689.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
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
    featuredImage: 'https://images.pexels.com/photos/18510443/pexels-photo-18510443.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    dimensions: '34 × 22 × 50 cm · 28 L · 1.3 kg',
    popular: true,
    gallery: {
      olive: G(
        'https://images.pexels.com/photos/18510443/pexels-photo-18510443.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/9630186/pexels-photo-9630186.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/9088788/pexels-photo-9088788.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/4823323/pexels-photo-4823323.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16359294/pexels-photo-16359294.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      midnight: G(
        'https://images.pexels.com/photos/13869858/pexels-photo-13869858.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/9138669/pexels-photo-9138669.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/9929115/pexels-photo-9929115.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16359294/pexels-photo-16359294.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      sand: G(
        'https://images.pexels.com/photos/15059375/pexels-photo-15059375.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/8528285/pexels-photo-8528285.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/14601178/pexels-photo-14601178.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/17941690/pexels-photo-17941690.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/18510443/pexels-photo-18510443.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      burgundy: G(
        'https://images.pexels.com/photos/1102874/pexels-photo-1102874.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/8807020/pexels-photo-8807020.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/17426948/pexels-photo-17426948.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/11203852/pexels-photo-11203852.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16339689/pexels-photo-16339689.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
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
    featuredImage: 'https://images.pexels.com/photos/8330659/pexels-photo-8330659.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    dimensions: '31 × 19 × 43 cm · 20 L · 1.0 kg',
    gallery: {
      cream: G(
        'https://images.pexels.com/photos/8330659/pexels-photo-8330659.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/14601178/pexels-photo-14601178.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/15059375/pexels-photo-15059375.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/12303978/pexels-photo-12303978.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/18510443/pexels-photo-18510443.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      charcoal: G(
        'https://images.pexels.com/photos/9138669/pexels-photo-9138669.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16359294/pexels-photo-16359294.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/13869858/pexels-photo-13869858.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/8472875/pexels-photo-8472875.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/17924253/pexels-photo-17924253.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      navy: G(
        'https://images.pexels.com/photos/13870707/pexels-photo-13870707.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/11463452/pexels-photo-11463452.png?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/265144/pexels-photo-265144.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16359290/pexels-photo-16359290.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      sand: G(
        'https://images.pexels.com/photos/15059375/pexels-photo-15059375.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/8528285/pexels-photo-8528285.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/14601178/pexels-photo-14601178.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/9433993/pexels-photo-9433993.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/18510443/pexels-photo-18510443.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
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
    featuredImage: 'https://images.pexels.com/photos/13870707/pexels-photo-13870707.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    dimensions: '28 × 16 × 40 cm · 14 L · 0.7 kg',
    gallery: {
      sand: G(
        'https://images.pexels.com/photos/15059375/pexels-photo-15059375.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/8528285/pexels-photo-8528285.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/14601178/pexels-photo-14601178.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/8352126/pexels-photo-8352126.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/18510443/pexels-photo-18510443.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      cream: G(
        'https://images.pexels.com/photos/8330659/pexels-photo-8330659.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/14601178/pexels-photo-14601178.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/15059375/pexels-photo-15059375.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/8352126/pexels-photo-8352126.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/18510443/pexels-photo-18510443.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      navy: G(
        'https://images.pexels.com/photos/13870707/pexels-photo-13870707.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/11463452/pexels-photo-11463452.png?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/3974135/pexels-photo-3974135.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16359290/pexels-photo-16359290.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      olive: G(
        'https://images.pexels.com/photos/18510443/pexels-photo-18510443.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/9630186/pexels-photo-9630186.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/9088788/pexels-photo-9088788.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/8968484/pexels-photo-8968484.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16359294/pexels-photo-16359294.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
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
    featuredImage: 'https://images.pexels.com/photos/13869858/pexels-photo-13869858.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    dimensions: '35 × 23 × 52 cm · 32 L · 1.4 kg',
    popular: true,
    gallery: {
      midnight: G(
        'https://images.pexels.com/photos/13869858/pexels-photo-13869858.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/9138669/pexels-photo-9138669.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/10772791/pexels-photo-10772791.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16359294/pexels-photo-16359294.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      charcoal: G(
        'https://images.pexels.com/photos/9138669/pexels-photo-9138669.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16359294/pexels-photo-16359294.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/13869858/pexels-photo-13869858.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/39492137/pexels-photo-39492137.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/17924253/pexels-photo-17924253.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      olive: G(
        'https://images.pexels.com/photos/18510443/pexels-photo-18510443.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/9630186/pexels-photo-9630186.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/9088788/pexels-photo-9088788.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/4823323/pexels-photo-4823323.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16359294/pexels-photo-16359294.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      navy: G(
        'https://images.pexels.com/photos/13870707/pexels-photo-13870707.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/11463452/pexels-photo-11463452.png?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/3974135/pexels-photo-3974135.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16359290/pexels-photo-16359290.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      burgundy: G(
        'https://images.pexels.com/photos/1102874/pexels-photo-1102874.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/8807020/pexels-photo-8807020.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/17426948/pexels-photo-17426948.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/11203852/pexels-photo-11203852.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/16339689/pexels-photo-16339689.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      sand: G(
        'https://images.pexels.com/photos/15059375/pexels-photo-15059375.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/8528285/pexels-photo-8528285.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/14601178/pexels-photo-14601178.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/8528285/pexels-photo-8528285.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/18510443/pexels-photo-18510443.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
      ),
      cream: G(
        'https://images.pexels.com/photos/8330659/pexels-photo-8330659.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/14601178/pexels-photo-14601178.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/15059375/pexels-photo-15059375.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/9433993/pexels-photo-9433993.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
        'https://images.pexels.com/photos/18510443/pexels-photo-18510443.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
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
  campus: 'https://images.pexels.com/photos/7972659/pexels-photo-7972659.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  study: 'https://images.pexels.com/photos/6549587/pexels-photo-6549587.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  commute: 'https://images.pexels.com/photos/8100525/pexels-photo-8100525.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  coding: 'https://images.pexels.com/photos/5473309/pexels-photo-5473309.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
};

export const FLAT_LAY_IMAGE = 'https://images.pexels.com/photos/5208870/pexels-photo-5208870.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200';
export const OPEN_BAG_IMAGE = 'https://images.pexels.com/photos/5827881/pexels-photo-5827881.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200';
export const HERO_IMAGE = 'https://images.pexels.com/photos/36958694/pexels-photo-36958694.jpeg?auto=compress&cs=tinysrgb&h=1100&w=900';
