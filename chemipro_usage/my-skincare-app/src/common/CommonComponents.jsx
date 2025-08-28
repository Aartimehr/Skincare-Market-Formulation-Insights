import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Loader2 } from 'lucide-react';

// Reusable component to display a loading spinner.
export const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center p-8 text-white">
    <Loader2 className="animate-spin h-8 w-8 text-teal-400" />
    <span className="mt-3 text-lg font-medium">Loading data...</span>
  </div>
);

// Reusable component to display a "not found" message.
export const NotFoundMessage = ({ message }) => (
  <div className="bg-gray-700 text-white p-6 rounded-xl m-4 shadow-lg text-center font-semibold">
    <p>{message}</p>
  </div>
);

// Animated counter component for key metrics
export const AnimatedNumber = ({ value }) => {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: value || 0 },
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.span>{number.to(n => n.toFixed(0))}</animated.span>;
};

// Data-driven bar chart component with animation
export const BarChart = ({ data, title, barColor, labelColor }) => {
  if (!data || data.length === 0) {
    return <NotFoundMessage message={`No data available for ${title}`} />;
  }
  const maxValue = Math.max(...data.map(item => item.value));
  return (
    <div className="p-6 bg-gray-700 rounded-xl shadow-md">
      <h4 className="text-lg font-semibold mb-4 text-center text-gray-200">{title}</h4>
      <div className="flex flex-col space-y-4">
        {data.map((item, index) => {
          const barStyle = useSpring({
            from: { width: '0%' },
            to: { width: `${(item.value / maxValue) * 100}%` },
            delay: 200 + index * 100,
            config: { tension: 100, friction: 10 },
          });

          return (
            <div key={index} className="w-full flex items-center space-x-4">
              <span className={`text-sm font-medium ${labelColor} w-24 truncate text-right`}>{item.label}</span>
              <div className="relative flex-grow h-4 bg-gray-600 rounded-full overflow-hidden">
                <animated.div
                  className={`absolute top-0 left-0 ${barColor} rounded-full`}
                  style={barStyle}
                />
              </div>
              <span className="text-sm text-gray-400 font-bold w-12 text-right">{item.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// New Line Chart component with react-spring and SVG
export const LineChart = ({ data, title }) => {
  if (!data || data.length === 0) {
    return <NotFoundMessage message={`No data available for ${title}`} />;
  }
  const [svgWidth, setSvgWidth] = useState(0);
  const [svgHeight, setSvgHeight] = useState(200);

  const containerRef = React.useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      setSvgWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const maxValue = Math.max(...data.map(d => d.value));
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * svgWidth;
    const y = svgHeight - (d.value / maxValue) * svgHeight * 0.8;
    return `${x},${y}`;
  }).join(' ');

  const pathSpring = useSpring({
    from: { strokeDashoffset: 1000 },
    to: { strokeDashoffset: 0 },
    config: { tension: 10, friction: 10 },
    delay: 300
  });

  return (
    <div className="p-6 bg-gray-700 rounded-xl shadow-md flex flex-col items-center">
      <h4 className="text-lg font-semibold mb-4 text-center text-gray-200">{title}</h4>
      <div ref={containerRef} className="w-full h-auto">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} preserveAspectRatio="xMidYMid meet" className="w-full">
          {/* Grid lines */}
          <line x1="0" y1={svgHeight * 0.2} x2={svgWidth} y2={svgHeight * 0.2} stroke="#4B5563" strokeDasharray="5,5" />
          <line x1="0" y1={svgHeight * 0.5} x2={svgWidth} y2={svgHeight * 0.5} stroke="#4B5563" strokeDasharray="5,5" />
          <line x1="0" y1={svgHeight * 0.8} x2={svgWidth} y2={svgHeight * 0.8} stroke="#4B5563" strokeDasharray="5,5" />

          {/* Path for the line chart */}
          <animated.path
            d={`M${points}`}
            fill="none"
            stroke="#14B8A6"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
            style={pathSpring}
            strokeDasharray={1000}
          />
          {/* Data points */}
          {data.map((d, i) => (
            <circle
              key={i}
              cx={(i / (data.length - 1)) * svgWidth}
              cy={svgHeight - (d.value / maxValue) * svgHeight * 0.8}
              r="5"
              fill="#14B8A6"
              stroke="#0f172a"
              strokeWidth="2"
            />
          ))}

          {/* Labels */}
          {data.map((d, i) => (
            <text
              key={i}
              x={(i / (data.length - 1)) * svgWidth}
              y={svgHeight - 10}
              textAnchor="middle"
              className="text-xs text-gray-400"
              fill="#9CA3AF"
            >
              {d.label}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
};
