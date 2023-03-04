import React from "react";

const ContactUs = () => {
  return (
    <div class="bg-gradient-to-r py-20 mt-20 from-[#ff4644] via-[#ff8334] to-[#f9c700] ">
      <div className="container flex items-start xl:justify-around lg:justify-around md:justify-around sm:justify-start xs:justify-start flex-wrap">
        <div className="text-white">
          <h1 className="text-4xl font-bold">Contact Us Now!</h1>
          <p>We've got the perfect event planning for you</p>
        </div>
        <button className="bg-white text-[#ff7d0c] py-2 px-5 rounded-full font-semibold">
          Call Us
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
