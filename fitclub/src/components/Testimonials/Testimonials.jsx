import React, { useState } from "react";
import "./Tostimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

function Testimonials() {
  const [seleted, setSeleted] = useState(0);
  const tlength = testimonialsData.length;

  return (
    <div className="testimonial">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{testimonialsData[seleted].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[seleted].name}
          </span>{" "}
          - {testimonialsData[seleted].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[seleted].image} alt="" />
        <div className="arrows">
          <img
            src={leftArrow}
            alt=""
          />
          <img src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;