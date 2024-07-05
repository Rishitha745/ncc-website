import React, { useState, useEffect } from "react";
import { HiArrowSmUp } from "react-icons/hi";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6">
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="bg-blue-500 text-white p-1 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
        >
          <HiArrowSmUp size={25} />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
