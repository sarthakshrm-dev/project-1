import React, { useState } from "react";
import "../styles/Features.css"

function Features() {

    const [feature1, setFeature1] = useState(true)
    const [feature2, setFeature2] = useState(false)
    const [feature3, setFeature3] = useState(false)

    function handleClick(e) {

        if (e.target.className==='feature1')
        {
            setFeature1(true)
            setFeature2(false)
            setFeature3(false)
        }
        else if (e.target.className==='feature2')
        {
            setFeature1(false)
            setFeature2(true)
            setFeature3(false)
        }
        else if (e.target.className==='feature3')
        {
            setFeature1(false)
            setFeature2(false)
            setFeature3(true)
        }
    }

    return(
        <div className="features-section">
            <h2>How will this site perform?</h2>
            <div className="features-menu">
                <div className="features-options">
                    <div className= {feature1 ? "feature-active" : "feature1"} onClick={handleClick}><div className="feature-icon icon-1"></div>Expansion Navigator</div>
                    <div className= {feature2 ? "feature-active" : "feature2"} onClick={handleClick}><div className="feature-icon icon-2"></div>Lead Identifier</div>
                    <div className= {feature3 ? "feature-active" : "feature3"} onClick={handleClick}><div className="feature-icon icon-3"></div>Dealer Sense</div>
                    <a href="">Explore our live product</a>
                </div>
                <div className="site-mockup">
                    <img src={require('../images/site-mockup.png')} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Features