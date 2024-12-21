import React from "react";
import MainLayout from "../../UI/MainLayout";
import EnrollmentForm from "./EnrollmentForm";

const EnrollHere = () => {
  return (
    <>
      <MainLayout>
        <div className="mb-6 sm:mb-10 px-6">
          <EnrollmentForm />
        </div>
      </MainLayout>
    </>
  );
};

export default EnrollHere;
