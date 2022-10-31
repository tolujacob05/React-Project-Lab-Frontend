import React from "react"
import FullNavbar from "./FullNavbar"
import Footer from "./Footer"
import styles from "./Account.module.css"

const Account = () => {
    return (
        <>
            <div>
                <FullNavbar />
            </div>
            <div className={styles.have}>
                <h1> Have an Account?</h1>
                <div className={styles.login}>
                    <a href="login">Login</a>
                </div>
                <div className={styles.or}>
                    <h2>Or</h2>
                </div>
                <div className={styles.signup}>
                    <a href="signup">Signup</a>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Account;