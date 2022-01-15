import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../carousel/CarouselBootstrap.css'
import Yoga6 from './../../assets/images/yoga6.jpg'
import Huawei from './../../assets/images/Huawei Y7p.jpg'
import Iphone13 from './../../assets/images/iphone13pro.jpg'

// import Carousel from 'react-bootstrap/Carousel'

const CarouselBootstrap = () => {
    return (
        <div className='carousel-main'>

<Carousel controls={false} fade={true} pause={false}  >
  <Carousel.Item interval={4000}  >
    <img
      className="d-block w-100  carousel__img"
      src={Yoga6}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100 carousel__img "
      src={Yoga6}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100  carousel__img"
      src={Iphone13}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


        </div>
    )
}

export default CarouselBootstrap
