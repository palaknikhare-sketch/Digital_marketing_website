import { useNavigate } from 'react-router-dom';
import { Hero } from '@/components/Hero';
import { Highlights } from '@/components/Highlights';
import { PopularThisWeek } from '@/components/PopularThisWeek';
import { Lifestyle } from '@/components/Lifestyle';
import { Reviews } from '@/components/Reviews';
import { PromoBanner } from '@/components/PromoBanner';
import { useViewProduct } from '@/hooks/useViewProduct';

export function HomePage() {
  const navigate = useNavigate();
  const viewProduct = useViewProduct();

  return (
    <>
      <Hero
        onShopClick={() => navigate('/shop')}
        onTechClick={() => navigate('/technology')}
      />
      <Highlights />
      <PopularThisWeek onView={viewProduct} />
      <PromoBanner onShopClick={() => navigate('/shop')} />
      <Lifestyle />
      <Reviews />
    </>
  );
}
