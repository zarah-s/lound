import React from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = ({ active, isOrange }) => {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  return (
    <header>
      <div className="header-area xl:p-0 lg:p-0 md:p-0 sm:p-2 xs:p-2 shadow-none">
        <div className="main-header header-sticky ">
          <div className="header-left">
            <div className="logo">
              <Link to="/">
                <img src="assets/img/logo/logo.png" alt="" />
              </Link>
            </div>
            <div className="menu-wrapper  d-flex align-items-center">
              <div className="main-menu xl:block lg:block md:block sm:hidden xs:hidden ">
                <nav>
                  <ul id="navigation">
                    <li
                      className={`${
                        active === "home" && "active"
                      } before:bg-[#6785ff] `}
                    >
                      <Link to="/">Home</Link>
                    </li>

                    <li
                      className={`${
                        (active === "events" || active === "laundry") &&
                        "active"
                      } ${
                        isOrange ? "before:bg-[#ff7d0c]" : "before:bg-[#6785ff]"
                      } `}
                    >
                      <a href="#">Services</a>
                      <ul className="submenu">
                        <li>
                          <Link to="/laundry">Laundry</Link>
                        </li>
                        <li>
                          <Link to="/events">Event Planning</Link>
                        </li>
                      </ul>
                    </li>

                    <li
                      className={`${
                        active === "contact" && "active"
                      } before:bg-[#ff7d0c] `}
                    >
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="header-right xl:block lg:block md:block sm:hidden xs:hidden">
            <a
              href="#"
              className={`header-btn1 ${
                isOrange ? "text-[#ff7d0c]" : "text-[#6785ff]"
              }`}
            >
              +234 9012 121 232
            </a>
            {/* <a href="#" className="header-btn2">
              Make an Appointment
            </a> */}
          </div>
          <div className="mobile_menu xl:hidden lg:hidden md:hidden sm:block xs:block">
            <div id="mySidenav" class="sidenav">
              <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
                &times;
              </a>
              <ul id="mobile-nav">
                <li>
                  <Link
                    to="/"
                    className={
                      active === "home" &&
                      "before:bg-[#6785ff] active text-[#6785ff]"
                    }
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/laundry"
                    className={
                      active === "laundry" &&
                      "before:bg-[#6785ff] active text-[#6785ff]"
                    }
                  >
                    Laundry
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className={
                      active === "events" &&
                      "before:bg-[#ff7d0c] active text-[#ff7d0c]"
                    }
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={
                      active === "contact" &&
                      "before:bg-[#ff7d0c] active text-[#]"
                    }
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <HiBars3BottomLeft size={30} onClick={openNav} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
