import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.bigFooter}>
        <div className={styles.some}>
          <a href="links">Links</a>
          <a href="home">Home</a>
          <a href="shop">Shop</a>
          <a href="about">About</a>
          <a href="contact">Contact</a>
        </div>
        <div className={styles.other}>
          <a href="help">Help</a>
          <a href="payment Option">Payment Options</a>
          <a href="returns">Returns</a>
          <a href="privacy policies">Privacy Policies</a>
          <a href="FAQs">FAQs</a>
        </div>
        <div className={styles.letter}>
          <a href="newsletter">Newsletter</a>
          <div className="subscribe">
            <input
              type="text"
              placeholder="Enter your Email Address"
              className={styles.editText}
            />
            <a
              className="subscribe-btn"
              style={{
                background: "black",
                padding: "10px",
                borderBottom: " 0.5px white solid",
              }}
              href="subscribe"
            >
              SUBSCRIBE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
