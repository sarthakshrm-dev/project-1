import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <img src={require("../images/logo.png")} alt="logo" />
      <div className="footer-links-container">
        <div className="footer-links">
          <h4>Solutions</h4>
          <p>Urbanization Tracking & Prediction</p>
          <p>New Housing Construction</p>
          <p>Dealer Network Optimization</p>
          <p>White Space Analysis</p>
        </div>
        <div className="footer-links">
          <h4>Features</h4>
          <p>Expansion Navigator</p>
          <p>Lead Identifier</p>
          <p>Dealer Sense</p>
        </div>
        <div className="footer-links">
          <h4>Data</h4>
          <p>Satellite Imagery</p>
          <p>RADAR Imagery</p>
          <p>Mobility Data</p>
          <p>Point of Interest</p>
          <p>Construction Leads</p>
        </div>
        <div className="footer-links">
          <h4>Reach out to us:</h4>
          <div className="social-links">
            <button id="twitter"></button>
            <button id="linkedin"></button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
