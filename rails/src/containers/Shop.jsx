import React, { useEffect, useState } from "react";
import "./Categories.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import PageTitle from "./PageTitle";

import { Rating } from "react-simple-star-rating";

export default function Shop() {
  const { name, id } = useParams();
  // const [active, setActive] = useState("")
  const [category, setCategory] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
    return;
  }, []);

  const getProducts = () => {
    var data = "";

    var config = {
      method: "get",
      url: "https://shopify-nextgen.herokuapp.com/api/v1/products/shop/" + id,

      data: data,
    };

    axios(config)
      .then(async function (response) {
        setAllProducts(response?.data?.data);
        setProducts(response?.data?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    if (category !== "") {
      let categoryProduct = allProducts.filter((product) => {
        if (product.category === category) return product;
      });
      setProducts(categoryProduct);
    } else {
      setProducts(allProducts);
    }
    return;
  }, [category, allProducts]);

  const setActive = (category) => {
    setCategory(category);
  };
  const addToCart = (id) => {
    var data = {
      productId: id,
      quantity: 1,
    };
    var config = {
      method: "post",
      url: "https://shopify-nextgen.herokuapp.com/api/v1/carts",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
      data: data,
    };

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
        <Link
          to={"/"}
          className="breadcrumb-element"
          style={{ color: "black !important" }}
        >
          home
        </Link>
        <span> &gt;</span>
        <Link className="breadcrumb-element" to={""}>
          {name}
        </Link>{" "}
        <span> &gt;</span>
        <Link className="breadcrumb-element">{category}</Link>
      </div>
      <PageTitle title={category === "" ? name : category} />
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
              color: category === "babies and kids" ? "#ffffff" : null,
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
          {products.length > 0 ? (
            products?.map((product) => {
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
                  <button
                    className="addToCartButton"
                    onClick={() => {
                      addToCart();
                    }}
                  >
                    Add To Cart
                  </button>
                </Link>
              );
            })
          ) : (
            <h2 style={{ textAlign: "center", margin: "auto" }}>
              oops!! <br />
              <br />
              No product in this category
            </h2>
          )}
        </div>
      </div>
      <div></div>
    </>
  );
}
