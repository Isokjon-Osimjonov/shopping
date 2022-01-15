import React from "react";
import { Link } from "react-router-dom";
import "../productBanner/ProductBanner.css";
import Book from '../../assets/images/book.jpeg'
import Watch from '../../assets/images/watch.jpg'
import Phone from '../../assets/images/phone.jpg'
import Laptop from '../../assets/images/laptop.jpg'
import Parfume from '../../assets/images/parfume.jpg'
import Tv from '../../assets/images/tv.png'

function ProductBanner() {
  return (
    <div>
      <ul className="products__banner__wrapper">
        <li className="products__banner__link">
           <img src={Book} className="product__book" />
        </li>
        <li className="products__banner__link">
<img src={Watch} className="produxt__watch" />
        </li>
        <li className="products__banner__link">
          <img  src={Phone} className="product__phone" />
        </li>
        <li className="products__banner__link">
          <img src={Laptop}  className="product__laptop"/>
        </li>
        <li className="products__banner__link">
          <img src={Tv}  className="product__tv" />
        </li>
        <li className="products__banner__link">
          <img  src={Parfume} className="product__parfume" />
        </li>
      </ul>
    </div>
  );
}

export default ProductBanner;
