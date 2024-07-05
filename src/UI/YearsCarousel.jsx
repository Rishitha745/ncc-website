import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

const Years = [
  { year: 2024 },
  { year: 2023 },
  { year: 2022 },
  { year: 2021 },
  { year: 2020 },
  { year: 2019 },
  { year: 2018 },
  { year: 2017 },
  { year: 2016 },
  { year: 2015 },
  { year: 2014 },
  { year: 2013 },
  { year: 2012 },
];

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
    <div className="">
      <div className="flex gap-4 items-center justify-center">
        <div className="">
          <button className="arrow-left">
            <CircleArrowLeft size={25} />
          </button>
        </div>
        <div className="max-w-56 sm:max-w-md md:max-w-xl">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={2}
            slidesPerView={2}
            navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
            pagination={{ clickable: true, dynamicBullets: true }}
            centeredSlides={true}
            onSlideChange={handleSlideChange}
            initialSlide={0}
            breakpoints={{
              640: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 5,
              },
            }}
          >
            {Years.map((year, index) => (
              <SwiperSlide
                key={index}
                className={`h-40 w-10 flex items-center justify-center ${
                  isActive(index)
                    ? "scale-150"
                    : isAdjacent(index)
                    ? "scale-125"
                    : ""
                }`}
              >
                <div
                  className={`bg-blue-600 px-5 py-3 hover:bg-blue-700 outline-none text-sm text-slate-50 cursor-pointer rounded-full shadow-slate-500 shadow-lg`}
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
        <div className="">
          <button className="arrow-right">
            <CircleArrowRight size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
