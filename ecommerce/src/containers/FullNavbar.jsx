import React from "react";
import "./FullNavbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCircleQuestion, faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function FullNavbar() {
  return (
    <>
      <div className="navbar">
        <p className="logos">E-stores</p>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search for stores, products and categories"
            className="navSearchBar"
          />
          <button className="searchIcon">
            <svg
              width="18"
              height="18"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1957 20.526C13.4729 20.5255 15.6844 19.7632 17.4782 18.3605L23.118 24L24.9321 22.186L19.2923 16.5465C20.6959 14.7526 21.4587 12.5407 21.4592 10.263C21.4592 4.60423 16.8547 0 11.1957 0C5.53661 0 0.932129 4.60423 0.932129 10.263C0.932129 15.9217 5.53661 20.526 11.1957 20.526ZM11.1957 2.56575C15.4409 2.56575 18.8933 6.01796 18.8933 10.263C18.8933 14.508 15.4409 17.9602 11.1957 17.9602C6.95041 17.9602 3.49801 14.508 3.49801 10.263C3.49801 6.01796 6.95041 2.56575 11.1957 2.56575Z"
                fill="#FCFCFC"
              />
            </svg>
          </button>
        </div>
        <div className="icons">
          <div className="account">
            <FontAwesomeIcon icon={faUser} />
            <a href="account" >
                Account
            </a>
          </div>
          <div className="help">
            <FontAwesomeIcon icon={faCircleQuestion} />
            <a href="help">
              Help
            </a>
          </div>
          <div className="cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <a href="cart">
              Cart
            </a>
          </div>
        </div>
      </div>  
    </>
  )
}
