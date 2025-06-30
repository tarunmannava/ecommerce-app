import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { sampleProducts } from '../data/products';

function HomePage({ onAddToCart }) {
  // Show only first 3 products as featured
  const featuredProducts = sampleProducts.slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to TechMart
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your one-stop shop for the latest tech products
        </p>
        <Link 
          to="/products"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 hover:shadow-lg"
        >
          Shop Now
        </Link>
      </div>

      {/* Featured Products */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <Link 
          to="/products"
          className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
        >
          View All Products →
        </Link>
      </div>
    </div>
  );
}

export default HomePage;