import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

import {motion} from "framer-motion"


function Hero() {
  const transition = {type:"spring" , duration : 3}
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          {" "}
          <motion.div 
          initial={{left:"238px"}}
          whileInView={{left:"8px"}}
          transition={{...transition,type:"tween"}}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span> <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>

          <div>
            In here we will help you to shape and build your Ideal live up your
            life to fullest
          </div>
         
        </div>
        <div className="figures">
            <div>
              <span>+140</span>
              <span>expert caochs</span>
            </div>
            <div>
              <span>+978</span>
              <span>members joined</span>
            </div> <div>
              <span>+50</span>
              <span>fitness programs</span>
            </div>
          </div>
          <div className="hero-buttons">
            <buttons className="btn">Get Started</buttons>
            <buttons className="btn">Learn More</buttons>
          </div>
      </div>
      
      <div className="right-h">
       <button className="btn">Join Now</button>
       <motion.div
       initial={{right: "-1rem"}}
       whileInView={{right:"4rem"}}
       transition={transition}
       className="heart-rate">
        <img src={heart} alt="" />
        <span>Heart Rate</span><span>116 bpm</span>
       </motion.div>
       <img src={hero_image} alt="" className="hero-image" />
     <motion.img initial={{right:"11rem"}}
     whileInView={{right:"20rem"}}
     transition={transition}
     src={hero_image_back} alt="" className="hero-image-back" />
      </div>
      <motion.div
      initial={{right:"37rem"}}
      whileInView={{right:"28rem"}}
      transition={transition}
      className="calories">
        <img src={calories} alt="" />
        <div>
        <span>Calories Burned</span><span>220 kcal</span>
        </div>
       

      </motion.div>
    </div>
  );
}

export default Hero;
