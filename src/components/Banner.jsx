import React from "react";
import ClientList from "./ClientList";
import DemoForm from "./DemoForm";
import "../styles/Banner.css";
import { useState } from "react";

function Banner() {
  const [demo, setDemo] = useState(false);
  const [expand, setExpand] = useState(false)

  function handleClick() {
    setDemo(true);
  }

  function handleExpand() {
    setExpand(true)
  }

  return (
    <>
      <div className="banner">
        <img
          className="banner-image"
          src={require("../images/banner-image.png")}
          alt=""
        />
        <div className="banner-content">
          <h1>
            Location Intelligence Platform for the modern&nbsp;
            <span class="banner-text-rotation-container">
              <span class="banner-rotating-text">Sales Team</span>
              <span class="banner-rotating-text">Strategy Team</span>
              <span class="banner-rotating-text">Offline Marketing Team</span>
              <span class="banner-rotating-text">Real Estate Managers</span>
              <span class="banner-rotating-text">Credit Analysts</span>
              <span class="banner-rotating-text">Retail Consultants</span>
            </span>
          </h1>
          <p className="banner-desc-pc">
            <span className="colored-text">Sociometrik LIVE</span> is a modern
            data intelligence platform to enable effective location decisions
            for your enterprise needs. Leverage 100s of data sources to expand
            and optimize your offline sales network, pick ideal sites for your
            stores or distributors, estimate demand potential for your product
            category and analyze location specific risks and opportunities.
          </p>
          {expand===false && <p className="banner-desc-mobile">
            <span className="colored-text">Sociometrik LIVE</span> is a modern
            data intelligence platform to enable effective location decisions
            for your enterprise needs. Leverage 100s...<a onClick={handleExpand}>read more</a>
          </p>}
          {expand===true && <p className="banner-desc-mobile">
            <span className="colored-text">Sociometrik LIVE</span> is a modern
            data intelligence platform to enable effective location decisions
            for your enterprise needs. Leverage 100s of data sources to expand
            and optimize your offline sales network, pick ideal sites for your
            stores or distributors, estimate demand potential for your product
            category and analyze location specific risks and opportunities.
          </p>}
          <button onClick={handleClick}>Request Demo</button>
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
      {demo && <DemoForm setDemo={setDemo} />}
    </>
  );
}

export default Banner;
