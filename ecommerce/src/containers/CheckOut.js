import React from "react";
import styles from "./CheckOut.module.css";
import { FaCcMastercard } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const CheckOut = () => {
  const [cartInfo, setCartInfo] = useState([]);
  const [subtotal, setSubTotal] = useState(0);
  const [delivery, setDelivery] = useState(0);

  const handleCheckout = () => {
    var data = {
      card_number: "5531886652142950",
      expiry_month: "09",
      expiry_year: "32",
      cvv: "564",
    };

    var config = {
      method: "post",
      url: "https://shopify-nextgen.herokuapp.com/api/v1/orders/checkout",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert("order complete");
        getCartItems();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getCartItems = () => {
    var config = {
      method: "get",
      url: "https://shopify-nextgen.herokuapp.com/api/v1/carts/",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setCartInfo(response?.data?.data);
        const getSubTotal = response?.data?.data?.reduce(
          (accumulator, currentValue) => {
            return accumulator + currentValue.amount;
          },
          0
        );
        console.log(getSubTotal);
        setSubTotal(getSubTotal);
        setDelivery(getSubTotal * 0.02);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getCartItems();
  }, []);
  return (
    <>
      <div></div>
      <div className={styles.for}>
        <div className={styles.house}>
          <div className={styles.place}>
            <h3>
              Devilery Address <br />
              Tolu Jacob +23470*****1432 <br />
              33, William avenue, Ikeja. <br />
              Lagos State, Nigeria. 31003
            </h3>
          </div>

          <div className={styles.master}>
            <div className={styles.num}>
              <h3> Payment Method </h3>
            </div>
            <div className={styles.verve}>
              <h5>
                <FaCcMastercard />
              </h5>
              <h4>5342 **** **** 1920</h4>
            </div>
          </div>
          {/* <div className={styles.bigContainer}>
            <div className={styles.formContainer}>
              <h3>Ordering From</h3>
              <input type="text" className={styles.form} />
            </div>
            <div className={styles.formContainer}>
              <h3>Pick up by</h3>
              <input type="text" className={styles.form} />
            </div>
            <div className={styles.pick}>
              <h4>Pick up time</h4>
            </div>
            <div className={styles.time}>
              <h3>ASAP</h3>
              <h3>14:45</h3>
            </div>
          </div> */}
        </div>

        <div className={styles.method}>
          <div className={styles.delivery}>
            <h4>Summary</h4>
            <div className={styles.grid}>
              <div className={styles.word}>
                <div className={styles.total}>
                  <div className={styles.sub}>
                    <h5>Subtotal</h5>
                    <p>
                      ₦
                      {subtotal
                        ?.toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                  </div>
                  <div className={styles.cost}>
                    <h5>Delivery cost</h5>
                    <p>
                      ₦
                      {delivery
                        ?.toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                  </div>
                  <hr />
                  <div className={styles.able}>
                    <h5>Total payable</h5>
                    <p>
                      ₦
                      {(subtotal + delivery)
                        .toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                  </div>
                  <hr />
                  <div className={styles.checkButton}>
                    <a href="checkout">Check Out</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.pay}>
              <h4 style={{ cursor: "pointer" }} onClick={handleCheckout}>
                Pay Now
              </h4>
              <h4 style={{ cursor: "pointer" }}> Pay in Store </h4>
            </div>
          </div>
          <div className={styles.condition}>
            By clicking on "pay" I accept all terms <br /> and condition.
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default CheckOut;
