import React from 'react';
import Banner from '../components/Banner';
import CategoryBar from '../components/CategoryBar';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';

const Home: React.FC = () => {
  // Create sections for different categories
  const mobileProducts = products.filter(product => product.category === 'Mobiles');
  const laptopProducts = products.filter(product => product.category === 'Laptops');
  const electronicsProducts = products.filter(product => product.category === 'Electronics');
  const tvProducts = products.filter(product => product.category === 'TVs');
  const watchProducts = products.filter(product => product.category === 'Watches');

  return (
    <div className="bg-gray-100 min-h-screen">
      <Banner />
      <CategoryBar />
      
      <div className="container mx-auto px-4 py-4 space-y-6">
        {/* Featured Products */}
        <ProductGrid 
          products={products} 
          title="Today's Deals" 
        />

        {/* Category-specific product grids */}
        {mobileProducts.length > 0 && (
          <ProductGrid 
            products={mobileProducts} 
            title="Smartphones" 
            category="Mobiles"
          />
        )}

        {laptopProducts.length > 0 && (
          <ProductGrid 
            products={laptopProducts} 
            title="Laptops" 
            category="Laptops"
          />
        )}

        {electronicsProducts.length > 0 && (
          <ProductGrid 
            products={electronicsProducts} 
            title="Electronics" 
            category="Electronics"
          />
        )}

        {tvProducts.length > 0 && (
          <ProductGrid 
            products={tvProducts} 
            title="Televisions" 
            category="TVs"
          />
        )}

        {watchProducts.length > 0 && (
          <ProductGrid 
            products={watchProducts} 
            title="Watches" 
            category="Watches"
          />
        )}
      </div>
    </div>
  );
};

export default Home;