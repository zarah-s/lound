import React from "react";
import { Assets } from "../../../assets";

const Services = () => {
  return (
    <section class="offer-services pb-bottom2 mt-24">
      <div class="container m-auto">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-8">
            <div class="section-tittle text-center mb-55">
              <span class="element">Services</span>
              <h2>Services we offer</h2>
            </div>
          </div>
        </div>
        <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
          <div class="single-offers">
            <img
              src={Assets.Laundry5}
              alt=""
              class=" w-100 h-full object-cover"
            />
          </div>
          <div class="single-offers">
            <img src={Assets.Bg} alt="" class=" w-100" />
            <div class="offers-caption text-center">
              <div class="flex justify-center">
                <img src="assets/img/offers-icon1.png.webp" alt="" />
              </div>
              <div class="cat-cap">
                <h5>
                  <a href="services.html">Cloth laundry</a>
                </h5>
                <p>
                  The automated process starts as soon as your clothes go into
                  the machine. The outcome is gleaming clothes!!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
          <div class="single-offers">
            <img src={Assets.Bg} alt="" class=" w-100" />
            <div class="offers-caption text-center">
              <div class="flex justify-center">
                <img src="assets/img/offers-icon1.png.webp" alt="" />
              </div>
              <div class="cat-cap">
                <h5>
                  <a href="services.html">Event Planning</a>
                </h5>
                <p>
                  The automated process starts as soon as your clothes go into
                  the machine. The outcome is gleaming clothes!!
                </p>
              </div>
            </div>
          </div>
          <div class="single-offers">
            <img
              src={Assets.Event2}
              alt=""
              class=" w-100 h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
