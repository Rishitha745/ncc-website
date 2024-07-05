import React from "react";
import ncclogo from "../../../assets/ncclogo.svg";
import clglogo from "../../../assets/Collegelogo.svg";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-6 gap-10 mb-6 sm:mb-10">
      <div className="text-center sm:text-start">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-semibold">
          National Cadet Corps <br /> IIT Hyderabad
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl">
          33 (T) N Battalion Sangareddy
        </p>
      </div>
      <div className="flex items-start justify-center gap-20">
        <div className="h-[88px] w-20 md:h-[104px] md:w-24 overflow-hidden">
          <img className="w-full h-full" src={clglogo} alt="" />
        </div>
        <div className="h-[88px] w-20 md:h-[104px] md:w-24 overflow-hidden ">
          <img className="w-full h-full" src={ncclogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
