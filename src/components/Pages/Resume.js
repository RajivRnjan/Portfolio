import { React, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";

function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { ref: htmlRef, inView: htmlIsVisible } = useInView();
  const { ref: javascriptRef, inView: javascriptIsVisible } = useInView();
  const { ref: reactjsRef, inView: reactjsIsVisible } = useInView();
  const { ref: phpRef, inView: phpIsVisible } = useInView();

  const { ref: communicationRef, inView: communicationIsVisible } = useInView();
  const { ref: logicRef, inView: logicIsVisible } = useInView();
  const { ref: problemRef, inView: problemIsVisible } = useInView();

  return (
    <>
      <section className="ResumeContainer">
        <header>
          <h1 id="Heading" className="resume">
            Resume
          </h1>
        </header>

        <section data-aos="fade-up">
          <div className="TopLevelResumeContainer">
            <div className="topLeftmostResumeContainer">
              <div className="topLeftmostResumeContainerHeading">
                <h2>Education</h2>
              </div>
              <div className="topLeftResumeContainer">
                <span class="sideLine" data-aos="fade-up"></span>
                <div className="EducationItem" data-aos="fade-up">
                  <h4>Matriculation</h4>
                  <span className="date">2019</span>
                  <span>CBSE</span>
                  <div className="EduacationDesc">
                    <ul>
                      <li>National Public School, Hazaribagh</li>
                      <li>86.6%</li>
                    </ul>
                  </div>
                </div>

                <span class="sideLine" data-aos="fade-up"></span>
                <div className="EducationItem" data-aos="fade-up">
                  <h4>Intermediate</h4>
                  <span className="date">2021</span>
                  <span>JAC</span>
                  <div className="EduacationDesc">
                    <ul>
                      <li>Inter Sciecne College, Hazaribagh</li>
                      <li>PCM</li>
                      <li>84%</li>
                    </ul>
                  </div>
                </div>

                <span class="sideLine" data-aos="fade-up"></span>
                <div className="EducationItem" data-aos="fade-up">
                  <h4>Graduation</h4>
                  <span className="date">2024</span>
                  <span>VBU</span>
                  <div className="EduacationDesc">
                    <ul>
                      <li>
                        Universtiy Department of Computer Application <br />{" "}
                        Vinoba Bhave University
                      </li>
                      <li>BCA</li>
                      <li>8.3 SGPA</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="topRightmostResumeContainer">
              <div className="topRightmostResumeContainerHeading">
                <h2>Experience</h2>
              </div>
              <div className="topRightResumeContainer" data-aos="fade-up">
                <span class="sideLine" data-aos="fade-up"></span>
                <div className="ExperienceItem" data-aos="fade-up">
                  <h4>Frontend-Developer</h4>
                  <span className="date">2 year</span>
                  <span>REACT JS</span>
                  <p className="ExperienceDesc">
                    <ul>
                      <li>2 year as Freelance Frontend Developer</li>
                      <li>
                        I have done several projects as individual and
                        collaborative based on React js.
                      </li>
                     
                     
                    </ul>
                  </p>
                </div>

                <span class="sideLine" data-aos="fade-up"></span>
                <div className="ExperienceItem" data-aos="fade-up">
                  <h4>Open Source Contribution</h4>
                  <span className="date">2 month</span>
                  <span>SSOC</span>
                  <p className="ExperienceDesc">
                    <ul>
                      <li>Successfully merged several branch on github</li>
                      
                      <li>Still working as Open Source Contributer</li>
                    </ul>
                  </p>
                </div>

                <span class="sideLine" data-aos="fade-up"></span>
                <div className="ExperienceItem" data-aos="fade-up">
                  <h4>Graphics Designer</h4>
                  <span className="date">2 year</span>
                  <span>CANVA</span>
                  <p className="ExperienceDesc">
                    <ul>
                      <li>
                        Created 3D models, renderings and video animations. 
                      </li>
                      <li>Produced drawing and layouts and assisted clients throughout the projects.</li>
                      <li>
                        Participated in all phase of the design and construction
                        process on projects.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bottomResumeContainer">
            <div className="bottomLeftResumeContainer" data-aos="fade-up">
              <h2>Coding Skills</h2>

              <div className="progress">
                <span>HTML/CSS</span>
                <span>90%</span>
              </div>
              <div
                className="progressvaluecontainer"
                ref={htmlRef}
                id=" progressvaluecontainer1"
              >
                <div
                  className={`progressvalueHtml ${
                    htmlIsVisible ? "animateLoadHtml" : ""
                  } `}
                ></div>
              </div>

              <div className="progress">
                <span>JavaScript</span>
                <span>80%</span>
              </div>
              <div className="progressvaluecontainer" ref={javascriptRef}>
                <div
                  className={`progressvalueJavascript ${
                    javascriptIsVisible ? "animateLoadJavascript" : ""
                  } `}
                ></div>
              </div>

              <div className="progress">
                <span>ReactJs</span>
                <span>60%</span>
              </div>
              <div className="progressvaluecontainer" ref={reactjsRef}>
                <div
                  className={`progressvalueReactjs ${
                    reactjsIsVisible ? "animateLoadReactjs" : ""
                  } `}
                ></div>
              </div>

              <div className="progress">
                <span>Php</span>
                <span>75%</span>
              </div>
              <div className="progressvaluecontainer" ref={phpRef}>
                <div
                  className={`progressvaluePhp ${
                    phpIsVisible ? "animateLoadPhp" : ""
                  } `}
                ></div>
              </div>
            </div>

            <div className="bottomRightResumeContainer" data-aos="fade-up">
              <h2>Other Skills</h2>
              <div className="circularProgressBarContainer">
                <div
                  className="circularprogress"
                  data-aos="zoom-in"
                  ref={communicationRef}
                >
                  <div className="outerCircle">
                    <div className="innerCircle">
                      <div id="number">80%</div>
                      <div id="skill">Communication</div>
                    </div>
                  </div>

                  <svg
                    className="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#12c54b" />
                        <stop offset="100%" stop-color="#0a622c" />
                      </linearGradient>
                    </defs>
                    <circle
                      className={`circle1 ${
                        communicationIsVisible ? "animateCommunication" : ""
                      } `}
                      cx="80"
                      cy="80"
                      r="70"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>

                <div
                  className="circularprogress"
                  data-aos="zoom-out"
                  ref={logicRef}
                >
                  <div className="outerCircle">
                    <div className="innerCircle">
                      <div id="number">70%</div>
                      <div id="skill">Logic</div>
                    </div>
                  </div>

                  <svg
                    className="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle
                      className={`circle2 ${
                        logicIsVisible ? "animateLogic" : ""
                      } `}
                      cx="80"
                      cy="80"
                      r="70"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>

                <div
                  className="circularprogress"
                  data-aos="zoom-in"
                  ref={problemRef}
                >
                  <div className="outerCircle">
                    <div className="innerCircle">
                      <div id="number">75%</div>
                      <div id="skill">Problem Solving</div>
                    </div>
                  </div>

                  <svg
                    className="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle
                      className={`circle3 ${
                        problemIsVisible ? "animateProblem" : ""
                      } `}
                      cx="80"
                      cy="80"
                      r="70"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Resume;
