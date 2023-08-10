import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/Rajiv Logo.png";
// import Home from "./Pages/Home";
import { GoThreeBars } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [isActive, setIsActive] = useState(true);
  const gotoTopWindow = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="NavContainer">
        <div className="navlogo">
          <Link to="/" onClick={gotoTopWindow}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="navItems">
          <ul id="nav">
            <li>
              <Link to="/" onClick={gotoTopWindow} className="">
                Home
              </Link>
            </li>

            {/* <li><Link to="/about" onClick={gotoTopWindow}>About</Link></li> */}
            <li>
              <Link to="/resume" onClick={gotoTopWindow}>
                Resume
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={gotoTopWindow}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/EducationAndCertificate" onClick={gotoTopWindow}>
                Education / Certification
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={gotoTopWindow}>
                Contact
              </Link>
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
