import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <img src={require("../images/logo.png")} alt="logo" />
      <div className="header-links">
        <Link to="#platform" smooth>
          Platforms
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
        <button>Get a Demo</button>
      </div>
    </header>
  );
}

export default Header;
