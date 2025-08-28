import React, { useState } from 'react';
import { Home, BarChart2, FileText, List } from 'lucide-react';
import HomePage from './HomePage';
import DashboardPage from './DashboardPage';
import ReportPage from './ReportPage';
import ProductsPage from './ProductsPage';

// --- Main Application Component ---
export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch(activePage) {
      case 'home':
        return <HomePage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'report':
        return <ReportPage />;
      case 'products':
        return <ProductsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-200 text-gray-800 font-sans flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto p-8 flex-grow">
        <header className="flex flex-col sm:flex-row items-center justify-between bg-white p-6 rounded-xl shadow-lg mb-8">
          <h1 className="text-3xl font-bold text-indigo-600 mb-4 sm:mb-0">Skincare Data Insights</h1>
          
          {/* Navigation Bar */}
          <nav className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4">
            <button
              onClick={() => setActivePage('home')}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 font-medium ${activePage === 'home' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              <Home className="w-5 h-5 mr-2" /> Home
            </button>
            <button
              onClick={() => setActivePage('dashboard')}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 font-medium ${activePage === 'dashboard' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              <BarChart2 className="w-5 h-5 mr-2" /> Dashboard
            </button>
            <button
              onClick={() => setActivePage('report')}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 font-medium ${activePage === 'report' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              <FileText className="w-5 h-5 mr-2" /> Report
            </button>
            <button
              onClick={() => setActivePage('products')}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 font-medium ${activePage === 'products' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              <List className="w-5 h-5 mr-2" /> Products
            </button>
          </nav>
        </header>
        
        <main className="flex-grow">
          {renderPage()}
        </main>

        <footer className="bg-white text-center text-gray-600 py-4 mt-8 rounded-xl shadow-lg">
          <p>© 2025 Skincare Data Insights. All Rights Reserved.</p>
          <p className="text-sm mt-1">Contact: <a href="mailto:info@skincareinsights.com" className="text-sky-500 hover:underline">info@skincareinsights.com</a></p>
          <p className="text-sm mt-1">For more details, please visit our GitHub repository.</p>
        </footer>
      </div>
    </div>
  );
}
