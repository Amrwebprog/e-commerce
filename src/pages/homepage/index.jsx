import { memo, useContext } from 'react'
import { Link } from 'react-router-dom'
import AdsLong from '../../components/AdsLong'
import AutoSwiper from '../../components/AutoSwiper'
import Footer from '../../components/Footer'
import { GlobalContext } from '../../components/GlobalContext'
import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import NavBar from '../../components/NavBar'
import WingsAds from '../../components/WingsAds'
import './index.scss'

const HomePage = () => {
  const { allProducts } = useContext(GlobalContext)

  const catSwiper = [
    ...new Set(allProducts.map((cat) => cat.Categores || 'Unknown Category')),
  ]

  return (
    <>
      <WingsAds />
      <Header />
      <NavBar />
      <div className="col-12 section-one d-flex flex-wrap">
        <HeroSection />
      </div>

      <div className="col-12 section-tow d-flex flex-wrap mt-2">
        <div className="container-xxl d-flex flex-column gap-2">
          <div className="d-flex justify-content-between">
            <h1 className="m-0">Shop by categories</h1>
            <Link to={'/products'} className="btn btn-dark">
              Browse All
            </Link>
          </div>
          <div id="line" className="col-12">
            <div id="line-tow" className="col-3"></div>
          </div>
          <div className="col-12">
            <AutoSwiper swiperType="category" swiperData={catSwiper} />
          </div>
        </div>
      </div>

      <div className="col-12 section-three d-flex flex-wrap mt-2">
        <div className="container-xxl d-flex flex-column gap-2">
          <div className="d-flex justify-content-between">
            <h1 className="m-0">Special offer</h1>
            <Link to={'products/offers'}>
              <button className="btn btn-dark">Browse All</button>
            </Link>
          </div>
          <div id="line" className="col-12">
            <div id="line-tow" className="col-3"></div>
          </div>
          <div className="col-12">
            <AutoSwiper swiperType="offer" swiperData={allProducts} />
          </div>
        </div>
      </div>

      <div className="col-12 section-three d-flex flex-wrap mt-2">
        <div className="container-xxl d-flex flex-column gap-2">
          <div className="d-flex justify-content-between">
            <h1 className="m-0">New Arrival</h1>
            <button className="btn btn-dark">Browse All</button>
          </div>
          <div id="line" className="col-12">
            <div id="line-tow" className="col-3"></div>
          </div>
          <div className="col-12">
            <AutoSwiper swiperType="NewArive" swiperData={allProducts} />
          </div>
        </div>
      </div>
      <AdsLong />

      <div className="col-12 section-tow d-flex flex-wrap mt-2">
        <div className="container-xxl d-flex flex-column gap-2">
          {catSwiper.map((category, index) => {
            const productsByCategory = allProducts.filter(
              (product) => product.Categores === category
            )
            return (
              <div key={index}>
                <div className="category-section">
                  <div className="d-flex justify-content-between">
                    <h1 className="m-2">{category}</h1>
                    <button className="btn btn-dark">Browse All</button>
                  </div>
                  <div id="line" className="col-12">
                    <div id="line-tow" className="col-3"></div>
                  </div>
                  <AutoSwiper
                    swiperType="category"
                    swiperData={productsByCategory}
                  />
                </div>

                {index % 2 === 1 && <AdsLong />}
              </div>
            )
          })}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default memo(HomePage)
