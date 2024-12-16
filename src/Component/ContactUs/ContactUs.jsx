import React from "react";
import MainLayout from "../../UI/MainLayout";
import FaqsList from "./FaqsList";
import ImportantLinks from "./ImportantLinks";


const ContactUs = () => {
  return (
    <div>
      <MainLayout>
        <FaqsList />
        <ImportantLinks />
      </MainLayout>
    </div>
  );
};

export default ContactUs;
