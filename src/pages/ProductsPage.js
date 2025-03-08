import React from 'react';
import { useLocation } from 'react-router-dom';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProductsPage = () => {
  const query = useQuery();
  const category = query.get('category');
  const searchKeyword = query.get('search');

  let filteredProducts = products;

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  if (searchKeyword) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  }

  return (
    <div className="products-page">
      <h1>{category ? `${category} Products` : 'Our Products'}</h1>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
