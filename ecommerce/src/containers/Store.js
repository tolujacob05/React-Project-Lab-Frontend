import React from "react"
import F12 from "./Pictures/F12.png"
import styles from "./Store.module.css"

const Stores = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.text}>Recent Stores</div>
                <div className="card">
                    <img src={F12} alt="Shop" />
                    <h6> Name: Nao Supermarket</h6>
                </div>
                <div>
                    <img src={F12} alt="Shop" />
                    <h6> Name: Tech Heads</h6>
                </div>
                <div>
                    <img src={F12} alt="Shop" />
                    <h6> Name: Save Mart</h6>
                </div>
                <div>
                    <img src={F12} alt="Shop" />
                    <h6> Name: Walmart</h6>
                </div>
            </section>
        </>
    )
}

export default Stores;