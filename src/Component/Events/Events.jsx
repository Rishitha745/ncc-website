import React from "react";
import EventCard from "./EventCard";
import Title from "../../UI/Title";
import YearsCarousel from "../../UI/YearsCarousel";
import { eventsData } from "../../Constants";
import { useState } from "react";
import MainLayout from "../../UI/MainLayout";

const EventsPage = () => {
  const [currentYear, setCurrentYear] = useState(0);

  const handleYearChange = (year) => {
    setCurrentYear(year);
  };

  return (
    <div>
      <MainLayout>
        <div className="relative">
          <Title>Our Events</Title>
          <YearsCarousel handleYearChange={handleYearChange} />
          {eventsData[currentYear] ? (
            <>
              {eventsData[currentYear].events.map((event, index) => (
                <EventCard
                  key={index}
                  index={index}
                  title={event.title}
                  text={event.text}
                  date={event.date}
                  image={event.image}
                />
              ))}
            </>
          ) : (
            <div className="my-10 text-center">
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

export default EventsPage;
