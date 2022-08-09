import React from "react";
import "../styles/App.css"
import Header from "./Header"
import Banner from "./Banner";
import Features from "./Features"
import KnowMore from "./KnowMore"
import SocialProof from "./SocialProof"
import Demo from "./Demo";
import Footer from "./Footer";

function App() {
    return(
        <>
            <Header />
            <Banner />
            <Features />
            <KnowMore />
            <SocialProof />
            <Demo />
            <Footer />
        </>
    )
}

export default App