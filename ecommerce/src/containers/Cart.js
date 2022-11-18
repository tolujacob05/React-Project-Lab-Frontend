import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import F14 from "./Pictures/F14.png";
import Img from "./Img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import PageTitle from "./PageTitle";
import axios from "axios";

const Cart = () => {
  const [savedProducts, setSavedProducts] = useState([]);

  useEffect(() => {
    var data = "";

    var config = {
      method: "get",
      url: "http://localhost:3001/api/v1/savedproducts/",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setSavedProducts(response?.data?.SavedProducts);
        console.log(savedProducts);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <PageTitle title={"cart"} />
      <div className={styles.cartPage}>
        <div className={styles.large}>
          <div>
            <div className={styles.line}>
              <div className={styles.image}>
                <img src={F14} alt="Shoes" />
                <h5>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing{" "}
                  <br /> elit, sed do magna aliqua.
                </h5>
                <h4>#3,000</h4>
              </div>
              <div className={styles.delete}>
                <h5>
                  <FontAwesomeIcon icon={faTrashCan} />
                </h5>
                Remove item
              </div>
            </div>
            <div>
              <Img />
            </div>
          </div>

          <div className={styles.grid}>
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
            {
              savedProducts.length>0 ?
            savedProducts?.map((savedProduct) => (
              <div key={savedProduct?._id} className={styles.watch}>
                <img
                  width={150}
                  src={savedProduct?.product?.images[0]}
                  alt="watch"
                />
                <p> {savedProduct?.product?.name} </p>
              </div>
            )):<h3 style={{textAlign:"center", margin: "auto"}}>No product saved yet</h3>}
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default Cart;
