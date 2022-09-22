import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Industries.css";
import { useRef } from "react";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function Industries() {
  const industriesContainer = useRef(null);

  useEffect(() => {
    const element = industriesContainer.current;

    gsap.fromTo(
      element.querySelector("#restaurants-dots"),
      {
        height: "0px",
      },
      {
        height: "180px",
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "=100",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#restaurants-card"),
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "=100",
          scrub: true,
        },
        onComplete: () => {
          gsap.fromTo(
            element.querySelector("#restaurants-card"),
            {
              transform: "translateY(0)",
            },
            {
              transform: "translateY(100%)",
              scrollTrigger: {
                trigger: element,
                start: "=350",
                end: "=400",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            element.querySelector("#restaurants-dots"),
            {
              height: "180px",
            },
            {
              height: "0px",
              scrollTrigger: {
                trigger: element,
                start: "=350",
                end: "=400",
                scrub: true,
              },
            }
          );
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = industriesContainer.current;

    gsap.fromTo(
      element.querySelector("#retail-dots"),
      {
        height: "0px",
      },
      {
        height: "180px",
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "=100",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#retail-card"),
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "=100",
          scrub: true,
        },
        onComplete: () => {
          gsap.fromTo(
            element.querySelector("#retail-card"),
            {
              transform: "translateY(0)",
            },
            {
              transform: "translateY(100%)",
              scrollTrigger: {
                trigger: element,
                start: "=350",
                end: "=400",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            element.querySelector("#retail-dots"),
            {
              height: "180px",
            },
            {
              height: "0px",
              scrollTrigger: {
                trigger: element,
                start: "=350",
                end: "=400",
                scrub: true,
              },
            }
          );
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = industriesContainer.current;

    gsap.fromTo(
      element.querySelector("#bfsi-dots"),
      {
        height: "0px",
      },
      {
        height: "180px",
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "=100",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#bfsi-card"),
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "=100",
          scrub: true,
        },
        onComplete: () => {
          gsap.fromTo(
            element.querySelector("#bfsi-card"),
            {
              transform: "translateY(0)",
            },
            {
              transform: "translateY(100%)",
              scrollTrigger: {
                trigger: element,
                start: "=350",
                end: "=400",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            element.querySelector("#bfsi-dots"),
            {
              height: "180px",
            },
            {
              height: "0px",
              scrollTrigger: {
                trigger: element,
                start: "=350",
                end: "=400",
                scrub: true,
              },
            }
          );
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = industriesContainer.current;

    gsap.fromTo(
      element.querySelector("#darkstores-dots"),
      {
        height: "0px",
      },
      {
        height: "120px",
        scrollTrigger: {
          trigger: element,
          start: "=450",
          end: "=550",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#darkstores-card"),
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
        scrollTrigger: {
          trigger: element,
          start: "=450",
          end: "=550",
          scrub: true,
        },
        onComplete: () => {
          gsap.fromTo(
            element.querySelector("#darkstores-card"),
            {
              transform: "translateY(0)",
            },
            {
              transform: "translateY(100%)",
              scrollTrigger: {
                trigger: element,
                start: "=800",
                end: "=850",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            element.querySelector("#darkstores-dots"),
            {
              height: "120px",
            },
            {
              height: "0px",
              scrollTrigger: {
                trigger: element,
                start: "=800",
                end: "=850",
                scrub: true,
              },
            }
          );
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = industriesContainer.current;

    gsap.fromTo(
      element.querySelector("#building-dots"),
      {
        height: "0px",
      },
      {
        height: "180px",
        scrollTrigger: {
          trigger: element,
          start: "=450",
          end: "=550",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#building-card"),
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
        scrollTrigger: {
          trigger: element,
          start: "=450",
          end: "=550",
          scrub: true,
        },
        onComplete: () => {
          gsap.fromTo(
            element.querySelector("#building-card"),
            {
              transform: "translateY(0)",
            },
            {
              transform: "translateY(100%)",
              scrollTrigger: {
                trigger: element,
                start: "=800",
                end: "=850",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            element.querySelector("#building-dots"),
            {
              height: "180px",
            },
            {
              height: "0px",
              scrollTrigger: {
                trigger: element,
                start: "=800",
                end: "=850",
                scrub: true,
              },
            }
          );
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = industriesContainer.current;

    gsap.fromTo(
      element.querySelector("#agri-dots"),
      {
        height: "0px",
      },
      {
        height: "180px",
        scrollTrigger: {
          trigger: element,
          start: "=450",
          end: "=550",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#agri-card"),
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
        scrollTrigger: {
          trigger: element,
          start: "=450",
          end: "=550",
          scrub: true,
        },
        onComplete: () => {
          gsap.fromTo(
            element.querySelector("#agri-card"),
            {
              transform: "translateY(0)",
            },
            {
              transform: "translateY(100%)",
              scrollTrigger: {
                trigger: element,
                start: "=800",
                end: "=850",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            element.querySelector("#agri-dots"),
            {
              height: "180px",
            },
            {
              height: "0px",
              scrollTrigger: {
                trigger: element,
                start: "=800",
                end: "=850",
                scrub: true,
              },
            }
          );
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = industriesContainer.current;

    gsap.fromTo(
      element.querySelectorAll(".final-dots"),
      {
        height: "0px",
      },
      {
        height: "180px",
        scrollTrigger: {
          trigger: element,
          start: "=850",
          end: "=950",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelectorAll(".final-heading"),
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
        scrollTrigger: {
          trigger: element,
          start: "=950",
          end: "=1050",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={industriesContainer} className="industries-section" id="industry">
      <div className="industries-sticky">
        <h2 className="industries-heading">Industries we serve</h2>
        <div className="industries-animation">
          <div id="restaurants-industry">
            <div id="restaurants-card-container">
              <div id="restaurants-card">
                <h3 id="restaurants-heading">Multi-unit Restaurants</h3>
                <ul id="restaurants-content">
                  <li>Compare locations for new outlets</li>
                  <li>Analyse sales impact on existing portfolio</li>
                </ul>
              </div>
            </div>
            <div id="restaurants-dots"></div>
          </div>
          <div id="retail-industry">
            <div id="retail-card-container">
              <div id="retail-card">
                <h3 id="retail-heading">Multi-unit Restaurants</h3>
                <ul id="retail-content">
                  <li>Compare locations for new outlets</li>
                  <li>Analyse sales impact on existing portfolio</li>
                </ul>
              </div>
            </div>
            <div id="retail-dots"></div>
          </div>
          <div id="bfsi-industry">
            <div id="bfsi-card-container">
              <div id="bfsi-card">
                <h3 id="bfsi-heading">Multi-unit Restaurants</h3>
                <ul id="bfsi-content">
                  <li>Compare locations for new outlets</li>
                  <li>Analyse sales impact on existing portfolio</li>
                </ul>
              </div>
            </div>
            <div id="bfsi-dots"></div>
          </div>
          <div id="building-industry">
            <div id="building-card-container">
              <div id="building-card">
                <h3 id="building-heading">Multi-unit Restaurants</h3>
                <ul id="building-content">
                  <li>Compare locations for new outlets</li>
                  <li>Analyse sales impact on existing portfolio</li>
                </ul>
              </div>
            </div>
            <div id="building-dots"></div>
          </div>
          <div id="darkstores-industry">
            <div id="darkstores-card-container">
              <div id="darkstores-card">
                <h3 id="darkstores-heading">Multi-unit Restaurants</h3>
                <ul id="darkstores-content">
                  <li>Compare locations for new outlets</li>
                  <li>Analyse sales impact on existing portfolio</li>
                </ul>
              </div>
            </div>
            <div id="darkstores-dots"></div>
          </div>
          <div id="agri-industry">
            <div id="agri-card-container">
              <div id="agri-card">
                <h3 id="agri-heading">Multi-unit Restaurants</h3>
                <ul id="agri-content">
                  <li>Compare locations for new outlets</li>
                  <li>Analyse sales impact on existing portfolio</li>
                </ul>
              </div>
            </div>
            <div id="agri-dots"></div>
          </div>
          <div className="final-restaurants-animation">
            <div className="final-heading-container">
              <h3 className="final-heading">Multi-unit Restaurants</h3>
            </div>
            <div className="final-dots"></div>
          </div>
          <div className="final-retail-animation">
            <div className="final-heading-container">
              <h3 className="final-heading">Retail</h3>
            </div>
            <div className="final-dots"></div>
          </div>
          <div className="final-bfsi-animation">
            <div className="final-heading-container">
              <h3 className="final-heading">BFSI</h3>
            </div>
            <div className="final-dots"></div>
          </div>
          <div className="final-building-animation">
            <div className="final-heading-container">
              <h3 className="final-heading">Building Materials</h3>
            </div>
            <div className="final-dots"></div>
          </div>
          <div className="final-darkstores-animation">
            <div className="final-heading-container">
              <h3 className="final-heading">
                Darkstores & Micro-fulfillment Centers
              </h3>
            </div>
            <div className="final-dots"></div>
          </div>
          <div className="final-agri-animation">
            <div className="final-heading-container">
              <h3 className="final-heading">Agri-Infra</h3>
            </div>
            <div className="final-dots"></div>
          </div>
          <img
            className="industries-image"
            src={require("../images/industries-background.png")}
            alt=""
          />
          <div className="industries-image-fade"></div>
        </div>
      </div>
    </div>
  );
}

export default Industries;
