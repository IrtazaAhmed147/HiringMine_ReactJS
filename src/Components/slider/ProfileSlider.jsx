import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SmallCard from "../card/SmallCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileSlider } from "../../redux/profilesSlice";

function ProfileSlider() {
  const dispatch = useDispatch()
  const { allProfiles, isLoading } = useSelector((state) => state.profile);


  useEffect(() => {
    dispatch(fetchProfileSlider());
  }, []);


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
      {!isLoading && allProfiles?.map((detail) => (
        <SmallCard {...detail} />
      ))}

    </Slider>
  )
}

export default ProfileSlider