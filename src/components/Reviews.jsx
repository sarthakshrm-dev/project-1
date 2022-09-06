import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import ReviewBox from "./ReviewBox";
import "../styles/Reviews.css";

function SocialProof() {

  function handleDown(e) {
    e.target.style.cursor='grabbing'
  }

  function handleUp(e) {
    e.target.style.cursor='grab'
  }

  return (
    <>
      <div className="reviews">
        <h2>Don't take our word for it</h2>
        <div onMouseDown={handleDown} onMouseUp={handleUp} className="reviews-container">
          <ScrollContainer onMouseDown={handleDown} className="reviews-row">
            <ReviewBox />
            <ReviewBox />
            <ReviewBox />
            <ReviewBox />
          </ScrollContainer>
        </div>
      </div>
    </>
  );
}

export default SocialProof;
