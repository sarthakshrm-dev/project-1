import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Solutions.css";
import { useRef } from "react";
import { useState } from "react";
// gsap.registerPlugin(ScrollTrigger);

function KnowMore() {
  const solutionsContainer = useRef(null);
  const [solutions, setSolutions] = useState(1);
  const map = useRef();
  const pin1 = useRef();
  const pin2 = useRef();
  const pin3 = useRef();

  useEffect(() => {
    window.addEventListener("scroll", moveSlide);
  }, []);

  const moveSlide = () => {
    let postionDiv = solutionsContainer.current?.getBoundingClientRect();
    let scrollDiv = solutionsContainer.current.querySelector(
      ".solutionsSlideWrap"
    );
    let scrollHeight = postionDiv.height / 7;
    let slideHeight =
      solutionsContainer.current.querySelector(
        ".solutions-content"
      ).clientHeight;

    if (postionDiv?.top * -1 > scrollHeight * 5) {
      scrollDiv.style.transform = `translateY(-${slideHeight * 5}px)`;
      pin1.current.style.top='19%'
      pin1.current.style.right='76%'
      pin2.current.style.top='55%'
      pin2.current.style.right='38%'
      pin3.current.style.top='25%'
      pin3.current.style.right='40%'
      setSolutions(6);
    } else if (postionDiv?.top * -1 > scrollHeight * 4) {
      scrollDiv.style.transform = `translateY(-${slideHeight * 4}px)`;
      pin1.current.style.top='52%'
      pin1.current.style.right='29%'
      pin2.current.style.top='21%'
      pin2.current.style.right='38%'
      pin3.current.style.top='40%'
      pin3.current.style.right='57%'
      setSolutions(5);
    } else if (postionDiv?.top * -1 > scrollHeight * 3) {
      scrollDiv.style.transform = `translateY(-${slideHeight * 3}px)`;
      pin1.current.style.top='27%'
      pin1.current.style.right='29%'
      pin2.current.style.top='21%'
      pin2.current.style.right='56%'
      pin3.current.style.top='51%'
      pin3.current.style.right='42%'
      setSolutions(4);
    } else if (postionDiv?.top * -1 > scrollHeight * 2) {
      scrollDiv.style.transform = `translateY(-${slideHeight * 2}px)`;
      pin1.current.style.top='54%'
      pin1.current.style.right='29%'
      pin2.current.style.top='29%'
      pin2.current.style.right='64%'
      pin3.current.style.top='16%'
      pin3.current.style.right='42%'
      setSolutions(3);
    } else if (postionDiv?.top * -1 > scrollHeight) {
      scrollDiv.style.transform = `translateY(-${slideHeight}px)`;
      pin1.current.style.top='36%'
      pin1.current.style.right='54%'
      pin2.current.style.top='13%'
      pin2.current.style.right='50%'
      pin3.current.style.top='38%'
      pin3.current.style.right='34%'
      setSolutions(2);
    } else {
      scrollDiv.style.transform = `translateY(0px)`;
      pin1.current.style.top='12%'
      pin1.current.style.right='40%'
      pin2.current.style.top='35%'
      pin2.current.style.right='50%'
      pin3.current.style.top='50%'
      pin3.current.style.right='26%'
      setSolutions(1);
    }
  };

  return (
    <div ref={solutionsContainer} className="solutions-section" id="solutions">
      <div className="solutions-sticky">
        <h2 className="solutions-heading">Our Solutions</h2>
        <div className="solutions-content-container">
          <div className="solutions-content-animation">
            <div className="solutionsSlideWrap">
              <div className="solutions-content">
                <h2>Identify growth markets</h2>
                <ul className="IGM">
                  <li>
                    Confidently explore new geographies to expand, backed by
                    extensive market data.
                  </li>
                  <li>
                    Identify growth hotspots to open new retail outlets or
                    distributor tie-ups.
                  </li>
                  <li>
                    Compare market metrics and consumption behaviour across many
                    markets.
                  </li>
                </ul>
              </div>
              <div className="solutions-content">
                <h2>Identify target audience</h2>
                <ul className="IGM">
                  <li>
                    Explore 100s of detailed customer segments to determine the
                    ideal audience.
                  </li>
                  <li>
                    Match your ideal customer segments to potential candidate
                    locations.
                  </li>
                  <li>
                    Explore customer segments based on socioeconomic attributes
                    & smartphone usage.
                  </li>
                </ul>
              </div>
              <div className="solutions-content">
                <h2>Optimize existing retail portfolio</h2>
                <ul className="IGM">
                  <li>
                    Achieve maximum sales push from existing markets by adding
                    new retail outlets.
                  </li>
                  <li>
                    Identify white-spaces in existing markets to set up new
                    retail outlets.
                  </li>
                  <li>
                    Analyze sales impact on the overall portfolio of adding or
                    closing sites of your existing markets.
                  </li>
                </ul>
              </div>
              <div className="solutions-content">
                <h2>Track & monitor footfall</h2>
                <ul className="IGM">
                  <li>
                    Monitor daily customer footfall in and around your trade
                    area.
                  </li>
                  <li className="solutions-oneline">Compare potential locations based on footfall.</li>
                  <li>
                    Analyse customer tastes & preferences of visiting audience
                    to your store.
                  </li>
                </ul>
              </div>
              <div className="solutions-content">
                <h2>Optimize distribution network</h2>
                <ul className="IGM">
                  <li>
                    Pick areas/locations to setup new dealerships in your
                    existing markets to push your sales.
                  </li>
                  <li>
                    Benchmark performance of existing dealers against demand
                    potential of their area.
                  </li>
                  <li>
                    Identify new geographies with high demand potential to
                    establish new dealer networks.
                  </li>
                </ul>
              </div>
              <div className="solutions-content">
                <h2>Identify best location for OOH advertising</h2>
                <ul className="IGM">
                  <li className="solutions-oneline">Pick best billboard locations for your offline ADs.</li>
                  <li>
                    Compare billboard locations based on footfall and customer
                    segments of passing traffic.
                  </li>
                  <li>
                    Identify appropriate locations for offline promotional
                    activities based on right visiting customer segments.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="solutions-map">
            {/* <div className="solutions-map-data">
              <h4>Location Detail 4</h4>
              <p>Layer 1: Data Point</p>
              <p>Layer 2: Data Point</p>
              <div className="solutions-dots"></div>
            </div> */}
            <img ref={pin1} className="solutions-pin1" src={require('../images/Solutions/pin.png')} alt="" />
            <img ref={pin2} className="solutions-pin2" src={require('../images/Solutions/pin.png')} alt="" />
            <img ref={pin3} className="solutions-pin3" src={require('../images/Solutions/pin.png')} alt="" />
            <div ref={map} className="map-image">
              {solutions === 1 && (
                <img
                  className="solutions-map-menu1"
                  src={require("../images/Solutions/10_IGM.png")}
                  alt=""
                />
              )}
              {solutions === 2 && (
                <img
                  className="solutions-map-menu2"
                  src={require("../images/Solutions/11_ITA.png")}
                  alt=""
                />
              )}
              {solutions === 3 && (
                <img
                  className="solutions-map-menu3"
                  src={require("../images/Solutions/12_OERP.png")}
                  alt=""
                />
              )}
              {solutions === 4 && (
                <img
                  className="solutions-map-menu4"
                  src={require("../images/Solutions/13_TMF.png")}
                  alt=""
                />
              )}
              {solutions === 5 && (
                <img
                  className="solutions-map-menu5"
                  src={require("../images/Solutions/14_ODN.png")}
                  alt=""
                />
              )}
              {solutions === 6 && (
                <img
                  className="solutions-map-menu6"
                  src={require("../images/Solutions/15_OOH.png")}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KnowMore;
