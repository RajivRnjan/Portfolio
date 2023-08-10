import {React,useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import Img1 from "../Images/image1.jpg";
import Img2 from "../Images/image2.jpg";
import Img3 from "../Images/image3.jpg";
import Img4 from "../Images/image4.jpg";
function MyWork() {

  const gotoTopWindow = ()=>{
    window.scrollTo({top:0,left:0,behavior:"smooth"})
  }
 
  useEffect(()=>{
    AOS.init({duration:2000})
  },[]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
    <section>
      <div className="MyWorkContainer" data-aos="fade-up">
        <div className="MyWorkHeader">
          <div className="Heading">
            <header>
            <h1 id="Heading">My Latest Work</h1>
            </header>
          </div>
          <div className="ExploreMore">
            <Link to ="/projects" onClick={gotoTopWindow}><h2>EXPLORE WORK</h2></Link>
          </div>
        </div>
        <Carousel
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          className="MyWorkCarousel"
          responsive={responsive}
        >
          <img src={Img1} alt="Img1" />
          <img src={Img2} alt="Img2" />
          <img src={Img3} alt="Img3" />
          <img src={Img4} alt="Img4" />
        </Carousel>
        
      </div>
      </section>
    </>
  );
}

export default MyWork;
