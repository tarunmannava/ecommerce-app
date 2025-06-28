import './ProductCard.css';

function ProductCard({ id, name, price, image, description, inStock, onAddToCart }) {
  
  const handleAddToCart = () => {
    if (inStock && onAddToCart) {
      // Call the function passed from parent
      onAddToCart({ id, name, price, image, description, inStock });
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
        {!inStock && <div className="out-of-stock-badge">Out of Stock</div>}
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <div className="product-price">${price}</div>
        
        <button 
          className={`add-to-cart-btn ${!inStock ? 'disabled' : ''}`}
          onClick={handleAddToCart}
          disabled={!inStock}
        >
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;