import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Industry.css'

function Industry() {
    
    const [cards] = useState([
        {
            title: 'Customer Segmentation',
            image: '../images/slider-customer-segmentation.png'
        },
        {
            title: 'Footfall',
            image: '../images/slider-customer-segmentation.png'
        },
        {
            title: 'Behaviour',
            image: '../images/slider-customer-segmentation.png'
        }
    ])
    SwiperCore.use([Autoplay])

    return (
        <section className='industry-section'>
            <h2 className='industry-heading'>Data plugs helping your business</h2>
            <div className="carousel">
                <Swiper
                    spaceBetween={47}
                    slidesPerView='auto'
                    centeredSlides={true}
                    loop={true}
                    speed={400}
                    autoplay={{ delay: 3000 }}
                    className='slider'>
                        {cards.map((data, index) => (
                            <SwiperSlide className='swiper-slide' key={index}>
                                <div className="slider-content">
                                    <div className='slider-image'></div>
                                    <h2 className='slider-heading'>{data.title}</h2>
                                    <p className='slider-text'>Lorem ipsum dolor sit amet, consectetur adip scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p className='slider-link'>
                                        <a href="">Explore our live product</a>
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Industry