import React from "react";
import MainLayout from "../../UI/MainLayout";
import FaqsList from "./FaqsList";
import ImportantLinks from "./ImportantLinks";

const ContactUs = () => {
  return (
    <>
      <MainLayout>
        <FaqsList />
        <ImportantLinks />
      </MainLayout>
    </>
  );
};

export default ContactUs;
