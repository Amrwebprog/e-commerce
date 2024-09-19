import Commentbox from '../../components/Commentbox'
import FeaturesMenue from '../../components/FeaturesMenue'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import ProductsDetails from '../../components/ProductsDetails'
import SideImages from '../../components/sideImages'
import './index.scss'

export default function ProductInfoPage() {
  return (
    <>
      <Header />
      <NavBar />
      <div className="col-12 d-flex ">
        <div className=" container-xxl d-flex flex-wrap flex-row col-12">
          <div className="Product-left col-12 col-lg-4 col-md-10">
            <SideImages />
          </div>
          <div className="Product-mid col-12 col-lg-6 col-md-12">
            <ProductsDetails />
          </div>
          <div className="Product-right col-12 col-lg-2 col-md-2">
            <FeaturesMenue />
          </div>
        </div>
      </div>
      <div className="col-12 d-flex">
        <div className="container-xxl d-flex flex-wrap flex-coulm">
          <Commentbox />
        </div>
      </div>
      <Footer />
    </>
  )
}
