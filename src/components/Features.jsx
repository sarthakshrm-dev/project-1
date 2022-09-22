import React, { useRef, useState } from "react";
import DemoForm from "./DemoForm";
import "../styles/Features.css";

function Features() {
  const [feature, setFeature] = useState(1);
  const [image, setImage] = useState(1)
  const [demo, setDemo] = useState(false);
  const siteMock = useRef(null);

  function demoForm() {
    setDemo(true);
  }

  function handleClick(e) {
    if (e.target.className === "feature1") {
      siteMock.current?.classList.add("fade");
      setFeature(1)
      setTimeout(() => {
        setImage(1)
      }, 300);
      setTimeout(() => {
        siteMock.current?.classList.remove("fade");
      }, 600);
    } else if (e.target.className === "feature2") {
      siteMock.current?.classList.add("fade");
      setFeature(2)
      setTimeout(() => {
        setImage(2)
      }, 300);
      setTimeout(() => {
        siteMock.current?.classList.remove("fade");
      }, 600);
    } else if (e.target.className === "feature3") {
      siteMock.current?.classList.add("fade");
      setFeature(3)
      setTimeout(() => {
        setImage(3)
      }, 300);
      setTimeout(() => {
        siteMock.current?.classList.remove("fade");
      }, 600);
    } else if (e.target.className === "feature4") {
      siteMock.current?.classList.add("fade");
      setFeature(4)
      setTimeout(() => {
        setImage(4)
      }, 300);
      setTimeout(() => {
        siteMock.current?.classList.remove("fade");
      }, 600);
    }
  }

  return (
    <>
      <div className="features-section" id="platform">
        <h2>Platform Features</h2>
        <div className="features-container">
          <div className="features-menu">
            <div className="features-options-container">
              <div className="features-options">
                <div
                  className={feature===1 ? "feature1-active" : "feature1"}
                  onClick={handleClick}
                >
                  <div className="feature-icon1"></div>Macro Trends
                </div>
                <div
                  className={feature===2 ? "feature-active" : "feature2"}
                  onClick={handleClick}
                >
                  <div className="feature-icon2"></div>Market Expansion
                </div>
                <div
                  className={feature===3 ? "feature-active" : "feature3"}
                  onClick={handleClick}
                >
                  <div className="feature-icon3"></div>Customer Segmentation
                </div>
                <div
                  className={feature===4 ? "feature-active" : "feature4"}
                  onClick={handleClick}
                >
                  <div className="feature-icon4"></div>Site Selection
                </div>
                <button onClick={demoForm}>Request for a demo</button>
              </div>
            </div>
            <div ref={siteMock} className="site-mockup">
              <img
                style={{ display: image===1 ? "block" : "none" }}
                src={require("../images/Features/site-mockup1.png")}
                alt="macro-trends-mockup"
              />
              <img
                style={{ display: image===2 ? "block" : "none" }}
                src={require("../images/Features/site-mockup2.png")}
                alt="market-expansion-mockup"
              />
              <img
                style={{ display: image===3 ? "block" : "none" }}
                src={require("../images/Features/site-mockup3.png")}
                alt="customer-segmentation-mockup"
              />
              <img
                style={{ display: image===4 ? "block" : "none" }}
                src={require("../images/Features/site-mockup4.png")}
                alt="site-selection-mockup"
              />
              <div className="site-mockup-gradient"></div>
            </div>
          </div>
        </div>
      </div>
      {demo && <DemoForm setDemo={setDemo} />}
    </>
  );
}

export default Features;
