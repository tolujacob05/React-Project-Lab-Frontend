import React from "react"
import styles from "./Promo.module.css"

const Promo = () => {
  return (
    <>
      <div className={styles.autum}>
        {/* <div className={styles.F1}>
          <img src={F1} alt="this is a promo" />
        </div> */}
        <div className={styles.shop}>
          <div className={styles.made}>
            <h1>
              Shopping experience
            <br />
              made easier
            </h1>
            <br />
          </div>
          <div className={styles.buttons}>
            <div className={styles.find}>
              <a href="findnearbystores"><h3>Find nearby stores</h3></a>
            </div>
            <div className={styles.savedStore}>
              <a href="savedstores"><h3>Saved Stores</h3></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Promo;