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
              href="/enrollment"
              className="text-blue-500 visited:text-purple-600 hover:underline"
            >
              Enrollment Form
            </a>
          </li>
          <li>
            <a
              href="/pre-enrolled"
              className="text-blue-500 visited:text-purple-600 hover:underline"
            >
              Pre-Enrolled Form
            </a>
          </li>
          <li>
            <a
              href="/camp-document"
              className="text-blue-500 visited:text-purple-600 hover:underline"
            >
              Camp Document
            </a>
          </li>
          <li>
            <a
              href="/admit-card"
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
