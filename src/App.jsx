import { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import { sampleProducts } from './data/products';
import './App.css';

function App() {
  
  const [cartItems, setCartItems] = useState([]);

  
  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Check if item already exists in cart
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // If exists, increase quantity
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If new item, add with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Calculate total items in cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="App">
      {/* Pass cart count to Header */}
      <Header cartCount={cartCount} />
      
      <main className="main-content">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {sampleProducts.map(product => (
            <ProductCard
              key={product.id}
              {...product}  
              //Spread operator to pass all product
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;