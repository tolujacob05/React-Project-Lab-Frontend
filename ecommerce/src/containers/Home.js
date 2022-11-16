import React from "react"
import FullNavbar from "./FullNavbar"
import Promo from "./Promo"
import StorePage from "./StorePage"
import Footer from "./Footer"


const Home = () => {
    return (
        <div>
            <FullNavbar />
            <Promo />
            <StorePage />
            <Footer /> 
        </div>
    )
}

export default Home;