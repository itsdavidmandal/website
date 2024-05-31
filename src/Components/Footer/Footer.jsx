import React from "react";
import "./Footer.css";
import footerlogo from "../../assets/footer_logo.svg";
import usericon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">

        {/* <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={usericon} alt="" />
            <input type="email" placeholder="Enter ur email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        // </div> */} 
        {/* Need to reincarnate it when the time comes */}

      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          <a
            href="https://twitter.com/itsdavidmandal"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Twitter
          </a>
          <a
            href="https://facebook.com/itsdavidmandal"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/itsdavidmandal"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Instagram
          </a>
        </p>
        <div className="footer-bottom-right"></div>
      </div>
    </div>
  );
};

export default Footer;
