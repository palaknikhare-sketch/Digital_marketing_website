import { useState, useEffect } from 'react';
import { Heart, ShoppingBag, Zap, Truck, ShieldCheck, RotateCcw, Minus, Plus, Check } from 'lucide-react';
import type { Product, ColorKey } from '@/data/products';
import { COLORS, PRODUCTS } from '@/data/products';
import { Stars } from '@/components/Stars';
import { ProductCard } from '@/components/ProductCard';

type GalleryKey = 'front' | 'side' | 'back' | 'inside' | 'lifestyle' | 'detail';

const GALLERY_LABELS: { key: GalleryKey; label: string }[] = [
  { key: 'front', label: 'Front' },
  { key: 'side', label: 'Side' },
  { key: 'back', label: 'Back' },
  { key: 'inside', label: 'Inside' },
  { key: 'lifestyle', label: 'Lifestyle' },
  { key: 'detail', label: 'Detail' },
];

const LIGHT_COLORS: ColorKey[] = ['cream', 'sand', 'stone', 'taupe'];

interface ProductDetailContentProps {
  product: Product;
  onAddToCart: (product: Product, color: ColorKey, quantity: number) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  onBuyNow: (product: Product, color: ColorKey, quantity: number) => void;
  onView: (product: Product) => void;
}

export function ProductDetailContent({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onBuyNow,
  onView,
}: ProductDetailContentProps) {
  const [color, setColor] = useState<ColorKey>(product.defaultColor);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState<GalleryKey>('front');
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setColor(product.defaultColor);
    setActiveImage('front');
    setQuantity(1);
    setAdded(false);
  }, [product]);

  const gallery = product.gallery[color] ?? product.gallery[product.defaultColor]!;
  const wished = isWishlisted(product.id);
  const recommendations = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    onAddToCart(product, color, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    onBuyNow(product, color, quantity);
  };

  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-2 lg:gap-12">
        {/* Gallery */}
        <div>
          <div className="overflow-hidden rounded-2xl bg-cream-200">
            <img
              src={gallery[activeImage]}
              alt={`${product.name} — ${activeImage} view`}
              className="aspect-square w-full object-cover nova-scale-in"
              key={`${color}-${activeImage}`}
            />
          </div>
          <div className="mt-4 grid grid-cols-6 gap-2">
            {GALLERY_LABELS.map((g) => (
              <button
                key={g.key}
                onClick={() => setActiveImage(g.key)}
                className={`overflow-hidden rounded-lg border-2 transition-all ${
                  activeImage === g.key ? 'border-charcoal-900' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={gallery[g.key]} alt={g.label} className="aspect-square w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          {product.badge && (
            <span className="inline-block rounded-full bg-olive-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-olive-500">
              {product.badge}
            </span>
          )}
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tightish text-charcoal-900 sm:text-4xl">
            {product.name}
          </h2>
          <div className="mt-3 flex items-center gap-2">
            <Stars rating={product.rating} size="md" />
            <span className="text-sm text-charcoal-800/60">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-display text-3xl font-semibold text-charcoal-900">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-charcoal-800/40 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="rounded-full bg-burgundy/10 px-2 py-0.5 text-xs font-semibold text-burgundy">
                  Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                </span>
              </>
            )}
          </div>

          <p className="mt-5 text-base leading-relaxed text-charcoal-800/70">{product.longDescription}</p>

          {/* Dimensions */}
          <p className="mt-4 text-sm text-charcoal-800/50">
            Dimensions: <span className="font-medium text-charcoal-800/80">{product.dimensions}</span>
          </p>

          {/* Color selection */}
          <div className="mt-7">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-charcoal-900">Choose your color</p>
              <p className="text-sm text-charcoal-800/60">Color: <span className="font-medium text-charcoal-900">{COLORS[color].name}</span></p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {product.colors.map((ck) => (
                <button
                  key={ck}
                  onClick={() => { setColor(ck); setActiveImage('front'); }}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
                    color === ck ? 'border-charcoal-900 scale-110' : 'border-charcoal-900/15 hover:border-charcoal-900/30'
                  }`}
                  style={{ backgroundColor: COLORS[ck].hex }}
                  title={COLORS[ck].name}
                  aria-label={COLORS[ck].name}
                >
                  {color === ck && (
                    <Check className={`h-4 w-4 ${LIGHT_COLORS.includes(ck) ? 'text-charcoal-900' : 'text-cream-100'}`} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-7">
            <p className="text-sm font-medium text-charcoal-900">Quantity</p>
            <div className="mt-3 flex items-center gap-4">
              <div className="flex items-center rounded-full border border-charcoal-900/15">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal-800 transition-colors hover:bg-charcoal-900/5"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium text-charcoal-900">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal-800 transition-colors hover:bg-charcoal-900/5"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <span className="text-sm text-charcoal-800/60">
                Total: <span className="font-medium text-charcoal-900">₹{(product.price * quantity).toLocaleString('en-IN')}</span>
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={handleAddToCart}
              className={`flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all ${
                added ? 'bg-olive-500 text-cream-100' : 'bg-charcoal-900 text-cream-100 hover:bg-charcoal-800 hover:shadow-lg'
              }`}
            >
              {added ? (<><Check className="h-4 w-4" /> Added to Cart</>) : (<><ShoppingBag className="h-4 w-4" /> Add to Cart</>)}
            </button>
            <button
              onClick={handleBuyNow}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-charcoal-900/20 px-6 py-3.5 text-sm font-medium text-charcoal-900 transition-all hover:border-charcoal-900/40 hover:bg-cream-50"
            >
              <Zap className="h-4 w-4" /> Buy Now
            </button>
          </div>

          <button
            onClick={() => onToggleWishlist(product.id)}
            className={`mt-3 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${
              wished ? 'bg-burgundy/10 text-burgundy' : 'border border-charcoal-900/15 text-charcoal-800 hover:border-charcoal-900/30'
            }`}
          >
            <Heart className={`h-4 w-4 ${wished ? 'fill-burgundy' : ''}`} />
            {wished ? 'In Wishlist' : 'Add to Wishlist'}
          </button>

          {/* Trust badges */}
          <div className="mt-7 grid grid-cols-3 gap-3 border-t border-charcoal-900/8 pt-6">
            <TrustBadge icon={Truck} label="Free delivery" />
            <TrustBadge icon={ShieldCheck} label="Secure checkout" />
            <TrustBadge icon={RotateCcw} label="30-day return" />
          </div>
        </div>
      </div>

      {/* You may also like */}
      <div className="border-t border-charcoal-900/8 px-5 py-10 sm:px-8">
        <h3 className="font-display text-2xl font-medium text-charcoal-900">You may also like</h3>
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
          {recommendations.map((p) => (
            <ProductCard key={p.id} product={p} onView={onView} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TrustBadge({ icon: Icon, label }: { icon: typeof Truck; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <Icon className="h-5 w-5 text-olive-500" />
      <span className="text-xs text-charcoal-800/70">{label}</span>
    </div>
  );
}
