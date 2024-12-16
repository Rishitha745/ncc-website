import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full pt-12 pb-12"
      >
        <SwiperSlide className="w-72 h-72 bg-center bg-cover">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-72 h-72 bg-center bg-cover">
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-72 h-72 bg-center bg-cover">
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-72 h-72 bg-center bg-cover">
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-72 h-72 bg-center bg-cover">
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-72 h-72 bg-center bg-cover">
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-72 h-72 bg-center bg-cover">
          <img
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-72 h-72 bg-center bg-cover">
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-72 h-72 bg-center bg-cover">
          <img
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
