const MobileEvents = (props) => {
  return (
    <div className="w-full h-full">
      <div className="relative">
        <div className="grid grid-cols-10">
          <div className={`h-full bg-slate-400 `}></div>
          <div className={`h-full col-span-9 pt-20 pb-5 px-8  bg-slate-50 `}>
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-center">
                <img
                  src={props.image}
                  className=" w-56 h-56 object-cover rounded-full"
                ></img>
              </div>
              <div className="">
                <h1 className="text-2xl mb-2 font-bold">{props.title}</h1>
                <p className="mb-5">{props.text}</p>
                <div className="flex items-start">
                  <div className="flex cursor-pointer items-center justify-center rounded-full bg-blue-600 px-5 py-3 hover:bg-blue-700 outline-none text-sm text-slate-50">
                    Learn More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-4 right-0 left-0 overflow-hidden grid grid-cols-10">
          <div className=""></div>
          <div className="relative flex  items-center col-span-9 -left-[20px]">
            <div className="h-14 border-r-[20px] border-slate-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
            <div className="relative right-5 w-40 h-[40px] bg-slate-500 rounded-r-full flex items-center justify-center ">
              {props.date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileEvents;

/* 


    <div className={`h-full py-20 px-8 bg-slate-400 `}>
                {props.index%2==0 ? (props.text) :( <div className="flex items-center justify-center">
                    <img src={props.image} className=" w-72 h-72 object-cover rounded-full"></img>  
                </div> )
                }
                </div>
              <div className={`h-full py-20 px-8  bg-slate-50 `}>
              {props.index%2!=0 ? (props.text) :( <div className="flex items-center justify-center">
                    <img src={props.image} className=" w-72 h-72 object-cover rounded-full"></img>  
                </div> )
                }
                   
              </div>
    {props.index%2!=0 && 
                <div className="absolute top-4 right-0 left-0">
                    <div className="relative right-[70px] flex justify-center items-center">
                        <div className="relative left-5 w-40 h-[40px] bg-slate-500 rounded-l-full flex items-center justify-center">{props.date}</div>
                        <div className=" h-14 border-l-[20px] border-slate-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
                    </div>
                </div>  
            }
    {props.index%2==0 &&
                <div className="absolute top-4 right-0 left-0 overflow-hidden">
                    <div className="relative left-[70px] flex justify-center items-center">
                        <div className="h-14 border-r-[20px] border-slate-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
                        <div className="relative right-5 w-40 h-[40px] bg-slate-500 rounded-r-full flex items-center justify-center ">{props.date}</div>
                    </div>
                </div>
            }
*/

/*
import React from "react";

const Trial = (props) => {
  return (
    <div className="w-full h-full">
      <div className="relative">
        <div className="grid grid-cols-2">
          <div className={`h-full py-20 px-8 bg-slate-400 ${props.index%2===0 ? "order-2":""}`}>{props.text}</div>
          <div className={`h-full py-10 bg-slate-50 `}>
            <div className="flex items-center justify-center">
                <img src={props.image} className=" w-72 h-72 object-cover rounded-full"></img>  
            </div>    
          </div>
        </div>
        {props.index%2!=0 && 
            <div className="absolute top-4 right-0 left-0">
                <div className="relative right-[34px] flex justify-center items-center">
                    <div className="relative left-3 w-20 h-[30px] bg-slate-500 rounded-l-full"></div>
                    <div className="h-10 border-l-[12px] border-slate-600 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent"></div>
                </div>
            </div>  
        }
        {props.index%2==0 &&
            <div className="absolute top-4 right-0 left-0 overflow-hidden">
                <div className="relative left-[34px] flex justify-center items-center">
                    <div className="h-10 border-r-[12px] border-slate-600 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent"></div>
                    <div className="relative right-3 w-20 h-[30px] bg-slate-500 rounded-r-full"></div>
                </div>
            </div>
        }
      </div>
    </div>
  );
};

export default Trial;

/*


*/
