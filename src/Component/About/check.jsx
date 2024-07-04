import React from "react";
import { aboutData } from "../../Constants";
import { SquareChevronLeft, SquareChevronRight } from "lucide-react";

const SideBar = ({ currentIndex, toggleOpen, showNav, toggleNav }) => {
  return (
    <div
      className= "max-h-min max-w-max"
      onMouseEnter={toggleNav}
      onMouseLeave={toggleNav}
    >
      <div className="h-full w-full py-3 px-1 border border-slate-500 rounded-lg shadow-sm">
        <div
          className={`mb-5 pt-3 px-4 flex items-center gap-4 w-full ${
            showNav ? "justify-center" : "justify-start"
          }`}
          onClick={() => toggleOpen(0)}
        >
          {showNav ? (
            <SquareChevronRight size={24} onClick={toggleNav} />
          ) : (
            <SquareChevronLeft size={24} onClick={toggleNav} />
          )}
          <h1 className={`text-2xl cursor-pointer ${showNav ? "hidden" : ""}`}>
            About NCC
          </h1>
        </div>
        <div className="flex flex-col items-start gap-2">
          {aboutData.map((data, index) => (
            <div
              key={index}
              className={`cursor-pointer flex items-start 
                ${showNav ? "justify-center" : "justify-start"}
                 gap-4 w-full rounded-lg ${
                   currentIndex === index ? "bg-blue-600 text-slate-100" : ""
                 }  py-3 px-4 outline-none hover:hover:bg-blue-600 hover:text-slate-100 transition-all duration-300 ease-in-out`}
              onClick={() => toggleOpen(index)}
            >
              <div
                className={`${currentIndex === index ? "text-slate-100" : ""}`}
              >
                <data.image size={20} />
              </div>
              <span
                className={`text-sm cursor-pointer ${showNav ? "hidden" : ""}`}
              >
                {data.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
