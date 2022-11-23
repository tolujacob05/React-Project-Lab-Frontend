import React, { useEffect, useState } from "react";
import styles from "./SavedStores.module.css";
import axios from "axios";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageTitle from "./PageTitle";
const SavedStores = () => {
  const [savedStores, setSavedStores] = useState([]);

  const getSavedStore = () => {
    var data = "";

    var config = {
      method: "get",
      url: "https://shopify-nextgen.herokuapp.com/api/v1/savedstores",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setSavedStores(response?.data?.savedStores);
        console.log(savedStores);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getSavedStore();
  }, []);

  const handleDeleteStore = (id) => {
    var data = "";
    console.log(id);
    var config = {
      method: "delete",
      url: "https://shopify-nextgen.herokuapp.com/api/v1/savedstores/" + id,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        getSavedStore();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <PageTitle title={"Saved stores"} />
      <section className={styles.bigSection}>
        <div className={styles.bar}>
          <ul>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="findnearbystores">Find nearby stores</a>
            </li>
            <li>
              <a href="savedstores">Saved Stores</a>
            </li>
            <li>
              <a href="recentstores">Recent Stores</a>
            </li>
          </ul>
        </div>
        <div className={styles.largeCard}>
          {savedStores.length > 0 ? (
            savedStores?.map((savedStore) => (
              <div key={savedStore?._id} className={styles.card}>
                <div className={styles.shoprite}>
                  <a href="shoprite">
                    <h6>{savedStore?.shop?.name}</h6>
                  </a>
                  <img src={savedStore?.shop?.image} alt="Shop" width={200} />
                </div>
                <div className={styles.ipsum}>
                  <h2>{savedStore?.shop?.name}</h2>
                  <p>
                    description:{" "}
                    {savedStore?.shop?.description.length > 100
                      ? savedStore?.shop?.description.substring(0, 100) + "..."
                      : savedStore?.shop?.description}
                  </p>

                  <Rating
                    allowFraction={true}
                    initialValue={4}
                    readonly={true}
                  />
                </div>
                <div className={styles.visited}>
                  <div
                    className={styles.click}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDeleteStore(savedStore?.shop?._id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                    <h6>Remove item</h6>
                  </div>
                  <Link
                    to={`/shops/${savedStore?.shop?.name}/${savedStore?.shop?._id}`}
                  >
                    Visit store {">"}
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <h2 style={{ textAlign: "center", margin: "auto", width: "60vw" }}>
              No Stored saved yet
            </h2>
          )}
        </div>
      </section>
    </>
  );
};

export default SavedStores;
