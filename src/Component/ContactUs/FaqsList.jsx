import React from "react";
import Title from "../../UI/Title";
import Faqs from "../../UI/Faqs";
import { faqData } from "../../Constants";

const FaqsList = () => {
  return (
    <div className="px-6 mb-6 sm:mb-10">
      <Title>FAQ'S</Title>
      {faqData.map((faq, index) => (
        <div key={index} className="px-2 md:px-10">
          <Faqs
            faqs={faq.questions.map((item) => [item.question, item.answer])}
          />
        </div>
      ))}
    </div>
  );
};

export default FaqsList;
