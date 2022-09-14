import React from "react";
import "./styles/App.css"
import Header from "./components/Header"
// import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Features from "./components/Features"
import Solutions from "./components/Solutions"
import Industries from "./components/Industries";
import Slider from "./components/Slider";
import Reviews from "./components/Reviews"
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot/ChatBot.jsx";

function App() {
    return(
        <>
            <Header />
            {/* <Banner /> */}
            <Banner2 />
            <Features />
            <Solutions />
            <Industries />
            <Slider />
            <Footer />
        </>
    )
}

export default App