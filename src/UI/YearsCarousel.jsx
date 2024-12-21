import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { Years } from "../Constants";

const App = ({ handleYearChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const isActive = (index) => {
    return index === activeIndex;
  };

  const isAdjacent = (index) => {
    return index === activeIndex - 1 || index === activeIndex + 1;
  };

  const handleClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };
  handleYearChange(activeIndex);

  return (
    <div className="flex gap-4 items-center justify-center mb-6 sm:mb-10">
      <div className="leftbutton">
        <button className="arrow-left">
          <CircleArrowLeft size={25} />
        </button>
      </div>
      <div className="w-56 sm:w-96">
        <Swiper
          ref={swiperRef}
          spaceBetween={2}
          slidesPerView={2}
          navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
          // pagination={{ clickable: true, dynamicBullets: false }}
          centeredSlides={true}
          modules={[Navigation, Pagination]}
          onSlideChange={handleSlideChange}
          initialSlide={0}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            // 768: {
            //   slidesPerView: 5,
            // },
          }}
        >
          {Years.map((year, index) => (
            <SwiperSlide
              key={index}
              className={`h-32 w-10 flex items-center justify-center ${
                isActive(index)
                  ? "scale-125"
                  : isAdjacent(index)
                  ? ""
                  : ""
              }`}
            >
              <div
                className={`bg-blue-600 px-5 py-3 hover:bg-blue-700 outline-none text-sm text-slate-50 cursor-pointer rounded-full shadow-slate-500 shadow-md`}
                onClick={() => {
                  handleClick(index);
                }}
              >
                {year.year}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="rightbutton">
        <button className="arrow-right">
          <CircleArrowRight size={25} />
        </button>
      </div>
    </div>
  );
};

export default App;
