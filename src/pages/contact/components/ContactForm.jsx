import React from "react";
import Input from "./Input";

const ContactForm = () => {
  return (
    <div className="xl:col-span-8 lg:col-span-8 md:col-span-8 sm:col-span-12 xs:col-span-12 ">
      <div className="">
        <div className="">
          <div className="grid grid-cols-2 gap-6">
            <Input label="NAME" placeholder="Your Name" />
            <Input label="EMAIL" placeholder="example@email.com" />
          </div>
          <div className=" mt-16 mb-10">
            <Input label="MESSAGE" placeholder="Hi there .." />
          </div>
          <button className="bg-[#ff7d0c] py-3 px-5 rounded-full font-semibol">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
