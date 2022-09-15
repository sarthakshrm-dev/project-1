import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../styles/Industries.css'
import { useRef } from 'react';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

function Industries() {

  const industriesContainer = useRef(null)

  useEffect(() => {

    const element = industriesContainer.current;

    gsap.fromTo(
      element.querySelector("#retail-dots"),
      {
        height: '0px'
      },
      {
        height: '200px',
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "+250",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#retail-heading"),
      {
        transform: 'translateY(100%)'
      },
      {
        transform: 'translateY(0)',
        scrollTrigger: {
          trigger: element,
          start: "=250",
          end: "=450",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#retail-content"),
      {
        opacity:0
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          start: "=350",
          end: "=500",
          scrub: true,
        },
        onComplete: () => {
          gsap.fromTo(
            element.querySelector("#retail-content"),
            {
              opacity: 1,
            },
            { opacity: 0, 
              scrollTrigger: {
                trigger: element,
                start: "=650",
                end: "=800",
                scrub: true,
              },
            },
          )
          gsap.fromTo(
            element.querySelector("#retail-heading"),
            {
              transform: 'translateY(0)'
            },
            {
              transform: 'translateY(100%)',
              scrollTrigger: {
                trigger: element,
                start: "=550",
                end: "=750",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            element.querySelector("#retail-dots"),
            {
              height: '200px'
            },
            {
              height: '0px',
              scrollTrigger: {
                trigger: element,
                start: "=750",
                end: "=1000",
                scrub: true,
              },
            }
          );
        }
      }
    )
  }, [])


  return (
    <div ref={industriesContainer} className='industries-section'>
      <div className='industries-sticky'>
        <h2 className='industries-heading'>Industries we serve</h2>
          <div className='industries-animation'>
            <div id='retail-industry'>
              <div id='retail-heading-container'>
                <h3 id='retail-heading'>Retail Industry</h3>
              </div>
              <ul id='retail-content'>
                <li>Compare locations for new outlets</li>
                <li>Analyse sales impact on existing portfolio</li>
              </ul>
              <div id='retail-dots'></div>
            </div>
            <img className='industries-image' src={require('../images/industries-background.png')} alt="" />
            <div className='industries-image-fade'></div>
          </div>        
      </div>
    </div>
  )
}

export default Industries