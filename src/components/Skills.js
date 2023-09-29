import React, { useEffect } from "react";
import AOS from 'aos'
import skillsLogo from "./project.json";

function Skills() {
    useEffect(()=>{
        AOS.init({duration:1500})
    },[]);
  return (
    <>
      <div className="SkillsContainer">
        <div className="SkillsHeader" data-aos="fade-up">
          <h2 id="Heading">Technologies and Tools</h2>
        </div>

        <div className="ToolsContainer">

          {
            Object.entries(skillsLogo.skills).map((skill)=>{
              return(
                <div className="SkillsItem"  data-aos="fade-up">
                <div className="skillLogo">
                  <img src={skill[1].img} alt="htmlLogo" />
                </div>
                <span className="LogoTitle">{skill[1].title}</span>
              </div>
              )
            })
          }

         

          
                 


        </div>
      </div>
    </>
  );
}

export default Skills;
