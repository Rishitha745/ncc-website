import React from "react";

const Trial = (props) => {
  return (
    <div className="w-full h-full">
      <div className="relative mt-10">
        <div className="flex">
          <div className="w-1/2 h-full my-10 p-4">{props.text}</div>
          <div className="w-1/2 h-full mt-14 ">
            <div className="flex items-center justify-center">
              <img
                src={props.image}
                className=" w-64 h-64 object-cover rounded-full"
              ></img>
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-0 left-0">
          <div className="relative right-[34px] flex justify-center items-center">
            <div className="relative left-3 w-20 h-[30px] bg-slate-500 rounded-l-full"></div>
            <div className="h-10 border-l-[12px] border-slate-600 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent"></div>
          </div>
        </div>
        <div className="absolute top-20 right-0 left-0">
          <div className="relative left-[34px] flex justify-center items-center">
            <div className="h-10 border-r-[12px] border-slate-600 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent"></div>
            <div className="relative right-3 w-20 h-[30px] bg-slate-500 rounded-r-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trial;
