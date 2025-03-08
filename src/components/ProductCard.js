import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h2>{product.name}</h2>
    <p>${product.price.toFixed(2)}</p>
    <Link to={`/products/${product.id}`} className="btn">
      View Details
    </Link>
  </div>
);

export default ProductCard;
