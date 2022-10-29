import React from "react"
// import Navbar from "./Navbar"
import Footer from "./Footer"
import Promo from "./Promo"
import Store from "./Store"
import FullNavbar from "../Pages/FullNavbar"


const Main = () => {
    return (
      <>
        <div>
          <FullNavbar />
          <Promo />
          <Store />
          <Footer />
        </div>
        <div></div>
      </>
    );
}

export default Main;
