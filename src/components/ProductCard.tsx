import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../utils/format';
import { useWishlist } from '../context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full">
        {/* Wishlist button */}
        <button 
          className="absolute top-2 right-2 z-10 bg-white p-1.5 rounded-full shadow-sm"
          onClick={handleWishlist}
        >
          <Heart 
            size={18} 
            className={`${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
          />
        </button>

        {/* Product image */}
        <div className="relative p-4 flex justify-center bg-gray-50 h-48">
          <img 
            src={product.image} 
            alt={product.title} 
            className="h-full object-contain mix-blend-multiply" 
          />
          {product.discount && (
            <span className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded">
              {product.discount}% off
            </span>
          )}
        </div>

        {/* Product info */}
        <div className="p-4">
          <h3 className="font-medium text-sm text-gray-800 line-clamp-2 mb-1">{product.title}</h3>
          
          <div className="flex items-center mb-1">
            <span className="bg-green-700 text-white text-xs px-1.5 py-0.5 rounded flex items-center">
              {product.rating} ★
            </span>
            <span className="text-xs text-gray-500 ml-2">({product.ratingCount})</span>
          </div>
          
          <div className="flex items-center mt-2">
            <span className="font-medium">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-gray-500 text-sm line-through ml-2">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {product.freeDelivery && (
            <span className="text-xs text-green-600 mt-1 block">Free Delivery</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;