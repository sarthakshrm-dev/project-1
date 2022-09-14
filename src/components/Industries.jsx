import React from 'react'
import { motion, useTransform } from 'framer-motion'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll } from 'framer-motion'
import '../styles/Industries.css'
import { useRef } from 'react';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

function Industries() {

  const ref = useRef(null)

  useEffect(() => {

    const masterTimeline = gsap.timeline();

    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".industries-heading"),
      {
        opacity: 1,
      },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: element.querySelector(".sticky"),
          start: "top top",
          end: "center center",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#retail-industry"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "+500",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      element.querySelector("#foodchain-industry"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          start: "=600",
          end: "=1000",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      element.querySelector("#third-industry"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          start: "=1000",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, [])


  return (
    <div ref={ref} className='industries-section'>
      <div className='sticky'>
        <h2 className='industries-heading'>Industries we serve</h2>
          <div className='industries-animation'>
            <div id='retail-industry'>
              <h3>Retail Industry</h3>
              <ul>
                <li>Identify new markets to expand</li>
                <li>Analyse customer segments of visiting customers.</li>
              </ul>
              <div id='retail-dots'></div>
            </div>
            <div id='foodchain-industry'>
              <h3>Retail Industry</h3>
              <ul>
                <li>Identify new markets to expand</li>
                <li>Analyse customer segments of visiting customers.</li>
              </ul>
              <div id='retail-dots'></div>
            </div>
            <div id='third-industry'>
              <h3>Retail Industry</h3>
              <ul>
                <li>Identify new markets to expand</li>
                <li>Analyse customer segments of visiting customers.</li>
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