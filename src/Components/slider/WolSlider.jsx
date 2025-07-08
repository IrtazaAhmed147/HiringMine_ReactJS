import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WolCard from "../card/WolCard";

function WolSlider() {
     var settings = {
    dots: false,
    infinite: true,
    speed:  300,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
   <Slider {...settings}>

     <WolCard />
     <WolCard />
     <WolCard />
     <WolCard />
     <WolCard />
     <WolCard />
     <WolCard />
    
      
    </Slider>
  )
}

export default WolSlider