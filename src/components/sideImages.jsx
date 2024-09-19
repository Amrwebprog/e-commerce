import { Link, useLocation } from 'react-router-dom'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import imag from '../assets/lap.jpg'

export default function SideImages() {
  const path = useLocation()

  let finalpath = path.pathname.replace('/', '')
  finalpath = finalpath.replace(/\//g, ' / ')
  finalpath = finalpath.replace('%20', ' ')

  return (
    <div className="col-12 d-flex flex-wrap flex-column p-2 gap-2">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {finalpath}
          </li>
        </ol>
      </nav>
      <div className="image-container d-flex flex-column">
        <img src={imag} alt="image" />
      </div>
      <div className="col-12 position-relative">
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          <SwiperSlide>
            <img src={imag} alt="Slide 1" className="w-100" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imag} alt="Slide 2" className="w-100" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imag} alt="Slide 3" className="w-100" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imag} alt="Slide 4" className="w-100" />
          </SwiperSlide>
        </Swiper>

        <div className="d-flex p-1 justify-content-center align-items-center fs-5 bg-secondary bg-gradient"></div>
        <div className="d-flex p-1 justify-content-center align-items-center fs-5 bg-secondary bg-gradient"></div>
      </div>
    </div>
  )
}
