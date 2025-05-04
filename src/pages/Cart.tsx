import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

const Cart: React.FC = () => {
  const { 
    cartItems, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity, 
    getCartTotal, 
    clearCart 
  } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert('This is a demo! Checkout would happen here in a real app.');
    clearCart();
    navigate('/');
  };

  // Calculate cart summary
  const cartTotal = getCartTotal();
  const deliveryCharges = cartTotal > 500 ? 0 : 40;
  const discount = Math.round(cartTotal * 0.05); // 5% discount
  const totalAmount = cartTotal + deliveryCharges - discount;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-sm shadow-sm p-8 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingBag size={64} className="text-gray-300" />
            </div>
            <h2 className="text-2xl font-medium mb-2">Your cart is empty!</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-sm shadow-sm overflow-hidden mb-6">
              <div className="p-4 border-b">
                <h2 className="text-lg font-medium">Shopping Cart ({cartItems.length} items)</h2>
              </div>

              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 flex-shrink-0">
                      <Link to={`/product/${item.id}`}>
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-contain mix-blend-multiply" 
                        />
                      </Link>
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow">
                      <Link to={`/product/${item.id}`} className="text-gray-800 hover:text-[#2874F0] font-medium line-clamp-2">
                        {item.title}
                      </Link>
                      <div className="text-gray-600 text-sm mt-1">
                        Seller: {item.brand}
                      </div>
                      <div className="flex items-center mt-2">
                        <span className="font-medium">{formatPrice(item.price)}</span>
                        {item.originalPrice && (
                          <>
                            <span className="text-gray-500 text-sm line-through ml-2">
                              {formatPrice(item.originalPrice)}
                            </span>
                            <span className="text-green-600 text-sm ml-2">
                              {item.discount}% off
                            </span>
                          </>
                        )}
                      </div>

                      {/* Quantity controls */}
                      <div className="flex items-center mt-4 space-x-4">
                        <div className="flex items-center border rounded-sm">
                          <button 
                            onClick={() => decreaseQuantity(item.id)}
                            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-4 py-1 border-x">{item.quantity}</span>
                          <button 
                            onClick={() => increaseQuantity(item.id)}
                            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#2874F0] hover:underline flex items-center"
                        >
                          <Trash2 size={16} className="mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-sm shadow-sm overflow-hidden sticky top-20">
              <div className="p-4 border-b">
                <h2 className="text-lg font-medium">Order Summary</h2>
              </div>
              
              <div className="p-4 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Price ({cartItems.length} items)</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-green-600">- {formatPrice(discount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Charges</span>
                  {deliveryCharges === 0 ? (
                    <span className="text-green-600">FREE</span>
                  ) : (
                    <span>{formatPrice(deliveryCharges)}</span>
                  )}
                </div>

                <div className="border-t border-b py-4 my-2">
                  <div className="flex justify-between font-medium">
                    <span>Total Amount</span>
                    <span>{formatPrice(totalAmount)}</span>
                  </div>
                  <div className="text-green-600 text-sm mt-2">
                    You will save {formatPrice(discount)} on this order
                  </div>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="w-full bg-[#FB641B] text-white py-3 rounded-sm font-medium"
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;