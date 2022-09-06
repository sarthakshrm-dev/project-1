import React from "react";
import "./styles/App.css"
import Header from "./components/Header"
import Banner from "./components/Banner";
import Features from "./components/Features"
import Solutions from "./components/Solutions"
import ClientList from "./components/ClientList";
import Industry from "./components/Industry";
import Reviews from "./components/Reviews"
import Footer from "./components/Footer";

function App() {
    return(
        <>
            <Header />
            <Banner />
            <Features />
            <Solutions />
            <ClientList />
            <Industry />
            <Reviews />
            <Footer />
        </>
    )
}

export default App