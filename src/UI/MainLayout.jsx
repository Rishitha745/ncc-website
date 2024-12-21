import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import BackToTop from "./BackToTop/BackToTop";

const MainLayout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <div className="mt-28 max-w-7xl mx-auto">{children}</div>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default MainLayout;
