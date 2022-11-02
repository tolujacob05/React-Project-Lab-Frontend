import React, { useState } from "react";
import "./Categories.css";
import axios from "axios"
import FullNavbar from "./FullNavbar"
import Footer from "./Footer"
export default function Categories() {
  // const [active, setActive] = useState("")
  const [category, setCategory] = useState("Computers and Gadegets");
  const [products, setProducts] = useState([])
  const getProducts = () => {
    
    var data = '';

    var config = {
      method: 'get',
      url: 'http://localhost:3001/api/v1/products/categories/'+category,
      headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWQ0YzU2MDkwYzY5YmU4ZTMxNDQ1ZCIsImlhdCI6MTY2NzA2MDk5OCwiZXhwIjoxNjY5NjUyOTk4fQ.-zDUVNPDewxxKrV6fauGBr5rONGpeEC3mlSSv61u-ic',
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      setProducts(response.data.data)
      console.log(products)
    })
    .catch(function (error) {
      console.log(error);
    });

  } 
  const setActive = (category) => {
    setCategory(category);
  };
  return (
    <>
      <div>
        <FullNavbar />
      </div>
        <div className="categoryPage">
        <div className="categoryList">
          <div
            className="category"
            onClick={() => {
              setActive("Computers and Gadegets");
            }}
            style={{
              background:
                category === "Computers and Gadegets" ? "#7ae582" : null,
              color: category === "Computers and Gadegets" ? "#ffffff" : null,
            }}
          >
            <p>Computers and Gadegets</p>
          </div>

          <div
            className="category"
            onClick={() => {
              setActive("fashion");
            }}
            style={{
              background: category === "fashion" ? "#7ae582" : null,
              color: category === "fashion" ? "#ffffff" : null,
            }}
          >
            <p>Fashion</p>
          </div>

          <div
            className="category"
            onClick={() => {
              setActive("Beauty and Health");
            }}
            style={{
              background: category === "Beauty and Health" ? "#7ae582" : null,
              color: category === "Beauty and Health" ? "#ffffff" : null,
            }}
          >
            <p>Beauty and Health</p>
          </div>

          <div
            className="category"
            onClick={() => {
              setActive("Home and Garden");
            }}
            style={{
              background: category === "Home and Garden" ? "#7ae582" : null,
              color: category === "Home and Garden" ? "#ffffff" : null,
            }}
          >
            <p>Home and Garden</p>
          </div>

          <div
            className="category"
            onClick={() => {
              setActive("Babies and Kids");
            }}
            style={{
              background: category === "Babies and Kids" ? "#7ae582" : null,
              color: category === "Babies and Kids" ? "#ffffff" : null,
            }}
          >
            <p>Babies and Kids</p>
          </div>

          <div
            className="category"
            onClick={() => {
              setActive("Sports and Hobbies");
            }}
            style={{
              background: category === "Sports and Hobbies" ? "#7ae582" : null,
              color: category === "Sports and Hobbies" ? "#ffffff" : null,
            }}
          >
            <p>Sports and Hobbies</p>
          </div>
          <div
            className="category"
            onClick={() => {
              setActive("Gaming");
              getProducts()
            }}
            style={{
              background: category === "Gaming" ? "#7ae582" : null,
              color: category === "Gaming" ? "#ffffff" : null,
            }}
          >
            <p>Gaming</p>
          </div>
          <div
            className="category"
            onClick={() => {
              setActive("Food and Groceries");
            }}
            style={{
              background: category === "Food and Groceries" ? "#7ae582" : null,
              color: category === "Food and Groceries" ? "#ffffff" : null,
            }}
          >
            <p>Food and Groceries</p>
          </div>
        </div>
        <div className="categoryProducts">
          {products.map(product => {
            return (
              <div key={product?._id} className="productCard"> 
            <div
              className="productImg"
              style={{
                backgroundImage:
                  "url(https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/P/95468_1627270922.jpg)",
              }}
            ></div>
            <p className="productName">HP Notebook 15</p>
            <p className="price"># 2,000</p>
            <svg
              width="112"
              height="22"
              viewBox="0 0 112 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.771 1.61804L12.7137 7.59708L12.826 7.94257H13.1892H19.476L14.3899 11.6378L14.096 11.8514L14.2083 12.1968L16.151 18.1759L11.0649 14.4806L10.771 14.2671L10.4771 14.4806L5.39102 18.1759L7.33373 12.1968L7.44599 11.8514L7.15209 11.6378L2.06601 7.94257H8.35275H8.71603L8.82828 7.59708L10.771 1.61804Z"
                stroke="#636262"
              />
              <path
                d="M33.313 1.61804L35.2557 7.59708L35.368 7.94257H35.7312H42.018L36.9319 11.6378L36.638 11.8514L36.7502 12.1968L38.693 18.1759L33.6069 14.4806L33.313 14.2671L33.0191 14.4806L27.933 18.1759L29.8757 12.1968L29.988 11.8514L29.6941 11.6378L24.608 7.94257H30.8947H31.258L31.3703 7.59708L33.313 1.61804Z"
                stroke="#636262"
              />
              <path
                d="M55.855 1.61804L57.7977 7.59708L57.9099 7.94257H58.2732H64.56L59.4739 11.6378L59.18 11.8514L59.2922 12.1968L61.2349 18.1759L56.1489 14.4806L55.855 14.2671L55.5611 14.4806L50.475 18.1759L52.4177 12.1968L52.53 11.8514L52.2361 11.6378L47.15 7.94257H53.4367H53.8L53.9123 7.59708L55.855 1.61804Z"
                stroke="#636262"
              />
              <path
                d="M78.397 1.61804L80.3397 7.59708L80.4519 7.94257H80.8152H87.1019L82.0159 11.6378L81.722 11.8514L81.8342 12.1968L83.7769 18.1759L78.6909 14.4806L78.397 14.2671L78.1031 14.4806L73.017 18.1759L74.9597 12.1968L75.072 11.8514L74.7781 11.6378L69.692 7.94257H75.9787H76.342L76.4543 7.59708L78.397 1.61804Z"
                stroke="#636262"
              />
              <path
                d="M100.939 1.61804L102.882 7.59708L102.994 7.94257H103.357H109.644L104.558 11.6378L104.264 11.8514L104.376 12.1968L106.319 18.1759L101.233 14.4806L100.939 14.2671L100.645 14.4806L95.559 18.1759L97.5017 12.1968L97.614 11.8514L97.3201 11.6378L92.234 7.94257H98.5207H98.884L98.9963 7.59708L100.939 1.61804Z"
                stroke="#636262"
              />
            </svg>
            <div className="addToCartButton">Add To Cart</div>
          </div>
            )
          } )}
      </div>
    </div>
    <div>
      <Footer />
    </div>
    </>
  );
}
