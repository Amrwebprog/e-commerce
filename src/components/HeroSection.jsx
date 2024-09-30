import React from 'react'
import 'swiper/css'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import imgone from '../assets/CD-GAMES-AR.jpg'
import swiperImg from '../assets/cd4b2b21-145f-42e6-93cc-8cda0b7fa7a2.jpg'
import imgtow from '../assets/gamepad-ar.jpg'
import imgthree from '../assets/Gaming-laptop-ar.jpg'
import imgfour from '../assets/Gamingacc-ar.jpg'
import swiper2 from '../assets/Swiper2.jpg'
import swiper3 from '../assets/swiper3.jpg'
import swiper4 from '../assets/swiper4.jpg'

const HeroSection = () => {
  return (
    <div className="col-12 container-xxl d-flex flex-row flex-wrap gap-2 p-2">
      <div className="col-12 col-lg-5 col-md-5 d-flex flex-row justify-content-center align-items-center flex-wrap">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          className="col-12 heroSwiper"
        >
          <SwiperSlide>
            <img className="col-12" src={swiperImg} alt="Slide Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="col-12" src={swiper2} alt="Slide Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="col-12" src={swiper3} alt="Slide Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="col-12" src={swiper4} alt="Slide Image" />
          </SwiperSlide>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
      <div className="col-12 offer-container col-lg-5 col-md-5 d-flex flex-row justify-content-center align-items-center flex-wrap">
        <div className="offers col-12 col-lg-6 p-1 col-md-6">
          <img className="col-12 h-100" src={imgone} alt="Offer 1" />
        </div>
        <div className="offers col-12 col-lg-6 p-1 col-md-6">
          <img className="col-12 h-100" src={imgtow} alt="Offer 2" />
        </div>
        <div className="offers col-12 col-lg-6 p-1 col-md-6">
          <img className="col-12 h-100" src={imgthree} alt="Offer 3" />
        </div>
        <div className="offers col-12 col-lg-6 p-1 col-md-6">
          <img className="col-12 h-100" src={imgfour} alt="Offer 4" />
        </div>
      </div>
    </div>
  )
}

export default React.memo(HeroSection)
