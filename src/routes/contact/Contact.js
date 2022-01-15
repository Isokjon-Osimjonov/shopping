import React,{ useEffect } from "react";
import ".././contact/Contact.css";
import Support from "../../assets/images/contact-uss.png";
import Phone from '../../assets/images/phone-call.png'
import Location from '../../assets/images/location.png'
import { FiUser,FiPhoneCall,FiMessageSquare } from "react-icons/fi";
import Bcolor from '../../assets/images/wave.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Contact() {


useEffect(()=>{
  AOS.init({
    // offset: 200,
    duration: 800,
    easing: 'ease-in-sine',
    delay: 100,
  })
})


  return (
    <main className="main__contact__page">
      <h1 className="support__customer__title"  data-aos="fade-up"
     data-aos-easing="linear">Have Some Questions?</h1>
      <p className="support__custoer__paragpraph"   data-aos="fade-up"
     data-aos-easing="linear">Thank you for your interest in our services. Please fill out the form below or email or <br /><span className="email">osimjonov2004@gmail.com</span> and we will get back to your promptly regarding your request. </p>
      <img src={Support} className="support__customer__img"  data-aos="zoom-in" />
      <h2 className="get__in__touch"  data-aos="fade-up">Get in touch</h2>
      <div className="line"  data-aos="fade-up"></div>

      <div className="icons" data-aos="fade-up" >
      <img src={Phone} className="phone__icon"   />
      <img src={Location} className="email__icon"   />
      </div>

      <div className="contact__info" data-aos="fade-up" >
     < p className="phone__number"  >+998907508090 </p>
      <p className="email_p"    >Turaqurg'on Tumani </p>
      </div>
    
    

<div className="support__customer__contact"  data-aos="zoom-in" >
<div className="name">
<FiUser  className="user__icon"/> <input className="contact__input__name" type="text" placeholder="Ism" required />
</div>
<div className="surname">
<FiUser  className="user__icon"/> <input className="conatct__input__surname" type="text" placeholder="Familiya"  />

</div>
<div className="phone">
<FiPhoneCall className="user__icon" />  <input className="conatct__input__surname" type="text" placeholder="Telefon raqam" required />
</div>
<div className="text__area">
<FiMessageSquare  className="user__icon__message"/>
 <textarea name="" id="" cols="30" rows="10" placeholder="Xabar" required></textarea>
</div>
 
 <button type="submit" className="customer__contact__send__message" >XABAR YUBORISH</button>

</div>

    </main>
  );
}

export default Contact;
