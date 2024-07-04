import React from "react";
import img from "../../assets/ncc3.jpg";

const gallery = [
  {
    title: "Independence Day",
    img: img,
    contentA:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, justo ac ultricies tincidunt, nunc nisltincidunt nunc, vitae lacinia nunc nisl id nunc. Sed vitae sempermauris. Sed euismod, justo ac ultricies tincidunt, nunc nisltincidunt nunc, vitae lacinia nunc nisl id nunc. Sed vitae sempermauris.",
    contentB:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, justo ac ultricies tincidunt, nunc nisltincidunt nunc, vitae lacinia nunc nisl id nunc. Sed vitae sempermauris. Sed euismod, justo ac ultricies tincidunt, nunc nisltincidunt nunc, vitae lacinia nunc nisl id nunc. Sed vitae sempermauris.",
  },
];

const Gallery = () => {
  return (
    <div>
      <div className="max-h-min bg-slate-500">
        <div className="p-10">
          <h1 className="text-center font-bold text-2xl mb-5">{gallery[0].title}</h1>
          <div className="flex flex-col-reverse md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
              <img src={gallery[0].img} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-full md:w-1/2 p-5">
              <p className="text-center md:text-start text-sm">{gallery[0].contentA}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10">
        <p>{gallery[0].contentB}</p>
      </div>
    </div>
  );
};


export default Gallery;

{
  /* <div className="grid grid-rows-12 md:grid-rows-11 grid-cols-12 bg-slate-600">
  <div className=" order-1 row-span-2 col-span-12 border-2 border-slate-700 flex items-center justify-center ">
    p
  </div>

  <div className=" order-2 row-span-8 md:row-span-6 border-2 border-slate-700 flex items-center justify-center ">
    p
  </div>

  <div className=" order-3 row-span-2 col-span-10 border-2 border-slate-700 flex items-center justify-center ">
    {gall[0].title}
  </div>

  <div className=" order-4 row-span-8 md:row-span-6 border-2 border-slate-700 flex items-center justify-center ">
    p
  </div>

  <div className=" order-5 col-span-10 border-2 border-slate-700 flex items-center justify-center ">
    p
  </div>

  <div className=" order-7 md:order-6 row-span-6 col-span-10 md:col-span-5 border-2 border-slate-700 flex items-center justify-center ">
    <img src={gall[0].img} alt="" />
  </div>

  <div className=" order-6 md:order-7 row-span-3 col-span-10 md:col-span-5 border-2 border-slate-700 flex items-center justify-center ">
    {gall[0].contentA}
  </div>

  <div className=" order-8 row-span-2 md:row-span-3 border-2 border-slate-700 flex items-center justify-center bg-slate-200">
    wp
  </div>

  <div className=" order-9 row-span-2 md:row-span-3 md:col-span-6  border-2 border-slate-700 flex items-center justify-center bg-slate-200">
    wp
  </div>
</div>; */
}
