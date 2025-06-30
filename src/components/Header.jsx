import { Link, useLocation } from 'react-router-dom';
import { ShoppingBagIcon,ShoppingCartIcon } from '@heroicons/react/24/outline';

function Header({ cartCount, onCartClick }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-slate-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white hover:text-blue-300 transition-colors">
              <ShoppingBagIcon className="logo-icon" />
 TechMart
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md transition-all duration-200 ${
                isActive('/') 
                  ? 'bg-blue-600 text-white' 
                  : 'text-white hover:text-blue-300 hover:bg-slate-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`px-3 py-2 rounded-md transition-all duration-200 ${
                isActive('/products') 
                  ? 'bg-blue-600 text-white' 
                  : 'text-white hover:text-blue-300 hover:bg-slate-700'
              }`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md transition-all duration-200 ${
                isActive('/about') 
                  ? 'bg-blue-600 text-white' 
                  : 'text-white hover:text-blue-300 hover:bg-slate-700'
              }`}
            >
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link 
              to="/cart"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 hover:shadow-lg"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              <span>Cart ({cartCount || 0})</span>
            </Link>
            <button 
              onClick={onCartClick}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg transition-all duration-200"
            >
              Quick View
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;