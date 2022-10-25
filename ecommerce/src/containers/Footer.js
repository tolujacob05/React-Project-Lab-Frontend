import React from "react"
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer>
            <div className={styles.bigFooter}>
                <div className={styles.address}>
                    <a href="address">Address</a>
                </div>
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
                </div>
                    <div className={styles.letter}>
                    <a href="newsletter">Newsletter</a>
                    <a href="subscribe"><input type="text" placeholder="Enter your Email Address" className={styles.editText} />SUBSCRIBE</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;