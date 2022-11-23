import React, { useEffect, useState } from "react";
import styles from "./StorePage.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import F16 from "./Pictures/F16.png";
import F6 from "./Pictures/F6.png";
import F7 from "./Pictures/F7.png";
import F8 from "./Pictures/F8.png";

const StorePage = () => {
  const [shops, setShops] = useState(null);
  useEffect(() => {
    var config = {
      method: "get",
      url: "https://shopify-nextgen.herokuapp.com/api/v1/shops/",
    };

    axios(config)
      .then(function (response) {
        setShops(response?.data?.data?.shops);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className={styles.recent}>
        <div className={styles.text}>Stores</div>
        <section className={styles.container}>
          {shops?.map((shop, index) =>
            index < 6 ? (
              <Link to={`/shops/${shop?.name}/${shop._id}`} className="card">
                <img className={styles.shopImg} src={shop?.image}  alt="Shop" />
                <h6>{shop?.name}</h6>
              </Link>
            ) : null
          )}
        </section>
      </div>

      {/*  Best Prices */}
      <div className={styles.best}>
        <div>
          <h4>Best Prices</h4>
        </div>
        <div className={styles.prices}>
          <div className={styles.chroma}>
            <img src={F16} alt="watch" />
            <h5>Chroma Watch</h5>
            <h6>#3,000</h6>
          </div>

          {/* glasses */}
          <div className={styles.sun}>
            <img src={F6} alt="glasses" />
            <h5>Sun glasses</h5>
            <h6>#3,000</h6>
          </div>

          {/* Tomatoes */}
          <div className={styles.tomato}>
            <img src={F8} alt="tomatoes" />
            <h5>Tomatoes</h5>
            <h6>#3,000</h6>
          </div>

          {/* Corn */}
          <div className={styles.corn}>
            <img src={F7} alt="corn" />
            <h5>Corn</h5>
            <h6>#3,000</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default StorePage;
