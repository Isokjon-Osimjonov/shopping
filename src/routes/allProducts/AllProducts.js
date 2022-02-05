import React, { useEffect, useState } from "react";
import "../allProducts/AllProducts.css";
// import Iphone13 from "../../assets/images/Iphone13.jpg";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BsStarFill } from "react-icons/bs";

import { FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

import Iphone13 from "../../assets/images/13pro.png";

import AOS from "aos";
import "aos/dist/aos.css";

function AllProducts() {
  useEffect(() => {
    AOS.init({
      // offset: 900,
      duration: 600
      // easing: 'ease-in-sine',
      // delay: 100,
    });
  });
  //   const [price,setPrice] = useState([]);
  // function shopPrice(prices){
  //   console.log(prices);

  //   setPrice([...prices]);
  //   localStorage.getItem("price",JSON.stringify(price));
  // }

  const data = [
    {
      id: 0,
      sale: 20,
      imgData: Iphone13,
      title: "Iphon 13 ",
      desc: "lorem sadaskdjksdladkaslkdjasldksadnas",
      price: 1200
    },
    {
      id: 1,
      sale: 20,
      imgData: Iphone13,
      title: "Iphon 13 ",
      desc: "lorem sadaskdjksdladkaslkdjasldksadnas",
      price: 1200
    },
    {
      id: 2,
      sale: 20,
      imgData: Iphone13,
      title: "Iphon 13 ",
      desc: "lorem sadaskdjksdladkaslkdjasldksadnas",
      price: 1200
    },
    {
      id: 3,
      sale: 20,
      imgData: Iphone13,
      title: "Iphon 13 ",
      desc: "lorem sadaskdjksdladkaslkdjasldksadnas",
      price: 1200
    },
    {
      id: 4,
      sale: 20,
      imgData: Iphone13,
      title: "Iphon 13 ",
      desc: "lorem sadaskdjksdladkaslkdjasldksadnas",
      price: 1200
    },
    {
      id: 5,
      sale: 20,
      imgData: Iphone13,
      title: "Iphon 13 ",
      desc: "lorem sadaskdjksdladkaslkdjasldksadnas",
      price: 1200
    },
    {
      id: 6,
      sale: 20,
      imgData: Iphone13,
      title: "Iphon 13 ",
      desc: "lorem sadaskdjksdladkaslkdjasldksadnas",
      price: 1200
    },
    {
      id: 7,
      sale: 20,
      imgData: Iphone13,
      title: "Iphon 56 ",
      desc: "lorem sadaskdjksdladkaslkdjasldksadnas",
      price: 1200
    },
    {
      id: 7,
      sale: 20,
      imgData: Iphone13,
      title: "Iphon 56 ",
      desc: "lorem sadaskdjksdladkaslkdjasldksadnas",
      price: 1200
    }
  ];

  return (
    <div className="allProducts__wrapper__page">
      <h1 className="all__products">Allproducts In Stock</h1>

      <div className="product__container">
        {data.map(base =>
          <div
            className="product__block__info"
            data-aos="zoom-in"
            key={base.id}
          >
            <p className="product__sale">
              {base.sale} % Sale
            </p>
            <div className="product__image">
              <img src={base.imgData} />
            </div>
            <div className="product__mainname">
              <h1>
                {base.title}
              </h1>
              <div className="product__evaluation">
                <p>
                  <BsStarFill />
                </p>
                <p>
                  <BsStarFill />
                </p>
                <p>
                  <BsStarFill />
                </p>
                <p>
                  <BsStarFill />
                </p>
                <p>
                  <BsStarFill />
                </p>
              </div>
            </div>
            <div className="product__description">
              <p>
                {base.desc}
              </p>
            </div>

            <div className="product__buttons__price">
              <span className="product__heart">
                <FaRegHeart />
              </span>
              <div className="product__price">
                <p>${base.price}</p>{" "}
              </div>
              <span className="product__buy">
                {" "}<MdAddShoppingCart />
              </span>
            </div>
          </div>
        )}

        {/* onClick={(f)=>shopPrice(base)} */}
      </div>
    </div>
  );
}

export default AllProducts;
