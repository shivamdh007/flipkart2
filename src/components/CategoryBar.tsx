import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Smartphone, Radio, Laptop, Tv, Bot as Boot, Watch, Armchair, Shirt } from 'lucide-react';
import { categories } from '../data/products';

const CategoryBar: React.FC = () => {
  const navigate = useNavigate();

  // Map of category names to icons
  const iconMap: Record<string, React.ReactNode> = {
    'Mobiles': <Smartphone size={18} />,
    'Electronics': <Radio size={18} />,
    'Laptops': <Laptop size={18} />,
    'TVs': <Tv size={18} />,
    'Footwear': <Boot size={18} />,
    'Watches': <Watch size={18} />,
    'Furniture': <Armchair size={18} />,
    'Fashion': <Shirt size={18} />
  };

  const handleCategoryClick = (category: string) => {
    // Navigate to category page and pass the filter
    navigate(`/?category=${category.toLowerCase()}`);
  };

  return (
    <div className="bg-white shadow-sm py-3 mb-4">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto space-x-6 pb-2 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.name)}
              className="flex flex-col items-center min-w-[80px] transition-transform hover:scale-110"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-2">
                {iconMap[category.name]}
              </div>
              <span className="text-xs text-center font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;