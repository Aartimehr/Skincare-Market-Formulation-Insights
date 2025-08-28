import { useState, useEffect } from 'react';
import { RefreshCcw } from 'lucide-react'; // Icon for a refresh button

// Main application component
export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch data from the backend API
  const fetchProducts = async () => {
    setLoading(true); // Set loading to true while fetching
    setError(null);    // Clear any previous errors
    try {
      // Fetch data from the Node.js backend API
      const response = await fetch('http://localhost:3001/api/products');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data); // Set the fetched data to state
    } catch (e) {
      console.error("Failed to fetch products:", e);
      setError("Failed to load products. Please ensure the backend server is running.");
    } finally {
      setLoading(false); // Set loading to false after fetch attempt
    }
  };

  // useEffect hook to run the fetch operation once when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []); // Empty dependency array ensures it runs only once

  // Function to determine what to render based on the application state
  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center p-8 text-white">
          <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="ml-3 text-lg font-medium">Loading data...</span>
        </div>
      );
    }

    if (error) {
      return (
        <div className="bg-red-500 text-white p-4 rounded-lg m-4 shadow-lg text-center font-semibold">
          {error}
        </div>
      );
    }

    if (products.length === 0) {
      return (
        <div className="bg-yellow-500 text-black p-4 rounded-lg m-4 shadow-lg text-center font-semibold">
          No products found.
        </div>
      );
    }

    return (
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-teal-400 mb-2">{product.product_name || 'N/A'}</h3>
            <p className="text-sm text-gray-400 font-medium">by <span className="text-white">{product.brand || 'N/A'}</span></p>
            <p className="text-sm text-gray-400 mt-2">Active Ingredients:</p>
            <p className="text-white font-medium break-words">{product.active_ingredients || 'N/A'}</p>
            <p className="text-sm text-gray-400 mt-2">Country:</p>
            <p className="text-white font-medium">{product.country_of_origin || 'N/A'}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto p-8">
        <header className="flex flex-col sm:flex-row items-center justify-between bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
          <h1 className="text-3xl font-bold text-teal-400">Skincare Data Insights</h1>
          <button
            onClick={fetchProducts}
            className="mt-4 sm:mt-0 px-6 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 flex items-center font-medium"
          >
            <RefreshCcw className="w-5 h-5 mr-2" />
            Refresh Data
          </button>
        </header>
        <main>
          {renderContent()}
        </main>
      </div>
    </div>
  );
}


