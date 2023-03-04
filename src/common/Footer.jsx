import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div class="footer-area footer-padding">
        <div class="container">
          <div class="row d-flex justify-content-between">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div class="single-footer-caption mb-50">
                <div class="single-footer-caption mb-30">
                  <div class="footer-logo mb-35">
                    <a href="index.html">
                      <img src="assets/img/logo/logo2_footer.png" alt="" />
                    </a>
                  </div>
                  <div class="footer-tittle">
                    <div class="footer-pera">
                      <p>
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla.
                      </p>
                    </div>
                  </div>

                  <div class="footer-social flex">
                    <a href="#" className="">
                      <AiOutlineTwitter className="m-auto" />
                    </a>
                    <a href="#">
                      <FaFacebookF className="m-auto" />
                    </a>
                    <a href="#">
                      <AiOutlineInstagram className="m-auto" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
              <div class="single-footer-caption mb-50">
                <div class="footer-tittle">
                  <h4>Services </h4>
                  <ul>
                    <li>
                      <Link to="/laundry">- Laundry</Link>
                    </li>
                    <li>
                      <Link to="/events">- Event Planning</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
              <div class="single-footer-caption mb-50">
                <div class="footer-tittle">
                  <h4>Get in touch</h4>
                  <ul>
                    <li class="number">
                      <a href="#"> +234 0923 239823</a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          class="__cf_email__"
                          data-cfemail="117d70647f756368512427263f727e7c"
                        >
                          example@email.com
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Jos Plateau State Nigeria</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom-area section-bg2">
        <div class="container">
          <div class="footer-border">
            <div class="row d-flex align-items-center">
              <div class="col-xl-12 ">
                <div class="footer-copy-right text-center">
                  <p>
                    copyright &copy;{new Date().getFullYear()} | All rights
                    reserve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
