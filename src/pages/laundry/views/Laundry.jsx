import React from "react";
import Carousel from "../components/Carousel";
import CallUs from "../../../common/CallUs";
import ReviewModal from "../components/ReviewModal";
import Testimonies from "../components/Testimonies";
import Navbar from "../../../common/Navbar";
import Process from "../components/Process";
import FadeIn from "../../../common/FadeIn";
const Laundry = () => {
  return (
    <div>
      <Navbar active="laundry" />

      <Carousel />
      <FadeIn>
        <Process />
      </FadeIn>

      <FadeIn>
        <Testimonies />
      </FadeIn>

      <CallUs />

      <ReviewModal />
    </div>
  );
};

export default Laundry;
