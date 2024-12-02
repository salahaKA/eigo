import React from 'react'
import { useParams } from 'react-router-dom';
import "./ProductView.css"
function ProductView() {
    const { productId } = useParams(); // Get product ID from URL
    // Dummy product data for demonstration
  const product = {
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    name: "Sample Product",
    description: "This is a detailed description of the product.",
    price: 499.99,
    stock: 10,
  };

  return (
    <div className="productt-view">
      <div className="productt-container">
        <img className="productt-image" src={product.image} alt={product.name} />
        <div className="productt-details">
          <h2 className="productt-name">{product.name}</h2>
          <p className="productt-description">{product.description}</p>
          <p className="productt-price">Price: ₹{product.price}</p>
          <p className={`productt-stock ${product.stock > 0 ? "in-stock" : "out-of-stock"}`}>
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>
          <button className="addd-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductView