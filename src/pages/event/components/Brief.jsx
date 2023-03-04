import React from "react";
import { BsBalloon } from "react-icons/bs";
import { FaGlassCheers } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { MdOutlineCelebration } from "react-icons/md";

const Brief = () => {
  return (
    <div className="container mx-auto mt-24">
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-3">
        <div className="flex  flex-col items-center">
          <GiThreeFriends size={90} className="text-[#ff7d0c]" />
          <h3 className="text-xl font-bold my-2 text-black">Friendly Team</h3>
          <p className="text-sm text-center text-black text-opacity-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            nobis? Voluptatem neque, quasi deleniti ab beatae natus officiis
            amet laborum tempora, quia nam dolorum eaque consequatur facilis, a
            nesciunt corporis?
          </p>
        </div>
        <div className="flex flex-col items-center">
          <BsBalloon size={90} className="text-[#ff7d0c]" />
          <h3 className="text-xl font-bold my-2 text-black">Friendly Team</h3>
          <p className="text-sm text-center text-black text-opacity-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            nobis? Voluptatem neque, quasi deleniti ab beatae natus officiis
            amet laborum tempora, quia nam dolorum eaque consequatur facilis, a
            nesciunt corporis?
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaGlassCheers size={90} className="text-[#ff7d0c]" />
          <h3 className="text-xl font-bold my-2 text-black">Friendly Team</h3>
          <p className="text-sm text-center text-black text-opacity-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            nobis? Voluptatem neque, quasi deleniti ab beatae natus officiis
            amet laborum tempora, quia nam dolorum eaque consequatur facilis, a
            nesciunt corporis?
          </p>
        </div>
        <div className="flex flex-col items-center">
          <MdOutlineCelebration size={90} className="text-[#ff7d0c]" />
          <h3 className="text-xl font-bold my-2 text-black">Friendly Team</h3>
          <p className="text-sm text-center text-black text-opacity-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            nobis? Voluptatem neque, quasi deleniti ab beatae natus officiis
            amet laborum tempora, quia nam dolorum eaque consequatur facilis, a
            nesciunt corporis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brief;
