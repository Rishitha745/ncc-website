import React from "react";

const RankMember = ({ rankMember }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="group [perspective:1000px]">
        <div className="relative shadow-lg w-32 md:w-40 lg:w-44 h-32 md:h-40 lg:h-44 rounded-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform duration-500">
          <div className="absolute w-full h-full inset-0 rounded-full [backface-visibility:hidden]">
            <img
              className="w-full h-full object-cover rounded-full"
              src={rankMember.img}
              alt="Member"
            />
          </div>
          <div className="absolute inset-0 rounded-full flex flex-col items-center justify-center text-center text-slate-600 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <h1>{rankMember.name}</h1>
            <p>{rankMember.rank}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankMember;
