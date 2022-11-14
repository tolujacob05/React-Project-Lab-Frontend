import React from "react";
import F12 from "./Pictures/F12.png";
import styles from "./StorePage.module.css";

const StorePage = () => {
  return (
    <div className={styles.recent}>
      <div className={styles.text}>Recent Stores</div>
      <section className={styles.container}>
        <div className="card">
          <img src={F12} alt="Shop" />
          <h6>  Amazon</h6>
        </div>
        <div>
          <img src={F12} alt="Shop" />
          <h6>  Tech Heads</h6>
        </div>
        <div>
          <img src={F12} alt="Shop" />
          <h6>  Save Mart</h6>
        </div>
        <div>
          <img src={F12} alt="Shop" />
          <h6>  Walmart</h6>
        </div>
        <div>
          <img src={F12} alt="Shop" />
          <h6>  Walmart</h6>
        </div>
      </section>
    </div>
  );
};

export default StorePage;
