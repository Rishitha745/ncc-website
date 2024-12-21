import React, { useState } from "react";
import Title from "../../UI/Title";
import Faqs from "../../UI/Faqs";
import { faqDataInTraining } from "../../Constants";

const Certificates = () => {
  const [openCert, setOpenCert] = useState(0);

  const toggleOpenCert = (index) => {
    setOpenCert(openCert === index ? 0 : index);
  };

  return (
    <div className="px-6 mb-6 sm:mb-10">
      <Title>About Exams</Title>
      <div className="flex items-center justify-center mb-6 sm:mb-10">
        <div className="flex bg-slate-100 rounded-full">
          <div
            onClick={() => toggleOpenCert(0)}
            className={`flex cursor-pointer items-center justify-center rounded-full px-5 py-3 text-xs sm:text-sm ${
              openCert === 0
                ? "bg-blue-600 text-slate-50"
                : "hover:bg-blue-600 hover:text-slate-50"
            }`}
          >
            B-Examination
          </div>
          <div
            onClick={() => toggleOpenCert(1)}
            className={`flex cursor-pointer items-center justify-center rounded-full px-5 py-3 text-xs sm:text-sm ${
              openCert === 1
                ? "bg-blue-600 text-slate-50"
                : "hover:bg-blue-600 hover:text-slate-50"
            }`}
          >
            C-Examination
          </div>
        </div>
      </div>
      {faqDataInTraining.map(
        (faq, index) =>
          index === openCert && (
            <div key={index} className="px-2 md:px-10">
              <h1 className="text-sm md:text-base lg:text-lg text-center mb-6 sm:mb-10">
                {faq.content}
              </h1>
              <Faqs
                faqs={faq.questions.map((item) => [item.question, item.answer])}
              />
            </div>
          )
      )}
    </div>
  );
};

export default Certificates;
