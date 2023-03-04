import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const Testimonies = () => {
  return (
    <section class="testimonials-area testimonials-overly  position-relative">
      <div class="container mb-12">
        <div class="section-tittle text-center mb-55">
          <span class="element">Feedbacks</span>
          <h2>Testimonies</h2>
        </div>
        <div class="border-bottom pb-10 ">
          <div class="row">
            <div class="col-xl-12 ">
              <div class="testmonial-item-active text-center">
                <div class="testmonial-item ">
                  <p class="pera">
                    The automated process starts as soon as your clothes go into
                    the
                    <br /> machine. The outcome is gleaming clothes!
                  </p>
                  <div class="rating flex justify-center gap-2">
                    <AiTwotoneStar color="yellow" />
                    <AiTwotoneStar color="yellow" />
                    <AiTwotoneStar color="yellow" />
                    <AiTwotoneStar color="yellow" />
                    <AiTwotoneStar color="yellow" />
                  </div>
                  <p> - Rupaya</p>
                </div>

                <div class="testmonial-item ">
                  <p class="pera">
                    The automated process starts as soon as your clothes go into
                    the
                    <br /> machine. The outcome is gleaming clothes!
                  </p>
                  <div class="rating flex justify-center gap-2">
                    <AiTwotoneStar color="yellow" />
                    <AiTwotoneStar color="yellow" />
                    <AiTwotoneStar color="yellow" />
                    <AiTwotoneStar color="yellow" />
                    <AiTwotoneStar color="yellow" />
                  </div>
                  <p> - Rupaya</p>
                </div>

                <div class="testmonial-item ">
                  <p class="pera">
                    The automated process starts as soon as your clothes go into
                    the
                    <br /> machine. The outcome is gleaming clothes!
                  </p>
                  <div class="rating flex justify-center gap-2">
                    <AiTwotoneStar color="yellow" />
                    <AiTwotoneStar color="yellow" />
                    <AiTwotoneStar color="yellow" />
                    <AiTwotoneStar color="yellow" />
                    <AiTwotoneStar color="yellow" />
                  </div>
                  <p> - Rupaya</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              class="bg-blue-500 py-2.5 px-8 rounded-full"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              Give Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
