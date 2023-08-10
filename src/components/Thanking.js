import {React,useEffect} from 'react'
import AOS from 'aos'
import human from "../Images/human.png";



function Thanking() {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[]);
  return (
    <>
    <section>
        <div className="thankingContainer"  data-aos="fade-up">
        <p>
          Thank you for visiting my portfolio website! I hope this glimpse into
          my skills and experiences has provided you with a better understanding
          of how I can add value to your projects. If you have any inquiries or
          would like to discuss potential collaborations, please don't hesitate
          to reach out. I look forward to connecting with you soon!
        </p>
        
        
        <div className="humanImage">
          <img className="human" src={human} alt="human" />
        </div>
    </div>
    </section>
    </>
  )
}

export default Thanking