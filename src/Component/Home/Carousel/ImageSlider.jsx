import React, { useState } from "react";
import { Circle, CircleDot } from "lucide-react";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

import img1 from "../../../assets/ncc1.png";
import img3 from "../../../assets/ncc3.jpg";
import img4 from "../../../assets/ncc4.jpg";
import img5 from "../../../assets/ncc5.jpg";
import img6 from "../../../assets/ncc6.jpg";
import img7 from "../../../assets/ncc7.jpg";

export default function ImageSlider() {
  const images = [
    {
      url: img1,
    },
    {
      url: img3,
    },
    {
      url: img4,
    },
    {
      url: img5,
    },
    {
      url: img6,
    },
    {
      url: img7,
    },
  ];
  
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <section className="w-full h-full relative">
      <div className="w-full h-full flex overflow-hidden">
        {images.map(({ url, alt }, index) => (
          <img
            key={index}
            src={url}
            alt={alt}
            className={`object-cover w-full h-full block flex-shrink-0 flex-grow-0 transition-transform duration-300 ease-in-out ${
              imageIndex === index ? "" : "translate-x-full"
            }`}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn left-0 absolute top-0 bottom-0 p-4 cursor-pointer transition-bg duration-100 ease-in-out hover:bg-black/20 focus-visible:bg-black/20"
      >
        <RiArrowLeftWideLine className="stroke-white fill-black w-8 h-8" />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn right-0 absolute top-0 bottom-0 p-4 cursor-pointer transition-bg duration-100 ease-in-out hover:bg-black/20 focus-visible:bg-black/20"
      >
        <RiArrowRightWideLine className="stroke-white fill-black w-8 h-8" />
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn w-4 h-4 cursor-pointer transition-transform duration-100 ease-in-out hover:scale-110 focus-visible:scale-110"
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot className="stroke-white fill-black w-full h-full" />
            ) : (
              <Circle className="stroke-white fill-black w-full h-full" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}

// return (
//     <div
//       style={{
//         maxWidth: "1200px",
//         width: "100%",
//         aspectRatio: "10 / 6",
//         margin: "0 auto",
//       }}
//     >
//       <ImageSlider images={IMAGES} />
//     </div>
//   );
