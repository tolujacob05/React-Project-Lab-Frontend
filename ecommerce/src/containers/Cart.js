import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import PageTitle from "./PageTitle";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {
  const [savedProducts, setSavedProducts] = useState([]);
  const [cartInfo, setCartInfo] = useState([]);
  const [subtotal, setSubTotal] = useState(0);
  const [delivery, setDelivery] = useState(0);
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
  const handleDeleteCartItem = (id) => {
    var config = {
      method: "delete",
      url: "https://shopify-nextgen.herokuapp.com/api/v1/carts/" + id,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        getCartItems();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    var data = "";

    var config = {
      method: "get",
      url: "https://shopify-nextgen.herokuapp.com/api/v1/savedproducts/",
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
  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <>
      <PageTitle title={"cart"} />
      <div className={styles.cartPage}>
        <div className={styles.large}>
          <div className={styles.cartItems}>
            {cartInfo.length < 1 && (
              <div className={styles.lines}>No item in your cart</div>
            )}
            {cartInfo?.map((cartItem) => (
              <div
                to={"/products/" + cartItem?.productId?._id}
                className={styles.line}
                key={cartItem._id}
              >
                <div className={styles.image}>
                  <img
                    width={100}
                    src={cartItem.productId.images[0]}
                    alt="Shoes"
                  />
                  <div>
                    <Link to={"/products/" + cartItem?.productId?._id}>
                      <h3 style={{ color: "black" }}>
                        {cartItem?.productId?.name}
                      </h3>
                    </Link>
                    <br />
                    <h5>
                      {cartItem?.productId?.description.length > 100
                        ? cartItem?.productId?.description.substring(0, 100) +
                          "..."
                        : cartItem?.productId?.description}
                    </h5>
                  </div>
                  <h4>
                    ₦
                    {cartItem?.amount
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </h4>
                </div>
                <div
                  className={styles.delete}
                  onClick={() => {
                    handleDeleteCartItem(cartItem._id);
                  }}
                >
                  <h5>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </h5>
                  Remove item
                </div>
              </div>
            ))}
          </div>

          <div className={styles.grid}>
            <div className={styles.word}>
              <h5>Summary</h5>
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
            <div className={styles.tie}>
              <h4> Payment method</h4>
              <div className={styles.pIcon}>
                <FaCcVisa />
                <FaCcMastercard />
                <FontAwesomeIcon icon={faBuildingColumns} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.tank}>
          <div className={styles.things}>
            <Link to="/saved" className={styles.palm}>
              <h5>Saved Items</h5>
            </Link>
          </div>
          <div className={styles.saved}>
            {savedProducts.length > 0 ? (
              savedProducts?.map((savedProduct) => (
                <Link
                  to={"/products/" + savedProduct?._id}
                  key={savedProduct?._id}
                  className={styles.watch}
                >
                  <img
                    width={150}
                    src={savedProduct?.product?.images[0]}
                    alt={savedProduct?.product?.name || "product"}
                  />
                  <p
                    style={{
                      textAlign: "center",
                      margin: "auto",
                      color: "black",
                    }}
                  >
                    {savedProduct?.product?.name}{" "}
                  </p>
                </Link>
              ))
            ) : (
              <h3
                style={{ textAlign: "center", margin: "auto", color: "black" }}
              >
                No product saved yet
              </h3>
            )}
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default Cart;
