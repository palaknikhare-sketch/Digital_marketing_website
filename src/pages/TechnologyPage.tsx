import { Technology } from '@/components/Technology';
import { Organization } from '@/components/Organization';
import { WhatFitsInside } from '@/components/WhatFitsInside';
import { FeaturesGrid } from '@/components/FeaturesGrid';

export function TechnologyPage() {
  return (
    <div className="pt-20">
      <Technology />
      <Organization />
      <WhatFitsInside />
      <FeaturesGrid />
    </div>
  );
}
