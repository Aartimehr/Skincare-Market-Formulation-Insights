import React from 'react';

const ReportPage = () => (
  <div className="space-y-8 p-4">
    <h2 className="text-4xl font-extrabold text-indigo-600 text-center">Skincare Market Report</h2>
    <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto">
      This comprehensive report provides a data-driven overview of the current skincare market, highlighting key trends and insights.
    </p>

    {/* Executive Summary Section */}
    <div className="bg-white p-6 rounded-2xl shadow-xl space-y-4">
      <h3 className="text-2xl font-semibold text-sky-500">Executive Summary</h3>
      <p className="text-gray-600">
        This report provides an in-depth analysis of the current skincare market based on a dataset of popular products. The analysis reveals key trends, top-performing brands and products, and the most sought-after ingredients. The market shows strong growth, with a clear consumer preference for products with specific, problem-solving active ingredients like Niacinamide and Salicylic Acid.
      </p>
    </div>

    {/* Key Market Metrics Section */}
    <div className="bg-white p-6 rounded-2xl shadow-xl">
      <h3 className="text-2xl font-semibold text-sky-500 mb-4">Key Market Metrics</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>**Total Products Analyzed:** 11</li>
        <li>**Unique Brands Identified:** 5</li>
        <li>**Most Popular Category:** Serum</li>
        <li>**Top-Selling Product:** Minimalist 10% Niacinamide Serum</li>
        <li>**Highest Rated Product:** PURITO Centella Unscented Serum (4.9/5.0)</li>
      </ul>
    </div>

    {/* Brand and Product Analysis Section */}
    <div className="bg-white p-6 rounded-2xl shadow-xl space-y-4">
      <h3 className="text-2xl font-semibold text-sky-500">Brand and Product Analysis</h3>
      <p className="text-gray-600">
        The market is dominated by a few key players, with **Minimalist** and **The Derma Co** leading in terms of product presence and sales.
      </p>
      <h4 className="text-xl font-semibold text-indigo-600 mt-6">Top 5 Selling Products by Sales:</h4>
      <ol className="list-decimal list-inside text-gray-600 space-y-1">
        <li>**Minimalist** 10% Niacinamide Serum: **1200 sales**</li>
        <li>**The Derma Co** 2% Salicylic Acid Face Serum: **1100 sales**</li>
        <li>**Dot & Key** Watermelon Superglow Moisturizer: **950 sales**</li>
        <li>**The Derma Co** 1% Hyaluronic Acid Sunscreen: **910 sales**</li>
        <li>**L'oreal Paris** Hyaluronic Acid Serum: **880 sales**</li>
      </ol>
    </div>

    {/* Ingredient and Usage Trends Section */}
    <div className="bg-white p-6 rounded-2xl shadow-xl space-y-4">
      <h3 className="text-2xl font-semibold text-sky-500">Ingredient and Usage Trends</h3>
      <p className="text-gray-600">
        Consumers are increasingly focused on products with targeted benefits. The most frequently appearing active ingredients in our dataset are those for **Hydrating**, **Anti-acne**, and **Cleansing**.
      </p>
      <h4 className="text-xl font-semibold text-indigo-600 mt-6">Key Active Ingredient Trends:</h4>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>**Hydrating:** Appears in products from brands like L'oreal Paris and Dot & Key.</li>
        <li>**Anti-acne:** A prominent feature in products from Minimalist and The Derma Co.</li>
        <li>**Cleansing:** Found in essentials like face washes and masks from Ponds and The Face Shop.</li>
      </ul>
    </div>

    {/* Conclusion Section */}
    <div className="bg-white p-6 rounded-2xl shadow-xl space-y-4">
      <h3 className="text-2xl font-semibold text-sky-500">Conclusion and Recommendations</h3>
      <p className="text-gray-600">
        The skincare market is highly competitive and driven by specific consumer needs. Brands that focus on high-quality, targeted products with popular ingredients like Niacinamide and Salicylic Acid are performing exceptionally well. We recommend that new product development focus on these key trends to capture market share.
      </p>
    </div>

    <div className="text-center text-gray-400 text-sm mt-8">
      <p>*This report is based on the provided mock data and is for illustrative purposes only.*</p>
    </div>
  </div>
);

export default ReportPage;
