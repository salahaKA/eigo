import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-links">
      <a href="https://www.instagram.com/eigo_shopping/" target="_blank">
          Instagram
        </a>
        <span> / </span>
        <a
          href="https://github.com/salahaKA/eigo_shoppingweb.git"
          target="_blank"
        >
          View Source on Github
        </a>
        <span> / </span>
        <a href="mailto:codestudy475@gmail.com" target="_blank">
          Need any help?
        </a>
        
        
        <span> / </span>
        <a href="https://www.instagram.com/eigo_shopping/" target="_blank">
          Read My Blog
        </a>
      </p>
      <p>
        &copy; {currentYear} <strong>Eigo</strong> - Online Shopping Store - Designed by Kadeejath Salaha
      </p>
    </footer>
  );
};

export default Footer;
