import React from "react";

const Button = ({ children }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex cursor-pointer items-center justify-center rounded-full bg-blue-600 px-5 py-3 hover:bg-blue-700 outline-none text-sm text-slate-50">
        {children}
      </div>
    </div>
  );
};

export default Button;
