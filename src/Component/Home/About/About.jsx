import React from "react";
import Title from "../../../UI/Title";
import Button from "../../../UI/Button";
import img1 from "../../../assets/ncc4.jpg";
import img2 from "../../../assets/ncc7.jpg";

const About = () => {
  return (
    <div className="pt-10 px-6">
      <Title> About Us </Title>
      <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 px-4 mb-6 md:mb-10">
        <div className="flex flex-col items-center lg:text-start lg:items-start justify-center gap-6">
          <h2 className="text-3xl">Our College</h2>
          <p className="text-center lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quidem, doloremque, quae quos voluptates, quod quia doloribus
            voluptas quibusdam tempore nemo. Quisquam quidem, doloremque, quae
            quos voluptates, quod quia doloribus voluptas quibusdam tempore
            nemo.
          </p>
          <Button>Navigate to Website</Button>
        </div>
        <div className="flex items-start justify-center">
          <div className="w-full sm:w-3/4 lg:w-full h-auto rounded-3xl overflow-hidden">
            <img className="w-full h-full" src={img1} alt="" />
          </div>
        </div>
      </div>
      <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 px-4 mb-6 md:mb-10">
        <div className="order-1 flex items-start justify-center">
          <div className="w-full sm:w-3/4 lg:w-full h-auto rounded-3xl overflow-hidden">
            <img className="w-full h-full" src={img2} alt="" />
          </div>
        </div>
        <div className="lg:order-2 flex flex-col items-center lg:text-start lg:items-start justify-center gap-6">
          <h2 className="text-3xl">NCC in IITH</h2>
          <p className="text-center lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quidem, doloremque, quae quos voluptates, quod quia doloribus
            voluptas quibusdam tempore nemo. Quisquam quidem, doloremque, quae
            quos voluptates, quod quia doloribus voluptas quibusdam tempore
            nemo.
          </p>
          <Button>Navigate to Website</Button>
        </div>
      </div>
    </div>
  );
};

export default About;
