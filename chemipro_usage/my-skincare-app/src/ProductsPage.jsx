import React from 'react';

// Product data as an array of structured objects
const products = [
  {
    name: 'Hydrating Cleanser',
    description: 'A gentle, hydrating cleanser that removes impurities without stripping the skin of its natural moisture.',
    price: '₹290',
  },
  {
    name: 'Vitamin C Serum',
    description: 'Brightens and evens out skin tone, reduces the appearance of dark spots, and provides antioxidant protection.',
    price: '₹390',
  },
  {
    name: 'Moisturizing Cream',
    description: 'A rich, nourishing cream that deeply hydrates and strengthens the skin barrier for a smooth, plump complexion.',
    price: '₹299',
  },
  {
    name: 'Exfoliating Toner',
    description: 'An AHA/BHA toner that gently exfoliates dead skin cells, unclogs pores, and refines skin texture.',
    price: '₹290',
  },
  {
    name: 'SPF 50 Sunscreen',
    description: 'A lightweight, broad-spectrum sunscreen that protects against UVA/UVB rays without a white cast.',
    price: '₹199',
  },
  {
    name: 'Retinol Night Cream',
    description: 'A powerful night cream formulated with retinol to reduce fine lines and wrinkles and improve skin firmness.',
    price: '₹290',
  },
];

const ProductsPage = () => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
    fontFamily: 'sans-serif',
    backgroundColor: '#f0f4f8',
    minHeight: '100vh',
    boxSizing: 'border-box',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1a202c',
    marginBottom: '8px',
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#4a5568',
    flexGrow: '1',
    marginBottom: '16px',
  };

  const priceStyle = {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#2d3748',
    textAlign: 'right',
  };

  return (
    <div style={containerStyle}>
      {products.map((product, index) => (
        <div 
          key={index} 
          style={cardStyle}
          onMouseEnter={e => Object.assign(e.currentTarget.style, cardHoverStyle)}
          onMouseLeave={e => Object.assign(e.currentTarget.style, cardStyle)}
        >
          <h2 style={titleStyle}>{product.name}</h2>
          <p style={descriptionStyle}>{product.description}</p>
          <div style={priceStyle}>{product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
