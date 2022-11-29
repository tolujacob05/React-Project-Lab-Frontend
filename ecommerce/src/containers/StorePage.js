import React, { useEffect, useState } from "react";
import styles from "./StorePage.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const StorePage = () => {
  const [shops, setShops] = useState(null);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    var config = {
      method: "get",
      url: "https://shopify-nextgen.onrender.com/api/v1/shops/",
    };

    axios(config)
      .then(function (response) {
        setShops(response?.data?.data?.shops);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    var config = {
      method: "get",
      url: "https://shopify-nextgen.onrender.com/api/v1/products/cheapest",
    };

    axios(config)
      .then(function (response) {
        setProducts(response?.data?.data);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className={styles.recent}>
        <div className={styles.text}>Recommended Stores</div>
        <section className={styles.container}>
          {shops?.map((shop, index) =>
            index < 6 ? (
              <Link
                to={`/shops/${shop?.name}/${shop._id}`}
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "black",
                }}
              >
                {/* <img className={styles.shopImg} src={shop?.image} alt="Shop" /> */}
                <div
                  className="storelogo"
                  style={{
                    background: "#e0f0e0",
                    backgroundRepeat: "no-repeat",
                    height: "150px",
                    backgroundPosition: "center",
                    width: "200px",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    className={styles.shopImg}
                    src={shop?.image}
                    alt="Shop"
                  />
                </div>
                <br />
                <h6>{shop?.name}</h6>
              </Link>
            ) : null
          )}
        </section>
      </div>

      {/*  Best Prices */}
      <div className={styles.best}>
        <div>
          <div className={styles.text}>Best Prices</div>
          <br />
        </div>
        <div className={styles.prices}>
          {products?.map((product, index) =>
            index < 6 ? (
              <Link to={`/products/${product._id}`} className={styles.chroma}>
                <div
                  className={styles.productImage}
                  style={{
                    backgroundImage: `url(${product.images[0]})`,
                    backgroundSize: "cover",
                    height: "200px",
                    backgroundPosition: "center",
                  }}
                ></div>
                <br />
                {/* <img src={product.images[0]} alt={product.name} /> */}
                <h6>{product.name}</h6>
                <p> ₦
                      {product.price
                        ?.toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
              </Link>
            ) : null
          )}
        </div>
      </div>
    </>
  );
};

export default StorePage;
