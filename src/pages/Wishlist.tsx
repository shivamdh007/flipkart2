import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Heart, ArrowLeft, ShoppingCart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

const Wishlist: React.FC = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart, isInCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-sm shadow-sm p-8 text-center">
            <div className="flex justify-center mb-4">
              <Heart size={64} className="text-gray-300" />
            </div>
            <h2 className="text-2xl font-medium mb-2">Your wishlist is empty!</h2>
            <p className="text-gray-600 mb-6">Save items you like by clicking the heart icon on any product.</p>
            <Link to="/" className="bg-[#2874F0] text-white px-6 py-2 rounded-sm inline-block">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <Link to="/" className="text-gray-500 hover:text-[#2874F0] flex items-center">
            <ArrowLeft size={16} className="mr-1" />
            Continue Shopping
          </Link>
        </div>

        <div className="bg-white rounded-sm shadow-sm overflow-hidden">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-medium">My Wishlist ({wishlistItems.length} items)</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {wishlistItems.map((item) => (
              <div key={item.id} className="border rounded-sm overflow-hidden relative group">
                {/* Remove button */}
                <button 
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 z-10 bg-white p-1.5 rounded-full shadow-sm"
                >
                  <Trash2 size={16} className="text-gray-400 hover:text-red-500" />
                </button>

                {/* Product image */}
                <Link to={`/product/${item.id}`}>
                  <div className="h-40 p-4 bg-gray-50 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="h-full object-contain mix-blend-multiply" 
                    />
                  </div>
                </Link>

                {/* Product info */}
                <div className="p-4">
                  <Link to={`/product/${item.id}`} className="font-medium text-sm line-clamp-2 text-gray-800 hover:text-[#2874F0]">
                    {item.title}
                  </Link>
                  
                  <div className="flex items-center mt-2">
                    <span className="font-medium">{formatPrice(item.price)}</span>
                    {item.originalPrice && (
                      <span className="text-gray-500 text-sm line-through ml-2">
                        {formatPrice(item.originalPrice)}
                      </span>
                    )}
                  </div>

                  <button 
                    onClick={() => addToCart(item)}
                    className={`w-full mt-3 py-2 rounded-sm flex items-center justify-center ${
                      isInCart(item.id)
                        ? 'bg-gray-100 text-green-600 font-medium'
                        : 'bg-[#FF9F00] text-white font-medium'
                    }`}
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    {isInCart(item.id) ? 'ADDED TO CART' : 'ADD TO CART'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;