import React, { useEffect } from "react";
import "../about/AboutUs.css";
import About from "../../assets/images/aboutus.png";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTelegramFill
} from "react-icons/ri";
import tg from "../../assets/images/tg.png";
import ins from "../../assets/images/instagram.png";
import fcb from "../../assets/images/facebook.png";
import location from "../../assets/images/location1.png";
import phone from "../../assets/images/phone.png";

function AboutUs() {
  useEffect(() => {
    AOS.init({
      // offset: 200,
      duration: 600,
      //   easing: 'ease-in-sine',
      delay: 100
    });
  });

  return (
    <div className="aboutus__main__wrapper">
      <span className="abooutus__page__title" data-aos="fade-up">
        ABOUT US
      </span>
      <p className="aboutus_description" data-aos="fade-up">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente vitae
        eum ducimus nemo, repudiandae cumque magnam reiciendis possimus minima
        ratione dolorem dignissimos magni soluta dicta labore velit asperiores
        pariatur ipsam. Similique assumenda quod tempora deleniti laudantium
        expedita facilis aliquam est. Error qui modi odit sed culpa! Aliquam
        earum officiis iusto in aliquid perferendis enim vel. Voluptatibus nam
        deserunt deleniti consequuntur, est odit assumenda quisquam, aliquid
        tempora dolore, minima
      </p>

      <div className="phone__location" data-aos="fade-right">
        <img src={phone} className="phone__contact" />
        <img src={location} className="location__contact" />
      </div>

      <div className="contact__info__aboutus" data-aos="fade-right">
        <p className="phone__number">+998907508090 </p>
        <p className="email_p">Turaqurg'on Tumani </p>
      </div>

      <div className="sosheal__media__links" data-aos="fade-right">
        <a href="#" className="media">
          <img src={tg} className="media__icons__t" /> Telegram
        </a>
        <a href="#" className="media">
          <img src={ins} className="media__icons__i" /> Instagram
        </a>
        <a href="#" className="media">
          <img src={fcb} className="media__icons__f" /> Facebook
        </a>
      </div>

      <img src={About} className="aboutus__page__img" data-aos="zoom-in" />
    </div>
  );
}

export default AboutUs;
