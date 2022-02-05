import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

// import   Typewriter  from 'react-simple-typewriter'
// import 'react-simple-typewriter/dist/index.css'

function Header() {
  const location = useLocation()
  if(location.pathname === "/admin"){
    return <></>;
  }else{
  return (
    <div>
      <div className="header">
        <Link to="/" className="logo">
          LOGO
        </Link>
        <nav>
          <ul className="links__ul">
            <li className="links">
              <Link to="/allProducts" className="allproduct">
                AllProducts
              </Link>
              <Link to="/mostpopular" className="mostpopular">
                Most popular
              </Link>

              <Link to="/mostliked" className="mostliked">
                Most liked
              </Link>
              <Link to="/aboutus" className="aboutus">
                About Us
              </Link>
              <Link to="/contact" className="contact">
                Contact
              </Link>
            </li>
          </ul>

          <div className="neader__product__selected__liked">
            <Link to="/liked">
              <FiHeart className="header__liked" />
            </Link>
            <Link to="/selectedtobuy">
              <FiShoppingCart className="header__selected" />
            </Link>
          </div>
        </nav>
      </div>

      <div className="header__search__nav">
        <div className="nav__search">
          <input type="search" className="search__input__nav"  />
          <div className="search__icon__nav">
            <FiSearch className="nav__search__icon" />
          </div>
        </div>

        <FaRegUser className="user__icon__nav" />
        <div className="authentification">
          <Link to="/register" className="authentification__register">
            Register |
          </Link>
          <Link to="/login" className="authentification__login">
            Login{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
}

export default Header;

// #EFF1F2
