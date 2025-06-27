import { useState } from 'react';
import { ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import './Header.css';

function Header() { 
    const [cartCount,setCartCount] = useState(0);
    return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <h1>
            <ShoppingBagIcon className="logo-icon" />
            TechMart
          </h1>
        </div>
        
        {/* Navigation */}
        <nav className="nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/products" className="nav-link">Products</a>
          <a href="/about" className="nav-link">About</a>
        </nav>
        
        {/* Cart */}
        <div className="cart">
          <button className="cart-button">
            <ShoppingCartIcon className="cart-icon" />
            Cart ({cartCount})
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;