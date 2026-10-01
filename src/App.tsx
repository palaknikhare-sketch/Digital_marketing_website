import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StoreProvider } from '@/store/StoreContext';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { ShopPage } from '@/pages/ShopPage';
import { TechnologyPage } from '@/pages/TechnologyPage';
import { ReviewsPage } from '@/pages/ReviewsPage';
import { ProductPage } from '@/pages/ProductPage';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
