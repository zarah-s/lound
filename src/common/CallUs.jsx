import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";

const CallUs = () => {
  return (
    <section class="container">
      <section class="wantToWork-area">
        <div class="wants-wrapper w-padding2">
          <div class="row align-items-center justify-content-between">
            <div class="col-xl-8 col-lg-9 col-md-7">
              <div class="wantToWork-caption wantToWork-caption2">
                <h2>Call us for a service</h2>
                <p>
                  We deliver the goods to the most complicated places on earth
                </p>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-5">
              <Link
                to="/contact"
                class="btn wantToWork-btn d-flex align-items-center gap-2"
              >
                <BiPhoneCall />
                <span>Call Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CallUs;
