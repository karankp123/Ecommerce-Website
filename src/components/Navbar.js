import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <h1 className="logo">
        <Link to="/">E-Shop</Link>
      </h1>
      <SearchBar />
      <ul className="nav-links">
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li className="dropdown">
          <span>Categories</span>
          <ul className="dropdown-menu">
            <li>
              <Link to="/products?category=Electronics">Electronics</Link>
            </li>
            <li>
              <Link to="/products?category=Computers">Computers</Link>
            </li>
            <li>
              <Link to="/products?category=Wearables">Wearables</Link>
            </li>
            <li>
              <Link to="/products?category=Cameras">Cameras</Link>
            </li>
            <li>
              <Link to="/products?category=Audio">Audio</Link>
            </li>
          </ul>
        </li>
        <li>
  <Link to="/wishlist">Wishlist</Link>
</li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
