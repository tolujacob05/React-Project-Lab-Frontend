import React, { useEffect, useState } from "react";
import styles from "./StorePage.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
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
    <div className={styles.recent}>
      <div className={styles.text}>Recent Stores</div>
      <section className={styles.container}>
        {shops?.map((shop, index) =>
          index < 6 ? (
            <Link
              key={shop?._id}
              to={`/shops/${shop?.name}/${shop._id}`}
              className="card"
            >
              <img className={styles.shopImg} src={shop?.image} alt="Shop" />
              <h6>{shop?.name}</h6>
            </Link>
          ) : null
        )}
      </section>
    </div>
  );
};

export default StorePage;
