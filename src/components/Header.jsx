import React, { useState } from "react";
import DemoForm from "./DemoForm";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/Header.css";

function Header() {
  const [demo, setDemo] = useState(false);

  function handleClick() {
    setDemo(true);
  }

  return (
    <>
      <header>
        <img src={require("../images/logo.png")} alt="logo" />
        <div className="header-links">
          <Link to="#platform" smooth>
            Platform
          </Link>
          <Link to="#solutions" smooth>
            Solutions
          </Link>
          <Link to="#industry" smooth>
            Industry
          </Link>
          <Link to="#data" smooth>
            Data
          </Link>
          <button onClick={handleClick}>Request Demo</button>
        </div>
      </header>
      {demo && <DemoForm setDemo={setDemo} />}
    </>
  );
}

export default Header;
