import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Assets } from "../../../assets";
import ServiceCard from "./ServiceCard";

const NewsEvents = () => {
  const scrollRef = React.useRef();
  const sideScroll = (element, step) => {
    element.scrollLeft = element.scrollLeft + step;
  };

  return (
    <div className="container xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-full xs:w-full mt-32">
      <div class="flex flex-col bg-white m-auto p-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Our News & Events
        </h1>
        <div
          ref={scrollRef}
          class="flex overflow-x-scroll scroll-smooth pb-10 hide-scroll-bar"
        >
          <div class="flex flex-nowrap  ">
            <ServiceCard url={Assets.Service1} />
            <ServiceCard url={Assets.Service2} />
            <ServiceCard url={Assets.Service3} />
            <ServiceCard url={Assets.Service4} />
            <ServiceCard url={Assets.Service5} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => {
            sideScroll(scrollRef.current, -400);
          }}
          className="bg-slate-2 bg-slate-300 p-2 rounded-full hover:bg-[#ff7d0c] "
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          onClick={() => {
            sideScroll(scrollRef.current, 400);
          }}
          className="bg-slate-2 bg-slate-300 p-2 rounded-full hover:bg-[#ff7d0c] "
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default NewsEvents;
