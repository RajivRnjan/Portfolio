import { React,useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


import { TbDeviceMobile,TbFileCertificate } from 'react-icons/tb'
import {CgWebsite} from 'react-icons/cg';



function Help() {
    const gotoTopWindow = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      };

    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);
  return (
    <>
    
      <section className="WhatdoIhelpTopContainer">
        <div className="leftSectionHelp" data-aos="fade-right">
            <Link to="/projects" onClick={gotoTopWindow} >
            <div className="Item">
                <div className=" ItemIcon ItemIcon1">
                    <CgWebsite size={"40px"} color='white'/>
                </div>
                <div className="ItemDesc">
                    <h3>Website</h3>
                    <p>5+ Project</p>
                </div>
            </div>
            </Link>
            
            <Link to="/projects" onClick={gotoTopWindow} >
            <div className="Item">
                <div className="ItemIcon ItemIcon2">
                    <TbDeviceMobile size={"40px"} color={"white"}/>
                </div>
                <div className="ItemDesc">
                    <h3>Mobile App</h3>
                    <p>1+ Project</p>
                </div>
            </div>
            </Link>
            
            <Link to="/Certificate" onClick={gotoTopWindow}>
            <div className="Item">
                <div className=" ItemIcon ItemIcon3">
                    <TbFileCertificate size={"40px"} color={"white"}/>
                </div>
                <div className="ItemDesc">
                    <h3>Certification</h3>
                    <p>10+ </p>
                </div>
            </div>
            </Link>
            
        </div>

        <div className="rightSectionHelp" data-aos="fade-left">
            <div className="Heading">
                <header>
                <h2 id="Heading">What do I help ?</h2>
                </header>
            </div>
            <div className="desc">
                <p>I make websites that are easy to use, meet the client's needs, and work well even as they grow. I pay close attention to every little thing to make sure they work fast and are reliable.<br/><br/>
                
                With a creative and analytical mindset, I thrive on tackling complex challenges and delivering innovative solutions. Through this website, I invite you to explore my work and learn more about my skills, experiences, and accomplishments.</p>
            </div>

            <div className="Counter">
                <div className="FirstCounter">
                    <h1>15+</h1>
                    <p>Project Complete</p>
                </div>
                <div className="SecondCounter">
                    <h1>20+</h1>
                    <p>Happy Client</p>
                </div>
            </div>
        </div>

      </section>

      
    </>
  )
}

export default Help