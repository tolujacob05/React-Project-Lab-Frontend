import React from "react";
import FullNavbar from "./FullNavbar";
import Footer from "./Footer";
import styles from "./Saved.module.css"
import F14 from "./Pictures/F14.png"
import F20 from "./Pictures/F20.png"
import F19 from "./Pictures/F19.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Saved = () => (
    <>
        <div>
            <FullNavbar />
        </div>
        <div className={styles.line}>
            <h3>Saved Items</h3>
            <hr />
        </div>
        <div className={styles.item}>
            <div className={styles.price}>
                <img src={F14} alt="Shoes" />
                <h5>#3,000</h5>
            </div>
            <h5>labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, <br /> quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo</h5>
            <div className={styles.add}>
                <div className={styles.stores}>
                    <h5>Add to Cart</h5>
                </div>
                <div className={styles.font}>
                    <FontAwesomeIcon icon={faTrashCan} />
                    <h6>Remove item</h6>
                </div>
            </div>
        </div>

        <div className={styles.whole}>
            <hr />
        </div>
        <div className={styles.want}>
            <div className={styles.picks}>
                <img src={F20} alt="shirt" />
                <h5>#12,000</h5>
            </div>
            <h5>labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, <br /> quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo</h5>
            <div className={styles.added}>
                <div className={styles.export}>
                    <h5>Add to Cart</h5>
                </div>
                <div className={styles.click}>
                    <FontAwesomeIcon icon={faTrashCan} />
                    <h6>Remove item</h6>
                </div>
            </div>
        </div>
        

        <div className={styles.bother}>
            <hr />
        </div>
        <div className={styles.save}>
            <div className={styles.pink}>
                <img src={F19} alt="Pink Bag" />
                <h5>#6,500</h5>
            </div>
            <h5>labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, <br /> quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo</h5>
            <div className={styles.bag}>
                <div className={styles.import}>
                    <h5>Add to Cart</h5>
                </div>
                <div className={styles.style}>
                    <FontAwesomeIcon icon={faTrashCan} />
                    <h6>Remove item</h6>
                </div>
            </div>
        </div>
        

        <div>
            <Footer />
        </div>
    </>
)

export default Saved;