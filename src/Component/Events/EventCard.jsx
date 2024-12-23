import React from "react";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";

const EventCard = ({ index, title, text, date, image, year }) => {
  const navigate = useNavigate();

  function goToGallery({ year, index }) {
    navigate("/gallery", { state: { year: year, index: index } });
  }

  return (
    <div className="relative">
      <div className="hidden md:block">
        <div className="grid grid-cols-2">
          <div className="flex justify-center items-center pt-28 pb-6 px-10 bg-slate-400">
            {index % 2 === 0 ? (
              <div className="">
                <h1 className="text-2xl lg:text-3xl mb-3 font-bold">{title}</h1>
                <p className="text-base lg:text-lg xl:text-xl mb-5">{text}</p>
                <div className="flex items-start">
                  <Button onClick={() => goToGallery({ year, index })}>
                    View Gallery
                  </Button>
                </div>
              </div>
            ) : (
              <div className="w-96 h-96 rounded-full overflow-hidden">
                <img
                  src={image}
                  className="w-full h-full object-cover"
                  alt="Event Image"
                />
              </div>
            )}
          </div>
          <div className="flex justify-center items-center pt-28 pb-6 px-10 bg-slate-50">
            {index % 2 !== 0 ? (
              <div className="">
                <h1 className="text-2xl lg:text-3xl mb-3 font-bold">{title}</h1>
                <p className="text-base lg:text-lg xl:text-xl mb-5">{text}</p>
                <div className="flex items-start">
                  <Button onClick={() => goToGallery({ year, index })}>
                    View Gallery
                  </Button>
                </div>
              </div>
            ) : (
              <div className="w-96 h-96 rounded-full overflow-hidden">
                <img
                  src={image}
                  className="w-full h-full object-cover"
                  alt="Event Image"
                />
              </div>
            )}
          </div>
        </div>

        {index % 2 === 0 ? (
          <div className="absolute top-6 right-0 left-0 overflow-hidden">
            <div className="relative -left-[54px] flex justify-center items-center">
              <div className="z-10 w-48 h-[56px] bg-slate-500 rounded-l-full flex items-center justify-center text-slate-50">
                {date}
              </div>
              <div className="relative right-[28px] h-[76px] border-l-[28px] border-slate-600 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
            </div>
          </div>
        ) : (
          <div className="absolute top-6 right-0 left-0 overflow-hidden">
            <div className="relative left-[54px] flex justify-center items-center">
              <div className="relative left-[28px] h-[76px] border-r-[28px] border-slate-600 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
              <div className="z-10 w-48 h-[56px] bg-slate-500 rounded-r-full flex items-center justify-center text-slate-50">
                {date}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* mobile view */}

      <div className="md:hidden">
        <div className="grid grid-cols-10">
          <div className={`h-full bg-slate-400`}></div>
          <div className={`h-full col-span-9 pt-20 pb-5 px-8 bg-slate-50`}>
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-center">
                <img
                  src={image}
                  alt="Event Image"
                  className=" w-56 h-56 object-cover rounded-full"
                ></img>
              </div>
              <div className="">
                <h1 className="text-2xl mb-3 font-bold">{title}</h1>
                <p className="text-sm mb-5">{text}</p>
                <div className="flex items-start">
                  <Button onClick={() => goToGallery({ year, index })}>
                    View Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-4 right-0 left-0 overflow-hidden grid grid-cols-10">
          <div className=""></div>
          <div className="relative flex items-center col-span-9 -left-[20px]">
            <div className="h-14 border-r-[20px] border-slate-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
            <div className="relative right-5 w-40 h-[40px] bg-slate-500 rounded-r-full flex items-center justify-center text-slate-50">
              {date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
