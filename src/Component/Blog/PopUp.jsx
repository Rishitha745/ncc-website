import React from "react";
import Button from "../../UI/Button";
import Carousel from "../../UI/Carousel";

const PopUp = ({ blog, togglePopup }) => {
  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      togglePopup();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-40"
      onClick={handleOutsideClick}
    >
      <div
        className="w-[95vw] md:w-[75vw] h-[75vh] bg-slate-200 rounded-xl p-5 px-4 md:px-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6 sm:mb-10">
          <h1 className="text-xl sm:text-2xl font-bold">{blog.title}</h1>
          <div>
            <Button onClick={togglePopup}>Close</Button>
          </div>
        </div>
        <div className="flex-1 overflow-auto mb-6">
          <div className="flex items-center justify-center mb-6 sm:md-10">
            <div className="w-full h-full md:w-3/4 md:h-3/4">
              <Carousel slides={blog.carousel} />
            </div>
          </div>
          <div className="relative overflow-hidden">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              {blog.maincontent}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
