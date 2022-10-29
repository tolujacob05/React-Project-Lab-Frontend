import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faUser, faCircleInfo, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import styles from "./Navbar.module.css"


const Navbar = () => {

    
    return( 
        
        <>
            
            <header className={styles.main}>
                <div className={styles.menu}>
                    <span className={styles.menuBtnBurger}></span>
                    <div className={styles.empty}></div>
                </div>
                <div className={styles.field}>
                    <input
                        type="text" 
                        className={styles.inputText}
                        placeholder="Search for Stores, Products and Categories..."
                    />
                    <div className={styles.search}>
                        <h4><FontAwesomeIcon icon={faMagnifyingGlass} /></h4>
                    </div>   
                </div>

                <div className={styles.icons}>
                   <h4><FontAwesomeIcon icon={faUser} />Account</h4>
                   <h4><FontAwesomeIcon icon={faCircleInfo} />Help</h4>
                   <h4><FontAwesomeIcon icon={faCartShopping} />Cart</h4>
                </div>
            </header>

            <nav>   
                <ul className="button">
                    <li><a href="store">Store</a></li>
                    <li><a href="categories">Categories</a></li>
                    <li><a href="saved">Saved</a></li>
                    <li><a href="fashion">Fashion</a></li>
                    <li><a href="health and beauty">Health and beauty</a></li>
                    <li><a href="computer and gadjets">Computer and gadjets</a></li>
                </ul> 
            </nav>
        </>
    )
}

export default Navbar;
