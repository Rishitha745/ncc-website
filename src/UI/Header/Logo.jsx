import React from "react";
import logo from "../../assets/ncclogo.svg";

const Logo = () => {
  return (
    <div className="flex justify-between items-center flex-shrink-0">
      <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
      <span className="text-xl tracking-tight font-semibold">
        IIT Hyderabad
      </span>
    </div>
  );
};

export default Logo;
