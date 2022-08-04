import React from "react";
import "../styles/App.css"
import Header from "./Header"
import KnowMore from "./KnowMore"
import SocialProof from "./SocialProof"
import Demo from "./Demo";
import Footer from "./Footer";

function App() {
    return(
        <>
            <Header />
            <KnowMore />
            <SocialProof />
            <Demo />
            <Footer />
        </>
    )
}

export default App