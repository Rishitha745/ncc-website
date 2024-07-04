import React from "react";

const Card = (props) => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full">
        <img
          className="h-full w-full rounded-lg object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white">
          {props.title}
        </h1>
      </div>
    </div>
  );
};

export default Card;
