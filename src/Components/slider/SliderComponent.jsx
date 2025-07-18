import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from "../card/CardComponent";
import useFetch from "../../hooks/useFetch.jsx";

function SliderComponent() {


  const { data, loading, error } = useFetch('https://hiringmine-railway-development.up.railway.app/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills=')
  console.log(data);

  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
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
    <>
      {loading && "loading"}
      <Slider {...settings}>
        {data && data?.data?.map((detail,i) => (
          <CardComponent key={i} {...detail} slider={true} />
        ))}



      </Slider>
    </>
  )
}

export default SliderComponent