import React from "react";
import logo from "../../assets/ncclogo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/home">
      <div className="flex justify-between items-center flex-shrink-0">
        <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
        <span className="text-xl tracking-tight font-semibold">
          IIT Hyderabad
        </span>
      </div>
    </Link>
  );
};

export default Logo;
