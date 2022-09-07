import React from "react";
import "./styles/App.css"
import Header from "./components/Header"
import Banner from "./components/Banner";
import Features from "./components/Features"
import Solutions from "./components/Solutions"
import Industry from "./components/Industry";
import Reviews from "./components/Reviews"
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

function App() {
    return(
        <>
            <Header />
            <Banner />
            <Features />
            <Solutions />
            <Industry />
            <Reviews />
            <Footer />
            <ChatBot />
        </>
    )
}

export default App