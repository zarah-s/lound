import React from "react";
import { Assets } from "../../../assets";

const AboutUs = () => {
  return (
    <section class="about-area2 pb-bottom mt-30">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="about-img ">
              <img src={Assets.About} alt="" />
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="about-caption mb-50">
              <div class="section-tittle mb-25">
                <h2>About company</h2>
              </div>
              <p class="mb-20">
                The automated process starts as soon as your clothes go into the
                machine. The outcome is gleaming clothes!
              </p>
              <p class="mb-30">
                The automated process starts as soon as your clothes go into the
                machine. The outcome is gleaming clothes!
              </p>
              {/* <a href="about.html" class="btn">
                About Us
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
