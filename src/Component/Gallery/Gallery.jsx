import React, { useEffect } from "react";
import MainLayout from "../../UI/MainLayout";
import { eventsData } from "../../Constants";
import Carousel from "./Carousel";
import { useLocation } from "react-router-dom";

const Gallery = () => {
  const location = useLocation();
  const [year, index] = [location.state.year, location.state.index];

  if (year === undefined || index === undefined) {
    return (
      <div>
        <MainLayout>
          <div className="flex items-center justify-center md:mt-6 mb-6 sm:mt-10 px-6">
            Invalid Year or Index selected
          </div>
        </MainLayout>
      </div>
    );
  }

  const event = eventsData[location.state.year].events[location.state.index];

  return (
    <>
      <MainLayout>
        <div className="flex items-center justify-center mb-6 sm:mb-10 px-6">
          <div className="relative w-full sm:w-[90%] h-20 sm:h-24 lg:h-32 bg-slate-400 shadow-lg rounded-lg px-4 py-2">
            <div className="flex items-center justify-center text-xl md:text-2xl lg:text-3xl w-full h-full">
              {event.title}
            </div>
            <div className="absolute text-xs sm:text-sm md:text-base lg:text-xl right-3 md:right-6 bottom-2 md:bottom-4">
              - {event.date}
            </div>
          </div>
        </div>
        <Carousel gallery={event.gallery}></Carousel>
      </MainLayout>
    </>
  );
};

export default Gallery;
