import React from "react";
import Card from "./Card";
import Title from "../../../UI/Title";
import Button from "../../../UI/Button";
import { homeEventsGrid } from "../../../Constants";

const style1 =
  "p-2 h-[200px] rounded-lg lg:col-span-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30";
const style2 =
  "p-2 h-[200px] rounded-lg sm:col-span-2 lg:col-span-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30";

const EventGrid = () => {
  return (
    <div className="max-w-7xl mx-auto bg-slate-200">
      <Title>Our Events</Title>
      <div className="grid sm:grid-cols-2 gap-8 lg:grid-cols-3 px-6 py-4 mb-8">
        {homeEventsGrid.map((event, index) => (
          <div
            key={index}
            className={`${index == 1 || index == 2 ? style1 : style2}`}
          >
            <Card
              title={event.title}
              image={event.image}
              style={`${index == 1 || index == 2 ? style1 : style2}`}
            ></Card>
          </div>
        ))}
      </div>
      <div className="mb-10">
        <a href="/events">
          <Button>View Events</Button>
        </a>
      </div>
    </div>
  );
};

export default EventGrid;
