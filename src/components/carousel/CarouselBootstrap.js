import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../carousel/CarouselBootstrap.css'
import Macbook from './../../assets/images/macprod.jpg'
import Mac from './../../assets/images/macpro3.jpg'
import Iphone13 from './../../assets/images/iphone13pro.jpg'


// import Carousel from 'react-bootstrap/Carousel'

const CarouselBootstrap = () => {
    return (
        <div className='carousel-main'>

<Carousel controls={false} fade={true} pause={false}  >
  <Carousel.Item interval={4000}  >
    <img
      className="d-block w-100  carousel__img"
      src={Macbook}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Macbook Pro M1 MAX</h3>
      <p>Think Different — But Not Too Different.</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100 carousel__img "
      src={Mac}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Mackbook Pro</h3>
      <p>Think Different — But Not Too Different.</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100  carousel__img"
      src={Iphone13}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Iphone 13 Pro MAX</h3>
      <p>Think Different — But Not Too Different.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


        </div>
    )
}

export default CarouselBootstrap
