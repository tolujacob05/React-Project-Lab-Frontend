import React, { useEffect, useState } from "react";
import "./Categories.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import PageTitle from "./PageTitle";

import { Rating } from "react-simple-star-rating";

export default function Shop() {
  const { name } = useParams();
  // const [active, setActive] = useState("")
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    getProducts();
    return;
  }, [category]);
  const getProducts = () => {
    var data = "";

    var config = {
      method: "get",
      url:
        category === ""
          ? "http://localhost:3001/api/v1/products"
          : "http://localhost:3001/api/v1/products/categories/" + category,
      data: data,
    };

    axios(config)
      .then(function (response) {
        setProducts(response.data.data);
        console.log(products);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const setActive = (category) => {
    setCategory(category);
  };
  
  return (
    <>
      <div
        className="breadCrumb"
        style={{
          background: "#FFFFFF",
          fontFamily: "poppins",
          fontStyle: "normal",
          fontWeight: "400",
          padding: "10px 2% 3px",
        }}
      >
        <Link to={"/"}
          className="breadcrumb-element"
          style={{ color: "black !important" }}
        >
          home
        </Link>
        <span> &gt;</span>
        <Link className="breadcrumb-element">{name}</Link> <span> &gt;</span>
        <Link className="breadcrumb-element">{category}</Link>
      </div>
      <PageTitle title={category === "" ?name: category} />
      <div className="categoryPage">
        <div className="categoryList">
          <div
            className="category"
            onClick={() => {
              setActive("");
            }}
            style={{
              background: category === "" ? "#7ae582" : "#E3f9e5",
              color: category === "" ? "#ffffff" : null,
            }}
          >
            <p>All Products</p>
          </div>
          <div
            className="category"
            onClick={() => {
              setActive("computers and accessories");
            }}
            style={{
              background:
                category === "computers and accessories"
                  ? "#7ae582"
                  : "#E3f9e5",
              color:
                category === "computers and accessories" ? "#ffffff" : null,
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
              background: category === "fashion" ? "#7ae582" : "#E3f9e5",
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
              background:
                category === "Beauty and Health" ? "#7ae582" : "#E3f9e5",
              color: category === "Beauty and Health" ? "#ffffff" : null,
            }}
          >
            <p>Beauty and Health</p>
          </div>

          <div
            className="category"
            onClick={() => {
              setActive("home and gardens");
            }}
            style={{
              background:
                category === "home and gardens" ? "#7ae582" : "#E3f9e5",
              color: category === "home and gardens" ? "#ffffff" : null,
            }}
          >
            <p>Home and Garden</p>
          </div>

          <div
            className="category"
            onClick={() => {
              setActive("babies and kids");
            }}
            style={{
              background:
                category === "babies and kids" ? "#7ae582" : "#E3f9e5",
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
              background:
                category === "Sports and Hobbies" ? "#7ae582" : "#E3f9e5",
              color: category === "Sports and Hobbies" ? "#ffffff" : null,
            }}
          >
            <p>Sports and Hobbies</p>
          </div>
          <div
            className="category"
            onClick={() => {
              setActive("Gaming");
            }}
            style={{
              background: category === "Gaming" ? "#7ae582" : "#E3f9e5",
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
              background:
                category === "Food and Groceries" ? "#7ae582" : "#E3f9e5",
              color: category === "Food and Groceries" ? "#ffffff" : null,
            }}
          >
            <p>Food and Groceries</p>
          </div>
        </div>
        <div className="categoryProducts">
          {products?.map((product) => {
            return (
              <Link
                to={`/products/${product?._id}`}
                key={product?._id}
                className="productCard"
              >
                <div
                  className="productImg"
                  style={{
                    backgroundImage: `url(${product?.images[0]})`,
                  }}
                ></div>
                <p className="productName">
                  {product?.name?.length > 25
                    ? product?.name?.substring(0, 30) + "..."
                    : product?.name}
                </p>
                <p className="price">
                  ₦
                  {product?.price
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>

                <Rating
                  disableFillHover={true}
                  readonly={true}
                  allowFraction={true}
                  initialValue={product?.averageReview}
                />
                <div className="addToCartButton">Add To Cart</div>
              </Link>
            );
          })}
        </div>
      </div>
      <div></div>
    </>
  );
}
