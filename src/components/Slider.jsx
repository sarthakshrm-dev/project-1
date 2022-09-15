import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Slider.css'

function Slider() {

    SwiperCore.use([Autoplay, Pagination, EffectCoverflow])
    
    const [cards] = useState([
        {
            title: 'Smartphone mobility & usage',
            desc: 'Location trails, APP usage, Phone models, Travel destinations'
        },
        {
            title: 'Satelite imagery',
            desc: 'Built-up, Nightlights, Green cover, Emissions'
        },
        {
            title: 'Govt. surveys & Administrative data',
            desc: 'Census, Income & Expenditure surveys, Govt. schemes, MIS data'
        },
        {
            title: 'Weblisted records',
            desc: 'Yellow page listings, Rental values, Hotel & restaurant listings'
        },
        {
            title: 'Establishment data',
            desc: 'Business centers, Commute stations, Recreation spots, F&B outlets, Retail outlets'
        },
        {
            title: 'Transaction data',
            desc: 'Digital payments volume & value, POS transactions'
        }
    ])

    return (
        <section className='industry-section'>
            <h2 className='industry-heading'>Data plugs helping your business</h2>
            <div className="carousel">
                <Swiper
                    spaceBetween={-47}
                    slidesPerView='auto'
                    centeredSlides={true}
                    loop={true}
                    speed={700}
                    grabCursor={true}
                    pagination={{
                        clickable: true
                    }}
                    effect='coverflow'     
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 80,
                        depth: 200,
                        modifier: 1,
                        slideShadows: false,
                    }}         
                    slideToClickedSlide={true}
                    autoplay={{ delay: 3000 }}
                    className='slider'>
                        {cards.map((data, index) => (
                            <SwiperSlide className='swiper-slide' key={index}>
                                <div className="slider-content">
                                    <div className='slider-image'></div>
                                    <h2 className='slider-heading'>{data.title}</h2>
                                    <p className='slider-text'>{data.desc}<br></br>+More</p>
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