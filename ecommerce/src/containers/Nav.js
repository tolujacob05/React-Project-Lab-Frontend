import React from "react"
import "./Nav.module.css"

const Nav = () => {
    return (
        <div>
            <nav>   
                <ul className="button">
                    <li><a href="store">Store</a></li>
                    <li><a href="categories">Categories</a></li>
                    <li><a href="saved">Saved</a></li>
                    <li><a href="fashion">Fashion</a></li>
                    <li><a href="health and beauty">Health and beauty</a></li>
                    <li><a href="computerandgadjets">Computer and gadjets</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;