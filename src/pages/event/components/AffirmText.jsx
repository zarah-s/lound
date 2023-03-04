import React from "react";

const AffirmText = () => {
  return (
    <div class="bg-gradient-to-r py-20 mt-20 from-[#ff4644] via-[#ff8334] to-[#f9c700] ">
      <div className="container flex flex-wrap items-start xl:justify-around lg:justify-around md:justify-around sm:justify-start xs:justify-start">
        <div className="text-white">
          <h1 className="text-4xl font-bold">Looking for something special?</h1>
          <p>We got you</p>
        </div>
        <button className="bg-white text-[#ff7d0c] py-2 px-5 rounded-full font-semibold">
          Call Us
        </button>
      </div>
    </div>
  );
};

export default AffirmText;
