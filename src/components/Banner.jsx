import React from "react";
import ClientList from './ClientList'
import "../styles/Banner.css"

function Banner() {
    return(
        <div className="banner">
            <img className="banner-image" src={require('../images/banner-image.png')} alt="" />
            <div className="banner-content">
                <h1>Location Intelligence Platform for the modern&nbsp;
                    <span class="banner-text-rotation-container">
                        <span class="banner-rotating-text">Sales Team</span>
                        <span class="banner-rotating-text">Strategy Team</span>
                        <span class="banner-rotating-text">Offline Marketing Team</span>
                        <span class="banner-rotating-text">Real Estate Managers</span>
                        <span class="banner-rotating-text">Credit Analysts</span>
                        <span class="banner-rotating-text">Retail Consultants</span>
                    </span>
                </h1>
                <p><span style={{color: '#B897E6'}}>Sociometrik LIVE</span> is a modern data intelligence platform to enable effective location decisions for your enterprise needs. Leverage 100s of data sources to expand and optimize your offline sales network, pick ideal sites for your stores or distributors, estimate demand potential for your product category and analyze location specific risks and opportunities.</p>
                <button>Request for a demo</button>
            </div>
            <div className="banner-background-dots-container">
                <div className="banner-background-dot dot-1">
                    <div className="inner-dot"></div>
                </div>
                <div className="banner-background-dot dot-2">
                    <div className="inner-dot"></div>
                </div>
                <div className="banner-background-dot dot-3">
                    <div className="inner-dot"></div>
                </div>
                <div className="banner-background-dot dot-4">
                    <div className="inner-dot"></div>
                </div>
                <div className="banner-background-dot dot-5">
                    <div className="inner-dot"></div>
                </div>
                <div className="banner-background-dot dot-6">
                    <div className="inner-dot"></div>
                </div>
                <div className="banner-background-dot dot-7">
                    <div className="inner-dot"></div>
                </div>
            </div>
            <ClientList />
        </div>
    )
}

export default Banner