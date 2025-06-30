import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-center">
      <div className="py-12">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link 
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;