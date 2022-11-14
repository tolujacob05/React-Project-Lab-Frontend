import { useState, useEffect } from "react";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Rating } from "react-simple-star-rating";
import CounterInput from "react-counter-input";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(null);

  useEffect(() => {
    getProduct();
    return;
  }, [id]);
  const getProduct = () => {
    var data = "";

    var config = {
      method: "get",
      url: "http://localhost:3001/api/v1/products/" + id,
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
  const handleRating = (rate) => {
    setRating(rate);
    console.log(rating);
    var data = {
      rate: parseInt(rate),
    };

    var config = {
      method: "post",
      url: `http://localhost:3001/api/v1/reviews/${id}/add`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setRating(response?.data?.averageReview);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const [productImages, setproductImages] = useState([]);
  const [imageView, setImageView] = useState([]);

  return (
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
          {/* <svg
            className="product-review"
            width="108"
            height="24"
            viewBox="0 0 108 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4961 3.21668L14.3837 9.02601L14.4681 9.2858H14.7412H20.8495L15.9078 12.8762L15.6868 13.0367L15.7712 13.2965L17.6588 19.1059L12.7171 15.5155L12.4961 15.3549L12.2751 15.5155L7.33339 19.1059L9.22095 13.2965L9.30536 13.0367L9.08437 12.8762L4.14266 9.2858H10.251H10.5241L10.6085 9.02601L12.4961 3.21668Z"
              stroke="#636262"
              color="orange"x
              strokeWidth="0.751948"
            />
            <path
              d="M33.248 3.21668L35.1356 9.02601L35.22 9.2858H35.4932H41.6015L36.6598 12.8762L36.4388 13.0367L36.5232 13.2965L38.4108 19.1059L33.469 15.5155L33.248 15.3549L33.0271 15.5155L28.0853 19.1059L29.9729 13.2965L30.0573 13.0367L29.8363 12.8762L24.8946 9.2858H31.0029H31.2761L31.3605 9.02601L33.248 3.21668Z"
              stroke="#636262"
              strokeWidth="0.751948"
            />
            <path
              d="M54 3.21668L55.8876 9.02601L55.972 9.2858H56.2451H62.3534L57.4117 12.8762L57.1907 13.0367L57.2751 13.2965L59.1627 19.1059L54.221 15.5155L54 15.3549L53.779 15.5155L48.8373 19.1059L50.7249 13.2965L50.8093 13.0367L50.5883 12.8762L45.6466 9.2858H51.7549H52.028L52.1124 9.02601L54 3.21668Z"
              stroke="#636262"
              strokeWidth="0.751948"
            />
            <path
              d="M74.752 3.21668L76.6395 9.02601L76.7239 9.2858H76.9971H83.1054L78.1637 12.8762L77.9427 13.0367L78.0271 13.2965L79.9147 19.1059L74.9729 15.5155L74.752 15.3549L74.531 15.5155L69.5892 19.1059L71.4768 13.2965L71.5612 13.0367L71.3402 12.8762L66.3985 9.2858H72.5068H72.78L72.8644 9.02601L74.752 3.21668Z"
              stroke="#636262"
              strokeWidth="0.751948"
            />
            <path
              d="M95.5039 3.21668L97.3915 9.02601L97.4759 9.2858H97.749H103.857L98.9156 12.8762L98.6946 13.0367L98.779 13.2965L100.667 19.1059L95.7249 15.5155L95.5039 15.3549L95.2829 15.5155L90.3412 19.1059L92.2288 13.2965L92.3132 13.0367L92.0922 12.8762L87.1505 9.2858H93.2588H93.5319L93.6163 9.02601L95.5039 3.21668Z"
              stroke="#636262"
              strokeWidth="0.751948"
            />
          </svg> */}
          <Rating
            allowFraction={true}
            initialValue={rating}
            onClick={handleRating}
            transition={true}
            allowHover={false}
            disableFillHover={true}
          />
          <span>{rating === 0 ? "no review yet" : `${rating} stars`}</span>
        </div>
        <div className="priceContainer">
          <h3>₦{price}</h3>
          <button>compare price</button>
        </div>
        <div className="counter">
          <CounterInput
            min={0}
            max={10}
            btnStyle={{
              background: "#D9D9D9",
              borderRadius: "4.28571px 4.28571px 4.28571px 4.28571px",
            }}
          />
        </div>
        <div className="addToCartContainer">
          <button className="addToCart">add to cart</button>
          <svg
            className="favourite"
            width="25"
            height="25"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9998 27.9999L14.0665 26.2665C11.8221 24.2443 9.9665 22.4999 8.49984 21.0332C7.03317 19.5665 5.8665 18.2496 4.99984 17.0825C4.13317 15.9163 3.52784 14.8443 3.18384 13.8665C2.83895 12.8888 2.6665 11.8888 2.6665 10.8665C2.6665 8.77765 3.3665 7.0332 4.7665 5.6332C6.1665 4.2332 7.91095 3.5332 9.99984 3.5332C11.1554 3.5332 12.2554 3.77765 13.2998 4.26654C14.3443 4.75543 15.2443 5.44431 15.9998 6.3332C16.7554 5.44431 17.6554 4.75543 18.6998 4.26654C19.7443 3.77765 20.8443 3.5332 21.9998 3.5332C24.0887 3.5332 25.8332 4.2332 27.2332 5.6332C28.6332 7.0332 29.3332 8.77765 29.3332 10.8665C29.3332 11.8888 29.1612 12.8888 28.8172 13.8665C28.4723 14.8443 27.8665 15.9163 26.9998 17.0825C26.1332 18.2496 24.9665 19.5665 23.4998 21.0332C22.0332 22.4999 20.1776 24.2443 17.9332 26.2665L15.9998 27.9999ZM15.9998 24.3999C18.1332 22.4888 19.8887 20.8496 21.2665 19.4825C22.6443 18.1163 23.7332 16.9279 24.5332 15.9172C25.3332 14.9056 25.8887 14.0052 26.1998 13.2159C26.5109 12.4274 26.6665 11.6443 26.6665 10.8665C26.6665 9.5332 26.2221 8.42209 25.3332 7.5332C24.4443 6.64431 23.3332 6.19987 21.9998 6.19987C20.9554 6.19987 19.9887 6.49409 19.0998 7.08254C18.2109 7.67187 17.5998 8.42209 17.2665 9.3332H14.7332C14.3998 8.42209 13.7887 7.67187 12.8998 7.08254C12.0109 6.49409 11.0443 6.19987 9.99984 6.19987C8.6665 6.19987 7.55539 6.64431 6.6665 7.5332C5.77761 8.42209 5.33317 9.5332 5.33317 10.8665C5.33317 11.6443 5.48873 12.4274 5.79984 13.2159C6.11095 14.0052 6.6665 14.9056 7.4665 15.9172C8.2665 16.9279 9.35539 18.1163 10.7332 19.4825C12.1109 20.8496 13.8665 22.4888 15.9998 24.3999Z"
              fill="black"
            />
          </svg>
        </div>
        <p className="productDetail">Description</p>
        <div className="descriptionbox">
          <p className="description">{product?.description}</p>
        </div>
      </div>
    </div>
  );
}
