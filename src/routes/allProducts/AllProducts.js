import React ,{ useEffect } from "react";
import "../allProducts/AllProducts.css";
import Phone from "../../assets/images/phone.jpg";
import { RiShoppingCart2Line } from "react-icons/ri";
import {BsStarFill} from 'react-icons/bs'

import { FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

import Iphone13 from '../../assets/images/13pro.png'

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
      <h1 className="all__products">Allproducts In Stock</h1>

<div className="product__container">
  <div className="product__block__info"   data-aos="zoom-in" > 
  <p className="product__sale"> 20% Sale</p>
  <div className="product__image">
    <img src={Iphone13} />
  </div>
  <div className="product__mainname">
    <h1>Iphone13 Pro Max</h1>
    <div className="product__evaluation">
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
  </div>
  </div>
  <div className="product__description"> 
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quia quisquam dolorum dolores, rerum officia, voluptatibus dolo </p>
  
  </div>

<div className="product__buttons__price">
  <span    className="product__heart"><FaRegHeart/></span>
 <div  className="product__price"><p >$1200</p> </div>
 <span className="product__buy"> <MdAddShoppingCart /></span>
</div>
  
  </div>
  <div className="product__block__info"   data-aos="zoom-in" > 
  <p className="product__sale"> 20% Sale</p>
  <div className="product__image">
    <img src={Iphone13} />
  </div>
  <div className="product__mainname">
    <h1>Iphone13 Pro Max</h1>
    <div className="product__evaluation">
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
  </div>
  </div>
  <div className="product__description"> 
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quia quisquam dolorum dolores, rerum officia, voluptatibus dolo </p>
  
  </div>

<div className="product__buttons__price">
  <span    className="product__heart"><FaRegHeart/></span>
 <div  className="product__price"><p >$1200</p> </div>
 <span className="product__buy"> <MdAddShoppingCart /></span>
</div>
  
  </div>
  <div className="product__block__info"   data-aos="zoom-in" > 
  <p className="product__sale"> 20% Sale</p>
  <div className="product__image">
    <img src={Iphone13} />
  </div>
  <div className="product__mainname">
    <h1>Iphone13 Pro Max</h1>
    <div className="product__evaluation">
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
  </div>
  </div>
  <div className="product__description"> 
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quia quisquam dolorum dolores, rerum officia, voluptatibus dolo </p>
  
  </div>

<div className="product__buttons__price">
  <span    className="product__heart"><FaRegHeart/></span>
 <div  className="product__price"><p >$1200</p> </div>
 <span className="product__buy"> <MdAddShoppingCart /></span>
</div>
  
  </div>
  <div className="product__block__info"   data-aos="zoom-in" > 
  <p className="product__sale"> 20% Sale</p>
  <div className="product__image">
    <img src={Iphone13} />
  </div>
  <div className="product__mainname">
    <h1>Iphone13 Pro Max</h1>
    <div className="product__evaluation">
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
  </div>
  </div>
  <div className="product__description"> 
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quia quisquam dolorum dolores, rerum officia, voluptatibus dolo </p>
  
  </div>

<div className="product__buttons__price">
  <span    className="product__heart"><FaRegHeart/></span>
 <div  className="product__price"><p >$1200</p> </div>
 <span className="product__buy"> <MdAddShoppingCart /></span>
</div>
  
  </div>
  <div className="product__block__info"   data-aos="zoom-in" > 
  <p className="product__sale"> 20% Sale</p>
  <div className="product__image">
    <img src={Iphone13} />
  </div>
  <div className="product__mainname">
    <h1>Iphone13 Pro Max</h1>
    <div className="product__evaluation">
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
  </div>
  </div>
  <div className="product__description"> 
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quia quisquam dolorum dolores, rerum officia, voluptatibus dolo </p>
  
  </div>

<div className="product__buttons__price">
  <span    className="product__heart"><FaRegHeart/></span>
 <div  className="product__price"><p >$1200</p> </div>
 <span className="product__buy"> <MdAddShoppingCart /></span>
</div>
  
  </div>
  <div className="product__block__info"   data-aos="zoom-in" > 
  <p className="product__sale"> 20% Sale</p>
  <div className="product__image">
    <img src={Iphone13} />
  </div>
  <div className="product__mainname">
    <h1>Iphone13 Pro Max</h1>
    <div className="product__evaluation">
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
  </div>
  </div>
  <div className="product__description"> 
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quia quisquam dolorum dolores, rerum officia, voluptatibus dolo </p>
  
  </div>

<div className="product__buttons__price">
  <span    className="product__heart"><FaRegHeart/></span>
 <div  className="product__price"><p >$1200</p> </div>
 <span className="product__buy"> <MdAddShoppingCart /></span>
</div>
  
  </div>
  <div className="product__block__info"   data-aos="zoom-in" > 
  <p className="product__sale"> 20% Sale</p>
  <div className="product__image">
    <img src={Iphone13} />
  </div>
  <div className="product__mainname">
    <h1>Iphone13 Pro Max</h1>
    <div className="product__evaluation">
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
  </div>
  </div>
  <div className="product__description"> 
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quia quisquam dolorum dolores, rerum officia, voluptatibus dolo </p>
  
  </div>

<div className="product__buttons__price">
  <span    className="product__heart"><FaRegHeart/></span>
 <div  className="product__price"><p >$1200</p> </div>
 <span className="product__buy"> <MdAddShoppingCart /></span>
</div>
  
  </div>
  <div className="product__block__info"   data-aos="zoom-in" > 
  <p className="product__sale"> 20% Sale</p>
  <div className="product__image">
    <img src={Iphone13} />
  </div>
  <div className="product__mainname">
    <h1>Iphone13 Pro Max</h1>
    <div className="product__evaluation">
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
  </div>
  </div>
  <div className="product__description"> 
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quia quisquam dolorum dolores, rerum officia, voluptatibus dolo </p>
  
  </div>

<div className="product__buttons__price">
  <span    className="product__heart"><FaRegHeart/></span>
 <div  className="product__price"><p >$1200</p> </div>
 <span className="product__buy"> <MdAddShoppingCart /></span>
</div>
  
  </div>
  <div className="product__block__info"   data-aos="zoom-in" > 
  <p className="product__sale"> 20% Sale</p>
  <div className="product__image">
    <img src={Iphone13} />
  </div>
  <div className="product__mainname">
    <h1>Iphone13 Pro Max</h1>
    <div className="product__evaluation">
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
  </div>
  </div>
  <div className="product__description"> 
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quia quisquam dolorum dolores, rerum officia, voluptatibus dolo </p>
  
  </div>

<div className="product__buttons__price">
  <span    className="product__heart"><FaRegHeart/></span>
 <div  className="product__price"><p >$1200</p> </div>
 <span className="product__buy"> <MdAddShoppingCart /></span>
</div>
  
  </div>
  <div className="product__block__info"   data-aos="zoom-in" > 
  <p className="product__sale"> 20% Sale</p>
  <div className="product__image">
    <img src={Iphone13} />
  </div>
  <div className="product__mainname">
    <h1>Iphone13 Pro Max</h1>
    <div className="product__evaluation">
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
  </div>
  </div>
  <div className="product__description"> 
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quia quisquam dolorum dolores, rerum officia, voluptatibus dolo </p>
  
  </div>

<div className="product__buttons__price">
  <span    className="product__heart"><FaRegHeart/></span>
 <div  className="product__price"><p >$1200</p> </div>
 <span className="product__buy"> <MdAddShoppingCart /></span>
</div>
  
  </div>
  <div className="product__block__info"   data-aos="zoom-in" > 
  <p className="product__sale"> 20% Sale</p>
  <div className="product__image">
    <img src={Iphone13} />
  </div>
  <div className="product__mainname">
    <h1>Iphone13 Pro Max</h1>
    <div className="product__evaluation">
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
  </div>
  </div>
  <div className="product__description"> 
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quia quisquam dolorum dolores, rerum officia, voluptatibus dolo </p>
  
  </div>

<div className="product__buttons__price">
  <span    className="product__heart"><FaRegHeart/></span>
 <div  className="product__price"><p >$1200</p> </div>
 <span className="product__buy"> <MdAddShoppingCart /></span>
</div>
  
  </div>
  <div className="product__block__info"   data-aos="zoom-in" > 
  <p className="product__sale"> 20% Sale</p>
  <div className="product__image">
    <img src={Iphone13} />
  </div>
  <div className="product__mainname">
    <h1>Iphone13 Pro Max</h1>
    <div className="product__evaluation">
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
  </div>
  </div>
  <div className="product__description"> 
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quia quisquam dolorum dolores, rerum officia, voluptatibus dolo </p>
  
  </div>

<div className="product__buttons__price">
  <span    className="product__heart"><FaRegHeart/></span>
 <div  className="product__price"><p >$1200</p> </div>
 <span className="product__buy"> <MdAddShoppingCart /></span>
</div>
  
  </div>
  <div className="product__block__info"   data-aos="zoom-in" > 
  <p className="product__sale"> 20% Sale</p>
  <div className="product__image">
    <img src={Iphone13} />
  </div>
  <div className="product__mainname">
    <h1>Iphone13 Pro Max</h1>
    <div className="product__evaluation">
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
  </div>
  </div>
  <div className="product__description"> 
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quia quisquam dolorum dolores, rerum officia, voluptatibus dolo </p>
  
  </div>

<div className="product__buttons__price">
  <span    className="product__heart"><FaRegHeart/></span>
 <div  className="product__price"><p >$1200</p> </div>
 <span className="product__buy"> <MdAddShoppingCart /></span>
</div>
  
  </div>
  <div className="product__block__info"   data-aos="zoom-in" > 
  <p className="product__sale"> 20% Sale</p>
  <div className="product__image">
    <img src={Iphone13} />
  </div>
  <div className="product__mainname">
    <h1>Iphone13 Pro Max</h1>
    <div className="product__evaluation">
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
  </div>
  </div>
  <div className="product__description"> 
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quia quisquam dolorum dolores, rerum officia, voluptatibus dolo </p>
  
  </div>

<div className="product__buttons__price">
  <span    className="product__heart"><FaRegHeart/></span>
 <div  className="product__price"><p >$1200</p> </div>
 <span className="product__buy"> <MdAddShoppingCart /></span>
</div>
  
  </div>
  <div className="product__block__info"   data-aos="zoom-in" > 
  <p className="product__sale"> 20% Sale</p>
  <div className="product__image">
    <img src={Iphone13} />
  </div>
  <div className="product__mainname">
    <h1>Iphone13 Pro Max</h1>
    <div className="product__evaluation">
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
    <p><BsStarFill/></p>
  </div>
  </div>
  <div className="product__description"> 
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quia quisquam dolorum dolores, rerum officia, voluptatibus dolo </p>
  
  </div>

<div className="product__buttons__price">
  <span    className="product__heart"><FaRegHeart/></span>
 <div  className="product__price"><p >$1200</p> </div>
 <span className="product__buy"> <MdAddShoppingCart /></span>
</div>
  
  </div>

</div>
   
      

          
          
          </div>

     
  );
}

export default AllProducts;
