import { useContext, useEffect } from 'react'
import AutoSwiper from '../../components/AutoSwiper'
import Footer from '../../components/Footer'
import { GlobalContext } from '../../components/GlobalContext'
import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import NavBar from '../../components/NavBar'
import './index.scss'
export default function HomePage() {
  const { allProducts } = useContext(GlobalContext)
  const catSwiper = [
    ...new Set(
      allProducts.map((cat) => {
        return cat.Categores
      })
    ),
  ]
  useEffect(() => {
    console.log(catSwiper)
  }, [])
  return (
    <>
      <Header />
      <NavBar />
      <div className="col-12 section-one d-flex flex-wrap">
        <HeroSection />
      </div>
      <div className="col-12 section-tow d-flex flex-wrap mt-2">
        <div className="container-xxl d-flex flex-column gap-2">
          <h1 className="m-0">Shop by categories </h1>
          <div id="line" className="col-12">
            <div id="line-tow" className="col-3"></div>
          </div>
          <div className="col-12">
            <AutoSwiper swiperType={'cat'} swiperData={catSwiper} />
          </div>
        </div>
      </div>
      <div className="col-12 section-three d-flex flex-wrap mt-2">
        <div className="container-xxl d-flex flex-column gap-2">
          <h1 className="m-0">Special Offer</h1>
          <div id="line" className="col-12">
            <div id="line-tow" className="col-3"></div>
          </div>
          <div className="col-12">
            <AutoSwiper swiperType={'offer'} swiperData={allProducts} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
