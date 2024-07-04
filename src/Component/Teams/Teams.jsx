import React, { useState } from "react";
import RankMember from "./RankMember";
import Fic from "./Fic";
import Coordinator from "./Coordinator";
import YearsCarousel from "../../UI/YearsCarousel";
import Title from "../../UI/Title";

import img from "../../assets/ncc3.jpg";

const Fic = [
  {
    year: 2024,
    Fic: [
      {
        img: img,
        name: "John Doe",
      },
      {
        img: img,
        name: "Jane Doe",
      },
    ],
  },
  {
    year: 2023,
    Fic: [
      {
        img: img,
        name: "James Doe",
      },
      {
        img: img,
        name: "Joy Doe",
      },
    ],
  },
];

const rankMembers = [
  {
    img: img,
    name: "John Doe",
  },
  {
    img: img,
    name: "Jane Doe",
  },
  {
    img: img,
    name: "John Doe",
  },
  {
    img: img,
    name: "Jane Doe",
  },
  {
    img: img,
    name: "John Doe",
  },
  {
    img: img,
    name: "Jane Doe",
  },
];

const coordinators = [
  {
    img: img,
    name: "John Doe",
  },
  {
    img: img,
    name: "Jane Doe",
  },
  {
    img: img,
    name: "John Doe",
  },
  {
    img: img,
    name: "Jane Doe",
  },
];

const Teams = () => {
  const [currentYear, setCurrentYear] = useState(2024);

  const handleYearChange = (year) => {
    setCurrentYear(year);
  };

  return (
    <div className="max-w-7xl mx-auto bg-slate-200">
      <Title>
        <h1>Meet the Councils</h1>
      </Title>
      <YearsCarousel handleYearChange={handleYearChange} />
      <div className="flex flex-col sm:flex-row items-center justify-evenly mb-20">
        <Fic fic={rankMembers[0]} />
        <Fic fic={rankMembers[0]} />
      </div>
      <div className="flex flex-col justify-center sm:flex-row items-center p-2 sm:p-5 gap-5 mb-20">
        <h1 className="w-full sm:w-1/4 text-center font-bold text-2xl md:text-xl lg:text-3xl">
          Rank Holders
        </h1>
        <div className="w-full sm:w-3/4 grid grid-cols-2 sm:grid-cols-3 gap-x-7 gap-y-10">
          {rankMembers.map((rankMember, index) => (
            <RankMember key={index} member={rankMember} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center sm:flex-row items-center p-2 sm:p-5 gap-5 mb-20">
        <h1 className="w-full sm:w-1/4 text-center font-bold text-2xl md:text-xl lg:text-3xl">
          Coordinators
        </h1>
        <div className="w-full sm:w-3/4 grid grid-cols-2 sm:grid-cols-3 gap-x-7 gap-y-10">
          {coordinators.map((coordinator, index) => (
            <Coordinator key={index} coordinator={coordinator} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
