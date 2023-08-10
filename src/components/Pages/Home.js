import { React, useEffect } from "react";

import HeroSection from "../HeroSection";
import Help from "../Help";
import MyJourney from "../MyJourney";
import MyWork from "../MyWork";
import Skills from "../Skills";
import GetInTouch from "../GetInTouch";
import Thanking from "../Thanking";

import AOS from "aos";
import "aos/dist/aos.css";


function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <HeroSection />
      <Help />
      <MyJourney />
      <MyWork />
      <Skills/>
      <div className="GetInTochMainContainer">
        <GetInTouch />
      </div>
      <Thanking/>

     

      
      
       
    </>
  );
}

export default Home;
