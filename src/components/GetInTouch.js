import React from 'react'
import { Link } from "react-router-dom";
import contactImg from "../Images/contact-us.jpg";
import {
  BsFillPeopleFill,
  BsPenFill,
  BsGithub,
  BsTwitter,
} from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import {  MdEmail } from "react-icons/md";


function GetInTouch() {
  return (
    <>
     
        <div  className="GetInTouch" id="getintouch" >
          <div className="left_container" data-aos="fade-up">
            <h2 id="Heading">Get In Touch</h2>
            <p>We are there for you! How can I help?</p>

            <form method="post" action="mailto:rajivforyu@gmail.com">
            {/* <form method="post" action="https://github.us8.list-manage.com/subscribe/post?u=7b7a766ccf7058cfb230b1f4e&amp;id=936f84fabf&amp;f_id=009e70e0f0"> */}
              <div className="inputContainer" data-aos="fade-right">
                <BsFillPeopleFill size="1.4rem"/>
                <input type="text" name="NAME" placeholder="Enter your Name" required/>
              </div>

              <div className="inputContainer" data-aos="fade-right">
                <MdEmail size="1.4rem" />
                <input type="email" name="EMAIL" placeholder="Enter Email" required/>
              </div>

              <div className="inputContainer" data-aos="fade-right">
                <BsPenFill size="1.4rem" />
                <textarea name="MESSAGE" placeholder="Write something about your query" required></textarea>
              </div>
              <button type="submit"  value="Send" name="submit" id="mc-embedded-subscribe" >Send</button>
             
            </form>          


          </div>


          <div className="right_container" >
            <img src={contactImg} alt="contactimage" data-aos="fade-down"/>
            <div className="socialIcon" >
              <ul>
                
                <span>
                  <li data-aos="fade-right">
                    <Link to="https://www.linkedin.com/in/rajiv-ranjan-5b6733227/" target="_blnak">
                    <GrLinkedin className="LinkedinIcon"
                      size={"30px"}
                      
                    /></Link>
                  </li>
                </span>

                <span>
                  <li data-aos="fade-up">
                    <Link to="https://github.com/RajivRnjan" target="_blank">
                    <BsGithub className="GithubIcon" size={"35px"} />
                    </Link>
                  </li>
                </span>

                <span>
                  <li data-aos="fade-left">
                  <Link to="https://twitter.com/rajiv_ranjan_1?t=JhwP7fOpEzXk2GXDXYHuNw&s=08" target="_blank">
                    <BsTwitter className="twitterIcon" size={"35px"}  />
                    </Link>
                  </li>
                </span>
              </ul>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default GetInTouch