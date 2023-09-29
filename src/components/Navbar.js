import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Images/Rajiv Logo.png";
// import Home from "./Pages/Home";
import { GoThreeBars } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [isActive, setIsActive] = useState(true);
  const gotoTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const toggle = () => {
    if (window.innerWidth <= 769) {
     
      document.querySelector("#nav").style.display = "none";

      setIsActive(!isActive);
      // setIsOpen(!isOpen);
    }
  }

  return (
    <>
      <nav className="NavContainer">
        <div className="navlogo">
          <Link to="/" onClick={gotoTop}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="navItems">
          <ul id="nav">
            <li>
              <NavLink
                to="/"
                onClick={() => {
                  gotoTop();
                  toggle();
                }}
                className=""
              >
                Home
              </NavLink>
            </li>

            {/* <li><NavLink to="/about" onClick={gotoTopWindow}>About</NavLink></li> */}
            <li>
              <NavLink
                to="/resume"
                onClick={() => {
                  gotoTop();
                  toggle();
                }}
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={() => {
                  gotoTop();
                  toggle();
                }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/EducationAndCertificate"
                onClick={() => {
                  gotoTop();
                  toggle();
                }}
              >
                Education / Certification
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => {
                  gotoTop();
                  toggle();
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="mobile-menu">
          {isActive ? (
            <GoThreeBars
              size="28px"
              onClick={() => {
                document.querySelector("#nav").style.display = "block";

                setIsActive(!isActive);
              }}
            />
          ) : (
            <RxCross2
              size="28px"
              onClick={() => {
                document.querySelector("#nav").style.display = "none";
                setIsActive(!isActive);
              }}
            />
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
