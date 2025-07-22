import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from "../card/CardComponent";
import { useDispatch, useSelector } from "react-redux";
import {  fetchJobsSlider } from "../../redux/jobsSlice.js";

function SliderComponent() {

  const dispatch = useDispatch()
  const { allJobs,  isLoading } = useSelector((state) => state.jobs);
  
  useEffect(() => {
    dispatch(fetchJobsSlider());
  }, []);

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
      {isLoading && "loading"}
      <Slider {...settings}>
        {allJobs && allJobs?.map((detail, i) => (
          <CardComponent key={i} {...detail} slider={true} />
        ))}



      </Slider>
    </>
  )
}

export default SliderComponent