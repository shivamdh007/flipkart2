import React, { useState, useEffect } from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Product, SortOption } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  title?: string;
  category?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title, category }) => {
  const [sortOption, setSortOption] = useState<SortOption>('popularity');
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [sortedProducts, setSortedProducts] = useState<Product[]>(products);

  // Apply sorting when sort option changes
  useEffect(() => {
    let sorted = [...products];
    
    switch(sortOption) {
      case 'popularity':
        sorted.sort((a, b) => b.ratingCount - a.ratingCount);
        break;
      case 'priceLowToHigh':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // In a real app, we would sort by date
        // Here we'll just randomize for demo purposes
        sorted.sort(() => Math.random() - 0.5);
        break;
      default:
        break;
    }
    
    setSortedProducts(sorted);
  }, [sortOption, products]);

  return (
    <div className="bg-white shadow-sm rounded-sm overflow-hidden">
      {/* Header */}
      <div className="border-b p-4 flex justify-between items-center">
        <h2 className="text-lg font-medium">
          {title || (category ? `${category} Products` : 'All Products')}
        </h2>
        
        {/* Sort options */}
        <div className="relative">
          <button 
            className="flex items-center text-sm text-gray-600 hover:text-gray-900"
            onClick={() => setShowSortOptions(!showSortOptions)}
          >
            <SlidersHorizontal size={14} className="mr-1" />
            <span>Sort</span>
            <ChevronDown size={14} className="ml-1" />
          </button>
          
          {showSortOptions && (
            <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-lg z-10 w-48">
              <div className="py-1">
                <button 
                  className={`block w-full text-left px-4 py-2 text-sm ${sortOption === 'popularity' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}
                  onClick={() => {
                    setSortOption('popularity');
                    setShowSortOptions(false);
                  }}
                >
                  Popularity
                </button>
                <button 
                  className={`block w-full text-left px-4 py-2 text-sm ${sortOption === 'priceLowToHigh' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}
                  onClick={() => {
                    setSortOption('priceLowToHigh');
                    setShowSortOptions(false);
                  }}
                >
                  Price: Low to High
                </button>
                <button 
                  className={`block w-full text-left px-4 py-2 text-sm ${sortOption === 'priceHighToLow' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}
                  onClick={() => {
                    setSortOption('priceHighToLow');
                    setShowSortOptions(false);
                  }}
                >
                  Price: High to Low
                </button>
                <button 
                  className={`block w-full text-left px-4 py-2 text-sm ${sortOption === 'newest' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}
                  onClick={() => {
                    setSortOption('newest');
                    setShowSortOptions(false);
                  }}
                >
                  Newest First
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Products grid */}
      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {sortedProducts.map(product => (
          <div key={product.id} className="relative">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;