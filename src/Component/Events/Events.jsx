import React, { useState } from "react";
import Test from "./Test";
import Title from "../../UI/Title";
import MainLayout from "../../UI/MainLayout";
import YearsCarousel from "../../UI/YearsCarousel";
import { eventsData } from "../../Constants";

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
          {eventsData.map(
            (eachEvent, index) =>
              index == currentYear && (
                <div>
                  {eachEvent.events.map((event, index) => (
                    <Test
                      key={index}
                      index={index}
                      title={event.title}
                      text={event.text}
                      date={event.date}
                      image={event.image}
                    />
                  ))}
                </div>
              )
          )}
        </div>
      </MainLayout>
    </div>
  );
};

export default EventsPage;
