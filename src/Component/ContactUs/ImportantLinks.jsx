import React from "react";
import Title from "../../UI/Title";
import Button from "../../UI/Button";

const ImportantLinks = () => {
  return (
    <div className="px-6 mb-6 sm:mb-10">
      <Title>Important Forms</Title>
      <div className="px-2 md:px-10 mb-6 md:mb-8">
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base lg:text-xl">
          <li>
            <a
              href="/enrollmentForm.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 visited:text-purple-600 hover:underline"
            >
              Enrollment Form
            </a>
          </li>
          <li>
            <a
              href="/preFilledEnrollmentForm.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 visited:text-purple-600 hover:underline"
            >
              Pre-Filled Enrollment Form
            </a>
          </li>
          <li>
            <a
              href="/campDocument.doc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 visited:text-purple-600 hover:underline"
            >
              Camp Document
            </a>
          </li>
          <li>
            <a
              href="/admitCard.doc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 visited:text-purple-600 hover:underline"
            >
              Admit Card
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <a href="/enrollment">
          <Button>Enroll Here</Button>
        </a>
      </div>
    </div>
  );
};

export default ImportantLinks;
