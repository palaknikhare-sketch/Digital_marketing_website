import { useState, useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { Checkout } from '@/components/Checkout';
import { WishlistDrawer } from '@/components/WishlistDrawer';
import type { Product } from '@/data/products';

export interface LayoutContext {
  openCart: () => void;
}

export function Layout() {
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const navigate = useNavigate();

  const handleBuyNowCart = useCallback(() => {
    setCartOpen(false);
    setCheckoutOpen(true);
  }, []);

  const handleWishlistView = useCallback((product: Product) => {
    setWishlistOpen(false);
    navigate(`/product/${product.id}`);
  }, [navigate]);

  const openCart = useCallback(() => setCartOpen(true), []);

  const context: LayoutContext = { openCart };

  return (
    <>
      <Navbar onCartClick={openCart} onWishlistClick={() => setWishlistOpen(true)} />

      <Outlet context={context} />

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={handleBuyNowCart}
      />

      <Checkout
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />

      <WishlistDrawer
        open={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        onView={handleWishlistView}
      />
    </>
  );
}
