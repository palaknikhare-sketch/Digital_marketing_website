import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { ProductDetailContent } from '@/components/ProductDetailContent';
import { useStore } from '@/store/StoreContext';
import { useViewProduct } from '@/hooks/useViewProduct';
import type { LayoutContext } from '@/components/Layout';

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { openCart } = useOutletContext<LayoutContext>();
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const viewProduct = useViewProduct();

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-cream-50">
        <p className="font-display text-2xl text-charcoal-900">Product not found</p>
        <button
          onClick={() => navigate('/shop')}
          className="rounded-full bg-charcoal-900 px-6 py-3 text-sm font-medium text-cream-100"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-100 pt-20">
      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-medium text-charcoal-800/70 transition-colors hover:text-charcoal-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
      </div>
      <ProductDetailContent
        product={product}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
        isWishlisted={isWishlisted}
        onBuyNow={(p, color, qty) => {
          addToCart(p, color, qty);
          openCart();
        }}
        onView={viewProduct}
      />
    </div>
  );
}
