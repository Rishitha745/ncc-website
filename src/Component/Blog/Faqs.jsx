import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Faqs = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      {faqs.map((faq, index) => {
        return (
          <div
            key={index}
            className="flex flex-col rounded-xl border-slate-200 bg-white"
          >
            <button
              className="flex justify-between items-center rounded-xl w-full bg-slate-300 p-6"
              onClick={() => toggleOpen(index)}
            >
              <h4 className="text-xs sm:text-base lg:text-lg font-semibold">
                {faq[0]}
              </h4>
              <FaAngleDown className="text-2xl sm:text-3xl text-slate-600" />
            </button>
            {openIndex === index && (
              <p className="text-slate-600 text-xs sm:text-base lg:text-lg p-6">
                {faq[1]}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Faqs;
