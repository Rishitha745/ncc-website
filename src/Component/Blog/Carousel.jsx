import React, { useState } from "react";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

function App( {slides} ) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="pt-10 bg-slate-200">
      <div className="w-full h-full">
        <div className="relative group w-full h-full overflow-hidden">
          <img
            src={slides[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-full h-full object-cover flex-shrink-0 flex-grow-0"
            style={{ aspectRatio: "16/9" }}
          />
          <div
            onClick={prevSlide}
            className="absolute flex items-center top-0 bottom-0 left-0 p-2 md:p-4 lg:p-8 transition-bg duration-100 ease-in-out hover:bg-black/40 focus-visible:bg-black/40 text-slate-50 cursor-pointer"
          >
            <RiArrowLeftWideLine className="text-xl sm:text-4xl" />
          </div>
          <div
            onClick={nextSlide}
            className="absolute flex items-center top-0 bottom-0 right-0 p-2 md:p-4 lg:p-8 transition-bg duration-100 ease-in-out hover:bg-black/40 focus-visible:bg-black/40 text-slate-50 cursor-pointer"
          >
            <RiArrowRightWideLine className="text-xl sm:text-4xl" />
          </div>
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`cursor-pointer w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-transform duration-100 ease-in-out hover:scale-110 focus-visible:scale-110 ${
                  slideIndex === currentIndex
                    ? "bg-slate-600 scale-125"
                    : "bg-slate-200"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
