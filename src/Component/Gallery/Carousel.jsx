import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Carousel = ({ gallery }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef(null);

  return (
    <div className="mb-6 sm:mb-10 px-6">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "24px",
        }}
        spaceBetween={10}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full sm:w-[90%] mb-4 md:mb-6"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {gallery.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full aspect-video">
              <img
                key={index}
                src={item.src}
                alt={`Gallery image ${index + 1}`}
                className="overflow-hidden object-cover w-full h-full rounded-xl shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center gap-4 sm:gap-6 mb-4 md:mb-6">
        <button className="" onClick={() => swiperRef.current?.slidePrev()}>
          <CircleArrowLeft size={25} />
        </button>
        <button className="" onClick={() => swiperRef.current?.slideNext()}>
          <CircleArrowRight size={25} />
        </button>
      </div>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          460: {
            slidesPerView: 5,
          },
          640: {
            slidesPerView: 6,
          },
          900: {
            slidesPerView: 8,
          },
        }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full sm:w-[90%] mb-6 md:mb-8"
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
                className="overflow-hidden object-cover w-full h-full rounded-xl shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
