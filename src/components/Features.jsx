import React from "react";
import "../styles/Features.css"

function Features() {
    return(
        <div className="features-section">
            <h2>How will this site perform?</h2>
            <div className="features-menu">
                <div className="features-options">
                    <div className="feature"><div className="feature-icon"></div>Expansion Navigator</div>
                    <div className="feature"><div className="feature-icon"></div>Lead Identifier</div>
                    <div className="feature"><div className="feature-icon"></div>Dealer Sense</div>
                    <p>Explore our live product</p>
                </div>
                <div className="site-mockup">
                    <img src={require('../images/site-mockup.png')} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Features