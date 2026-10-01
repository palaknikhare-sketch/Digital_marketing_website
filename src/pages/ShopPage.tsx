import { ShopSection } from '@/components/ShopSection';
import { ColorCollection } from '@/components/ColorCollection';
import { PopularThisWeek } from '@/components/PopularThisWeek';
import { useViewProduct } from '@/hooks/useViewProduct';

export function ShopPage() {
  const viewProduct = useViewProduct();

  return (
    <div className="pt-20">
      <ShopSection onView={viewProduct} />
      <ColorCollection onView={viewProduct} />
      <PopularThisWeek onView={viewProduct} />
    </div>
  );
}
