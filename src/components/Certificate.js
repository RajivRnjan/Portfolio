import React from 'react'
import { Link } from "react-router-dom";

import LinkedIn from "../Images/LinkedIn.png";
import GreatLearning from "../Images/greatLearning.png";
import FreeCodeCamp from "../Images/FreeCodeCamp.png";

import { RiShareBoxFill } from "react-icons/ri";

function Certificate() {
  
  return (
    <>
    
    <div className="CertificationContainer" id="certificate">
            <h4 id="Heading">Certificates</h4>

            <div className="CertificateRow">
              <div className="CertificateItem" data-aos="fade-up">
                <Link
                  to="https://www.linkedin.com/learning/certificates/103f390627775ac646db9b9f96e0416c0d8657b50ea8d42643c29ada4c1cdace"
                  target="_blank"
                >
                  <img src={LinkedIn} alt="certificateImg" />
                </Link>

                <div className="CertificateItemMiddle">
                  <h4>React.js Essential Training</h4>
                  <h5>- LinkedIN</h5>
                </div>

                <div className="CertificateItemFooter">
                  <span>11th April 2023</span>
                  <span>
                    <Link
                      to="https://www.linkedin.com/learning/certificates/103f390627775ac646db9b9f96e0416c0d8657b50ea8d42643c29ada4c1cdace"
                      target="_blank"
                    >
                      <RiShareBoxFill className="show-detail-logo"  />
                    </Link>
                  </span>
                </div>
              </div>

              <div className="CertificateItem" data-aos="fade-up">
                <Link
                  to="https://www.freecodecamp.org/certification/fccb65a6b09-5d56-4634-9f0f-a90694dc30f3/responsive-web-design"
                  target="_blank"
                >
                  <img
                    src={FreeCodeCamp}
                    alt="certificateImg"
                  />
                </Link>

                <div className="CertificateItemMiddle">
                  <h4>Responsive Web Design</h4>
                  <h5>- FreeCodeCamp</h5>
                </div>

                <div className="CertificateItemFooter">
                  <span>19th Jan 2023</span>
                  <span>
                    <Link
                      to="https://www.freecodecamp.org/certification/fccb65a6b09-5d56-4634-9f0f-a90694dc30f3/responsive-web-design"
                      target="_blank"
                    >
                      <RiShareBoxFill className="show-detail-logo" />
                    </Link>
                  </span>
                </div>
              </div>

              <div className="CertificateItem" data-aos="fade-up">
                <Link
                  to="https://www.linkedin.com/learning/certificates/43aa9ca58fbd35543038e084879024201effc3b3c9609a570c124f5343929664"
                  target="_blank"
                >
                  <img
                    src={LinkedIn}
                    alt="certificateImg"
                  />
                </Link>

                <div className="CertificateItemMiddle">
                  <h4>HTML Essential Training</h4>
                  <h5>- LinkedIN</h5>
                </div>

                <div className="CertificateItemFooter">
                  <span>11th Dec 2022</span>
                  <span>
                    <Link
                      to="https://www.linkedin.com/learning/certificates/43aa9ca58fbd35543038e084879024201effc3b3c9609a570c124f5343929664"
                      target="_blank"
                    >
                      <RiShareBoxFill className="show-detail-logo" />
                    </Link>
                  </span>
                </div>
              </div>

              <div className="CertificateItem" data-aos="fade-up">
                <Link
                  to="https://www.linkedin.com/learning/certificates/658665b4f1c988e82c0a1cba378244d7dfc21ea8ff7f2689b2eff318ff254ef4"
                  target="_blank"
                >
                  <img
                    src={LinkedIn}
                    alt="certificateImg"
                  />
                </Link>

                <div className="CertificateItemMiddle">
                  <h4>PHP Essential Training</h4>
                  <h5>- LinkedIN</h5>
                </div>

                <div className="CertificateItemFooter">
                  <span>27 Dec 2022</span>
                  <span>
                    <Link
                      to="https://www.linkedin.com/learning/certificates/658665b4f1c988e82c0a1cba378244d7dfc21ea8ff7f2689b2eff318ff254ef4"
                      target="_blank"
                    >
                      <RiShareBoxFill className="show-detail-logo" />
                    </Link>
                  </span>
                </div>
              </div>

              <div className="CertificateItem" data-aos="fade-up">
                <Link
                  to="https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/658436/original/Rajiv_Ranjan20220101-15160-1xepsj6.jpg" target="_blank"
                >
                  <img
                    src={GreatLearning}
                    alt="certificateImg"
                  />
                </Link>

                <div className="CertificateItemMiddle">
                  <h4>C for Beginners</h4>
                  <h5>- Great Learning</h5>
                </div>

                <div className="CertificateItemFooter">
                  <span>Jan 2022</span>
                  <span>
                    <Link
                      to="https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/658436/original/Rajiv_Ranjan20220101-15160-1xepsj6.jpg"
                      target="_blank"
                    >
                      <RiShareBoxFill className="show-detail-logo" />
                    </Link>
                  </span>
                </div>
              </div>

              <div className="CertificateItem" data-aos="fade-up">
                <Link
                  to="https://www.linkedin.com/learning/certificates/150df6a2f3bc40daf20f08d78ae16b28913a19ece16e7cdded3464155e7bcfa5"
                  target="_blank"
                >
                  <img
                     src={LinkedIn}
                    alt="certificateImg"
                  />
                </Link>

                <div className="CertificateItemMiddle">
                  <h4>SQL Essential Training</h4>
                  <h5>- LinkedIN</h5>
                </div>

                <div className="CertificateItemFooter">
                  <span>26 Dec 2022</span>
                  <span>
                    <Link
                      to="https://www.linkedin.com/learning/certificates/150df6a2f3bc40daf20f08d78ae16b28913a19ece16e7cdded3464155e7bcfa5"
                      target="_blank"
                    >
                      <RiShareBoxFill className="show-detail-logo" />
                    </Link>
                  </span>
                </div>
              </div>

              <div className="CertificateItem" data-aos="fade-up">
                <Link
                  to="https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/654919/original/Rajiv_Ranjan20211231-19143-iev0vv.jpg"
                  target="_blank"
                >
                  <img
                     src={GreatLearning}
                    alt="certificateImg"
                  />
                </Link>

                <div className="CertificateItemMiddle">
                  <h4>Introduction to digital marketing</h4>
                  <h5>- Great Learning</h5>
                </div>

                <div className="CertificateItemFooter">
                  <span>Dec 2021</span>
                  <span>
                    <Link
                      to="https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/654919/original/Rajiv_Ranjan20211231-19143-iev0vv.jpg"
                      target="_blank"
                    >
                      <RiShareBoxFill className="show-detail-logo" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Certificate