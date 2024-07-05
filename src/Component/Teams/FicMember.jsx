import React from "react";

const FicMember = ({ fic }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="shadow-lg flex flex-col items-center justify-between gap-5 p-8 rounded-lg">
        <div className="w-44 md:w-52 h-44  md:h-52 rounded-full">
          <img
            className="w-full h-full object-cover rounded-full"
            src={fic.img}
            alt="Member"
          />
        </div>
        <h1>{fic.name}</h1>
        <p>Rank of the cadet</p>
      </div>
    </div>
  );
};

export default FicMember;
