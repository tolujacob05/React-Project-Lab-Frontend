import React from "react";
import Cart from "./Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CheckOut from "./CheckOut";
import Saved from "./Saved";
import Account from "./Account";
import Categories from "./Categories";
import Shop from "./Shop";
import SignUp from "./SignUp";
import Login from "./Login";
import ComputerAndGadjets from "./ComputerAndGadjets";
import ProductPage from "./ProductPage";
import FullNavbar from "./FullNavbar";
import Footer from "./Footer";
import SavedStores from "./SavedStores";
import Profile from "./Profile";
import FindNearbyStores from "./FindNearbyStores";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";


const Main = () => {

  const loggedIn = localStorage.getItem("userToken")
  return (
    <Router>
      <FullNavbar />
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/computerandgadjets" element={<ComputerAndGadjets />} />
          <Route
            path="/account"
            element={loggedIn ? <Profile /> : <Account />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={loggedIn ? <Cart /> : <Account />} />
          <Route
            path="/checkout"
            element={loggedIn ? <CheckOut /> : <Account />}
          />
          <Route path="/saved" element={<Saved />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/shops/:name/:id" exact element={<Shop />} />
          <Route path="/savedstores" element={<SavedStores />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword/:id" element={<ResetPassword />} />
          <Route path="/findnearbystores" element={<FindNearbyStores />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};
export default Main;
