import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faBlogger,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-links">
      <a href="https://www.instagram.com/eigoshopping/" target="_blank">
      <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
        
        <span> / </span>
        <a href="mailto:codestudy475@gmail.com" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} /> Need any help?
        </a>
        
        
        <span> / </span>
        <a href="https://www.instagram.com/eigoshopping/" target="_blank">
        <FontAwesomeIcon icon={faBlogger} /> Read My Blog
        </a>
      </p>
      <p>
        &copy; {currentYear} <strong>Eigo</strong> - Online Shopping Store - Designed by Kadeejath Salaha 
        {/* <a href="https://www.instagram.com/code_study4/" target="_blank">
      <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a> */}
        {/* <span> / </span> */}
        {/* <a
          href="https://github.com/salahaKA/eigoshoppingweb.git"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} /> View Source on Github
        </a> */}
      </p>
    </footer>
  );
};

export default Footer;
