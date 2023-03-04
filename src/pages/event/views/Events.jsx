import React from "react";
import { Assets } from "../../../assets";
import Carousel from "../components/Carousel";

import "../styles/style.css";
import WithUs from "../components/WithUs";
import WhatWeDo from "../components/WhatWeDo";
import Brief from "../components/Brief";
import NewsEvents from "../components/News_Events";
import AffirmText from "../components/AffirmText";
import Testimonies from "../components/Testimonies";
import ContactUs from "../components/ContactUs";
import ReviewModal from "../components/ReviewModal";
import Navbar from "../../../common/Navbar";
import FadeIn from "../../../common/FadeIn";
const Events = () => {
  return (
    <div className="">
      <Navbar active="events" isOrange />

      <Carousel />
      <FadeIn>
        <Brief />
      </FadeIn>
      <WithUs />

      <FadeIn>
        <WhatWeDo />
      </FadeIn>

      <AffirmText />

      <Testimonies />

      <FadeIn>
        <NewsEvents />
      </FadeIn>

      <ContactUs />

      <ReviewModal />
    </div>
  );
};

export default Events;
