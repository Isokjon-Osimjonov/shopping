import React from 'react'
import '../footer/Footer.css'
import FooterImg from '../../assets/images/footer-img3.png'
import { Link } from "react-router-dom";

import Telegram from "../../assets/images/tg.png";
import Instagram from "../../assets/images/instagram.png";
import Facebook from "../../assets/images/facebook.png";

import {
    RiFacebookCircleLine,
  RiInstagramLine,
  RiTelegramLine
} from "react-icons/ri";


function Footer() {
    return (
        <div className='footer__main__wrapper'>
            {/* <h1 className='footer__phone'>
                <span className='call'>Call</span> +998907508090
            </h1> */}
          <Link to='/'> <h1 className='footer__logo'> LOGO</h1> </Link>  
{/* <img src={FooterImg} className='footer__img' /> */}

<div className="copyright__footer">
<h6 className='copyright__txt'> Copyright © 2021-2022 By Isoqjon Osimjonov .All rights reserved.</h6>
       </div>

       {/* <div className="footer__description">
           <p className='f__description'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perspiciatis tenetur eligendi excepturi reprehenderit aliquam cumque! Temporibus deserunt libero ex aliquid architecto enim numquam ut laboriosam debitis dignissimos, dolorem rem reiciendis laudantium eveniet nostrum odio ipsam, dolore 
           </p>
       </div> */}


       <div className="footer__media__links">
       <a href="#" >  <RiTelegramLine className='footer__media__icons' />  </a>  
       <a href="#" >  <RiInstagramLine className='footer__media__icons'  />  </a> 
       <a href="#" >  <RiFacebookCircleLine className='footer__media__icons' />  </a>  
       </div>
<span className='footer__phone'> +998907508090</span>
        </div>

       
    )
}

export default Footer
