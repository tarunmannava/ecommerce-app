import { XMarkIcon, TrashIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

function CartSidebar({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
      {/* Backdrop - click to close */}
      
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-96 max-w-full bg-white shadow-2xl z-50 flex flex-col animate-slide-in">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <h2 className="text-xl font-bold text-gray-900 m-0">Your Cart</h2>
          <button 
            className="bg-transparent border-none cursor-pointer text-gray-500 p-2 rounded-md flex items-center justify-center transition-all duration-200 hover:bg-gray-200 hover:text-gray-700"
            onClick={onClose}
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-12 text-lg">Your cart is empty</p>
          ) : (
            <>
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-4 p-4 border-b border-gray-100 bg-white rounded-lg mb-2 shadow-sm">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded-md flex-shrink-0" 
                  />
                  
                  <div className="flex-1 flex flex-col gap-2">
                    <h4 className="text-base font-semibold text-gray-900 m-0">{item.name}</h4>
                    <p className="text-green-600 font-bold text-lg m-0">${item.price}</p>
                    
                    <div className="flex items-center gap-3 mt-auto">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="bg-gray-100 border border-gray-300 w-9 h-9 rounded-md cursor-pointer flex items-center justify-center transition-all duration-200 text-gray-700 hover:bg-gray-200 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <MinusIcon className="w-4 h-4" />
                      </button>
                      <span className="font-semibold text-gray-900 min-w-5 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-100 border border-gray-300 w-9 h-9 rounded-md cursor-pointer flex items-center justify-center transition-all duration-200 text-gray-700 hover:bg-gray-200 hover:border-gray-400"
                      >
                        <PlusIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <button 
                    className="bg-transparent border-none cursor-pointer text-red-500 p-2 rounded-md flex items-center justify-center transition-all duration-200 self-start hover:bg-red-50 hover:text-red-600"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Footer */}
              <div className="border-t border-gray-200 p-6 bg-gray-50 mt-4 rounded-lg">
                <div className="text-xl font-bold mb-4 text-center text-gray-900">
                  Total: ${totalPrice.toFixed(2)}
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white border-none p-4 rounded-lg text-base cursor-pointer font-semibold transition-all duration-200 hover:shadow-lg active:scale-95">
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CartSidebar;