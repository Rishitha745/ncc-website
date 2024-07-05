import React from "react";
import ncclogo from "../../../assets/ncclogo.svg";
import clglogo from "../../../assets/clglogo3.png";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly items-center px-6 gap-10 mb-6 sm:mb-10">
      <div className="text-center md:text-start">
        <h1 className="text-3xl md:text-3xl lg:text-4xl mb-4 font-semibold">
          National Cadet Corps <br /> IIT Hyderabad
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl">
          33 (T) N Battalion Sangareddy
        </p>
      </div>
      <div className="order-first sm:order-last flex items-start justify-center gap-20">
        <div className="h-18 w-16 overflow-hidden">
          <img className="w-full h-full" src={clglogo} alt="" />
        </div>
        <div className="h-20 w-20 overflow-hidden">
          <img className="w-full h-full" src={ncclogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
