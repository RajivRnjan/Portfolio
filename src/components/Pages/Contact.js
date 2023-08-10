import {React,useEffect} from "react";
import GetInTouch from "../GetInTouch";


import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
     
    <main>
      <div className="GetInTochMainContainer">
        <section>
       <GetInTouch />
     </section>

      <section>
        <div className="ContactFooterContainer" data-aos="fade-up">
          <p>Feel free to contact Us</p>

          <div className="ContactFooterElement">
            <div>
              <span>
                <MdPhone className="ContactFooterIcon"/>
              </span>
              <p>+91 9693482587</p>
            </div>
            <div>
              <span>
                <MdEmail className="ContactFooterIcon"/>
              </span>
              <p>rajivforyu@gmail.com</p>
            </div>
            <div>
              <span>
                <MdLocationOn className="ContactFooterIcon"/>
              </span>
              <p>Hazaribagh Jharkhand 825301</p>
            </div>
          </div>
        </div>
      </section>
      </div>
      </main>
    </>
  );
}

export default Contact;
