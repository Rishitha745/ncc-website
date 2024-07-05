import React from "react";
import logo from "../../assets/ncclogo.svg";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { navItems, socialMedia } from "../../Constants";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className="max-w-7xl mx-auto bottom-0">
      <hr className="mb-6 sm:mb-10 border border-neutral-700/80" />
      <div className="grid gap-10 md:gap-0 md:grid-cols-2 px-6 mb-6 sm:mb-10">
        <div className="flex justify-evenly items-center  md:items-start">
          <div className="-ml-3">
            <img src={logo} alt="logo" className="w-24 h-24 md:w-36 md:h-36" />
          </div>
          <div className="border h-24 md:h-36 border-slate-700"></div>
          <div className="flex flex-col gap-5 px-3">
            <p className="text-sm md:text-lg lg:text-2xl text-center">
              NCC | IIT Hyderabad
            </p>
            <div className="flex justify-center items-center gap-4">
              {socialMedia.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="text-xl md:text-2xl text-blue-600"
                  >
                    <item.icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-around">
          <div className="flex flex-col items-start">
            <h1 className="text-xl md:text-2xl lg:text-3xl mb-5">
              Quick Links
            </h1>
            {navItems.map((item, index) => {
              if (index !== 3) {
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="text-sm md:text-lg lg:text-xl mb-2"
                  >
                    {item.label}
                  </a>
                );
              }
              return null;
            })}
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-xl md:text-2xl lg:text-3xl mb-5">Contact Us</h1>
            <a className="flex items-center mb-2">
              <HiLocationMarker className="text-2xl mr-2 text-blue-600" />
              <p className="text-sm md:text-lg lg:text-xl">IIT Hyderabad</p>
            </a>
            <a className="flex items-center mb-2">
              <MdEmail className="text-2xl mr-2 text-blue-600" />
              <p className="text-sm md:text-lg lg:text-xl">ncc@iith.ac.in</p>
            </a>
            <a className="flex items-center mb-2">
              <IoCall className="text-2xl mr-2 text-blue-600" />
              <p className="text-sm md:text-lg lg:text-xl">+91 123456-789</p>
            </a>
          </div>
        </div>
      </div>
      <hr className="border border-neutral-700/80" />
      <div className="py-4 md:py-6 px-4 flex flex-col gap-1 md:gap-0 md:flex-row justify-around">
        <p className="text-center text-sm md:text-lg lg:text-xl">
          &copy; {year} NCC, IIT Hyderabad.
        </p>
        <p className="text-center text-sm md:text-lg lg:text-xl">
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
