import React, { useState, useContext } from "react";
import { CartDispatchContext, addToCart } from "../Contexts/cart";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useContext(CartDispatchContext);
  const navigate = useNavigate();
  const { image, name, price, id, stock } = data;

  const handleAddToCart = () => {
    const product = { ...data, quantity: 1 };
    addToCart(dispatch, product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 3500);
  };

  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <h4 className="product-name">{name}</h4>
      <p className="product-price">{price}</p>
      <div className="product-action">
        <button
          className={!isAdded ? "" : "added"}
          type="button"
          onClick={handleAddToCart}
        >
          {!isAdded ? "ADD TO CART" : "✔ ADDED"}
        </button>
        <button
          className="product-view"
          onClick={() => navigate(`/product/${id}`)} // Use id from data
        >
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
