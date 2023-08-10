import React, { useEffect } from "react";

import Certificate from "../Certificate";
import College from "../College";

import EducationImg from "../../Images/journey.png";




import AOS from "aos/";
import "aos/dist/aos.css";

function EducationAndCertification() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="EducationAndCertificationMainContainer">
        <section>
          <div className="EducationAndCertificationHeader">
            <div className="Left" data-aos="fade-up">
              <h2 id="Heading">Education Journey</h2>
              <p>
                My education journey has been an exciting and transformative
                path that has shaped my knowledge, skills, and personal growth.
                From the early stages of my academic life to the pursuit of
                higher education, each step has played a crucial role in shaping
                my educational foundation and preparing me for future endeavors.
                <br />
                <br />
                Education Is Not The Learning Of Facts, But The Training Of The
                Mind To Think.
              </p>
              <button>Start Now</button>
            </div>

            <div className="Right">
              <img
                src={EducationImg}
                alt="EducationHeaderImg"
                data-aos="fade-up"
              />
            </div>
          </div>
        </section>

        <section>
         <College />
        </section>

        <section>
          <Certificate />
        </section>
      </div>
    </>
  );
}

export default EducationAndCertification;
