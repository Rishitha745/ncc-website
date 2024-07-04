import React from "react";
import Header from "./Component/Home/Header/Header";
import Footer from "./Component/Home/Footer/Footer";
import EventsPage from "./Component/Events/EventsCopy";
import GalleryPage from "./Component/Gallery/GalleryPage";
import SliderComp from "./Component/Events/SliderComp";

const App = () => {
  return (
    <div>
      <Header />
      <div className="pt-14 max-w-7xl mx-auto">
        <SliderComp></SliderComp>
        <Footer />
      </div>
    </div>
  );
};

export default App;
