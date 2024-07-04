import React from "react";

const MediumEvents = ({ index, title, text, date, image }) => {
  return (
    <div className="relative">
      <div className="grid grid-cols-2">
        <div className="flex justify-start items-start pt-28 pb-6 px-10 bg-slate-400">
          {index % 2 === 0 ? (
            <div className="">
              <h1 className="text-2xl mb-5 font-bold">{title}</h1>
              <p className="mb-5">{text}</p>
              <div className="flex items-start">
                <div className="flex cursor-pointer items-center justify-center rounded-full bg-blue-600 px-5 py-3 hover:bg-blue-700 outline-none text-sm text-slate-50">
                  Learn More
                </div>
              </div>
            </div>
          ) : (
            <div className="w-96 h-96 rounded-full overflow-hidden">
              <img src={image} className="w-full h-full object-cover" alt="" />
            </div>
          )}
        </div>
        <div className="flex justify-end items-start pt-28 pb-6 px-10 bg-slate-50">
          {index % 2 !== 0 ? (
            <div className="">
              <h1 className="text-2xl mb-5 font-bold">{title}</h1>
              <p className="mb-5">{text}</p>
              <div className="flex items-start">
                <div className="flex cursor-pointer items-center justify-center rounded-full bg-blue-600 px-5 py-3 hover:bg-blue-700 outline-none text-sm text-slate-50">
                  Learn More
                </div>
              </div>
            </div>
          ) : (
            <div className="w-96 h-96 rounded-full overflow-hidden">
              <img src={image} className="w-full h-full object-cover" alt="" />
            </div>
          )}
        </div>
      </div>
      {index % 2 === 0 ? (
        <div className="absolute top-6 right-0 left-0 overflow-hidden">
          <div className="relative -left-[54px] flex justify-center items-center">
            <div className="z-10 w-48 h-[56px] bg-slate-500 rounded-l-full flex items-center justify-center">
              {date}
            </div>
            <div className="relative right-[28px] h-[76px] border-l-[28px] border-slate-600 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
          </div>
        </div>
      ) : (
        <div className="absolute top-6 right-0 left-0 overflow-hidden">
          <div className="relative left-[54px] flex justify-center items-center">
            <div className="relative left-[28px] h-[76px] border-r-[28px] border-slate-600 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
            <div className="z-10 w-48 h-[56px] bg-slate-500 rounded-r-full flex items-center justify-center">
              {date}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediumEvents;
