import React, { useRef, useState } from "react";
import "../styles/Features.css";

function Features() {
  const [feature1, setFeature1] = useState(true);
  const [feature2, setFeature2] = useState(false);
  const [feature3, setFeature3] = useState(false);
  const [feature4, setFeature4] = useState(false);
  const siteMock = useRef(null);

  function handleClick(e) {
    if (e.target.className === "feature1") {
      siteMock.current?.classList.add("fade");
      setTimeout(() => {
        setFeature1(true);
        setFeature2(false);
        setFeature3(false);
        setFeature4(false);
      }, 300);
      setTimeout(() => {
        siteMock.current?.classList.remove("fade");
      }, 600);
    } else if (e.target.className === "feature2") {
      siteMock.current?.classList.add("fade");
      setTimeout(() => {
        setFeature1(false);
        setFeature2(true);
        setFeature3(false);
        setFeature4(false);
      }, 300);
      setTimeout(() => {
        siteMock.current?.classList.remove("fade");
      }, 600);
    } else if (e.target.className === "feature3") {
      siteMock.current?.classList.add("fade");
      setTimeout(() => {
        setFeature1(false);
        setFeature2(false);
        setFeature3(true);
        setFeature4(false);
      }, 300);
      setTimeout(() => {
        siteMock.current?.classList.remove("fade");
      }, 600);
    } else if (e.target.className === "feature4") {
      siteMock.current?.classList.add("fade");
      setTimeout(() => {
        setFeature1(false);
        setFeature2(false);
        setFeature3(false);
        setFeature4(true);
      }, 300);
      setTimeout(() => {
        siteMock.current?.classList.remove("fade");
      }, 600);
    }
  }

  return (
    <div className="features-section" id="platform">
      <h2>Platform Features</h2>
      <div className="features-container">
        <div className="features-menu">
          <div className="features-options-container">
            <div className="features-options">
              <div
                className={feature1 ? "feature1-active" : "feature1"}
                onClick={handleClick}
              >
                <div className="feature-icon1"></div>Macro Trends
              </div>
              <div
                className={feature2 ? "feature-active" : "feature2"}
                onClick={handleClick}
              >
                <div className="feature-icon2"></div>Market Expansion
              </div>
              <div
                className={feature3 ? "feature-active" : "feature3"}
                onClick={handleClick}
              >
                <div className="feature-icon3"></div>Customer Segmentation
              </div>
              <div
                className={feature4 ? "feature-active" : "feature4"}
                onClick={handleClick}
              >
                <div className="feature-icon4"></div>Site Selection
              </div>
              <a href="">Request for a demo</a>
            </div>
          </div>
          <div ref={siteMock} className="site-mockup">
            <img
              style={{ display: feature1 ? "block" : "none" }}
              src={require("../images/Features/site-mockup1.png")}
              alt="macro-trends-mockup"
            />
            <img
              style={{ display: feature2 ? "block" : "none" }}
              src={require("../images/Features/site-mockup2.png")}
              alt="market-expansion-mockup"
            />
            <img
              style={{ display: feature3 ? "block" : "none" }}
              src={require("../images/Features/site-mockup3.png")}
              alt="customer-segmentation-mockup"
            />
            <img
              style={{ display: feature4 ? "block" : "none" }}
              src={require("../images/Features/site-mockup4.png")}
              alt="site-selection-mockup"
            />
            <div className="site-mockup-gradient"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
