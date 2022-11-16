import React, { useEffect, useState } from "react";
import styles from "./StorePage.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const StorePage = () => {
  const [shops, setShops] = useState(null);
  useEffect(() => {


    var config = {
      method: "get",
      url: "http://localhost:3001/api/v1/shops/",

      
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setShops(response?.data?.data?.shops);
        console.log(shops);
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
            <Link to={`/shops/${shop?.name}`} className="card">
              <img className={styles.shopImg} src={shop?.image}  alt="Shop" />
              <h6>{shop?.name}</h6>
            </Link>
          ) : null
        )}

        {/* <div>
          <img src={F12} alt="Shop" />
          <h6> Save Mart</h6>
        </div>
        <div>
          <img src={F12} alt="Shop" />
          <h6> Walmart</h6>
        </div>
        <div>
          <img src={F12} alt="Shop" />
          <h6> Walmart</h6>
        </div> */}
      </section>
    </div>
  );
};

export default StorePage;
