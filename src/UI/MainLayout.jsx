import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import BackToTop from "./BackToTop/BackToTop";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="mt-20 sm:mt-24 max-w-7xl mx-auto">{children}</div>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default MainLayout;
