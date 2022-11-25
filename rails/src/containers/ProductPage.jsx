import { useState, useEffect } from "react";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Rating } from "react-simple-star-rating";
import CounterInput from "react-counter-input";
import { useNavigate } from "react-router-dom";
import PageTitle from "./PageTitle";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(null);
  const [saved, setSaved] = useState(false);
  const [quantity, setQuantity] = useState(1);
  let navigate = useNavigate();
  useEffect(() => {
    getProduct();
    return;
  }, []);
  const getProduct = () => {
    var data = "";

    var config = {
      method: "get",
      url: "https://shopify-nextgen.herokuapp.com/api/v1/products/" + id,
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data?.data));
        setProduct(response?.data?.data);
        setproductImages(response?.data?.data.images);
        setImageView(response?.data?.data?.images[0]);
        var parts = response?.data?.data?.price.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        setPrice(parts.join("."));
        setRating(response?.data?.data?.averageReview);
      })

      .catch(function (error) {
        console.log(error);
      });
  };

  const [productImages, setproductImages] = useState([]);
  const [imageView, setImageView] = useState([]);

  const addToCart = () => {
    var data = {
      productId: id,
      quantity: quantity,
    };
    var config = {
      method: "post",
      url: "https://shopify-nextgen.herokuapp.com/api/v1/carts",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        navigate("/cart");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const addToSavedProducts = (id) => {
    var data = "";

    var config = {
      method: "post",
      url: "http://localhost:3000/api/v1/savedproducts/" + id,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2NkMTljOTE3NzczOWVjMzc4NDczNCIsImlhdCI6MTY2OTEyNDUwOCwiZXhwIjoxNjY5MTI0NTA4fQ.1tOBZYbMvY4EOnWVTXHfw2OUKbRbEsnh_zqAtbsNqxc",
      },
      data: data,
    };
    console.log("Bearer " + localStorage.getItem("userToken"));
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <PageTitle title={"product Details"} />
      <div className="productPage">
        <div className="imgColumn">
          {productImages.map((productImage, index) => (
            <div
              key={index}
              className="producImages"
              onClick={() => {
                setImageView(productImage);
              }}
            >
              <img width="85" src={productImage} alt="product " />
            </div>
          ))}
        </div>
        <div className="imgViewer">
          <img src={imageView} alt="product " />
        </div>
        <div className="productDetails">
          <p className="productName">{product?.name}</p>
          <div className="review-container">
            <Rating
              allowFraction={true}
              initialValue={rating}
              readonly={true}
            />

            <span>{rating === 0 ? "no review yet" : `${rating} stars`}</span>
          </div>
          <div className="priceContainer">
            <h3>₦{price}</h3>
          </div>
          <div className="counter">
            <CounterInput
              count={1}
              min={1}
              max={99}
              btnStyle={{
                background: "#D9D9D9",
                borderRadius: "4.28571px 4.28571px 4.28571px 4.28571px",
              }}
              onCountChange={(count) => setQuantity(count)}
            />
          </div>
          <div className="addToCartContainer">
            <button
              className="addToCart"
              onClick={() => {
                addToCart();
              }}
            >
              Add to cart
            </button>
            <svg
              onClick={() => {
                addToSavedProducts(id);
                setSaved(true);
              }}
              className="favourite"
              width="25"
              height="25"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9998 27.9999L14.0665 26.2665C11.8221 24.2443 9.9665 22.4999 8.49984 21.0332C7.03317 19.5665 5.8665 18.2496 4.99984 17.0825C4.13317 15.9163 3.52784 14.8443 3.18384 13.8665C2.83895 12.8888 2.6665 11.8888 2.6665 10.8665C2.6665 8.77765 3.3665 7.0332 4.7665 5.6332C6.1665 4.2332 7.91095 3.5332 9.99984 3.5332C11.1554 3.5332 12.2554 3.77765 13.2998 4.26654C14.3443 4.75543 15.2443 5.44431 15.9998 6.3332C16.7554 5.44431 17.6554 4.75543 18.6998 4.26654C19.7443 3.77765 20.8443 3.5332 21.9998 3.5332C24.0887 3.5332 25.8332 4.2332 27.2332 5.6332C28.6332 7.0332 29.3332 8.77765 29.3332 10.8665C29.3332 11.8888 29.1612 12.8888 28.8172 13.8665C28.4723 14.8443 27.8665 15.9163 26.9998 17.0825C26.1332 18.2496 24.9665 19.5665 23.4998 21.0332C22.0332 22.4999 20.1776 24.2443 17.9332 26.2665L15.9998 27.9999ZM15.9998 24.3999C18.1332 22.4888 19.8887 20.8496 21.2665 19.4825C22.6443 18.1163 23.7332 16.9279 24.5332 15.9172C25.3332 14.9056 25.8887 14.0052 26.1998 13.2159C26.5109 12.4274 26.6665 11.6443 26.6665 10.8665C26.6665 9.5332 26.2221 8.42209 25.3332 7.5332C24.4443 6.64431 23.3332 6.19987 21.9998 6.19987C20.9554 6.19987 19.9887 6.49409 19.0998 7.08254C18.2109 7.67187 17.5998 8.42209 17.2665 9.3332H14.7332C14.3998 8.42209 13.7887 7.67187 12.8998 7.08254C12.0109 6.49409 11.0443 6.19987 9.99984 6.19987C8.6665 6.19987 7.55539 6.64431 6.6665 7.5332C5.77761 8.42209 5.33317 9.5332 5.33317 10.8665C5.33317 11.6443 5.48873 12.4274 5.79984 13.2159C6.11095 14.0052 6.6665 14.9056 7.4665 15.9172C8.2665 16.9279 9.35539 18.1163 10.7332 19.4825C12.1109 20.8496 13.8665 22.4888 15.9998 24.3999Z"
                fill={saved ? "red" : "black"}
              />
            </svg>
          </div>
          <p className="productDetail">Description</p>
          <div className="descriptionbox">
            <p className="description">{product?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
