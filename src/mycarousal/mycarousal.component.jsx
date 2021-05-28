import React from 'react'
import "../styles.css";
import img1 from '../images/new.jpg';
import img2 from '../images/imagesix.jpg'
import img3 from '../images/imageseven.jpg'
import img10 from '../images/img10.jpg'





import Carousel from 'react-bootstrap/Carousel';



const Mycarousalcomponent = () => {
    return (
        <div className="carousel-setting">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={img1}
      alt="First slide"
      height="800px"
    />
    <Carousel.Caption>
      <h3>Update your wardrobe </h3>
      <p>with our latest trends.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p>.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={img10}
      alt="First slide"
      height="800px"
    />
    <Carousel.Caption>
      <h3> Coming Soon!!</h3>
      <p>Soon we are bringing wide range of sweatshirts.</p>
      
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
        </div>
        


    )
}

export default Mycarousalcomponent
