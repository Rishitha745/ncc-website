import React from "react";
import MainLayout from "../../UI/MainLayout";
import EnrollmentForm from "./EnrollmentForm";

const Enrollment = () => {
  return (
    <div>
      <MainLayout>
        <div className="mb-6 sm:mb-10 px-6">
          <EnrollmentForm />
        </div>
      </MainLayout>
    </div>
  );
};

export default Enrollment;
