import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Rajiv from "../Images/Rajiv.png";

function HeroSection() {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<>
			<main>
				<section>
					<div className="HeroContainer" data-aos="fade-left">
						<div className="LeftHeroContainer">
							<div className="HeroTitle">
								<div className="Heading">
									<span>Hi, this is </span>
									<br />
									<h1>Rajiv Ranjan</h1>
								</div>
								<div className="OurPosition">
									<h2>Frontend developer</h2>
								</div>
							</div>
							<div className="Description">
								<p>
									I'm a WebDeveloper with learing experience of 2 year.
									Currently pursing BCA from Vinoba Bhave University. I am very
									passionate about improving my coding skill & developing
									website and applications.
									<br />
									<br />
									Working for myself to imporve my skills.
								</p>

								<div className="HeroSectionButton">
									<button className="HeroSectionButton1">
										<Link
											to="https://drive.google.com/file/d/1s4_uyZfI4pCGoYQBmLJlWaGFINIgPr6C/view?usp=sharing"
											target="_blank"
										>
											Download CV
										</Link>
									</button>
									<Link to="/contact">
										<button className="HeroSectionButton2">Contact</button>
									</Link>
									<Link to="/contact"></Link>
								</div>
							</div>
						</div>

						<div className="RightHeroContainer">
							<img src={Rajiv} alt="OurImage" />
						</div>
					</div>

					{/* <div className="HeroContainer" data-aos="fade-left">
            <div className="LeftHeroContainer">
              <div className="RightHeroIntro">
                <div className="Heading">
                  <span>Hi, my name is </span>
                  <br />
                  <h1>Rajiv Ranjan</h1>
                </div>
                <div className="OurPosition">
                  <h2>Frontend developer</h2>
                </div>
              </div>
              <div className="Description">
                <p>
                  I'm a WebDeveloper with learing experience of 1 year.
                  Currently pursing BCA from Vinoba Bhave University. I am very
                  passionate about improving my coding skill & developing
                  website and applications.
                  <br />
                  <br />
                  Working for myself to imporve my skills.
                </p>
              </div>
              <div className="HeroSectionButton">
                <button className="HeroSectionButton1">Download CV</button>
                <a href="#getintouch">
                  <button className="HeroSectionButton2">Contact</button>
                </a>
                {/* <Link to="/contact"></Link> */}
					{/* </div>
            </div>

            <div className="RightHeroContainer">
              <div className="Image">
                <img src={Rajiv} alt="OurImage" />
              </div>
            </div>
          </div> */}
				</section>
			</main>
		</>
	);
}

export default HeroSection;
