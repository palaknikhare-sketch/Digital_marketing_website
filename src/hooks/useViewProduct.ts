import { useNavigate } from 'react-router-dom';
import type { Product } from '@/data/products';
import { useCallback } from 'react';

export function useViewProduct() {
  const navigate = useNavigate();
  return useCallback((product: Product) => {
    navigate(`/product/${product.id}`);
  }, [navigate]);
}
