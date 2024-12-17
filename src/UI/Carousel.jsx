import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
  Autoplay,
} from "swiper/modules";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import "./Carousel.css";

function App({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="w-full h-full">
      <div className="relative mb-4 md:mb-6">
        <div className="w-full h-full">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-navigation-size": "24px",
            }}
            spaceBetween={10}
            pagination={{
              clickable: true,
              // dynamicBullets: true,
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
            modules={[FreeMode, Navigation, Thumbs, Pagination, Autoplay]}
            className="w-full h-full"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full aspect-video">
                  <img
                    src={slide}
                    alt={`Image ${index + 1}`}
                    className="overflow-hidden object-cover w-full h-full rounded-xl shadow-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          className="z-10 absolute flex items-center top-0 bottom-0 left-0 p-2 md:p-4 lg:p-8 transition-bg duration-100 ease-in-out hover:bg-black/40 focus-visible:bg-black/40 text-slate-50 cursor-pointer rounded-l-xl"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <RiArrowLeftWideLine className="text-xl sm:text-4xl" />
        </div>

        <div
          className="z-10 absolute flex items-center top-0 bottom-0 right-0 p-2 md:p-4 lg:p-8 transition-bg duration-100 ease-in-out hover:bg-black/40 focus-visible:bg-black/40 text-slate-50 cursor-pointer rounded-r-xl"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <RiArrowRightWideLine className="text-xl sm:text-4xl" />
        </div>
      </div>
    </div>
  );
}

export default App;
