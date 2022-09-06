import React from "react";
import { useState } from "react";
import "../styles/Solutions.css"

function KnowMore() {

    const solutions = [
        'Socioeconomic','Demography', 'Customer Segmentation', 'Points of Insterest', 'Infrastructure', 'Digital Penetration'
    ]

    const [button, setButton] = useState(0)

    function handleClick(i) {
        setButton(i)
    }

    return(
        <div className="solutions-section">
            <h2 className="solutions-heading">Our Solutions</h2>
            <div className="solutions-content-container">
                <div className="solutions-content">
                    <h2>Distribution Network Optimisation</h2>
                    <h3>All your answers are just a few clicks away!</h3>
                    <ul>
                        <li>Inbuilt standard SOPs that can be used as playbooks</li>
                        <li>Simple SQL based drill downs to find the why</li>
                    </ul>
                </div>
                <div className="solutions-map">
                    <img src={require('../images/solutions-base-map.png')} alt="img" />
                    <div className="solutions-map-data">
                        <h4>Location Details</h4>
                        <p>Layer 1: Data Point</p>
                        <p>Layer 2: Data Point</p>
                        <div className="solutions-dots"></div>
                    </div>
                    <div className="solutions-map-menu">
                        <h4>Data Layers</h4>
                        {solutions.map((data, index) => {
                            return (<div onClick={() => handleClick(index)} className={button===index ? "solutions-buttons solutions-active" : "solutions-buttons"}>{data}</div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KnowMore