import React from "react";

const CoordinatorMember = ({ coordinatorMember }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="group flex flex-col items-center [perspective:1000px]">
        <div className="relative shadow-lg w-32 md:w-40 lg:w-44 h-32 md:h-40 lg:h-44 rounded-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform duration-500">
          <div className="absolute w-full h-full inset-0 rounded-full [backface-visibility:hidden]">
            <img
              className="w-full h-full object-cover rounded-full"
              src={coordinatorMember.img}
              alt="Member"
            />
          </div>
          <div className="absolute inset-0 rounded-full flex flex-col items-center justify-center text-center text-slate-600 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <p className="text-sm md:text-base lg:text-lg">
              {coordinatorMember.role}
            </p>
          </div>
        </div>
        <p className="text-center mt-6 text-sm md:text-base lg:text-lg">
          {coordinatorMember.name}
        </p>
      </div>
    </div>
  );
};

export default CoordinatorMember;
