import React, { useState } from "react";
import FicMember from "./FicMember";
import RankMember from "./RankMember";
import CoordinatorMember from "./CoordinatorMember";
import YearsCarousel from "../../UI/YearsCarousel";
import Title from "../../UI/Title";
import { teamsData } from "../../Constants";
import MainLayout from "../../UI/MainLayout";
const Teams = () => {
  const [currentYear, setCurrentYear] = useState(0);

  const handleYearChange = (year) => {
    setCurrentYear(year);
  };

  return (
    <div>
      <MainLayout>
        <div className="max-w-7xl mx-auto bg-slate-200">
          <Title>Meet the Councils</Title>
          <YearsCarousel handleYearChange={handleYearChange} />
          {teamsData[currentYear] ? (
            <>
              <div className="flex items-center justify-center mb-10 sm:mb-20">
                {teamsData[currentYear].ficMembers.map(
                  (ficMember, index) =>
                    index === 0 && (
                      <FicMember key={index} ficMember={ficMember} />
                    )
                )}
              </div>
              {/* Use this division if there are more instructors. */}
              {/* <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-10 sm:mb-20"></div> */}
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 mb-10 sm:mb-20">
                {teamsData[currentYear].ficMembers.map(
                  (ficMember, index) =>
                    index !== 0 && (
                      <FicMember key={index} ficMember={ficMember} />
                    )
                )}
              </div>
              <div className="flex flex-col justify-center sm:flex-row items-start px-6 gap-5 mb-10 sm:mb-20">
                <h1 className="w-full sm:w-1/4 text-center font-bold text-2xl sm:text-xl md:text-2xl lg:text-3xl">
                  Rank Holders
                </h1>
                <div className="w-full sm:w-3/4 grid grid-cols-2 sm:grid-cols-3 gap-x-7 gap-y-10">
                  {teamsData[currentYear].rankMembers.map(
                    (rankMember, index) => (
                      <RankMember key={index} rankMember={rankMember} />
                    )
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-center sm:flex-row items-start px-6 gap-5 mb-10 sm:mb-20">
                <h1 className="w-full sm:w-1/4 text-center font-bold text-2xl sm:text-xl md:text-2xl lg:text-3xl">
                  Coordinators
                </h1>
                <div className="w-full sm:w-3/4 grid grid-cols-2 sm:grid-cols-3 gap-x-7 gap-y-10">
                  {teamsData[currentYear].coordinatorMembers.map(
                    (coordinatorMember, index) => (
                      <CoordinatorMember
                        key={index}
                        coordinatorMember={coordinatorMember}
                      />
                    )
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="my-10 text-center mb-12">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-600 px-10">
                OOPS! NCC in IITH was not established then.
              </h1>
            </div>
          )}
        </div>
      </MainLayout>
    </div>
  );
};

export default Teams;
