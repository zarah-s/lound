import React from "react";
import { BsCalendarEvent } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const ServiceCard = ({ url }) => {
  return (
    <div class="inline-block px-3">
      <div class="w-72 h-72 max-w-xs overflow-hidden rounded-lg relative shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div
          className="service-bg h-40 bg-cover bg-no-repeat flex items-end justify-center"
          style={{
            "--bg-image": `url(${url})`,
          }}
        >
          <div className=" w-full text-white p-2">
            <div className="flex items-center gap-2">
              <BsCalendarEvent />
              <h4 className="truncate text- font- text-sm">20 Feb, 2025</h4>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <MdOutlineFavoriteBorder />
              <h4 className="truncate text- font- text-sm">20</h4>
            </div>
          </div>
        </div>

        <p className=" h-full my-4 mx-4 text-sm text-center text-black text-opacity-40 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
