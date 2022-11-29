import React from "react";
import styles from "./CheckOut.module.css";
import { FaCcMastercard } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";

const CheckOut = () => {
  const [cartInfo, setCartInfo] = useState([]);
  const [subtotal, setSubTotal] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [order, setOrder] = useState(null)

  const handleCheckout = () => {
    var data = {
      card_number: "5531886652142950",
      expiry_month: "09",
      expiry_year: "32",
      cvv: "564",
    };

    var config = {
      method: "post",
      url: "https://shopify-nextgen.onrender.com/api/v1/orders/checkout",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setOrder(response?.data?.order)
        setOpen(true);
        getCartItems();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getCartItems = () => {
    var config = {
      method: "get",
      url: "https://shopify-nextgen.onrender.com/api/v1/carts/",
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
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <>
      {open && (
        <Popup open={open} onClose={closeModal}>
          <div className={styles.modal}>
            <p>
              <strong>Your order has been received</strong>
            </p>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 0C32.7539 0 35.4102 0.351562 37.9688 1.05469C40.5273 1.75781 42.9102 2.77344 45.1172 4.10156C47.3242 5.42969 49.3457 6.99219 51.1816 8.78906C53.0176 10.5859 54.5898 12.6074 55.8984 14.8535C57.207 17.0996 58.2129 19.4922 58.916 22.0312C59.6191 24.5703 59.9805 27.2266 60 30C60 32.7539 59.6484 35.4102 58.9453 37.9688C58.2422 40.5273 57.2266 42.9102 55.8984 45.1172C54.5703 47.3242 53.0078 49.3457 51.2109 51.1816C49.4141 53.0176 47.3926 54.5898 45.1465 55.8984C42.9004 57.207 40.5078 58.2129 37.9688 58.916C35.4297 59.6191 32.7734 59.9805 30 60C27.2461 60 24.5898 59.6484 22.0312 58.9453C19.4727 58.2422 17.0898 57.2266 14.8828 55.8984C12.6758 54.5703 10.6543 53.0078 8.81836 51.2109C6.98242 49.4141 5.41016 47.3926 4.10156 45.1465C2.79297 42.9004 1.78711 40.5078 1.08398 37.9688C0.380859 35.4297 0.0195312 32.7734 0 30C0 27.2461 0.351562 24.5898 1.05469 22.0312C1.75781 19.4727 2.77344 17.0898 4.10156 14.8828C5.42969 12.6758 6.99219 10.6543 8.78906 8.81836C10.5859 6.98242 12.6074 5.41016 14.8535 4.10156C17.0996 2.79297 19.4922 1.78711 22.0312 1.08398C24.5703 0.380859 27.2266 0.0195312 30 0ZM47.666 20.0684L43.6816 16.084L24.375 35.3906L16.3184 27.334L12.334 31.3184L24.375 43.3594L47.666 20.0684Z"
                fill="#7AE582"
              />
            </svg>

            <p>Thank you for your purchase</p>
            <article>
              <small>Your order ID is: {order?._id}</small><br></br>
              <small>
                You will receive an order confirmation email with the details of
                your order
              </small>
            </article>
            <button onClick={()=>{
              closeModal();
            }}>Continue Shopping</button>
          </div>
        </Popup>
      )}
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
