import React from "react";
import "./styles/App.css"
import Header from "./components/Header"
import Banner from "./components/Banner";
import Features from "./components/Features"
import Solutions from "./components/Solutions"
import Industries from "./components/Industries";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot/ChatBot.jsx";

function App() {
    return(
        <>
            <Header />
            {/* <Banner /> */}
            <Banner />
            <Features />
            <Solutions />
            <Industries />
            <Slider />
            <Footer />
        </>
    )
}

export default App