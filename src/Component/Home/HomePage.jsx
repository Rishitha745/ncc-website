import React from "react";
import Welcome from "./WelcomeCarousel/Welcome";
import Hero from "./Hero/Hero";
import About from "./About/About";
import EventsGrid from "./EventsGrid/EventsGrid";
import Message from "./Messages/Message";
import MainLayout from "../../UI/MainLayout";

const HomePage = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <Welcome />
        <About />
        <Message />
        <EventsGrid />
      </MainLayout>
    </>
  );
};

export default HomePage;
