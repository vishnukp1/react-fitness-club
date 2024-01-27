import React, { useState } from "react";
import "./Tostimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";
function Testimonials() {
  const transition = { type: "spring", duration: 3 };
  const [seleted, setSeleted] = useState(0);
  const tlength = testimonialsData.length;

  return (
    <div className="testimonial">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <motion.span
         key={seleted}
         initial={{opacity:0,x:100}}
         animate={{opacity:1,x:0}}
         exit={{opacity:0,x:-100}}
         transition={transition}
        >{testimonialsData[seleted].review}</motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[seleted].name}
          </span>{" "}
          - {testimonialsData[seleted].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div 
         initial={{ opacity: 0, x: -100 }}
         transition={{ ...transition,duration:2 }}
         whileInView={{opacity:1,x:0}}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition,duration:2 }}
          whileInView={{opacity:1,x:0}}
        ></motion.div>
        <motion.img 
        key={seleted}
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:-100}}
        transition={transition}
        src={testimonialsData[seleted].image} alt="" />
        <div className="arrows">
          <img
            onClick={() => {
              seleted === 0
                ? setSeleted(tlength - 1)
                : setSeleted((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              seleted === tlength - 1
                ? setSeleted(0)
                : setSeleted((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
