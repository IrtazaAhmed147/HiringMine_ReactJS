import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from "../card/CardComponent";
import useFetch from "../../hooks/useFetch.jsx";

function SliderComponent() {


  const {data, loading, error} = useFetch('https://hiringmine-railway-development.up.railway.app/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills=')
  console.log(data);
  
     var settings = {
    dots: true,
    infinite: true,
    speed:  300,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <>
    {loading && "loading"}
   <Slider {...settings}>
    {data &&  data?.data?.map((detail)=> (
      <CardComponent companyName={detail.companyName} designation={detail.designation} views={detail.views} appliedBy={detail.appliedBy} user={detail.user} payRangeEnd={detail.payRangeEnd} payRangeStart={detail.payRangeStart} country={detail.country} city={detail.city} createdAt={detail.createdAt} />
    ))}
   
       
      
    </Slider>
    </>
  )
}

export default SliderComponent