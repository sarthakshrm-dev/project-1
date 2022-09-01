import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Industry.css'

function Industry() {
    
    const [cards] = useState(['https://sitezeus.com/images/home/hero-slider/sitezeus_website_hompage_redesign_carousel-content_CSv2_solutions-suite.jpg', 'https://sitezeus.com/images/home/hero-slider/sitezeus_website_hompage_redesign_carousel-content_CSv2_grow-smart.jpg', 'https://1763074.fs1.hubspotusercontent-na1.net/hubfs/1763074/Hosted%20video/sitezeus_website_homepage_carousel-video-loop.mp4', 'https://sitezeus.com/images/home/hero-slider/sitezeus_website_hompage_redesign_carousel-content_CSv2_sales-impact.jpg', 'https://sitezeus.com/images/home/hero-slider/sitezeus_website_hompage_redesign_carousel-content_CSv2_olympus-data.jpg','https://sitezeus.com/images/home/hero-slider/sitezeus_website_hompage_redesign_carousel-content_CSv2_olympus-data.jpg'])
    SwiperCore.use([Autoplay])
    SwiperCore.use([Pagination])

    return (
        <section className='industry-section'>
            <h2>Industry</h2>
            <div className="carousel">
                <Swiper
                    spaceBetween={-400}
                    slidesPerView={2}
                    centeredSlides={true}
                    loop={true}
                    pagination={{
                        clickable: true
                    }}
                    speed={400}
                    autoplay={{ delay: 3000 }}
                    className='slider'>
                        {cards.map((data, index) => (
                            <SwiperSlide className='swiper-slide' key={index} />
                        ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Industry