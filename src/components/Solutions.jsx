import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../styles/Solutions.css";
import { useRef } from "react";
import { useState } from "react";
// gsap.registerPlugin(ScrollTrigger);

function KnowMore() {
  const solutionsContainer = useRef(null);
  const [solutions, setSolutions] = useState(0);
  const [pin, setPin] = useState(0)
  const [play, setPlay] = useState(true)
  const map = useRef();
  const subheading = useRef();
  const pin1 = useRef();
  const pin2 = useRef();
  const pin3 = useRef();

  useEffect(() => {
    if (pin===5) {
      pin1.current.style.top='19%'
      pin1.current.style.right='76%'
      pin2.current.style.top='55%'
      pin2.current.style.right='38%'
      pin3.current.style.top='25%'
      pin3.current.style.right='40%'
    } else if (pin===4) {
      pin1.current.style.top='52%'
      pin1.current.style.right='29%'
      pin2.current.style.top='21%'
      pin2.current.style.right='38%'
      pin3.current.style.top='40%'
      pin3.current.style.right='57%'
    } else if (pin===3) {
      pin1.current.style.top='27%'
      pin1.current.style.right='29%'
      pin2.current.style.top='21%'
      pin2.current.style.right='56%'
      pin3.current.style.top='51%'
      pin3.current.style.right='42%'
    } else if (pin===2) {
      pin1.current.style.top='54%'
      pin1.current.style.right='29%'
      pin2.current.style.top='29%'
      pin2.current.style.right='64%'
      pin3.current.style.top='16%'
      pin3.current.style.right='42%'
    } else if (pin===1) {
      pin1.current.style.top='36%'
      pin1.current.style.right='54%'
      pin2.current.style.top='13%'
      pin2.current.style.right='50%'
      pin3.current.style.top='38%'
      pin3.current.style.right='34%'
    } else if (pin===0) {
      pin1.current.style.top='12%'
      pin1.current.style.right='40%'
      pin2.current.style.top='35%'
      pin2.current.style.right='50%'
      pin3.current.style.top='50%'
      pin3.current.style.right='26%'
    }
  })

  function handleChange(index) {
    setPin(index)
    map.current.classList.add('fade2')
    subheading.current.classList.add('fade2')
    setTimeout(() => {
      setSolutions(index)
    }, 150)
    setTimeout(() => {
      map.current.classList.remove('fade2')
      subheading.current.classList.remove('fade2')
    }, 300)
  }

  function handlePause() {
    setPlay(false)
    setTimeout(() => {
      setPlay(true)
    }, 7000)
  }

  return (
    <div ref={solutionsContainer} className="solutions-section" id="solutions">
      <div className="solutions-sticky">
        <h2 className="solutions-heading">Our Solutions</h2>
        <div className="subheading-container" ref={subheading}>
          {solutions===0 && <h3 className="solutions-subheading-mobile">Identify growth markets</h3>}
          {solutions===1 && <h3 className="solutions-subheading-mobile">Identify target audience</h3>}
          {solutions===2 && <h3 className="solutions-subheading-mobile">Optimize existing retail portfolio</h3>}
          {solutions===3 && <h3 className="solutions-subheading-mobile">Track & monitor footfall</h3>}
          {solutions===4 && <h3 className="solutions-subheading-mobile">Optimize distribution network</h3>}
          {solutions===5 && <h3 className="solutions-subheading-mobile">Identify best location for OOH advertising</h3>}
        </div>
        <div className="solutions-content-container">
          <div className="solutions-content-animation">
            {/* <div className="solutionsSlideWrap"> */}
            <Carousel
              infiniteLoop
              showThumbs={false}
              autoPlay={play}
              interval={3000}
              showArrows={false}
              swipeable={true}
              emulateTouch={true}
              showStatus={false}
              transitionTime={300}
              onChange={handleChange}
              stopOnHover={false} 
              onSwipeEnd={handlePause}
              renderIndicator={(clickHandler, isSelected, index, label) => {
                const defStyle = { width: '10px', height: '10px', backgroundColor: 'white', borderRadius: '50%', marginRight: '10px', cursor: "pointer", opacity: 0.5 };
                const style = isSelected
                  ? { ...defStyle, opacity: 1 }
                  : { ...defStyle };
                return(
                  <div onMouseUp={handlePause} onClick={clickHandler} style={style}/>
                )
              }}
            >
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
              </Carousel>
            {/* </div> */}
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
              {solutions === 0 && (
                <img
                  className="solutions-map-menu1"
                  src={require("../images/Solutions/10_IGM.png")}
                  alt=""
                />
              )}
              {solutions === 1 && (
                <img
                  className="solutions-map-menu2"
                  src={require("../images/Solutions/11_ITA.png")}
                  alt=""
                />
              )}
              {solutions === 2 && (
                <img
                  className="solutions-map-menu3"
                  src={require("../images/Solutions/12_OERP.png")}
                  alt=""
                />
              )}
              {solutions === 3 && (
                <img
                  className="solutions-map-menu4"
                  src={require("../images/Solutions/13_TMF.png")}
                  alt=""
                />
              )}
              {solutions === 4 && (
                <img
                  className="solutions-map-menu5"
                  src={require("../images/Solutions/14_ODN.png")}
                  alt=""
                />
              )}
              {solutions === 5 && (
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
