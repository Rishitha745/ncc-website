import React, { useState } from "react";
import Button from "../../UI/Button";
import PopUp from "./PopUp";

const Card = ({ blog }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const togglePopup = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex justify-center">
      <div className="w-64 md:w-80 rounded-lg shadow-lg overflow-hidden">
        <div className="w-64 md:w-80 h-auto overflow-hidden">
          <img
            src={blog.hero}
            alt="title image"
            className="w-full h-full rounded-t-lg hover:scale-110 transform-all duration-300"
          />
        </div>
        <div className="p-5">
          <h1 className="text-xl font-bold mb-5">{blog.title}</h1>
          <p className="mb-5">{blog.content}</p>
          <div className="flex justify-start" onClick={togglePopup}>
            <Button>Read More</Button>
          </div>
        </div>
      </div>
      {isModalOpen && <PopUp blog={blog} togglePopup={togglePopup} />}
    </div>
  );
};

export default Card;
