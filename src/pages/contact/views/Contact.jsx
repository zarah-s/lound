import React from "react";

import Navbar from "../../../common/Navbar";
import Header from "../components/Header";
import Title from "../components/Title";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
const Contact = () => {
  return (
    <div className="mb-10">
      <Navbar active="contact" isOrange />

      <Header />

      <div className="container mt-20">
        <div className="grid grid-cols-12 xl:gap-10 lg:gap-10 md:gap-8 sm:gap-0 xs:gap-0 items-center">
          <Title />
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
