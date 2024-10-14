import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./Contexts/auth";
import CommonProvider from "./Contexts/common";
import ProductsProvider from "./Contexts/products";
import CartProvider from "./Contexts/cart";
import CheckoutProvider from "./Contexts/checkout";
import RouteWrapper from "./Layouts/RouteWrapper";
import AuthLayout from "./Layouts/AuthLayout";
import CommonLayout from "./Layouts/CommonLayout";
import AuthPage from "./Pages/auth";
import HomePage from "./Pages/home";
import CheckoutPage from "./Pages/checkout";
import "./Assets/css/style.css"
function App() {
  return (
    <AuthProvider>
      <CommonProvider>
        <ProductsProvider>
          <CartProvider>
            <CheckoutProvider>
              <Router>
                <Routes>
                  <Route 
                    path="/" 
                    element={<RouteWrapper component={HomePage} layout={CommonLayout} />} 
                  />
                  <Route 
                    path="/checkout" 
                    element={<RouteWrapper component={CheckoutPage} layout={CommonLayout} isPrivate />} 
                  />
                  <Route 
                    path="/auth" 
                    element={<RouteWrapper component={AuthPage} layout={AuthLayout} />} 
                  />
                </Routes>
              </Router>
            </CheckoutProvider>
          </CartProvider>
        </ProductsProvider>
      </CommonProvider>
    </AuthProvider>
  );
}

export default App;
