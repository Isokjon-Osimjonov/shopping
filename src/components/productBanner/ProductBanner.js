import React from "react";
// import { Link } from "react-router-dom";
import "../productBanner/ProductBanner.css";
import Book from "../../assets/images/book.png";
import Watch from "../../assets/images/swatch.png";
import Phone from "../../assets/images/13pro.png";
import Laptop from "../../assets/images/mackk.png";
import Parfume from "../../assets/images/parfume0.png";
import Tv from "../../assets/images/stv.png";

function ProductBanner() {
  function openBooksBlock() {}

  return (
    <div>
      <ul className="products__banner__wrapper">
        <li className="products__banner__link">
          <img
            src={Book}
            className="product__book"
            onClick={openBooksBlock}
            alt=""
          />
        </li>
        <li className="products__banner__link">
          <img src={Watch} className="produxt__watch" alt="" />
        </li>
        <li className="products__banner__link">
          <img src={Phone} className="product__phone" alt="" />
        </li>
        <li className="products__banner__link">
          <img src={Laptop} className="product__laptop" alt="" />
        </li>
        <li className="products__banner__link">
          <img src={Tv} className="product__tv" alt="" />
        </li>
        <li className="products__banner__link">
          <img src={Parfume} className="product__parfume" alt="" />
        </li>
      </ul>
    </div>
  );
}

export default ProductBanner;
