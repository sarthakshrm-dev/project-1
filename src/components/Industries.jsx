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
        height: "200px",
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "+100",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#restaurants-heading"),
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
        scrollTrigger: {
          trigger: element,
          start: "=100",
          end: "=200",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#restaurants-content"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          start: "=150",
          end: "=250",
          scrub: true,
        },
        onComplete: () => {
          gsap.fromTo(
            element.querySelector("#restaurants-content"),
            {
              opacity: 1,
            },
            {
              opacity: 0,
              scrollTrigger: {
                trigger: element,
                start: "=350",
                end: "=400",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            element.querySelector("#restaurants-heading"),
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
              height: "200px",
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
        height: "130px",
        scrollTrigger: {
          trigger: element,
          start: "=400",
          end: "=500",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#retail-heading"),
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
        scrollTrigger: {
          trigger: element,
          start: "=500",
          end: "=600",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#retail-content"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          start: "=550",
          end: "=650",
          scrub: true,
        },
        onComplete: () => {
          gsap.fromTo(
            element.querySelector("#retail-content"),
            {
              opacity: 1,
            },
            {
              opacity: 0,
              scrollTrigger: {
                trigger: element,
                start: "750",
                end: "800",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            element.querySelector("#retail-heading"),
            {
              transform: "translateY(0)",
            },
            {
              transform: "translateY(100%)",
              scrollTrigger: {
                trigger: element,
                start: "750",
                end: "800",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            element.querySelector("#retail-dots"),
            {
              height: "130px",
            },
            {
              height: "0px",
              scrollTrigger: {
                trigger: element,
                start: "750",
                end: "800",
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
        height: "200px",
        scrollTrigger: {
          trigger: element,
          start: "=750",
          end: "=850",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#bfsi-heading"),
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
        scrollTrigger: {
          trigger: element,
          start: "=850",
          end: "=950",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#bfsi-content"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          start: "=900",
          end: "=1000",
          scrub: true,
        },
        onComplete: () => {
          gsap.fromTo(
            element.querySelector("#bfsi-content"),
            {
              opacity: 1,
            },
            {
              opacity: 0,
              scrollTrigger: {
                trigger: element,
                start: "1100",
                end: "1150",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            element.querySelector("#bfsi-heading"),
            {
              transform: "translateY(0)",
            },
            {
              transform: "translateY(100%)",
              scrollTrigger: {
                trigger: element,
                start: "1100",
                end: "1150",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            element.querySelector("#bfsi-dots"),
            {
              height: "200px",
            },
            {
              height: "0px",
              scrollTrigger: {
                trigger: element,
                start: "1100",
                end: "1150",
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
        height: "200px",
        scrollTrigger: {
          trigger: element,
          start: "=1150",
          end: "=1250",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#building-heading"),
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
        scrollTrigger: {
          trigger: element,
          start: "=1250",
          end: "=1350",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#building-content"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          start: "=1300",
          end: "=1400",
          scrub: true,
        },
        onComplete: () => {
          gsap.fromTo(
            element.querySelector("#building-content"),
            {
              opacity: 1,
            },
            {
              opacity: 0,
              scrollTrigger: {
                trigger: element,
                start: "1500",
                end: "1550",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            element.querySelector("#building-heading"),
            {
              transform: "translateY(0)",
            },
            {
              transform: "translateY(100%)",
              scrollTrigger: {
                trigger: element,
                start: "1500",
                end: "1550",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            element.querySelector("#building-dots"),
            {
              height: "200px",
            },
            {
              height: "0px",
              scrollTrigger: {
                trigger: element,
                start: "1500",
                end: "1550",
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
          start: "=1550",
          end: "=1650",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#darkstores-heading"),
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
        scrollTrigger: {
          trigger: element,
          start: "=1650",
          end: "=1750",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#darkstores-content"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          start: "=1800",
          end: "=1900",
          scrub: true,
        },
        onComplete: () => {
          gsap.fromTo(
            element.querySelector("#darkstores-content"),
            {
              opacity: 1,
            },
            {
              opacity: 0,
              scrollTrigger: {
                trigger: element,
                start: "2000",
                end: "2050",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            element.querySelector("#darkstores-heading"),
            {
              transform: "translateY(0)",
            },
            {
              transform: "translateY(100%)",
              scrollTrigger: {
                trigger: element,
                start: "2000",
                end: "2050",
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
                start: "2000",
                end: "2050",
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
        height: "200px",
        scrollTrigger: {
          trigger: element,
          start: "=2050",
          end: "=2150",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#agri-heading"),
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
        scrollTrigger: {
          trigger: element,
          start: "=2150",
          end: "=2250",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#agri-content"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          start: "=2300",
          end: "=2400",
          scrub: true,
        },
        onComplete: () => {
          gsap.fromTo(
            element.querySelector("#agri-content"),
            {
              opacity: 1,
            },
            {
              opacity: 0,
              scrollTrigger: {
                trigger: element,
                start: "2500",
                end: "2550",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            element.querySelector("#agri-heading"),
            {
              transform: "translateY(0)",
            },
            {
              transform: "translateY(100%)",
              scrollTrigger: {
                trigger: element,
                start: "2500",
                end: "2550",
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            element.querySelector("#agri-dots"),
            {
              height: "200px",
            },
            {
              height: "0px",
              scrollTrigger: {
                trigger: element,
                start: "2500",
                end: "2550",
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
        height: "200px",
        scrollTrigger: {
          trigger: element,
          start: "=2550",
          end: "=2650",
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
          start: "=2650",
          end: "=2750",
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
            <div id="restaurants-heading-container">
              <h3 id="restaurants-heading">Retail Industry</h3>
            </div>
            <ul id="restaurants-content">
              <li>Compare locations for new outlets</li>
              <li>Analyse sales impact on existing portfolio</li>
            </ul>
            <div id="restaurants-dots"></div>
          </div>
          <div id="retail-industry">
            <div id="retail-heading-container">
              <h3 id="retail-heading">Retail Industry</h3>
            </div>
            <ul id="retail-content">
              <li>Compare locations for new outlets</li>
              <li>Analyse sales impact on existing portfolio</li>
            </ul>
            <div id="retail-dots"></div>
          </div>
          <div id="bfsi-industry">
            <div id="bfsi-heading-container">
              <h3 id="bfsi-heading">Retail Industry</h3>
            </div>
            <ul id="bfsi-content">
              <li>Compare locations for new outlets</li>
              <li>Analyse sales impact on existing portfolio</li>
            </ul>
            <div id="bfsi-dots"></div>
          </div>
          <div id="building-industry">
            <div id="building-heading-container">
              <h3 id="building-heading">Retail Industry</h3>
            </div>
            <ul id="building-content">
              <li>Compare locations for new outlets</li>
              <li>Analyse sales impact on existing portfolio</li>
            </ul>
            <div id="building-dots"></div>
          </div>
          <div id="darkstores-industry">
            <div id="darkstores-heading-container">
              <h3 id="darkstores-heading">Retail Industry</h3>
            </div>
            <ul id="darkstores-content">
              <li>Compare locations for new outlets</li>
              <li>Analyse sales impact on existing portfolio</li>
            </ul>
            <div id="darkstores-dots"></div>
          </div>
          <div id="agri-industry">
            <div id="agri-heading-container">
              <h3 id="agri-heading">Retail Industry</h3>
            </div>
            <ul id="agri-content">
              <li>Compare locations for new outlets</li>
              <li>Analyse sales impact on existing portfolio</li>
            </ul>
            <div id="agri-dots"></div>
          </div>
          <div className="final-restaurants-animation">
            <div className="final-heading-container">
              <h3 className="final-heading">Muilti-unit Restaurants</h3>
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
                Darkstores & Micro-filfillment Centers
              </h3>
            </div>
            <div className="final-dots"></div>
          </div>
          <div className="final-agri-animation">
            <div className="final-heading-container">
              <h3 className="final-heading">Agri Infra</h3>
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
