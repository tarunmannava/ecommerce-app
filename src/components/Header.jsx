import { useState } from 'react';
import { ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import './Header.css';

function Header({ cartCount }) {  // Destructure props directly
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1><ShoppingBagIcon className="logo-icon" />
 TechMart</h1>
        </div>

        <nav className="nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/products" className="nav-link">Products</a>
          <a href="/about" className="nav-link">About</a>
        </nav>

        <div className="cart">
          <button className="cart-button">
            <ShoppingCartIcon className="cart-icon" />
 ({cartCount || 0})
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;