import React ,{ useEffect } from "react";
import "../allProducts/AllProducts.css";
import Phone from "../../assets/images/phone.jpg";
import { RiShoppingCart2Line } from "react-icons/ri";

import { FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

import AOS from 'aos'
import 'aos/dist/aos.css'

function AllProducts() {


  useEffect(()=>{
    AOS.init({
      // offset: 900,
      duration: 600,
      // easing: 'ease-in-sine',
      // delay: 100,
    })
  })


  return (
    <div className="allProducts__wrapper__page">
      <i src={RiShoppingCart2Line} />

      <section className="section-bg">
        <div className="container">
          <div className="row">

{/* products */}

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 "   data-aos="fade-up">
              <div className="single-product product__block">
                <div className="product-thumb">
                  <img src={Phone} alt="" className="product__div" />
                </div>
                <div className="product-title">
                  <h3>
                    <a href="#">Revlutionary Andriod Oneplus</a>
                  </h3>
                </div>

                <div className="allproducts__buttons">
                  <div className="product-btns">
                    <a href="#" className="btn-small mr-2">
                      $100
                    </a>
                    <a href="#" className="btn-round mr-2">
                      <FaRegHeart />
                    </a>
                    <a href="#" className="btn-round">
                      <MdAddShoppingCart />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* products */}

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 "  data-aos="fade-up">
              <div className="single-product product__block">
                <div className="product-thumb">
                  <img src={Phone} alt="" className="product__div" />
                </div>
                <div className="product-title">
                  <h3>
                    <a href="#">Revlutionary Andriod Oneplus</a>
                  </h3>
                </div>

                <div className="allproducts__buttons">
                  <div className="product-btns">
                    <a href="#" className="btn-small mr-2">
                      $100
                    </a>
                    <a href="#" className="btn-round mr-2">
                      <FaRegHeart />
                    </a>
                    <a href="#" className="btn-round">
                      <MdAddShoppingCart />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* products */}

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 " data-aos="fade-up">
              <div className="single-product product__block">
                <div className="product-thumb">
                  <img src={Phone} alt="" className="product__div" />
                </div>
                <div className="product-title">
                  <h3>
                    <a href="#">Revlutionary Andriod Oneplus</a>
                  </h3>
                </div>

                <div className="allproducts__buttons">
                  <div className="product-btns">
                    <a href="#" className="btn-small mr-2">
                      $100
                    </a>
                    <a href="#" className="btn-round mr-2">
                      <FaRegHeart />
                    </a>
                    <a href="#" className="btn-round">
                      <MdAddShoppingCart />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* products */}

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 " data-aos="fade-up">
              <div className="single-product product__block">
                <div className="product-thumb">
                  <img src={Phone} alt="" className="product__div" />
                </div>
                <div className="product-title">
                  <h3>
                    <a href="#">Revlutionary Andriod Oneplus</a>
                  </h3>
                </div>

                <div className="allproducts__buttons">
                  <div className="product-btns">
                    <a href="#" className="btn-small mr-2">
                      $100
                    </a>
                    <a href="#" className="btn-round mr-2">
                      <FaRegHeart />
                    </a>
                    <a href="#" className="btn-round">
                      <MdAddShoppingCart />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* products */}

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 " data-aos="fade-up">
              <div className="single-product product__block">
                <div className="product-thumb">
                  <img src={Phone} alt="" className="product__div" />
                </div>
                <div className="product-title">
                  <h3>
                    <a href="#">Revlutionary Andriod Oneplus</a>
                  </h3>
                </div>

                <div className="allproducts__buttons">
                  <div className="product-btns">
                    <a href="#" className="btn-small mr-2">
                      $100
                    </a>
                    <a href="#" className="btn-round mr-2">
                      <FaRegHeart />
                    </a>
                    <a href="#" className="btn-round">
                      <MdAddShoppingCart />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* products */}

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 " data-aos="fade-up">
              <div className="single-product product__block">
                <div className="product-thumb">
                  <img src={Phone} alt="" className="product__div" />
                </div>
                <div className="product-title">
                  <h3>
                    <a href="#">Revlutionary Andriod Oneplus</a>
                  </h3>
                </div>

                <div className="allproducts__buttons">
                  <div className="product-btns">
                    <a href="#" className="btn-small mr-2">
                      $100
                    </a>
                    <a href="#" className="btn-round mr-2">
                      <FaRegHeart />
                    </a>
                    <a href="#" className="btn-round">
                      <MdAddShoppingCart />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* products */}

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 " data-aos="fade-up">
              <div className="single-product product__block">
                <div className="product-thumb">
                  <img src={Phone} alt="" className="product__div" />
                </div>
                <div className="product-title">
                  <h3>
                    <a href="#">Revlutionary Andriod Oneplus</a>
                  </h3>
                </div>

                <div className="allproducts__buttons">
                  <div className="product-btns">
                    <a href="#" className="btn-small mr-2">
                      $100
                    </a>
                    <a href="#" className="btn-round mr-2">
                      <FaRegHeart />
                    </a>
                    <a href="#" className="btn-round">
                      <MdAddShoppingCart />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* products */}

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 " data-aos="fade-up">
              <div className="single-product product__block">
                <div className="product-thumb">
                  <img src={Phone} alt="" className="product__div" />
                </div>
                <div className="product-title">
                  <h3>
                    <a href="#">Revlutionary Andriod Oneplus</a>
                  </h3>
                </div>

                <div className="allproducts__buttons">
                  <div className="product-btns">
                    <a href="#" className="btn-small mr-2">
                      $100
                    </a>
                    <a href="#" className="btn-round mr-2">
                      <FaRegHeart />
                    </a>
                    <a href="#" className="btn-round">
                      <MdAddShoppingCart />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* products */}

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 " data-aos="fade-up">
              <div className="single-product product__block">
                <div className="product-thumb">
                  <img src={Phone} alt="" className="product__div" />
                </div>
                <div className="product-title">
                  <h3>
                    <a href="#">Revlutionary Andriod Oneplus</a>
                  </h3>
                </div>

                <div className="allproducts__buttons">
                  <div className="product-btns">
                    <a href="#" className="btn-small mr-2">
                      $100
                    </a>
                    <a href="#" className="btn-round mr-2">
                      <FaRegHeart />
                    </a>
                    <a href="#" className="btn-round">
                      <MdAddShoppingCart />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* products */}

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 " data-aos="fade-up">
              <div className="single-product product__block">
                <div className="product-thumb">
                  <img src={Phone} alt="" className="product__div" />
                </div>
                <div className="product-title">
                  <h3>
                    <a href="#">Revlutionary Andriod Oneplus</a>
                  </h3>
                </div>

                <div className="allproducts__buttons">
                  <div className="product-btns">
                    <a href="#" className="btn-small mr-2">
                      $100
                    </a>
                    <a href="#" className="btn-round mr-2">
                      <FaRegHeart />
                    </a>
                    <a href="#" className="btn-round">
                      <MdAddShoppingCart />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* products */}

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 " data-aos="fade-up">
              <div className="single-product product__block">
                <div className="product-thumb">
                  <img src={Phone} alt="" className="product__div" />
                </div>
                <div className="product-title">
                  <h3>
                    <a href="#">Revlutionary Andriod Oneplus</a>
                  </h3>
                </div>

                <div className="allproducts__buttons">
                  <div className="product-btns">
                    <a href="#" className="btn-small mr-2">
                      $100
                    </a>
                    <a href="#" className="btn-round mr-2">
                      <FaRegHeart />
                    </a>
                    <a href="#" className="btn-round">
                      <MdAddShoppingCart />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* products */}

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 " data-aos="fade-up">
              <div className="single-product product__block">
                <div className="product-thumb">
                  <img src={Phone} alt="" className="product__div" />
                </div>
                <div className="product-title">
                  <h3>
                    <a href="#">Revlutionary Andriod Oneplus</a>
                  </h3>
                </div>

                <div className="allproducts__buttons">
                  <div className="product-btns">
                    <a href="#" className="btn-small mr-2">
                      $100
                    </a>
                    <a href="#" className="btn-round mr-2">
                      <FaRegHeart />
                    </a>
                    <a href="#" className="btn-round">
                      <MdAddShoppingCart />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          
          
          </div>

          {/* 
        <div className="row button-center">
            <div className="col-xl-6 centered">
                <a href="#" className="bttn-def"><span>Load more</span></a>
            </div>
        </div> */}
        </div>
      </section>
    </div>
  );
}

export default AllProducts;
