import { Link } from 'react-router-dom';
import { TrashIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

function CartPage({ cartItems, onUpdateQuantity, onRemoveItem }) {
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart</h1>
        <div className="py-12">
          <p className="text-gray-500 text-lg mb-6">Your cart is empty</p>
          <Link 
            to="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex gap-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <Link 
                    to={`/products/${item.id}`}
                    className="text-lg font-semibold text-gray-900 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                  <p className="text-green-600 font-bold text-lg mt-2">${item.price}</p>
                </div>

                <div className="flex flex-col items-end space-y-4">
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="bg-gray-100 hover:bg-gray-200 disabled:opacity-50 p-2 rounded"
                    >
                      <MinusIcon className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-100 hover:bg-gray-200 p-2 rounded"
                    >
                      <PlusIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${(totalPrice * 0.08).toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${(totalPrice * 1.08).toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold mb-4">
            Proceed to Checkout
          </button>
          
          <Link 
            to="/products"
            className="block text-center text-blue-600 hover:text-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;