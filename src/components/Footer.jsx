import React from "react";
import "../styles/Footer.css"

function Footer() {
    return(
        <footer>
            <img src={require('../images/logo.png')} alt="logo" />
            <div className="footer-links-container">
                <div className="footer-links">
                    <h4>Solutions</h4>
                    <a href="">Urbanization Tracking & Prediction</a>
                    <a href="">New Housing Construction</a>
                    <a href="">Dealer Network Optimization</a>
                    <a href="">White Space Analysis</a>
                </div>
                <div className="footer-links">
                    <h4>Features</h4>
                    <a href="">Expansion Navigator</a>
                    <a href="">Lead Identifier</a>
                    <a href="">Dealer Sense</a>
                </div>
                <div className="footer-links">
                    <h4>Data</h4>
                    <a href="">Satellite Imagery</a>
                    <a href="">RADAR Imagery</a>
                    <a href="">Mobility Data</a>
                    <a href="">Point of Interest</a>
                    <a href="">Construction Leads</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer