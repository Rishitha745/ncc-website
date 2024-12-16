import React from "react";
import logo from "../../assets/ncclogo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/home">
      <div className="flex justify-between items-center flex-shrink-0">
        <img className="h-10 sm:h-14 w-10 sm:w-14 mr-2" src={logo} alt="Logo" />
        <span className="text-base sm:text-xl tracking-tight font-semibold">
          NCC IIT Hyderabad<br />
          राष्ट्रीय कैडेट कोर
        </span>
      </div>
    </Link>
  );
};

export default Logo;
