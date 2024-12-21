import React from "react";
import Title from "../../../UI/Title";
import Button from "../../../UI/Button";
import clg from "../../../assets/Home/AboutUs/college.jpg";
import ncc_in_iith from "../../../assets/Home/AboutUs/ncc_in_iith.jpg";

const About = () => {
  return (
    <div className="mb-6 sm:mb-10 px-6">
      <Title> About Us </Title>
      <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 mb-6 md:mb-10">
        <div className="flex flex-col items-center lg:text-start lg:items-start justify-center gap-4 sm:gap-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl">Our College</h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-center lg:text-start">
            IITH is one of the leading modern IITs established by the government
            of India in 2008. IITH creates a unique holistic ecosystem for
            education that offers interactive learning, a very flexible academic
            structure, cutting-edge research, strong industry collaboration and
            entrepreneurship. This environment empowers students and faculty to
            transform their dreams into reality.
          </p>
          <a href="https://iith.ac.in/" alt="IITH Website" target="_blank">
            <Button>Navigate to Website</Button>
          </a>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full sm:w-3/4 lg:w-full h-auto rounded-3xl overflow-hidden">
            <img className="w-full h-full" src={clg} alt="" />
          </div>
        </div>
      </div>
      <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 mb-6 md:mb-10">
        <div className="order-1 flex items-center justify-center">
          <div className="w-full sm:w-3/4 lg:w-full h-auto rounded-3xl overflow-hidden">
            <img className="w-full h-full" src={ncc_in_iith} alt="" />
          </div>
        </div>
        <div className="lg:order-2 flex flex-col items-center lg:text-start lg:items-start justify-center gap-4 sm:gap-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl">NCC in IITH</h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-center lg:text-start">
            The National Cadet Corps (NCC) unit at IIT Hyderabad began its
            journey in 2023 with the batch of 2022 under the leadership of Dr.
            Digvijay S. Pawar, Associate NCC Officer (ANO). NCC at IITH aims to
            instill the values of discipline, leadership, and patriotism in
            students, complementing the institute's mission of holistic
            development. Through NCC, cadets gain essential life skills,
            leadership qualities, and a sense of responsibility toward the
            nation. The program offers opportunities for students to participate
            in various camps, drills, and social service activities, fostering
            unity and a commitment to national service.
          </p>
          <a
            href="https://indiancc.mygov.in/"
            alt="NCC Website"
            target="_blank"
          >
            <Button>Navigate to Website</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
