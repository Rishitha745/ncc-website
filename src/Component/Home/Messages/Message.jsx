import React from "react";
import Title from "../../../UI/Title";
import ano from "../../../assets/Home/Messages/ano.png";
import director from "../../../assets/Home/Messages/director.jpg";
import { Quote } from "lucide-react";

const Message = () => {
  return (
    <div className="">
      <Title>Message</Title>
      <div className="flex flex-col md:flex-row bg-slate-300 items-center justify-between p-5 mb-6 md:mb-10 mr-10 md:mr-28 gap-4 sm:gap-6">
        <div className="w-1/3 lg:w-1/4 flex flex-col justify-center items-center text-center">
          <div className="w-44 h-44 overflow-hidden rounded-full mb-3">
            <img src={director} className="w-full h-full object-cover" alt="" />
          </div>
          <h1 className="text-2xl font-bold mb-1">Prof. B. S. Murty</h1>
          <h2 className="text-1xl font-semibold">Director</h2>
        </div>
        <div className="self-start">
          <Quote className="rotate-180 text-slate-700" size={40} />
        </div>
        <div className="w-full mg:w-2/3 lg:w-3/4 px-10 md:px-0">
          <p className="text-slate-700 text-sm sm:text-base lg:text-lg xl:text-xl">
            At IIT Hyderabad, we firmly believe in fostering a culture of
            excellence, discipline, and patriotism. The National Cadet Corps
            (NCC) plays a pivotal role in shaping our students' leadership,
            responsibility, and commitment to national service. Through NCC, our
            cadets imbibe essential life skills and uphold the values that are
            critical for nation-building. I encourage all cadets to seize this
            opportunity to grow as responsible citizens, lead with integrity,
            and contribute to our nation's progress. Let us continue to march
            forward with courage, discipline, and dedication.
          </p>
        </div>
        <div className="self-end">
          <Quote className="text-slate-700" size={40} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row bg-slate-300 items-center justify-between p-5 mb-6 md:mb-10 ml-10 md:ml-28 gap-4 sm:gap-6">
        <div className="self-start">
          <Quote className="rotate-180 text-slate-700" size={40} />
        </div>
        <div className="w-full mg:w-2/3 lg:w-3/4 px-10 md:px-0">
          <p className="text-slate-700 text-sm sm:text-base lg:text-lg xl:text-xl">
            As the Associate NCC Officer at IIT Hyderabad, I am honored to be a
            part of this inspiring journey of discipline, resilience, and
            service. NCC plays a pivotal role in shaping young minds, instilling
            in them the core values of leadership, integrity, and dedication.
            Our cadets embody the spirit of 'Unity and Discipline' and actively
            contribute to both campus life and society. It is a privilege to
            witness their growth, commitment, and readiness to serve the nation.
            I encourage every cadet to uphold these values and continue their
            pursuit of excellence with vigor and pride."
          </p>
        </div>
        <div className="self-end">
          <Quote className="text-slate-700" size={40} />
        </div>
        <div className="w-1/3 lg:w-1/4 order-first md:order-last flex flex-col justify-center items-center text-center">
          <div className="w-44 h-44 overflow-hidden rounded-full mb-3">
            <img src={ano} className="w-full h-full object-cover" alt="" />
          </div>
          <h1 className="text-2xl font-bold mb-1">Digvijay S. Pawar</h1>
          <h2 className="text-1xl font-semibold">ANO</h2>
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
