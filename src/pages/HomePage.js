// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import electronicsImage from '../images/category/electronics.jpg'
import computersImage from '../images/category/computers.jpg'
import wearablesImage from '../images/category/wearables.jpg'
import audioImage from '../images/category/audio.jpg'

const HomePage = () => {
  // Get first 4 products as featured products
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to E-Shop</h1>
        <p>Your favorite online store for all things tech.</p>
        <Link to="/products" className="btn">
          Shop Now
        </Link>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories">
          <Link to="/products?category=Electronics" className="category-card">
            <img src={electronicsImage} alt="Electronics" />
            <p>Electronics</p>
          </Link>
          <Link to="/products?category=Computers" className="category-card">
            <img src={computersImage} alt="Computers" />
            <p>Computers</p>
          </Link>
          <Link to="/products?category=Wearables" className="category-card">
            <img src={wearablesImage} alt="Wearables" />
            <p>Wearables</p>
          </Link>
          <Link to="/products?category=Audio" className="category-card">
            <img src={audioImage} alt="Audio" />
            <p>Audio</p>
          </Link>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Link to="/products" className="btn">
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
