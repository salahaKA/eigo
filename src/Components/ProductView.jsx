import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./ProductView.css";

function ProductView() {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product data from JSON
    fetch(`${process.env.PUBLIC_URL}/products.json`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch products");
        return response.json();
      })
      .then((data) => {
        console.log("Fetched products:", data); // Debug
        const foundProduct = data.find((item) => item.id === parseInt(id, 10)); // Ensure `id` matches
        setProduct(foundProduct || null); // Set product or null if not found
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProduct(null);
      });
  }, [id]);

  if (!product) {
    return <p>Product not found. Please check the ID.</p>;
  }

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

export default ProductView;
















// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import "./ProductView.css";

// function ProductView() {
//   const { id } = useParams(); // Get product ID from URL
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     console.log("Product ID from URL:", id); // Debug
//     fetch(`${process.env.PUBLIC_URL}/products.json`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Fetched products data:", data); // Debug
//         const foundProduct = data.find((item) => item.id === parseInt(id, 10));
//         console.log("Found product:", foundProduct); // Debug
//         setProduct(foundProduct || null);
//       })
//       .catch((error) => {
//         console.error("Error fetching products data:", error);
//       });
//   }, [id]);

//   if (!product) {
//     return <p>Product not found. Please check the ID.</p>;
//   }

//   return (
//     <div className="productt-view">
//       <div className="productt-container">
//         <img className="productt-image" src={product.image} alt={product.name} />
//         <div className="productt-details">
//           <h2 className="productt-name">{product.name}</h2>
//           <p className="productt-description">{product.description}</p>
//           <p className="productt-price">Price: ₹{product.price}</p>
//           <p
//             className={`productt-stock ${
//               product.stock > 0 ? "in-stock" : "out-of-stock"
//             }`}
//           >
//             {product.stock > 0 ? "In Stock" : "Out of Stock"}
//           </p>
//           <button className="addd-to-cart">Add to Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductView;
