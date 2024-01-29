import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whitetick from "../../assets/whiteTick.png";

function Plans() {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>{plan.price}</span>
            <div className="features">
              {plan.features.map((features, i) => (
                <div className="feature">
                  <img src={whitetick} alt="" />
                  <span key={i}>{features}</span>
                </div>
              ))}
            </div>

            <div>
              {" "}
              <span>See more benefits {"->"}</span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
