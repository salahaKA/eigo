import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const CommonLayout = ({ children }) => {
  return (
    <div className="container common-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
