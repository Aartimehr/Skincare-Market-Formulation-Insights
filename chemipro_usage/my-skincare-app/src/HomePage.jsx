// HomePage.js
// This component displays the main page of the Skincare Data Insights project.
// The image paths have been set to relative URLs for assets located in the public directory.

import React from 'react';

const HomePage = () => {
  // Correct paths for images stored in the 'public' directory.
  // The leading '/' indicates the root of the public folder.
  const dotandkeyLogo = "/dotandkeylogo.jpg";
  const minimalistLogo = "/Minimalistlogo.jpg";
  const pondLogo = "/pondlogo.jpg";
  const lorealparisLogo = "/L'orealParislogo.jpg";
  const puritoLogo = "/PURITOlogo.jpg";
  const thedermaLogo = "/thedermacologo.webp";
  const thefaceshopLogo = "/thefaceshoplogo.webp";
  const mainImage = "/main.jpg";

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-indigo-600">About the Project</h2>
      <p className="text-gray-600">
        This is a full-stack data analytics and visualization project designed to collect, process, and display global skincare usage data. Our goal is to provide a comprehensive, data-driven perspective on the skincare market.
      </p>

      {/* Section for Project Motive with the heading and text to the left */}
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h3 className="text-xl font-semibold text-sky-500 mb-4 text-left">Motive</h3>
        {/* Container for horizontal alignment of text and image */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between space-y-4 md:space-y-0 md:space-x-8">
          {/* Left side: Paragraph with line breaks */}
          <div className="md:w-1/2">
            <p className="text-gray-600">
              The primary motive for this project is to gain insights into global skincare trends.
              <br />
              By collecting and analyzing data on product types, brands, and active ingredients, we can identify market patterns and consumer preferences.
              <br />
              This data-driven approach helps in making informed business decisions and product development strategies within the beauty industry.
            </p>
          </div>
          {/* Right side: Centered Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={mainImage}
              alt="An image representing the skincare project"
              className="rounded-lg shadow-md w-full max-w-sm h-auto"
            />
          </div>
        </div>
      </div>

      {/* Logos Section - with animation and spacing */}
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h3 className="text-2xl font-semibold text-indigo-600 mb-4 text-center">Top Brands Scraped From Website</h3>
        <style>{`
          @keyframes hop {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }
          .animate-hop {
            animation: hop 1s infinite;
          }
        `}</style>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 rounded-lg">
          <img src={pondLogo} alt="Ponds logo" className="w-full h-auto p-4 bg-gray-100 rounded-lg animate-hop" style={{ animationDelay: '0s' }} />
          <img src={minimalistLogo} alt="Minimalist logo" className="w-full h-auto p-4 bg-gray-100 rounded-lg animate-hop" style={{ animationDelay: '0.1s' }} />
          <img src={dotandkeyLogo} alt="Dot and Key logo" className="w-full h-auto p-4 bg-gray-100 rounded-lg animate-hop" style={{ animationDelay: '0.2s' }} />
          <img src={lorealparisLogo} alt="L'oreal Paris logo" className="w-full h-auto p-4 bg-gray-100 rounded-lg animate-hop" style={{ animationDelay: '0.3s' }} />
          <img src={puritoLogo} alt="PURITO logo" className="w-full h-auto p-4 bg-gray-100 rounded-lg animate-hop" style={{ animationDelay: '0.4s' }} />
          <img src={thedermaLogo} alt="The Derma Co logo" className="w-full h-auto p-4 bg-gray-100 rounded-lg animate-hop" style={{ animationDelay: '0.5s' }} />
          <img src={thefaceshopLogo} alt="The Face Shop logo" className="w-full h-auto p-4 bg-gray-100 rounded-lg animate-hop" style={{ animationDelay: '0.6s' }} />
        </div>
      </div>
      
      {/* Section for Data Sourcing */}
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h3 className="text-xl font-semibold text-sky-500 mb-2">Data Source & Pipeline</h3>
        <p className="text-gray-600">
          Data is collected through an automated web scraping pipeline built with Python and Scrapy. This pipeline is designed to continuously ingest data from various e-commerce sites and beauty forums. The raw data is then meticulously cleaned, normalized, and stored in a PostgreSQL database, which serves as the robust backend for this application. The pipeline includes automated checks to ensure data quality and integrity before it's made available via our API.
        </p>
      </div>

      {/* Section for Technology Stack */}
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h3 className="text-xl font-semibold text-sky-500 mb-2">Technology Stack</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>**Frontend:** React.js and Tailwind CSS for a dynamic and responsive user interface.</li>
          <li>**Backend:** Node.js and Express to create a high-performance RESTful API.</li>
          <li>**Database:** PostgreSQL for reliable, structured data storage optimized for complex queries.</li>
          <li>**Data Processing:** Python (Scrapy, Pandas) for data collection, cleaning, and transformation.</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
