import React from "react";

const CircleButton = ({ children }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex cursor-pointer items-center justify-center rounded-full bg-blue-600 px-2 py-2 hover:bg-blue-700 outline-none text-sm text-slate-50">
        {children}
      </div>
    </div>
  );
};
export default CircleButton;
