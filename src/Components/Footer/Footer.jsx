import React from "react";
import "./Footer.css";
import footerlogo from "../../assets/footer_logo.svg";
import usericon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footerlogo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            corporis, unde amet deleniti sit maiores libero dicta saepe impedit
            in voluptas quae eius animi placeat assumenda rem sapiente tempore!
            Fugiat.
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={usericon} alt="" />
            <input type="email" placeholder="Enter ur email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
          consequuntur veritatis fuga natus, labore quas ex et sequi asperiores
          dignissimos alias sed temporibus iste, sapiente molestias. Excepturi
          temporibus quas delectus?
        </p>
        <div className="footer-bottom-right"></div>
      </div>
    </div>
  );
};

export default Footer;
