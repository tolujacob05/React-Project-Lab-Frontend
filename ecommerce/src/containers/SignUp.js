import React from "react"
import F10 from "./Pictures/F10.png"
import styles from "./SignUp.module.css"
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa"

const SignUp = () => {
    return(
        <>
            <div className={styles.field}>
                <div className={styles.sign}>
                    <img src={F10} alt="" />
                </div>

                <div className={styles.set}>
                    <div className={styles.all}>
                        <h2> Get Started</h2>
                        <p>Aleady have an account? Log in.</p>

                        <div className={styles.user}>
                            <h3>Username</h3>
                            <input type="text"  placeholder="Username" className={styles.name} />
                        </div>
                        <div className={styles.email}>
                            <h3>Email</h3>
                            <input type="text" placeholder="Email" className={styles.name} />
                        </div>
                        <div className={styles.phone}>
                            <h3>Phone Number</h3>
                            <input type="number" placeholder="Phone Number" className={styles.name} />
                        </div>
                        <div className={styles.pass}>
                            <h3>Password</h3>
                            <input type="text" placeholder="Password" className={styles.name} />
                        </div>

                        <div className={styles.in}>
                            <h2><a href="signin">Sign in</a></h2>
                        </div>
                    </div>

                    <div className={styles.split}>
                        <div className={styles.line1}>
                            <hr />
                        </div>
                        <h5>Or sign in with</h5>
                        <div className={styles.line2}>
                            <hr />
                        </div>
                    </div>

                    <div className={styles.awesome}>
                        <div>
                            < FaFacebook />
                        </div>
                        <div className={styles.twitter}>
                            <FaTwitter />
                        </div>
                        <div className={styles.google}>
                            <FaGoogle />
                        </div>
                    </div>
                    

                </div>
            </div>
        </>
    )
}

export default SignUp;