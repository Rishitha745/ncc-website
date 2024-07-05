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
        <div className="px-6 mb-6 sm:mb-10 flex gap-6 relative">
          <div className="hidden md:block max-h-min">
            <SideBar
              showcurrentIndex={showCurrentIndex}
              toggleOpenIndex={toggleOpenIndex}
              showSideBar={showSideBar}
              toggleSideBar={toggleSideBar}
            />
          </div>
          <div className="flex-1 flex justify-center items-start px-6">
            <div className="relative">
              <h1 className="text-2xl flex items-center justify-between">
                {aboutData[showCurrentIndex].name}
                <MenuIcon
                  size={24}
                  className="md:hidden"
                  onClick={toggleMobileSideBar}
                />
              </h1>
              <div
                className={`absolute top-10 z-10 w-full transition-transform duration-300 ${
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
              <p className="mt-5 text-slate-600">
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
