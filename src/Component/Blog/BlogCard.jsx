import React, { useState } from "react";
import PopUp from "./PopUp";
import Button from "../../UI/Button";

const Card = ({ blog }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const togglePopup = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full sm:w-80 rounded-lg shadow-lg overflow-hidden">
        <div className="w-full sm:w-80 h-48 overflow-hidden">
          <img
            src={blog.hero}
            alt="title image"
            className="w-full h-full object-cover rounded-t-lg hover:scale-110 transform-all duration-300"
          />
        </div>
        <div className="p-5">
          <h1 className="text-xl lg:text-2xl mb-3 font-bold">{blog.title}</h1>
          <p className="text-[13px] md:text-sm lg:text-base xl:text-lg mb-5">
            {blog.content}
          </p>
          <div className="flex justify-start">
            <Button onClick={togglePopup}>Read more</Button>
          </div>
        </div>
      </div>
      {isModalOpen && <PopUp blog={blog} togglePopup={togglePopup} />}
    </div>
  );
};

export default Card;
