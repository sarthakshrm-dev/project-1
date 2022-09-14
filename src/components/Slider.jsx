import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Slider.css'

function Slider() {
    
    const [cards] = useState([
        {
            title: 'Smartphone mobility & usage',
            desc: 'Location trails, APP usage, Phone models, Travel destinations + More'
        },
        {
            title: 'Satelite imagery',
            desc: 'Built-up, Nightlights, Green cover, Emissions + More'
        },
        {
            title: 'Govt. surveys & Administrative data',
            desc: 'Census, Income & Expenditure surveys, Govt. schemes, MIS data + More'
        },
        {
            title: 'Weblisted records',
            desc: 'Yellow page listings, Rental values, Hotel & restaurant listings + More'
        },
        {
            title: 'Establishment data',
            desc: 'Business centers, Commute stations, Recreation spots, F&B outlets, Retail outlets + More '
        },
        {
            title: 'Transaction data',
            desc: 'Digital payments volume & value, POS transactions + More '
        }
    ])
    SwiperCore.use([Autoplay])
    SwiperCore.use([Pagination])

    return (
        <section className='industry-section'>
            <h2 className='industry-heading'>Data plugs helping your business</h2>
            <div className="carousel">
                <Swiper
                    spaceBetween={-47}
                    slidesPerView={1}
                    centeredSlides={true}
                    centerInsufficientSlides={true}
                    loop={true}
                    speed={1000}
                    allowTouchMove={true}
                    allowSlideNext={true}
                    allowSlidePrev={true}
                    centeredSlidesBounds={true}
                    pagination={{
                        clickable: true
                    }}                    
                    autoplay={{ delay: 3000 }}
                    className='slider'>
                        {cards.map((data, index) => (
                            <SwiperSlide className='swiper-slide' key={index}>
                                <div className="slider-content">
                                    <div className='slider-image'></div>
                                    <h2 className='slider-heading'>{data.title}</h2>
                                    <p className='slider-text'>{data.desc}</p>
                                    <p className='slider-link'>
                                        <a href="">Request a demo</a>
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Slider