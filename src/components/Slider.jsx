import React, { useState } from "react";
import DemoForm from "./DemoForm";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Slider.css";

function Slider() {
  SwiperCore.use([Autoplay, Pagination, EffectCoverflow]);

  const [cards] = useState([
    {
      title: "Smartphone mobility & usage",
      desc: "Location trails, APP usage, Phone models, Travel destinations",
      image: "../images/Slider/01-SMU.png",
    },
    {
      title: "Satelite imagery",
      desc: "Built-up, Nightlights, Green cover, Emissions",
      image: "../images/Slider/02-SI.png",
    },
    {
      title: "Govt. surveys & Administrative data",
      desc: "Census, Income & Expenditure surveys, Govt. schemes, MIS data",
      image: "../images/Slider/03-GSA.png",
    },
    {
      title: "Weblisted records",
      desc: "Yellow page listings, Rental values, Hotel & restaurant listings",
      image: "../images/Slider/04-WL.png",
    },
    {
      title: "Establishment data",
      desc: "Business centers, Commute stations, Recreation spots, F&B outlets, Retail outlets",
      image: "../images/Slider/05-ED.png",
    },
    {
      title: "Transaction data",
      desc: "Digital payments volume & value, POS transactions",
      image: "../images/Slider/06-TD.png",
    },
  ]);
  const [demo, setDemo] = useState(false);

  function handleClick() {
    setDemo(true);
  }

  return (
    <section className="slider-section" id="data">
      <h2 className="slider-section-heading">
        Data plugs helping your business
      </h2>
      <div className="carousel">
        <Swiper
          spaceBetween={-47}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          speed={700}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          slideToClickedSlide={true}
          autoplay={{ delay: 3000 }}
          className="slider"
        >
          <SwiperSlide className="swiper-slide">
            <div className="slider-content">
              <div className="slider-image1"></div>
              <h2 className="slider-heading">{cards[0].title}</h2>
              <p className="slider-text">
                {cards[0].desc}
                <br></br>+More
              </p>
              <p className="slider-link">
                <button onClick={handleClick}>Request a demo</button>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slider-content">
              <div className="slider-image2"></div>
              <h2 className="slider-heading">{cards[1].title}</h2>
              <p className="slider-text">
                {cards[1].desc}
                <br></br>+More
              </p>
              <p className="slider-link">
                <button onClick={handleClick}>Request a demo</button>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slider-content">
              <div className="slider-image3"></div>
              <h2 className="slider-heading">{cards[2].title}</h2>
              <p className="slider-text">
                {cards[2].desc}
                <br></br>+More
              </p>
              <p className="slider-link">
                <button onClick={handleClick}>Request a demo</button>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slider-content">
              <div className="slider-image4"></div>
              <h2 className="slider-heading">{cards[3].title}</h2>
              <p className="slider-text">
                {cards[3].desc}
                <br></br>+More
              </p>
              <p className="slider-link">
                <button onClick={handleClick}>Request a demo</button>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slider-content">
              <div className="slider-image5"></div>
              <h2 className="slider-heading">{cards[4].title}</h2>
              <p className="slider-text">
                {cards[4].desc}
                <br></br>+More
              </p>
              <p className="slider-link">
                <button onClick={handleClick}>Request a demo</button>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slider-content">
              <div className="slider-image6"></div>
              <h2 className="slider-heading">{cards[5].title}</h2>
              <p className="slider-text">
                {cards[5].desc}
                <br></br>+More
              </p>
              <p className="slider-link">
                <button onClick={handleClick}>Request a demo</button>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {demo && <DemoForm setDemo={setDemo} />}
    </section>
  );
}

export default Slider;
