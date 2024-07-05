import React from "react";
import Header from "../Component/Home/Header/Header";
import Footer from "../Component/Home/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="pt-20 max-w-7xl mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
