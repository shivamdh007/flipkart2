import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Box, Truck, Shield, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../data/products';
import { formatPrice } from '../utils/format';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(
    products.find(p => p.id === Number(id)) || null
  );
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(product?.image);
  
  const { addToCart, isInCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  
  const productInWishlist = product ? isInWishlist(product.id) : false;
  const productInCart = product ? isInCart(product.id) : false;

  useEffect(() => {
    // Simulate loading the product
    setLoading(true);
    setTimeout(() => {
      const foundProduct = products.find(p => p.id === Number(id));
      setProduct(foundProduct || null);
      setSelectedImage(foundProduct?.image);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  const handleWishlist = () => {
    if (!product) return;
    
    if (productInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2874F0]"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-6">The product you're looking for doesn't exist.</p>
        <Link to="/" className="bg-[#2874F0] text-white px-4 py-2 rounded-sm">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center mb-6 text-sm">
          <Link to="/" className="text-gray-500 hover:text-[#2874F0] flex items-center">
            <ArrowLeft size={16} className="mr-1" />
            Back to Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to={`/category/${product.category.toLowerCase()}`} className="text-gray-500 hover:text-[#2874F0]">
            {product.category}
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-700">{product.title}</span>
        </div>

        <div className="bg-white rounded-sm shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {/* Product Images */}
            <div className="md:col-span-1">
              <div className="sticky top-20">
                <div className="bg-white p-4 rounded-sm border mb-4 flex justify-center h-80">
                  <img 
                    src={selectedImage || product.image} 
                    alt={product.title} 
                    className="h-full object-contain mix-blend-multiply" 
                  />
                </div>
                <div className="flex justify-center gap-4 mt-2">
                  {/* For a real implementation, we would have multiple images */}
                  <button 
                    className={`border-2 p-1 rounded-sm w-16 h-16 ${selectedImage === product.image ? 'border-[#2874F0]' : 'border-gray-200'}`}
                    onClick={() => setSelectedImage(product.image)}
                  >
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-contain mix-blend-multiply" 
                    />
                  </button>
                </div>
                <div className="flex gap-2 mt-6">
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-[#FF9F00] text-white py-3 px-4 rounded-sm font-medium flex items-center justify-center"
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    {productInCart ? 'GO TO CART' : 'ADD TO CART'}
                  </button>
                  <button 
                    onClick={handleWishlist}
                    className={`px-4 py-3 rounded-sm font-medium flex items-center justify-center ${
                      productInWishlist 
                        ? 'bg-gray-200 text-gray-800' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    <Heart 
                      size={18} 
                      className={`mr-2 ${productInWishlist ? 'fill-red-500 text-red-500' : ''}`} 
                    />
                    WISHLIST
                  </button>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="md:col-span-1 lg:col-span-2">
              <div className="mb-4">
                <h1 className="text-xl font-medium text-gray-800 mb-1">{product.title}</h1>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-700 text-white text-xs px-2 py-0.5 rounded flex items-center">
                    {product.rating} <Star size={12} className="ml-1 fill-white" />
                  </span>
                  <span className="text-gray-500 text-sm">
                    {product.ratingCount.toLocaleString()} Ratings
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-medium text-gray-800">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <>
                        <span className="text-gray-500 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                        <span className="text-green-600 font-medium">
                          {product.discount}% off
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="mt-6">
                  <h3 className="font-medium text-gray-800 mb-3">Features</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Description */}
                <div className="mt-6">
                  <h3 className="font-medium text-gray-800 mb-3">Description</h3>
                  <p className="text-gray-700">{product.description}</p>
                </div>

                {/* Services */}
                <div className="mt-8 border-t pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Box size={20} className="text-gray-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-800">Delivery</h4>
                      <p className="text-sm text-gray-600">
                        {product.freeDelivery ? 'Free delivery' : 'Standard delivery charges apply'}
                        {product.fastDelivery && ', Delivery by Tomorrow'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Truck size={20} className="text-gray-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-800">Return Policy</h4>
                      <p className="text-sm text-gray-600">30 day easy return</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Shield size={20} className="text-gray-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-800">Warranty</h4>
                      <p className="text-sm text-gray-600">1 Year Manufacturer Warranty</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;