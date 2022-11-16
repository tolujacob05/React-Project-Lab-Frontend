import React from "react";
import Cart from "./Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CheckOut from "./CheckOut";
import Saved from "./Saved";
import Account from "./Account";
import Categories from "./Categories";
import SavedStores from "./SavedStores";
import SignUp from "./SignUp";
import Login from "./Login";
import ComputerAndGadjets from "./ComputerAndGadjets";
import ProductPage from "./ProductPage";
import FullNavbar from "./FullNavbar";
import Footer from "./Footer";
import Shoprite from "./Shoprite";
import Fashion from "./Fashion";
import FindNearbyStores from "./FindNearbyStores";


const Main = () => {
  return (
    <Router>
      <FullNavbar />
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/computerandgadjets" element={<ComputerAndGadjets />} />
          <Route path="/savedstores" element={<SavedStores />} />
          <Route path="/account" element={<Account />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/shoprite" element={<Shoprite />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/findnearbystores" element={<FindNearbyStores />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
};
export default Main;
