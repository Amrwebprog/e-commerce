import React from 'react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import img from '../assets/cd4b2b21-145f-42e6-93cc-8cda0b7fa7a2.jpg'

const AutoSwiper = ({ swiperType, swiperData }) => {
  if (!swiperData || swiperData.length === 0) {
    return <p>No data available for this Swiper</p>
  }

  let filteredData = []

  switch (swiperType) {
    case 'offer':
      filteredData = swiperData.filter((el) => el.offer > 0)
      break

    case 'NewArive':
      filteredData = swiperData.filter((el) => el.new_arive)
      break

    case 'category':
      filteredData = swiperData
      break

    default:
      filteredData = swiperData
  }

  return (
    <Swiper
      className="categoriesSwiper"
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation
      spaceBetween={30}
      slidesPerView={3}
      pagination={{ clickable: true, el: '.swiper-pagination' }}
    >
      {filteredData.map((el, index) => (
        <SwiperSlide key={index} className="category-slide">
          <div className="category-item">
            <img
              src={img}
              className="category-icon"
              alt={el?.product_name || 'Unnamed Product'}
            />
            <p>{el?.product_name || 'Unnamed Product'}</p>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
    </Swiper>
  )
}

export default React.memo(AutoSwiper)
