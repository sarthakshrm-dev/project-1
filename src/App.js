import React from "react";
import "./styles/App.css"
import Header from "./components/Header"
import Banner from "./components/Banner";
import Features from "./components/Features"
import KnowMore from "./components/KnowMore"
import Industry from "./components/Industry";
import SocialProof from "./components/SocialProof"
import Demo from "./components/Demo";
import Footer from "./components/Footer";

function App() {
    return(
        <>
            <Header />
            <Banner />
            <Features />
            <KnowMore />
            <Industry />
            <SocialProof />
            <Demo />
            <Footer />
        </>
    )
}

export default App