import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { CiLocationOn, CiMail } from "react-icons/ci";

const ContactInfo = () => {
  return (
    <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12 xs:col-span-12 ">
      <div className="flex items-center gap-3">
        <CiMail size={30} />
        <p className="font-medium text-xl">example@gmail.com</p>
      </div>
      <div className="flex items-center gap-3">
        <CiLocationOn size={30} />
        <p className="font-medium text-xl">Jos Plateau State Nigeria</p>
      </div>
      <div className="flex items-center gap-3">
        <BiPhoneCall size={30} />
        <p className="font-medium text-xl">+234 8844 2323</p>
      </div>
    </div>
  );
};

export default ContactInfo;
