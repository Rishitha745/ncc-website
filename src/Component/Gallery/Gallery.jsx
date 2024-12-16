import React from "react";
import MainLayout from "../../UI/MainLayout";
import { eventsData } from "../../Constants";

const Gallery = () => {
  return (
    <div>
      <MainLayout>
        <div className="flex items-center justify-center md:mt-6 mb-6 sm:mt-10 px-6">
          <div className="relative w-full sm:w-[90%] h-28 lg:h-32 bg-slate-400 shadow-lg rounded-lg px-4 py-2">
            <div className="flex items-center justify-center text-xl md:text-2xl lg:text-3xl w-full h-full">
              {eventsData[1].events[0].title}
            </div>
            <div className="absolute text-sm md:text-base lg:text-xl right-3 md:right-6 bottom-2 md:bottom-4">
              -{eventsData[1].events[0].date}
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Gallery;
