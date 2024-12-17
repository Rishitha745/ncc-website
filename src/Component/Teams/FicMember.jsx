import React from "react";

const FicMember = ({ ficMember }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="shadow-lg flex flex-col items-center justify-between gap-5 p-8 rounded-lg mb-5">
        <div className="w-44 md:w-52 h-44  md:h-52 rounded-full">
          <img
            className="w-full h-full object-cover rounded-full"
            src={ficMember.img}
            alt="Member"
          />
        </div>
        <h1 className="text-base md:text-lg lg:text-xl">{ficMember.name}</h1>
      </div>
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
        {ficMember.role}
      </h1>
    </div>
  );
};

export default FicMember;
