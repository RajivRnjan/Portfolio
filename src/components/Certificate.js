import React from 'react'
import { Link } from "react-router-dom";

import certificateData from "./project.json";

import { RiShareBoxFill } from "react-icons/ri";

function Certificate() {
  
  return (
    <>
    
    <div className="CertificationContainer" id="certificate">
            <h4 id="Heading">Certificates</h4>

            <div className="CertificateRow">


              {
                Object.entries(certificateData.certificate).map((certificate)=>{
                  return(
                    <div className="CertificateItem" data-aos="fade-up">
                    <Link
                      to={certificate[1].link}
                      target="_blank"
                    >
                      <img src={certificate[1].img} alt="certificateImg" />
                    </Link>
    
                    <div className="CertificateItemMiddle">
                      <h4>{certificate[1].title}</h4>
                      <h5>{certificate[1].platform}</h5>
                    </div>
    
                    <div className="CertificateItemFooter">
                      <span>{certificate[1].date}</span>
                      <span>
                        <Link
                          to={certificate[1].link}
                          target="_blank"
                        >
                          <RiShareBoxFill className="show-detail-logo"  />
                        </Link>
                      </span>
                    </div>
                  </div>
                  )
                })
              }
             

             

             

           

             

             
            </div>
          </div>
    </>
  )
}

export default Certificate