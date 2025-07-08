import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from "../card/CardComponent";

function SliderComponent() {
     var settings = {
    dots: true,
    infinite: true,
    speed:  300,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
   <Slider {...settings}>

   
       <CardComponent />
       <CardComponent />
       <CardComponent />
       <CardComponent />
       <CardComponent />
       <CardComponent />
       <CardComponent />
       <CardComponent /> 
       
      
    </Slider>
  )
}

export default SliderComponent