import React from "react";
import "../styles/KnowMore.css"

function KnowMore() {
    return(
        <div className="knowmore-section">
            <div className="knowmore-content-container">
                <h2>Our Solutions</h2>
                <div className="knowmore-content">
                    <h3>Urbanization Tracking and Prediction</h3>
                    <p>with all the beneifits listed</p>
                    <ul>
                        <li>Sattelite Imagery</li>
                        <li>Radar Imagery</li>
                    </ul>
                <a href="">Explore</a>
                <div className="pointing-dots"></div>
            </div>
            </div>
            <div className="grid-graph">
                <div className="graph-style"></div>
            </div>
        </div>
    )
}

export default KnowMore