import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WolCard from "../card/WolCard";
import SmallCard from "../card/SmallCard";
import useFetch from "../../hooks/useFetch";

function ProfileSlider() {
  const { data, loading, error } = useFetch('https://hiringmine-railway-development.up.railway.app/api/users/home?sortBy=mostViewed')
  console.log(data);

  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };


  return (
    <Slider {...settings}>
      {data && data.data?.map((detail) => (
        <SmallCard {...detail} />
      ))}

    </Slider>
  )
}

export default ProfileSlider