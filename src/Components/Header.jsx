import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CartStateContext,
  CartDispatchContext,
  toggleCartPopup,
} from "../Contexts/cart";
import { CommonDispatchContext, setSearchKeyword } from "../Contexts/common";
import CartPreview from "../Components/CartPreview";

const Header = (props) => {
  const { items: cartItems, isCartOpen } = useContext(CartStateContext);
  const commonDispatch = useContext(CommonDispatchContext);
  const cartDispatch = useContext(CartDispatchContext);
  const cartQuantity = cartItems.length;
  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0);

    const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSearchInput = (event) => {
    return setSearchKeyword(commonDispatch, event.target.value);
  };

  const handleCartButton = (event) => {
    event.preventDefault();
    return toggleCartPopup(cartDispatch);
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.className = isDarkMode ? "light-mode" : "dark-mode"; // Update body class
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <header className={`header ${isDarkMode ? "dark-header" : "light-header"}`}>
      <div className="container">
        <div className="brand">
          <Link to="/">
            <img
              className="logo"
              src={`${process.env.PUBLIC_URL}/eigoNew.png`}
              alt="Eigo Brand Logo"
            />
          </Link>
        </div>

        <div className="theme-toggler">
          <button onClick={toggleTheme} className="theme-toggle-button">
            {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>

        <div className="search">
          <a
            className="mobile-search"
            href="#"
            // onClick={this.handleMobileSearch.bind(this)}
          >
            <img
              src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png"
              alt="search"
            />
          </a>
          <form action="#" method="get" className="search-form">
            <a
              className="back-button"
              href="#"
              // onClick={this.handleSearchNav.bind(this)}
            >
              <img
                src="https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png"
                alt="back"
              />
            </a>
            <input
              type="search"
              placeholder="Search for eigo products"
              className="search-keyword"
              onChange={handleSearchInput}
            />
            <button
              className="search-button"
              type="submit"
              // onClick={this.handleSubmit.bind(this)}
            />
          </form>
        </div>

        <div className="cart">
          <div className="cart-info">
            <table>
              <tbody>
                <tr>
                  <td>No. of items</td>
                  <td>:</td>
                  <td>
                    <strong>{cartQuantity}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Sub Total</td>
                  <td>:</td>
                  <td>
                    <strong>{cartTotal}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a className="cart-icon" href="#" onClick={handleCartButton}>
            <img
              className={props.cartBounce ? "tada" : " "}
              src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
              alt="Cart"
            />
            {cartQuantity ? (
              <span className="cart-count">{cartQuantity}</span>
            ) : (
              ""
            )}
          </a>
          <CartPreview />
        </div>

        <div className="logout">
          <button onClick={handleLogout} className="logout-button">
            <i
              className="fas fa-sign-out-alt"
              style={{ color: "red", marginRight: "8px" }}
            ></i>
            
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
