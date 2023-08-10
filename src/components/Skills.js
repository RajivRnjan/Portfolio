import React, { useEffect } from "react";
import AOS from 'aos'
import BootstrapLogo from "../Images/skillsLogo/Bootstrap.svg";
import csharpLogo from "../Images/skillsLogo/csharp.svg";
import CplusLogo from "../Images/skillsLogo/c++.png";
import cssLogo from "../Images/skillsLogo/css.svg";
import gitLogo from "../Images/skillsLogo/git.svg";
import githubLogo from "../Images/skillsLogo/github.svg";
import htmlLogo from "../Images/skillsLogo/html.svg";
import javaLogo from "../Images/skillsLogo/java.svg";
import javascriptLogo from "../Images/skillsLogo/javascript.svg";
import mysqlLogo from "../Images/skillsLogo/mysql.svg";
import phpLogo from "../Images/skillsLogo/php.png"
import postmanLogo from "../Images/skillsLogo/postman.svg";
import reactLogo from "../Images/skillsLogo/react.svg";
import sassLogo from "../Images/skillsLogo/Sass.svg";

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

          <div className="SkillsItem"  data-aos="fade-up">
            <div className="skillLogo">
              <img src={htmlLogo} alt="htmlLogo" />
            </div>
            <span className="LogoTitle">Html</span>
          </div>

          
          <div className="SkillsItem"  data-aos="fade-up">
            <div className="skillLogo">
              <img src={cssLogo} alt="cssLogo" />
            </div>
            <span className="LogoTitle">CSS</span>
          </div>

          <div className="SkillsItem"  data-aos="fade-up">
            <div className="skillLogo">
              <img src={javascriptLogo} alt="javascriptLogo" />
            </div>
            <span className="LogoTitle">JavaScript</span>
          </div>

          <div className="SkillsItem"  data-aos="fade-up">
            <div className="skillLogo">
              <img src={reactLogo} alt="reactLogo" />
            </div>
            <span className="LogoTitle">React js</span>
          </div>

          <div className="SkillsItem"  data-aos="fade-up">
            <div className="skillLogo">
              <img src={csharpLogo} alt="csharpLogo" />
            </div>
            <span className="LogoTitle">C#</span>
          </div>

          <div className="SkillsItem"  data-aos="fade-up">
            <div className="skillLogo">
              <img src={javaLogo} alt="javaLogo" />
            </div>
            <span className="LogoTitle">Java</span>
          </div>

          <div className="SkillsItem"  data-aos="fade-up">
            <div className="skillLogo">
              <img src={mysqlLogo} alt="mysqlLogo" />
            </div>
            <span className="LogoTitle">MySql</span>
          </div>

          <div className="SkillsItem"  data-aos="fade-up">
            <div className="skillLogo">
              <img src={BootstrapLogo} alt="BootstrapLogo" />
            </div>
            <span className="LogoTitle">Bootstrap</span>
          </div>

          <div className="SkillsItem"  data-aos="fade-up">
            <div className="skillLogo">
              <img src={postmanLogo} alt="postmanLogo" />
            </div>
            <span className="LogoTitle">PostMan</span>
          </div>

          <div className="SkillsItem"  data-aos="fade-up">
            <div className="skillLogo">
              <img src={githubLogo} alt="githubLogo" />
            </div>
            <span className="LogoTitle">Github</span>
          </div>

          <div className="SkillsItem"  data-aos="fade-up">
            <div className="skillLogo">
              <img src={CplusLogo} alt="CplusLogo" />
            </div>
            <span className="LogoTitle">C++</span>
          </div>

          <div className="SkillsItem"  data-aos="fade-up">
            <div className="skillLogo">
              <img src={gitLogo} alt="gitLogo" />
            </div>
            <span className="LogoTitle">Git</span>
          </div>

          

          <div className="SkillsItem"  data-aos="fade-up">
            <div className="skillLogo">
              <img src={sassLogo} alt="sassLogo" />
            </div>
            <span className="LogoTitle">Sass</span>
          </div>

          <div className="SkillsItem"  data-aos="fade-up">
            <div className="skillLogo">
              <img src={phpLogo} alt="phpLogo" />
            </div>
            <span className="LogoTitle">Php</span>
          </div>


        </div>
      </div>
    </>
  );
}

export default Skills;
