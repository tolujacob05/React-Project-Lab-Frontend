import React from "react"
import F3 from "./Pictures/F3.jpg"
import styles from "./Promo.module.css"

const Promo = () => {
    return (
      <>
        <div className={styles.autum}>
          <div className={styles.shop}>
            <h1>
              Shopping experience <br /> made easier
            </h1>
            <div className={styles.buttons}>
              <p className={styles.p}> Find store nearby </p>
              <p className={styles.p}> Saved Stores </p>
            </div>
          </div>
          <div className={styles.F3}>
            <img src={F3} alt="this is an autum promo" />
          </div>
        </div>
      </>
    );
}
export default Promo;