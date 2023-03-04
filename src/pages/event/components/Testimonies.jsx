import React from "react";

const Testimonies = () => {
  return (
    <div className="bg-testimonies h-[100vh] bg-fixed flex items-center justify-center">
      <div className="container xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full">
        <h1 className="text-center text-white font-bold text-5xl mb-5">
          What People Say
        </h1>

        <p className="text-white font-semibold  text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          odit eligendi earum nobis amet debitis eius placeat beatae minus odio
          corrupti soluta nemo ipsa distinctio, similique quam modi dicta
          aliquid!
        </p>

        <div className="flex justify-center mt-20">
          <button
            type="button"
            // class="bg-blue-500 py-2.5 px-8 rounded-full"
            class="bg-[#ff7d0c] py-2.5 px-5 rounded-full"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            Give Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
