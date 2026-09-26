import { Heart, Eye } from 'lucide-react';
import type { Product } from '@/data/products';
import { COLORS } from '@/data/products';
import { useStore } from '@/store/StoreContext';
import { Stars } from '@/components/Stars';

interface ProductCardProps {
  product: Product;
  onView: (product: Product) => void;
}

export function ProductCard({ product, onView }: ProductCardProps) {
  const { toggleWishlist, isWishlisted } = useStore();
  const wished = isWishlisted(product.id);
  const defaultColor = COLORS[product.defaultColor];
  const mainImage = product.gallery[product.defaultColor].front;
  const hoverImage = product.gallery[product.defaultColor].side;

  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden rounded-2xl bg-cream-200">
        <div className="relative aspect-[4/5]">
          <img
            src={mainImage}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
            loading="lazy"
          />
          <img
            src={hoverImage}
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
            loading="lazy"
          />
        </div>

        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-charcoal-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream-100">
            {product.badge}
          </span>
        )}

        <button
          onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
          className={`absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition-all ${
            wished ? 'bg-burgundy text-cream-100' : 'bg-cream-100/80 text-charcoal-800 hover:bg-cream-100'
          }`}
          aria-label="Add to wishlist"
        >
          <Heart className={`h-4 w-4 ${wished ? 'fill-cream-100' : ''}`} />
        </button>

        <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
          <button
            onClick={() => onView(product)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-cream-100/95 py-3 text-sm font-medium text-charcoal-900 backdrop-blur-sm transition-colors hover:bg-cream-100"
          >
            <Eye className="h-4 w-4" />
            View Details
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-medium text-charcoal-900">{product.name}</h3>
          <div className="flex shrink-0 items-center gap-1">
            <Stars rating={product.rating} />
            <span className="text-xs text-charcoal-800/50">({product.reviews})</span>
          </div>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-charcoal-800/60">{product.tagline}</p>

        <div className="mt-3 flex items-center gap-1.5">
          {product.colors.map((ck) => (
            <span
              key={ck}
              className="h-4 w-4 rounded-full border border-charcoal-900/15"
              style={{ backgroundColor: COLORS[ck].hex }}
              title={COLORS[ck].name}
            />
          ))}
          <span className="ml-1 text-xs text-charcoal-800/50">{product.colors.length} colors</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-semibold text-charcoal-900">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-charcoal-800/40 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          <span className="text-xs text-charcoal-800/50">{defaultColor.name}</span>
        </div>
      </div>
    </div>
  );
}
