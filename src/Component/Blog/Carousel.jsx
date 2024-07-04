import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden relative">
        <div
          className="whitespace-nowrap transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {console.log(images)}
          {images.map((image, index) =>
            (<img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="inline-block w-full h-full object-cover transition-transform duration-500 rounded-lg"
            />)
          )}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        &gt;
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
