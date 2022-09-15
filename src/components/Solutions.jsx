import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Solutions.css"
import { useRef } from "react";

function KnowMore() {

    const solutionsContainer = useRef(null)

    useEffect(() => {

        const element = solutionsContainer.current;

        gsap.fromTo(
          element.querySelector(".solutions-content"),
          {
            transform: 'translateY(0)'
          },
          {
            transform: 'translateY(-102%)',
            scrollTrigger: {
              trigger: element,
              start: "top top",
              end: "=3098",
              scrub: true,
            },
          }
        );
    })

    return(
        <div ref={solutionsContainer} className="solutions-section">
            <div className="solutions-sticky">
                <h2 className="solutions-heading">Our Solutions</h2>
                <div className="solutions-content-container">
                    <div className="solutions-content-animation">
                        <div className="solutions-content">
                            <h2>Identify growth markets</h2>
                            <ul className="IGM">
                                <li>Confidently explore new geographies to expand, backed by extensive market data.</li>
                                <li>Identify growth hotspots to open new retail outlets or distributor tie-ups.</li>
                                <li>Compare market metrics and consumption behaviour across many markets.</li>
                            </ul>
                            <h2>Identify target audience</h2>
                            <ul className="ITA">
                                <li>Explore 100s of detailed customer segments to determine the ideal audience.</li>
                                <li>Match your ideal customer segments to potential candidate locations.</li>
                                <li>Explore customer segments based on socioeconomic attributes & smartphone usage.</li>
                            </ul>
                            <h2>Optimize existing retail portfolio</h2>
                            <ul className="OERP">
                                <li>Achieve maximum sales push from existing markets by adding new retail outlets.</li>
                                <li>Identify white-spaces in existing markets to set up new retail outlets.</li>
                                <li>Analyze sales impact on the overall portfolio of adding or closing sites of your existing markets.</li>
                            </ul>
                            <h2>Track & monitor footfall</h2>
                            <ul className="TMF">
                                <li>Monitor daily customer footfall in and around your trade area.</li>
                                <li>Compare potential locations based on footfall.</li>
                                <li>Analyse customer tastes & preferences of visiting audience to your store.</li>
                            </ul>
                            <h2>Optimize distribution network</h2>
                            <ul className="ODN">
                                <li>Pick areas/locations to setup new dealerships in your existing markets to push your sales.</li>
                                <li>Benchmark performance of existing dealers against demand potential of their area.</li>
                                <li>Identify new geographies with high demand potential to establish new dealer networks.</li>
                            </ul>
                            <h2>Identify best location for OOH advertising</h2>
                            <ul className="OOH">
                                <li>Pick best billboard locations for your offline ADs.</li>
                                <li>Compare billboard locations based on footfall and customer segments of passing traffic.</li>
                                <li>Identify appropriate locations for offline promotional activities based on right visiting customer segments.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="solutions-map">
                        <div className="solutions-map-data">
                            <h4>Location Details</h4>
                            <p>Layer 1: Data Point</p>
                            <p>Layer 2: Data Point</p>
                            <div className="solutions-dots"></div>
                        </div>
                        <img className="solutions-map-menu" src={require('../images/solutions-menu.png')} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KnowMore