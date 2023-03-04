import React from "react";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import CallUs from "../../../common/CallUs";
import Achievements from "../components/Achievements";
import AboutUs from "../components/AboutUs";
import Navbar from "../../../common/Navbar";
import FadeIn from "../../../common/FadeIn";
const Home = () => {
  return (
    <div>
      <Navbar active="home" />

      <Carousel />

      <FadeIn>
        <Services />
      </FadeIn>
      <CallUs />
      <FadeIn>
        <Achievements />
      </FadeIn>

      <FadeIn>
        <AboutUs />
      </FadeIn>

      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        height="300"
        class="w-full"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
      ></iframe>
    </div>
  );
};

export default Home;
