import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div className="details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h2>${product.price.toFixed(2)}</h2>
        <button onClick={() => addToCart(product)} className="btn">
          Add to Cart
        </button>

        <button onClick={() => addToWishlist(product)} className="btn wishlist-btn">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
