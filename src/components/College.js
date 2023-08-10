import React from 'react'

import npsImg from "../Images/national public school.jpg";
import schoolLogo from "../Images/schoolLogo.jpg";
import iscImg from "../Images/isc.jpg";
import iscLogo from "../Images/isclogo.png";
import vbuImg from "../Images/vbuImg.png";
import vbuLogo from "../Images/vbulogo.jpg";

function College() {
  return (
    <>
     <div className="EducationContainer" data-aos="fade-up">
            <h3>Let's start</h3>

            <section>
              <div className="FirstContainer" data-aos="fade-up">
                <div className="schoolImg">
                  <img src={npsImg} alt="SchoolImg" data-aos="fade-up"/>
                </div>

                <div className="schoolDesc">
                  <div className="SchoolDescHeader">
                    <div className="SchoolLogo">
                      <img src={schoolLogo} alt="schoolLogo" />
                    </div>
                    <div className="SchoolName">
                      <h4>National Public School</h4>
                      <span>10th (2009-2019)</span>
                    </div>
                  </div>
                  <span>CBSE</span>
                  <p>
                  National Public School is a co-education, english medium, senior secondary school, affiliated with CBSE and located at New Area, Hazaribagh, Jharkhand. The school was established in 1977 and managed by Laxman Kaushaliya Chandravansi Memorial Educational Society.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="SecondContainer" data-aos="fade-up">
                <div className="schoolImg">
                  <img src={iscImg} alt="clgImg" data-aos="fade-up"/>
                </div>

                <div className="schoolDesc">
                  <div className="SchoolDescHeader">
                    <div className="SchoolLogo">
                      <img src={iscLogo} alt="iscLogo" />
                    </div>
                    <div className="SchoolName">
                      <h4>Inter Science College</h4>
                      <span>12th (2019-2021)</span>
                    </div>
                  </div>
                  <span>JAC - SCIENCE</span>
                  <p>
                  INTER SCIENCE COLLEGE HAZARIBAG is located in Rural area of Jharkhand state/ut of India. In Ward No.01 area of Hazaribagh block of Hazaribag district. The year of establishment of Inter Science College is 2005. Inter Science College is a Co-Educational school.  It is a Sr. Secondary School (Class 11-12), where lowest class is 11th and highest class is 12th.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="ThirdContainer" data-aos="fade-up">
                <div className="schoolImg">
                  <img src={vbuImg} alt="vbumcaImg" data-aos="fade-up"/>
                </div>

                <div className="schoolDesc">
                  <div className="SchoolDescHeader">
                    <div className="SchoolLogo">
                      <img src={vbuLogo} alt="schoolLogo" />
                    </div>
                    <div className="SchoolName">
                      <h4>University Department Of Computer Application</h4>
                      <span>UG (2021-2024)</span>
                    </div>
                  </div>
                  <span>VBU - BCA</span>
                  <p>
                    University Department of Computer Application of Vinoba Bhave University is  First AICTE approved department in the Jharkhand. The Year of Establishment is 2007. Vinoba Bhave University is funded by the agencies of Government of India and Jharkhand State. 
                  </p>
                </div>
              </div>
            </section>
          </div>
    </>
  )
}

export default College