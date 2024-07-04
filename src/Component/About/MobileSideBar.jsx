import React from "react";
import { aboutData } from "../../Constants";
import { SquareChevronLeft, SquareChevronRight } from "lucide-react";

const SideBar = ({
  showCurrentIndex,
  toggleOpenIndex,
  showMobileSideBar,
  toggleMobileSideBar,
}) => {
  return (
    <div className="py-3 px-1 border border-slate-500 bg-slate-300 rounded-lg shadow-lg">
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-2">
          {aboutData.map((data, index) => (
            <div
              key={index}
              className="cursor-pointer w-full"
              onClick={() => {
                toggleOpenIndex(index);
                toggleMobileSideBar();
              }}
            >
              {console.log(showMobileSideBar)}
              {index === 0 ? (
                <div className={`flex items-center gap-4 py-3 px-4`}>
                  {showMobileSideBar ? (
                    <SquareChevronRight
                      size={24}
                      onClick={toggleMobileSideBar}
                    />
                  ) : (
                    <SquareChevronLeft
                      size={24}
                      onClick={toggleMobileSideBar}
                    />
                  )}
                  <h1 className={`text-xl`}>About NCC</h1>
                </div>
              ) : (
                <div
                  className={`flex items-center gap-4 rounded-lg py-3 px-4 hover:hover:bg-blue-600 hover:text-slate-100 transition-all duration-300 ease-in-out
                    ${
                      showCurrentIndex === index
                        ? "bg-blue-600 text-slate-100"
                        : ""
                    }`}
                >
                  <div
                    className={`${
                      showCurrentIndex === index ? "text-slate-100" : ""
                    }`}
                  >
                    <data.image size={20} />
                  </div>
                  <span className={`text-sm`}>{data.name}</span>
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
