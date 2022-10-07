import React from "react";
import "../styles/Footer.css";

function Footer() {

  function twitterClick() {
    window.open('https://twitter.com/sociometrik_org')
  }

  function linkedinClick() {
    window.open('https://www.linkedin.com/company/sociometrik/')
  }

  return (
    <footer>
      <div className="footer-section-mobile">
        <img src={require("../images/logo.png")} alt="logo" />
        <div className="social-mobile">
          <h4>Reach out:</h4>
          <div className="social-links">
            <button onClick={twitterClick} id="twitter"></button>
            <button onClick={linkedinClick} id="linkedin"></button>
          </div>
          <p>contact@sociometrik.org</p>
        </div>
      </div>
      <div className="footer-links-container">
        <div className="footer-links">
          <h4>Features</h4>
          <p>Macro Trends</p>
          <p>Market Expansion</p>
          <p>Customer Segmentation</p>
          <p>Site Selection</p>
        </div>
        <div className="footer-links">
          <h4>Solutions</h4>
          <p>Identify Growth Markets</p>
          <p>Identify Target Audience</p>
          <p>Optimize Existing Retail Portfolio</p>
          <p>Track & Monitor Footfall</p>
          <p>Optimize Distribution Network</p>
          <p>Identify Best Location For OOH Advertising</p>
        </div>
        <div className="footer-links">
          <h4>Data</h4>
          <p>Smartphone Usage</p>
          <p>Satellite Imagery</p>
          <p>Administrative Data</p>
          <p>Weblisted Records</p>
          <p>Establishment Data</p>
          <p>Transaction Data</p>
        </div>
        <div className="footer-links social-pc">
          <h4>Reach out:</h4>
          <div className="social-links">
            <button onClick={twitterClick} id="twitter"></button>
            <button onClick={linkedinClick} id="linkedin"></button>
          </div>
          <p>contact@sociometrik.org</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
