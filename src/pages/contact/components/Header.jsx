import React from "react";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div class="bg-gradient-to-r py-20 from-[#ff4644] via-[#ff8334] to-[#f9c700] ">
      <div className="container flex flex-wrap items-start xl:justify-around lg:justify-around md:justify-around sm:justify-start xs:justify-start">
        <div className="text-white w-full">
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
          >
            <h1 className="xl:text-8xl lg:text-8xl md:text-7xl sm:text-5xl xs:text-5xl font-bold">
              Contact
            </h1>
          </motion.div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nisi
            iste iure doloribus assumenda, eligendi dicta ex quibusdam
            temporibus fugiat nobis dolor impedit perferendis? Assumenda magni
            quidem non unde voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
