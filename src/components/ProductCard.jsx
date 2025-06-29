function ProductCard({ id, name, price, image, description, inStock, onAddToCart }) {
  
  const handleAddToCart = () => {
    if (inStock && onAddToCart) {
      onAddToCart({ id, name, price, image, description, inStock });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden max-w-sm">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        {!inStock && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            Out of Stock
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
        <div className="text-2xl font-bold text-green-600 mb-4">${price}</div>
        
        <button 
          onClick={handleAddToCart}
          disabled={!inStock}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
            inStock 
              ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg active:scale-95' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;s