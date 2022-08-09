import React from "react";
import ScrollContainer from 'react-indiana-drag-scroll'
import ReviewBox from "./ReviewBox";
import "../styles/SocialProof.css"

function SocialProof() {

    return(
        <>
            <div className="reviews">
                <h2>Listen to what our customer has to say</h2>
                <ScrollContainer className="reviews-row" >
                    <ReviewBox />
                    <ReviewBox />
                    <ReviewBox />
                    <ReviewBox />
                </ScrollContainer>
            </div>
            <div className="socialproof">
                <img id="google" src={require('../images/google-logo.png')} alt="google" />
                <img id="airbnb" src={require('../images/airbnb-logo.png')} alt="airbnb" />
                <img id="swiggy" src={require('../images/swiggy-logo.png')} alt="swiggy" />
                <img id="nike" src={require('../images/nike-logo.png')} alt="nike" />
            </div>       
        </>
    )
}

export default SocialProof