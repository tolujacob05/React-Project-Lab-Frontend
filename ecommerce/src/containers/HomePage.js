import React from "react"
import FullNavbar from "./FullNavbar"
import Promo from "./Promo"
import StorePage from "./StorePage"
import Footer from "./Footer"
import Nav from "./Nav"

const HomePage = () => {
    return (
        <div>
            <FullNavbar />
            <Nav />
            <Promo />
            <StorePage />
            <Footer /> 
        </div>
    )
}

export default HomePage;