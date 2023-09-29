import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../project.json";
import skill from "../../Images/project.jpg";



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

{
  Object.entries(data.projects).map((project)=>{
    return (
      <div className="ProjectItem">
      <div className="ProjectItemThumbnail">
        <img src={project[1].thumbnail} alt="thumbnail" />
      </div>
      <span className="ProjectTitle">
        <h4>{project[1].title}</h4>
      </span>

      <span className="ProjectAbout">
        <p>{project[1].desc}</p>
      </span>

      <span className="ProjectDesc">
        <p>{project[1].category}</p>
        <p>{project[1].date}</p>
      </span>

      <div className="ProjectItemButton">
        <button>
          <Link
            to={project[1].code_link}
            target="_blank"
          >
            Project Code
          </Link>
        </button>
        <button>
          <Link to={project[1].link} target="_blank">
            Live Project
          </Link>
        </button>
      </div>
    </div>
    )
  })
}
             


            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Projects;
