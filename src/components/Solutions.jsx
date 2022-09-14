import React from "react";
import { useState } from "react";
import "../styles/Solutions.css"

function KnowMore() {
    return(
        <div className="solutions-section">
            <h2 className="solutions-heading">Our Solutions</h2>
            <div className="solutions-content-container">
                <div className="solutions-content">
                    <h2>Identify growth markets</h2>
                    <ul>
                        <li>Confidently explore new geographies to expand, backed by extensive market data.</li>
                        <li>Identify growth hotspots to open new retail outlets or distributor tie-ups.</li>
                        <li>Compare market metrics and consumption behaviour across many markets.</li>
                    </ul>
                </div>
                <div className="solutions-map">
                    <img className="solutions-map-image" src={require('../images/solutions-base-map.png')} alt="img" />
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
    )
}

export default KnowMore