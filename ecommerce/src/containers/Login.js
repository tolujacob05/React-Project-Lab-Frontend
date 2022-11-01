import React from "react"
import F10 from "./Pictures/F10.png"
import styles from "./Login.module.css"
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa"

const Login = () => {
    return (
        <>
            
            <div className={styles.field}>
                {/* Image */}
                <div className={styles.sign}>
                    <img src={F10} alt="" />
                </div>

                <div className={styles.set}>
                    <div className={styles.all}>
                        <h2> Log in </h2>

                        <div className={styles.email}>
                            <h3>Email</h3>
                            <input type="text" placeholder="Email" className={styles.name} />
                        </div>
                        <div className={styles.pass}>
                            <h3>Password</h3>
                            <input type="text" placeholder="Password" className={styles.name} />
                        </div>

                        <div className={styles.in}>
                            <h2><a href="signin">Login</a></h2>
                            
                                <p>Don't have an account?<a href="signup">Sign up</a></p>
                            
                        </div>
                    </div>

                    {/* Horizontal line */}
                    <div className={styles.split}>
                        <div className={styles.line1}>
                            <hr />
                        </div>
                        <h5>Or login in with</h5>
                        <div className={styles.line2}>
                            <hr />
                        </div>
                    </div>

                    {/* Icons */}
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

export default Login;