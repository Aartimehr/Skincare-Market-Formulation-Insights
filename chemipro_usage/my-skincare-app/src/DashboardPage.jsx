import React from 'react';

// --- Custom SVG Bar Chart Component ---
const BarChart = ({ data, width, height, xKey, yKey, title, barColor, axisColor, labelColor }) => {
  if (!data || data.length === 0) return null;

  const margin = { top: 20, right: 20, bottom: 40, left: 50 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const maxValue = Math.max(...data.map(d => d[yKey]));
  const xScale = (d, i) => i * (chartWidth / data.length) + (chartWidth / data.length) / 2;
  const yScale = (d) => chartHeight - (d[yKey] / maxValue) * chartHeight;

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl">
      <h3 className="text-2xl font-semibold text-sky-500 mb-4">{title}</h3>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="font-sans">
        {/* Chart Background Grid */}
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          {/* Y-axis grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((value, i) => (
            <line
              key={i}
              x1="0" y1={chartHeight * (1 - value)}
              x2={chartWidth} y2={chartHeight * (1 - value)}
              stroke="#E2E8F0" strokeDasharray="3 3"
            />
          ))}
          {/* Bars */}
          {data.map((d, i) => (
            <React.Fragment key={i}>
              <rect
                x={xScale(d, i) - 10}
                y={yScale(d)}
                width="20"
                height={chartHeight - yScale(d)}
                fill={barColor}
                rx="4"
                className="transition-all duration-300 ease-in-out hover:opacity-80"
              />
              {/* Labels */}
              <text
                x={xScale(d, i)}
                y={chartHeight + 20}
                textAnchor="middle"
                fill={labelColor}
                fontSize="12"
              >
                {d[xKey]}
              </text>
            </React.Fragment>
          ))}
          {/* Y-axis labels */}
          <text
            x="-30"
            y={chartHeight / 2}
            textAnchor="middle"
            transform={`rotate(-90, -30, ${chartHeight / 2})`}
            fill={labelColor}
            fontSize="14"
            fontWeight="bold"
          >
            {yKey}
          </text>
          {/* X-axis line */}
          <line x1="0" y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke={axisColor} />
          {/* Y-axis line */}
          <line x1="0" y1="0" x2="0" y2={chartHeight} stroke={axisColor} />
        </g>
      </svg>
    </div>
  );
};

// --- Custom SVG Line Chart Component ---
const LineChart = ({ data, width, height, xKey, yKey, title, lineColor, dotColor, axisColor, labelColor }) => {
  if (!data || data.length === 0) return null;

  const margin = { top: 20, right: 20, bottom: 40, left: 50 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const maxValue = Math.max(...data.map(d => d[yKey]));
  const xScale = (d, i) => i * (chartWidth / (data.length - 1));
  const yScale = (d) => chartHeight - (d[yKey] / maxValue) * chartHeight;

  const pathData = data.reduce((acc, d, i) => {
    const x = xScale(d, i);
    const y = yScale(d);
    return acc + (i === 0 ? `M${x},${y}` : `L${x},${y}`);
  }, '');

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl">
      <h3 className="text-2xl font-semibold text-sky-500 mb-4">{title}</h3>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="font-sans">
        {/* Chart Background Grid */}
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          {/* Y-axis grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((value, i) => (
            <line
              key={i}
              x1="0" y1={chartHeight * (1 - value)}
              x2={chartWidth} y2={chartHeight * (1 - value)}
              stroke="#E2E8F0" strokeDasharray="3 3"
            />
          ))}
          {/* Line Path */}
          <path
            d={pathData}
            fill="none"
            stroke={lineColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Data Points */}
          {data.map((d, i) => (
            <circle
              key={i}
              cx={xScale(d, i)}
              cy={yScale(d)}
              r="4"
              fill={dotColor}
              stroke="white"
              strokeWidth="1.5"
              className="transition-transform duration-300 ease-in-out hover:scale-150"
            >
              <title>{`${d[xKey]}: ${d[yKey]}`}</title>
            </circle>
          ))}
          {/* Labels and Axes */}
          {data.map((d, i) => (
            <text
              key={i}
              x={xScale(d, i)}
              y={chartHeight + 20}
              textAnchor="middle"
              fill={labelColor}
              fontSize="12"
            >
              {d[xKey]}
            </text>
          ))}
          {/* Y-axis labels */}
          <text
            x="-30"
            y={chartHeight / 2}
            textAnchor="middle"
            transform={`rotate(-90, -30, ${chartHeight / 2})`}
            fill={labelColor}
            fontSize="14"
            fontWeight="bold"
          >
            {yKey}
          </text>
          {/* X-axis line */}
          <line x1="0" y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke={axisColor} />
          {/* Y-axis line */}
          <line x1="0" y1="0" x2="0" y2={chartHeight} stroke={axisColor} />
        </g>
      </svg>
    </div>
  );
};


// --- Dashboard Page Component ---
const DashboardPage = () => {
  // Mock data for charts
  const salesData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 2000 },
    { name: 'Apr', sales: 2780 },
    { name: 'May', sales: 1890 },
    { name: 'Jun', sales: 2390 },
    { name: 'Jul', sales: 3490 },
  ];
  
  const brandData = [
    { brand: 'Minimalist', products: 5 },
    { brand: 'The Derma Co', products: 3 },
    { brand: 'Dot & Key', products: 2 },
    { brand: "L'oreal Paris", products: 2 },
    { brand: 'Ponds', products: 2 },
    { brand: 'PURITO', products: 1 },
    { brand: 'The Face Shop', products: 1 },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-indigo-600">Data Dashboard</h2>
      <p className="text-gray-600">
        This dashboard provides an overview of the skincare market based on our collected data, offering key metrics and visual insights.
      </p>

      {/* Key Metrics Section */}
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h3 className="text-2xl font-semibold text-sky-500 mb-4">Key Metrics Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-indigo-600">750+</p>
            <p className="text-gray-600">Total Products Analyzed</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-indigo-600">25+</p>
            <p className="text-gray-600">Unique Brands Tracked</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-indigo-600">100+</p>
            <p className="text-gray-600">Active Ingredients Identified</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-indigo-600">~390 INR</p>
            <p className="text-gray-600">Average Product Price</p>
          </div>
        </div>
      </div>

      {/* Product Distribution Chart Section */}
      <BarChart
        data={brandData}
        width={700}
        height={350}
        xKey="brand"
        yKey="products"
        title="Product Distribution by Brand"
        barColor="#3B82F6"
        axisColor="#6B7280"
        labelColor="#6B7280"
      />

      {/* Sales Trend Chart Section */}
      <LineChart
        data={salesData}
        width={700}
        height={350}
        xKey="name"
        yKey="sales"
        title="Sales Trend (Last 6 Months)"
        lineColor="#10B981"
        dotColor="#10B981"
        axisColor="#6B7280"
        labelColor="#6B7280"
      />
    </div>
  );
};

export default DashboardPage;
