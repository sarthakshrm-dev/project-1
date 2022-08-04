import React from "react";
import "../styles/SocialProof.css"

function SocialProof() {
    return(
        <>
            <div className="reviews">
                <h2>Listen to what our customer has to say</h2>
                <div className="reviews-row">
                    <div className="review-box">
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam quos exercitationem assumenda nihil voluptas magni minima est. Tenetur?</p>
                        <p className="name">Sanjay Mishra</p>
                        <p className="occupation">CEO, Famous Company</p>
                    </div>
                    <div className="review-box">
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam quos exercitationem assumenda nihil voluptas magni minima est. Tenetur?</p>
                        <p className="name">Sanjay Mishra</p>
                        <p className="occupation">CEO, Famous Company</p>
                    </div>
                    <div className="review-box">
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam quos exercitationem assumenda nihil voluptas magni minima est. Tenetur?</p>
                        <p className="name">Sanjay Mishra</p>
                        <p className="occupation">CEO, Famous Company</p>
                    </div>
                </div>
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