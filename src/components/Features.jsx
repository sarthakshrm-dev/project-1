import React, { useState } from "react";
import "../styles/Features.css"

function Features() {

    const [feature1, setFeature1] = useState(true)
    const [feature2, setFeature2] = useState(false)
    const [feature3, setFeature3] = useState(false)
    const [feature4, setFeature4] = useState(false)

    function handleClick(e) {

        if (e.target.className==='feature1')
        {
            setFeature1(true)
            setFeature2(false)
            setFeature3(false)
            setFeature4(false)
        }
        else if (e.target.className==='feature2')
        {
            setFeature1(false)
            setFeature2(true)
            setFeature3(false)
            setFeature4(false)
        }
        else if (e.target.className==='feature3')
        {
            setFeature1(false)
            setFeature2(false)
            setFeature3(true)
            setFeature4(false)
        }
        else if (e.target.className==='feature4')
        {
            setFeature1(false)
            setFeature2(false)
            setFeature3(false)
            setFeature4(true)
        }
    }

    return(
        <div className="features-section">
            <h2>Platform Features</h2>
            <div className="features-container">
                <div className="features-menu">
                    <div className="features-options">
                        <div className= {feature1 ? "feature1-active" : "feature1"} onClick={handleClick}><div className="feature-icon1"></div>Macro Trends</div>
                        <div className= {feature2 ? "feature-active" : "feature2"} onClick={handleClick}><div className="feature-icon2"></div>Market Expansion</div>
                        <div className= {feature3 ? "feature-active" : "feature3"} onClick={handleClick}><div className="feature-icon3"></div>Customer Segmentation</div>
                        <div className= {feature4 ? "feature-active" : "feature4"} onClick={handleClick}><div className="feature-icon4"></div>Site Selection</div>
                        <a href="">Request for a demo</a>
                    </div>
                    <div className="site-mockup">
                        {feature1 && <img src={require('../images/Features/site-mockup1.png')} alt="macro-trends-mockup" />}
                        {feature2 && <img src={require('../images/Features/site-mockup2.png')} alt="market-expansion-mockup" />}
                        {feature3 && <img src={require('../images/Features/site-mockup3.png')} alt="customer-segmentation-mockup" />}
                        {feature4 && <img src={require('../images/Features/site-mockup4.png')} alt="site-selection-mockup" />}
                        <div className="site-mockup-gradient"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features