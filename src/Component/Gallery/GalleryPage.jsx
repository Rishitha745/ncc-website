import React from "react";
import parade from "../../assets/ncc1.png";
import Title from "../../UI/Title";
const arr = [
  {
    title: "title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    hero: parade,
  },
];

const GalleryPage = () => {
  return (
    <div className="bg-slate-400">
      <div className="py-5 px-2">
        <Title>{arr[0].title}</Title>
      </div>
    </div>
  );
};

export default GalleryPage;

/* 
  return (
    
  
  <div>
      <div className="grid  grid-cols-6 px-10 ">
        
      <div className=" col-span-6">
          {arr[0].title}
        </div>
        <div className=" col-span-6">
          {arr[0].title}
        </div>
        <div className=" col-span-6">
          {arr[0].title}
        </div>
        <div className=" col-span-6">
          {arr[0].title}
        </div>
        <div className=" row-span-2 col-span-3">
          <img src={arr[0].hero} className="object-cover" ></img>
        </div>
        <div className=" row-span-2 col-span-3 px-4">
          {arr[0].content}
        </div>
        
        <div className=" col-span-6 pt-4">
          {" "}
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.",
        </div>
      </div>
    </div>
    );
*/
