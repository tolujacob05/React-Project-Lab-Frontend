import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./Saved.css";
import axios from "axios";
import PageTitle from "./PageTitle";

const Saved = () => {
  const [savedProducts, setSavedProducts] = useState([]);

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

  return (
    <div>
      <PageTitle title={"Saved Item"} />
      <div className="savedProductContainer">
        {savedProducts?.map((savedProduct) => (
          <div key={savedProduct?._id} className="savedProduct">
            <img src={savedProduct?.product?.images[0]} alt="saved product" />
            <div className="productDescription">
              <p>
                {savedProduct?.product?.description.length > 100
                  ? savedProduct?.product?.description.substring(0, 100) + "..."
                  : savedProduct?.product?.description}
              </p>
            </div>
            <div className="actions">
              <button style={{ padding: "5px 20px" }}>Add to Cart</button>
              <div
                className="deletebutton"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesomeIcon icon={faTrashCan} />
                <h6>Remove item</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Saved;
