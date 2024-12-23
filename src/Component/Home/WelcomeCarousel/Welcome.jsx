import React from "react";
import Title from "../../../UI/Title";
import { HomeCarousel } from "../../../Constants";
import Carousel from "../../../UI/Carousel";

const Welcome = () => {
  return (
    <div className="mb-6 sm:mb-10">
      <Title> Welcome </Title>
      {/* <Carousel slides={HomeCarousel.map((item) => item.img)} /> */}
      <Carousel slides={HomeCarousel} />
    </div>
  );
};

export default Welcome;
