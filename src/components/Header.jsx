import React from "react";
import "../styles/Header.css"

function Header() {
    return(
        <header>
            <img src={require('../images/logo.png')} alt="logo" />
            <div className="header-links">
                <a href="">Platforms</a>
                <a href="">Solutions</a>
                <button>Get a Demo</button>
            </div>
        </header>
    )
}

export default Header