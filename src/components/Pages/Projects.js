import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import skill from "../../Images/project.jpg";

import textRajivImg from "../../Images/image1.jpg";
import NewsWalaImg from "../../Images/image3.jpg";
import PopAlertImg from "../../Images/image2.jpg";
import PranImg from "../../Images/image4.jpg";
import PortfolioImg from "../../Images/portfolio.jpg";

import { BsFillStarFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="ProjectsMainContainer">
        <section data-aos="fade-up">
          <div className="ProjectHeader">
            <div className="ProjectHeaderLeft">
              <h2 id="Heading">Projects & Experience</h2>
              <p>
                You can find all of my projects on my profile on Github. You can
                view my activities, contributions and code on these projects.
                Some of these are completed and some are in progress. You can
                also leave comments on the profile and start a discussion. I am
                always looking for new projects and Ideas. You can also reach
                out to me on any of the social media channels mentioned below.
              </p>

              <div className="starbtn">
                <button>
                  <Link
                    to="https://github.com/RajivRnjan?tab=stars"
                    target="_blank"
                  >
                    <div>
                      <BsFillStarFill
                        className="star"
                        size={"25px"}
                        color="orange"
                      />
                    </div>
                    Star me on Github
                  </Link>
                </button>
              </div>
            </div>

            <div className="ProjectHeaderRight" data-aos="fade-down">
              <img src={skill} alt="ProjectsImage" />
            </div>
          </div>
        </section>

        <div className="ProjectsContainer">
          <section data-aos="fade-up">
            <div className="ProjectsMenu">
              <button data-aos="fade-up">All Here</button>
              <button data-aos="fade-up">Web Application</button>
              {/* <button data-aos="fade-up">Web Application</button> */}
            </div>
          </section>

          <section data-aos="fade-up">
            <div className="ProjectsRow">
              <div className="ProjectItem">
                <div className="ProjectItemThumbnail">
                  <img src={PortfolioImg} alt="thumbnai" />
                </div>
                <span className="ProjectTitle">
                  <h4>My Portfolio</h4>
                </span>

                <span className="ProjectAbout">
                  <p>This is our Portfolio website made by React Js.</p>
                </span>

                <span className="ProjectDesc">
                  <p>Website</p>
                  <p>April 2023</p>
                </span>

                <div className="ProjectItemButton">
                  <button>
                    <Link
                      to="https://github.com/RajivRnjan/rajivrnjan.github.io"
                      target="_blank"
                    >
                      Project Code
                    </Link>
                  </button>
                  <button>
                    <Link to="https://rajivrnjan.github.io" target="_blank">
                      Live Project
                    </Link>
                  </button>
                </div>
              </div>

              <div className="ProjectItem">
                <div className="ProjectItemThumbnail">
                  <img src={NewsWalaImg} alt="thumbnai" />
                </div>
                <div className="ProjectTitle">
                  <h4>NewsWala</h4>
                </div>

                <span className="ProjectAbout">
                  <p>
                    Here this is News Blog website using API. Since I used local
                    API so can't fetch data in browser.
                  </p>
                </span>

                <div className="ProjectDesc">
                  <p>Website </p>
                  <p>January 2023</p>
                </div>

                <div className="ProjectItemButton">
                  <button>
                    <Link
                      to="https://github.com/RajivRnjan/newswala"
                      target="_blank"
                    >
                      Project Code
                    </Link>
                  </button>
                  <button>
                    <Link
                      to="https://rajivrnjan.github.io/newswala/"
                      target="_blank"
                    >
                      Live Project
                    </Link>
                  </button>
                </div>
              </div>

              <div className="ProjectItem">
                <div className="ProjectItemThumbnail">
                  <img src={textRajivImg} alt="thumbnai" />
                </div>
                <div className="ProjectTitle">
                  <h4>TextRajiv</h4>
                </div>

                <span className="ProjectAbout">
                  <p>
                    TextRajiv is a simple website just for playing with
                    characters.
                  </p>
                </span>

                <div className="ProjectDesc">
                  <p>Website </p>
                  <p>November 2022</p>
                </div>

                <div className="ProjectItemButton">
                  <button>
                    <Link
                      to="https://github.com/RajivRnjan/TextRajiv"
                      target="_blank"
                    >
                      Project Code
                    </Link>
                  </button>
                  <button>
                    <Link
                      to="https://rajivrnjan.github.io/TextRajiv/"
                      target="_blank"
                    >
                      Live Project
                    </Link>
                  </button>
                </div>
              </div>

              <div className="ProjectItem">
                <div className="ProjectItemThumbnail">
                  <img src={PopAlertImg} alt="thumbnai" />
                </div>
                <div className="ProjectTitle">
                  <h4>Popup Alert</h4>
                </div>

                <span className="ProjectAbout">
                  <p>This is an simple module of popup alert.</p>
                </span>

                <div className="ProjectDesc">
                  <p>Website </p>
                  <p>April 2022</p>
                </div>

                <div className="ProjectItemButton">
                  <button>
                    <Link
                      to="https://github.com/RajivRnjan/popup"
                      target="_blank"
                    >
                      Project Code
                    </Link>
                  </button>
                  <button>
                    <Link
                      to="https://rajivrnjan.github.io/popup/"
                      target="_blank"
                    >
                      Live Project
                    </Link>
                  </button>
                </div>
              </div>

              <div className="ProjectItem">
                <div className="ProjectItemThumbnail">
                  <img src={PranImg} alt="thumbnai" />
                </div>
                <div className="ProjectTitle">
                  <h4>PRAN APP</h4>
                </div>

                <span className="ProjectAbout">
                  <p>
                    This is a complete student based app for VBU students.
                    Students can access notes, pyq, ebooks etc.{" "}
                  </p>
                </span>

                <div className="ProjectDesc">
                  <p>App</p>
                  <p>April 2022</p>
                </div>

                <div className="ProjectItemButton">
                  <button>Project Code</button>
                  <button>Live Project</button>
                </div>
              </div>

              {/* <div className="ProjectItem">
                <div className="ProjectItemThumbnail">
                  <img src={thumbnail} alt="thumbnai" />
                </div>
                <div className="ProjectTitle">
                  <h4>Lorem ipsum dolor</h4>
                </div>

                <div className="ProjectDesc">
                  <p>Web Application</p>
                  <p>April 2023</p>
                </div>

                <div className="ProjectItemButton">
                  <button>Project Code</button>
                  <button>Live Project</button>
                </div>
              </div>

              <div className="ProjectItem">
                <div className="ProjectItemThumbnail">
                  <img src={thumbnail} alt="thumbnai" />
                </div>
                <div className="ProjectTitle">
                  <h4>Lorem ipsum dolor</h4>
                </div>

                <div className="ProjectDesc">
                  <p>Web Application</p>
                  <p>April 2023</p>
                </div>

                <div className="ProjectItemButton">
                  <button>Project Code</button>
                  <button>Live Project</button>
                </div>
              </div> */}

              {/* <div className="ProjectItem">
                <div className="ProjectItemThumbnail">
                  <img src={thumbnail} alt="thumbnai" />
                </div>
                <div className="ProjectTitle">
                  <h4>Lorem ipsum dolor</h4>
                </div>

                <div className="ProjectDesc">
                  <p>Web Application</p>
                  <p>April 2023</p>
                </div>

                <div className="ProjectItemButton">
                  <button>Project Code</button>
                  <button>Live Project</button>
                </div>
              </div> */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Projects;
