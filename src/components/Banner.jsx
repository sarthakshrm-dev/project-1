import React from "react";
import ClientList from './ClientList'
import "../styles/Banner.css"

function Banner() {
    return(
        <div className="banner">
            <div className="banner-content">
                <h1>Data automation software for modern ops teams</h1>
                <p>Sociometrik is an automated location intelligence platform designed to boost the confidence multi-unit brands need when growing and optimizing across markets. Start making data-driven decisions in real-time with extreme precision.</p>
                <button>See Sociometrik Live</button>
                <ClientList />
            </div>
        </div>
    )
}

export default Banner