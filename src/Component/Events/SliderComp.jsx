import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

const SliderComp = () => {
  var settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <CircleArrowRight color="black" />,
    prevArrow: <CircleArrowLeft color="black" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container p-10 ">
      <Slider {...settings}>
        <div>
          <h3>2024</h3>
        </div>
        <div>
          <h3>2023</h3>
        </div>
        <div>
          <h3>2022</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
