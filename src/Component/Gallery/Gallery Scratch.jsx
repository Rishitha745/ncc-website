import React from "react";
import { useState, useRef } from "react";
import img from "../../assets/ncc3.jpg";
import img2 from "../../assets/ncc2.jpg";
import img3 from "../../assets/ncc1.jpg";
import img4 from "../../assets/ncc4.jpg";
import img5 from "../../assets/clglogo1.png";
import img6 from "../../assets/clglogo3.png";
import MainLayout from "../../UI/MainLayout";
import Title from "../../UI/Title";
import { CircleArrowRight } from "lucide-react";
import { CircleArrowLeft } from "lucide-react";

const gallery = [
  {
    title: "Independence Day",
    img: img,
    contentA:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, justo ac ultricies tincidunt, nunc nisltincidunt nunc, vitae lacinia nunc nisl id nunc. Sed vitae sempermauris. Sed euismod, justo ac ultricies tincidunt, nunc nisltincidunt nunc, vitae lacinia nunc nisl id nunc. Sed vitae sempermauris.",
    contentB:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, justo ac ultricies tincidunt, nunc nisltincidunt nunc, vitae lacinia nunc nisl id nunc. Sed vitae sempermauris. Sed euismod, justo ac ultricies tincidunt, nunc nisltincidunt nunc, vitae lacinia nunc nisl id nunc. Sed vitae sempermauris.",
  },
];

const data = [
  {
    imgelink: img,
  },
  {
    imgelink: img2,
  },
  {
    imgelink: img3,
  },
  {
    imgelink: img4,
  },
  {
    imgelink: img5,
  },
  {
    imgelink: img6,
  },
  {
    imgelink: img,
  },
  {
    imgelink: img2,
  },
  {
    imgelink: img3,
  },
  {
    imgelink: img4,
  },
  {
    imgelink: img5,
  },
  {
    imgelink: img6,
  },
  {
    imgelink: img,
  },
  {
    imgelink: img2,
  },
  {
    imgelink: img3,
  },
  {
    imgelink: img4,
  },
  {
    imgelink: img5,
  },
  {
    imgelink: img6,
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailRef = useRef(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToThumbnail(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToThumbnail(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    scrollToThumbnail(slideIndex);
  };

  // Function to scroll thumbnails to make active slide visible
  const scrollToThumbnail = (index) => {
    if (thumbnailRef.current) {
      if (thumbnailRef.current) {
        const thumbnailWidth = 152;
        const containerWidth = thumbnailRef.current.offsetWidth;

        const targetScroll = index * thumbnailWidth;
        const centerPosition =
          targetScroll - containerWidth / 2 + thumbnailWidth / 2;

        thumbnailRef.current.scrollTo({
          left: centerPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div>
      <MainLayout>
        <div className="relative ">
          <Title>Event Gallery</Title>
          <div className="relative h-24 md:h-36 w-full md:w-1/2 flex-col bg-slate-40 items-center justify-center md:mx-auto shadow-lg rounded-lg mb-6 md:mb-8">
            <div className=" h-8 md:h-12"></div>
            <div className="text-xl md:text-2xl lg:text-3xl h-8 md:h-12 flex items-center justify-center">
              Event Name
            </div>
            <div className="text-lg md:text-xl lg:text-2xl absolute right-2 bottom-2 md:right-5 md:bottom-5">
              Event Date
            </div>
          </div>
          <div className="w-1/2 h-96 overflow-hidden rounded-lg  mb-6 md:mb-8 md:mx-auto">
            <img
              className="w-full h-full object-cover"
              src={data[currentIndex].imgelink}
              alt=""
            />
          </div>
          <div className="flex max-w-7xl mx-auto mb-6 md:mb-8">
            <div
              onClick={prevSlide}
              className="flex items-center justify-center px-5"
            >
              <CircleArrowLeft className="text-zinc-700" size={32} />
            </div>
            <div ref={thumbnailRef} className="overflow-x-auto scroll-smooth ">
              <div className="inline-flex gap-4">
                {data.map(({ imgelink }, slideIndex) => (
                  <div
                    key={slideIndex}
                    className={`h-28 w-36 overflow-hidden transition-transform duration-300 ease-in-out ${
                      currentIndex === slideIndex ? "scale-110" : "scale-100"
                    }`}
                  >
                    <img
                      onClick={() => goToSlide(slideIndex)}
                      src={data[slideIndex].imgelink}
                      className="h-full w-full cursor-pointer rounded-lg object-cover object-center"
                      alt="gallery-image"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              onClick={nextSlide}
              className="flex items-center justify-center px-5"
            >
              <CircleArrowRight className="text-zinc-700" size={32} />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Gallery;

/*

<div className="max-w-7xl">
      <div className=""></div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-[88px] w-20 md:h-[104px] md:w-24 overflow-hidden rounded-lg object-cover object-center"
            src={active}
            alt=""
          />
        </div>
        <div className="grid grid-cols-5 gap-4">
          {data.map(({ imgelink }, index) => (
            <div key={index}>
              <img
                onClick={() => setActive(imgelink)}
                src={imgelink}
                className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                alt="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
*/

/* <div className="max-h-min bg-slate-500">
        <div className="p-10">
          <h1 className="text-center font-bold text-2xl mb-5">
            {gallery[0].title}
          </h1>
          <div className="flex flex-col-reverse md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
              <img
                src={gallery[0].img}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full md:w-1/2 p-5">
              <p className="text-center md:text-start text-sm">
                {gallery[0].contentA}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10">
        <p>{gallery[0].contentB}</p>
      </div>
*/

{
  /* <div className="grid grid-rows-12 md:grid-rows-11 grid-cols-12 bg-slate-600">
  <div className=" order-1 row-span-2 col-span-12 border-2 border-slate-700 flex items-center justify-center ">
    p
  </div>

  <div className=" order-2 row-span-8 md:row-span-6 border-2 border-slate-700 flex items-center justify-center ">
    p
  </div>

  <div className=" order-3 row-span-2 col-span-10 border-2 border-slate-700 flex items-center justify-center ">
    {gall[0].title}
  </div>

  <div className=" order-4 row-span-8 md:row-span-6 border-2 border-slate-700 flex items-center justify-center ">
    p
  </div>

  <div className=" order-5 col-span-10 border-2 border-slate-700 flex items-center justify-center ">
    p
  </div>

  <div className=" order-7 md:order-6 row-span-6 col-span-10 md:col-span-5 border-2 border-slate-700 flex items-center justify-center ">
    <img src={gall[0].img} alt="" />
  </div>

  <div className=" order-6 md:order-7 row-span-3 col-span-10 md:col-span-5 border-2 border-slate-700 flex items-center justify-center ">
    {gall[0].contentA}
  </div>

  <div className=" order-8 row-span-2 md:row-span-3 border-2 border-slate-700 flex items-center justify-center bg-slate-200">
    wp
  </div>

  <div className=" order-9 row-span-2 md:row-span-3 md:col-span-6  border-2 border-slate-700 flex items-center justify-center bg-slate-200">
    wp
  </div>
</div>; */
}
