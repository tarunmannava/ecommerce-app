function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About TechMart</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 leading-relaxed mb-6">
          Welcome to TechMart, your premier destination for cutting-edge technology products. 
          Since our founding, we've been committed to bringing you the latest and greatest in tech innovation.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          To make advanced technology accessible to everyone by providing high-quality products 
          at competitive prices, backed by exceptional customer service.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose TechMart?</h2>
        <ul className="text-gray-600 space-y-2 mb-6">
          <li>• Curated selection of premium tech products</li>
          <li>• Competitive pricing with regular deals</li>
          <li>• Fast and free shipping on all orders</li>
          <li>• Expert customer support team</li>
          <li>• 30-day return policy</li>
        </ul>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h3>
          <p className="text-gray-600">
            Have questions? We're here to help!<br />
            Email: support@techmart.com<br />
            Phone: 1-800-TECHMART
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;