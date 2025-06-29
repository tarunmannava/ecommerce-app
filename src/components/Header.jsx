import { ShoppingCartIcon } from '@heroicons/react/24/outline';

function Header({ cartCount, onCartClick }) {
  const handleCartClick = () => {
    console.log("🖱️ Cart button clicked!");
    if (onCartClick) {
      onCartClick();
    }
  };

  return (
    <header className="bg-slate-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">🛍️ TechMart</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-white hover:text-blue-300 transition-colors px-3 py-2 rounded-md hover:bg-slate-700">
              Home
            </a>
            <a href="/products" className="text-white hover:text-blue-300 transition-colors px-3 py-2 rounded-md hover:bg-slate-700">
              Products
            </a>
            <a href="/about" className="text-white hover:text-blue-300 transition-colors px-3 py-2 rounded-md hover:bg-slate-700">
              About
            </a>
          </nav>

          <div className="flex items-center">
            <button 
              onClick={handleCartClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 hover:shadow-lg"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              <span>Cart ({cartCount || 0})</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;