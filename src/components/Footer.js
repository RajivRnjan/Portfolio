import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import { AiFillCopyrightCircle } from "react-icons/ai";
import {MdDoubleArrow} from "react-icons/md";

function Footer() {
  const gotoTopWindow = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="FooterContainer">
          <div className="TopFooter">
            <div className="TopLeftFooter">
              <h1>Let's Make Something Amazing Together</h1>
              <h2>
                Start by <span className="sayinghii">Saying Hii</span>
              </h2>
            </div>
            <div className="TopRightFooter">
              <div className="TopRightHeading">
                <h3>Related Links</h3>
              </div>
              <div className="TopRightBottomSection">
                <ul>
                  <li>
                    <Link to="/" onClick={gotoTopWindow}>
                      <MdDoubleArrow className="arrow" />Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/resume" onClick={gotoTopWindow}>
                    <MdDoubleArrow className="arrow"/>Resume
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects" onClick={gotoTopWindow}>
                    <MdDoubleArrow className="arrow"/>Project
                    </Link>
                  </li>
                  <li>
                    <Link to="/EducationAndCertificate" onClick={gotoTopWindow}>
                    <MdDoubleArrow className="arrow"/>Education
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={gotoTopWindow}>
                    <MdDoubleArrow className="arrow"/>Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="BottomFooter">
            <div className="BottomLeftFooter">
              <h2>Rajiv Ranjan</h2>
            </div>
            <div className="BottomMiddleFooter">
              <AiFillCopyrightCircle size="18px" />{" "}
              <p>&nbsp; Copyright {currentYear} by Rajiv. All Right Reserved</p>
            </div>
            <div className="BottomRightFooter">
              <ul>
                <li>
                  <Link to="https://www.linkedin.com/in/rajiv-ranjan-5b6733227/" target="_blank">
                    <BsLinkedin className=" socialIcon socialIcon1" />
                  </Link>
                </li>
                <li>
                    <Link to="https://github.com/RajivRnjan" target="_blank">
                  <BsGithub className="socialIcon socialIcon2" />
                  </Link>
                </li>
                <li>
                    <Link to="https://twitter.com/rajiv_ranjan_1?t=JhwP7fOpEzXk2GXDXYHuNw&s=08" target="_blank">
                  <BsTwitter className="socialIcon socialIcon3" />
                  </Link>
                </li>

                <li>
                <Link to="https://www.instagram.com/rajiv_ranjan_1/" target="_blank">
                  <BsInstagram className="socialIcon socialIcon4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
