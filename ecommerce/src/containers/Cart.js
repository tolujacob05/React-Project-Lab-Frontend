import React from "react"
import FullNavbar from "./FullNavbar"
import Footer from "./Footer"
import styles from "./Cart.module.css"
import F14 from "./Pictures/F14.png"
import Img from "./Img"
import F13 from "./Pictures/F13.png"
import F16 from "./Pictures/F16.png"
import F17 from "./Pictures/F17.png"
import F18 from "./Pictures/F18.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan, faBuildingColumns } from '@fortawesome/free-solid-svg-icons'
import {FaCcVisa, FaCcMastercard} from "react-icons/fa"
 
const Cart = () => {
    return (
        <>
            <div>
                <FullNavbar />
            </div>
            <div className={styles.cart}> Cart </div>
            <hr/>
            <div className={styles.large}>
                <div>
                    <div className={styles.line}>
                        <div className={styles.image}>
                            <img src={F14} alt="Shoes" /> 
                            <h5>
                                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing <br /> elit, sed do magna aliqua.
                            </h5>
                            <h4>
                                #3,000
                            </h4> 
                        </div>
                        <div className={styles.delete}>
                            <h5><FontAwesomeIcon icon={faTrashCan} /></h5>
                            Remove item
                        </div>
                        <div>
                            <Img />
                        </div>
                    </div> 
                </div> 

                <div className={styles.word}>
                    <h5>Summary</h5>
                    <div className={styles.total}>
                        <div className={styles.sub}>
                            <h5>Subtotal</h5>
                            <p> #5,500</p>
                        </div>
                        <div className={styles.cost}>
                            <h5>Delivery cost</h5>
                            <p>#1,500</p>
                        </div>
                        <hr />
                        <div className={styles.able}>
                            <h5>Total payable</h5>
                            <p>#7,000</p>
                        </div>
                        <hr />
                        <div className={styles.checkButton}>
                            <a href="checkout">Check Out</a>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className={styles.tie}>
                <h4> Payment method</h4>
                <div className={styles.pIcon}>
                    <FaCcVisa />
                    <FaCcMastercard />
                    <FontAwesomeIcon icon={faBuildingColumns} />
                </div>
            </div>
            

            <div className={styles.tank}>
                <div className={styles.things}>Saved Items</div>
                <div className={styles.saved}>
                    <div className={styles.watch}>                        
                        <img src={F16} alt="watch" />
                        <h6> Watch </h6>
                    </div>
                    <div className={styles.glasses}>
                        <img src={F17} alt="glasses" />
                        <h6> Glasses </h6>
                    </div>
                    <div className={styles.belt}>
                        <img src={F18} alt="belt" />
                        <h6> Belt </h6>
                    </div>
                    <div className={styles.suit}>
                        <img src={F13} alt="suit" />
                        <h6> Suit </h6>
                    </div>
                </div>
            </div>
            
            <div>
                <Footer />
            </div>
        </>
    )
}



export default Cart;