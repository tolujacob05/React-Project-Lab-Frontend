import React from "react"
import FullNavbar from "./FullNavbar"
import Footer from "./Footer"
import styles from "./CheckOut.module.css"
import { FaCcMastercard } from "react-icons/fa"

const CheckOut = () => {
    return (
        <>
            <div>
                <FullNavbar />
            </div>
            <div className={styles.for}>
                <div className={styles.house}>
                    <div className={styles.place}>
                        <h3>
                            Devilery Address <br />
                            Tolu Jacob  +23470*****1432 <br />
                            33, William avenue, Ikeja. <br />   
                            Lagos State, Nigeria. 31003
                        </h3>
                    </div>

                    <div className={styles.master}>
                        <div className={styles.num}>
                            <h3> Payment Method </h3>
                        </div>
                        <div className={styles.verve}>
                            <h5><FaCcMastercard /></h5> 
                            <h4>5342 **** **** 1920</h4>
                        </div>
                    </div>
                    <div className={styles.bigContainer}>
                        <div className={styles.formContainer}>
                            <h3>Ordering From</h3>
                            <input type="text" className={styles.form} />
                        </div>
                        <div className={styles.formContainer}>
                            <h3>Pick up by</h3>
                            <input type="text" className={styles.form} />
                        </div>
                        <div className={styles.pick}>
                            <h4>Pick up time</h4>
                        </div>
                        <div className={styles.time}>
                            <h3>ASAP</h3>
                            <h3>14:45</h3>
                        </div>
                    </div>
                </div>

                <div className={styles.method}>
                    <div className={styles.delivery}>
                        <h4>Summary</h4>
                        <div className={styles.total}>
                            <div className={styles.sub}>
                                <h5>Subtotal</h5>
                                <p> #5,500</p>
                            </div>
                            <div className={styles.cost}>
                                <h5>Delivery cost</h5>
                                <p>#1,500</p>
                            </div>
                            <div className={styles.able}>
                                <h5>Total payable</h5>
                                <p>#7,000</p>
                            </div>
                            
                        </div>
                        <div className={styles.pay}>
                            <h4> Pay Now </h4>
                            <h4> Pay in Store </h4>
                        </div>
                    </div>
                    <div className={styles.condition}>
                        By clicking on "pay" I accept all terms <br /> and condition.
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default CheckOut;