import React from "react";
import "../styles/Banner.css"

function Banner() {
    return(
        <div className="banner">
            <div className="banner-content">
                <h1>Pick Better Location</h1>
                <p>Soiometrik is an automate location intelligence platform designed to boose the confidence multi-unit brands need when growing and optimizing across markets. Start making data driven decisions in real time with extreme precision.</p>
                <button>See Sociometrik Live</button>
            </div>
            <div className="play-btn">
                <div className="play-btn-back"></div>
                <img src={require('../images/Play.png')} alt="play" />
            </div>
        </div>
    )
}

export default Banner