import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Carousel = ({ gallery }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "24px",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full md:w-3/4 md:mx-auto mb-6 md:mb-8"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {gallery.map((item, index) => (
          <SwiperSlide>
            <div className="w-full h-[40vh] sm:h-[60vh] object-cover">
              <img
                key={index}
                src={item.src}
                alt={`Gallery image ${index + 1}`}
                className="overflow-hidden object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="px-2 sm:px-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          breakpoints={{
            460: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full mb-6 md:mb-8"
        >
          {gallery.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`aspect-square object-cover transition-opacity duration-300 ${
                  activeIndex === index ? "opacity-100" : "opacity-50"
                }`}
              >
                <img
                  key={index}
                  src={item.src}
                  alt={`Gallery image ${index + 1}`}
                  className="overflow-hidden object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
