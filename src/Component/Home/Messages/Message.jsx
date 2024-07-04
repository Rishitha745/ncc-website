import React from "react";
import Title from "../../../UI/Title";
import img from "../../../assets/ncc3.jpg";
import { Quote } from "lucide-react";

const Message = () => {
  return (
    <div className="">
      <Title>Message</Title>
      <div className="flex flex-col md:flex-row bg-slate-300 items-center justify-between p-5 mb-6 md:mb-8 mr-10 md:mr-28 gap-5">
        <div className="w-1/3 lg:w-1/4 flex flex-col justify-center items-center gap-2">
          <div className="w-44 h-44 overflow-hidden rounded-full">
            <img src={img} className="w-full h-full object-cover" alt="" />
          </div>
          <h1 className="text-2xl font-bold">Name</h1>
          <h2 className="text-1xl font-semibold">Role</h2>
        </div>
        <div className="self-start">
          <Quote className="rotate-180 text-slate-700" size={40} />
        </div>
        <div className="w-full mg:w-2/3 lg:w-3/4 px-10 md:px-0">
          <p className="text-slate-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed euismod, justo ac ultricies tincidunt, nunc nisl
            tincidunt nunc, vitae lacinia nunc nisl id nunc. Sed vitae semper
            mauris. Sed euismod, justo ac ultricies tincidunt, nunc nisl
            tincidunt nunc, vitae lacinia nunc nisl id nunc. Sed vitae semper
            mauris.
          </p>
        </div>
        <div className="self-end">
          <Quote className="text-slate-700" size={40} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row bg-slate-300 items-center justify-between p-5 mb-6 md:mb-8 ml-10 md:ml-28 gap-5">
        <div className="self-start">
          <Quote className="rotate-180 text-slate-700" size={40} />
        </div>
        <div className="w-full mg:w-2/3 lg:w-3/4 px-10 md:px-0">
          <p className="text-slate-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed euismod, justo ac ultricies tincidunt, nunc nisl
            tincidunt nunc, vitae lacinia nunc nisl id nunc. Sed vitae semper
            mauris. Sed euismod, justo ac ultricies tincidunt, nunc nisl
            tincidunt nunc, vitae lacinia nunc nisl id nunc. Sed vitae semper
            mauris.
          </p>
        </div>
        <div className="self-end">
          <Quote className="text-slate-700" size={40} />
        </div>
        <div className="w-1/3 lg:w-1/4 flex flex-col justify-center items-center gap-2">
          <div className="w-44 h-44 overflow-hidden rounded-full">
            <img src={img} className="w-full h-full object-cover" alt="" />
          </div>
          <h1 className="text-2xl font-bold">Name</h1>
          <h2 className="text-1xl font-semibold">Role</h2>
        </div>
      </div>
    </div>
  );
};

export default Message;

/*


<svg
              className="w-12 h-12 text-gray-800 dark:text-black rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z"
                clip-rule="evenodd"
              />
            </svg>


            
*/
