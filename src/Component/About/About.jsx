import React, { useState } from "react";
import SideBar from "./SideBar";
import MobileSideBar from "./MobileSideBar";
import { aboutData } from "../../Constants";
import { MenuIcon } from "lucide-react";
import MainLayout from "../../UI/MainLayout";

const About = () => {
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);

  const toggleMobileSideBar = () => {
    setShowMobileSideBar(!showMobileSideBar);
  };

  const [showSideBar, setShowNavBar] = useState(0);

  const toggleSideBar = () => {
    setShowNavBar(!showSideBar);
  };

  const [showCurrentIndex, setCurrentIndex] = useState(0);

  const toggleOpenIndex = (index) => {
    if (showCurrentIndex === index) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  return (
    <div>
      <MainLayout>
        <div className="px-6 mb-6 sm:mb-10 flex gap-12 relative">
          <div className="hidden md:block max-h-min">
            <SideBar
              showcurrentIndex={showCurrentIndex}
              toggleOpenIndex={toggleOpenIndex}
              showSideBar={showSideBar}
              toggleSideBar={toggleSideBar}
            />
          </div>
          <div className="flex-1 flex justify-center items-start ">
            <div className="relative">
              <h1 className="mb-5 flex items-center justify-between text-2xl sm:text-3xl lg:text-4xl">
                {aboutData[showCurrentIndex].name}
                <MenuIcon
                  size={24}
                  className="md:hidden"
                  onClick={toggleMobileSideBar}
                />
              </h1>
              <div
                className={`absolute top-10 z-10 w-full transition-transform duration-300 md:hidden ${
                  showMobileSideBar ? "" : "hidden"
                }`}
              >
                <MobileSideBar
                  showcurrentIndex={showCurrentIndex}
                  toggleOpenIndex={toggleOpenIndex}
                  showMobileSideBar={showMobileSideBar}
                  toggleMobileSideBar={toggleMobileSideBar}
                />
              </div>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg xl:text-xl">
                {aboutData[showCurrentIndex].content}
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default About;
