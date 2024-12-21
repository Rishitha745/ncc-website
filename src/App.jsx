import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Component/Home/HomePage";
import Teams from "./Component/Teams/Teams";
import About from "./Component/About/About";
import Blog from "./Component/Blog/Blog";
import EventsPage from "./Component/Events/Events";
import Gallery from "./Component/Gallery/Gallery";
import ContactUs from "./Component/ContactUs/ContactUs";
import Enrollment from "./Component/Enrollment/Enrollment";
import ScrollToTop from "./UI/ScrollToTop";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/council" element={<Teams />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/training" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/enrollment" element={<Enrollment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;

// import Carousel from "./Component/Home/Carousel/Carousel";
// import Hero from "./Component/Home/Hero/Hero";
// import About from "./Component/Home/About/About";
// import EventsGrid from "./Component/Home/EventsGrid/EventsGrid";
// import BackToTop from "./Component/Home/BackToTop/BactToTop";
// import Message from "./Component/Home/Messages/Message";
// const App = () => {
//   return (
//     <div>
//       <Header />
//       <div className="pt-14 max-w-7xl mx-auto">
//         <Hero />
//         <Carousel />
//         <About />
//         <Message />
//         <EventsGrid />
//         <BackToTop />
//         <Footer />
//       </div>
//     </div>
//   );
// };
// export default App;

// import Events from "./Component/Events/Events";
// const App = () => {
//   return (
//     <div>
//       <Header />
//       <div className="pt-20 max-w-7xl mx-auto">
//         <Events />
//         <Footer />
//       </div>
//     </div>
//   );
// };
// export default App;

// import Blog from "./Component/Blog/Blog";
// const App = () => {
//   return (
//     <div>
//       <Header />
//       <div className="pt-20 max-w-7xl mx-auto">
//         <Blog></Blog>
//          <Footer />
//       </div>
//     </div>
//   );
// };
// export default App;

// import About from "./Component/About/About";
// const App = () => {
//   return (
//     <div>
//       <Header />
//       <div className="pt-20 max-w-7xl mx-auto">
//         <About />
//         <Footer />
//       </div>
//     </div>
//   );
// };
// export default App;

// import Teams from "./Component/Teams/Teams";
// const App = () => {
//   return (
//     <div>
//       <Header />
//       <div className="pt-20 max-w-7xl mx-auto">
//         <Teams />
//         <Footer />
//       </div>
//     </div>
//   );
// };
// export default App;

// import Gallery from "./Component/Gallery/Gallery";
// import Carousel from "./Component/Gallery/Carousel";
// const App = () => {
//   return (
//     <div>
//       <Header />
//       <div className="pt-20 max-w-7xl mx-auto">
//         <Gallery />
//         <Carousel />
//         <Footer />
//       </div>
//     </div>
//   );
// };
// export default App;
