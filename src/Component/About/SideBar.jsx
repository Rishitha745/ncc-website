import React from "react";
import { aboutData } from "../../Constants";
import { SquareChevronLeft, SquareChevronRight } from "lucide-react";

const SideBar = ({
  showCurrentIndex,
  toggleOpenIndex,
  showSideBar,
  toggleSideBar,
}) => {
  return (
    <div
      className="max-h-min max-w-max"
    >
      <div className="h-full w-full py-3 px-1 border border-slate-500 rounded-lg shadow-lg">
        <div className="flex flex-col items-start gap-2">
          {aboutData.map((data, index) => (
            <div
              key={index}
              className="w-full cursor-pointer"
              onClick={() => toggleOpenIndex(index)}
            >
              {index === 0 ? (
                <div
                  className={`flex items-center gap-4 py-3 px-4
                    ${showSideBar ? "justify-center" : "justify-start"}`}
                >
                  {showSideBar ? (
                    <SquareChevronRight size={24} onClick={toggleSideBar} />
                  ) : (
                    <SquareChevronLeft size={24} onClick={toggleSideBar} />
                  )}
                  <h1 className={`text-xl ${showSideBar ? "hidden" : ""}`}>
                    About NCC
                  </h1>
                </div>
              ) : (
                <div
                  className={`flex items-start gap-4 rounded-lg py-3 px-4 hover:hover:bg-blue-600 hover:text-slate-100 transition-all duration-300 ease-in-out
                    ${
                      showCurrentIndex === index
                        ? "bg-blue-600 text-slate-100"
                        : ""
                    }  
                    ${showSideBar ? "justify-center" : "justify-start"}`}
                >
                  <div
                    className={`${
                      showCurrentIndex === index ? "text-slate-100" : ""
                    }`}
                  >
                    <data.image size={20} />
                  </div>
                  <span className={`text-sm ${showSideBar ? "hidden" : ""}`}>
                    {data.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
