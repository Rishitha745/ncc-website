import React from "react";

const Title = ({ children }) => {
  return (
    <div className="flex items-center justify-center">
      <h2 className="mb-6 md:mb-10 border-b border-slate-400 pb-3 text-center text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-slate-600 transition-all duration-300">
        {children}
      </h2>
    </div>
  );
};

export default Title;
