import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Commentbox from '../../components/Commentbox'
import FeaturesMenue from '../../components/FeaturesMenue'
import Footer from '../../components/Footer'
import { GlobalContext } from '../../components/GlobalContext'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import ProductsDetails from '../../components/ProductsDetails'
import SideImages from '../../components/sideImages'
import './index.scss'

export default function ProductInfoPage() {
  const { name } = useParams()
  const { allProducts } = useContext(GlobalContext)
  const [MyProduct, setMyProduct] = useState(null)

  useEffect(() => {
    const foundProduct = allProducts.find(
      (el) => el.product_name.toLowerCase() === name.toLowerCase()
    )
    console.log('المنتج الموجود:', foundProduct) // التحقق من المنتج الموجود
    setMyProduct(foundProduct ? [foundProduct] : [])
  }, [name, allProducts])

  return (
    <>
      <Header />
      <NavBar />
      <div className="col-12 d-flex ">
        <div className="container-xxl d-flex flex-wrap flex-row col-12">
          <div className="Product-left col-12 col-lg-4 col-md-10">
            <SideImages />
          </div>
          <div className="Product-mid col-12 col-lg-6 col-md-12">
            {MyProduct && MyProduct.length > 0 ? (
              <ProductsDetails MyProduct={MyProduct} />
            ) : (
              <div style={{ textAlign: 'center', padding: '50px' }}>
                <h2>هذا المنتج غير متوفر</h2>
              </div>
            )}
          </div>
          <div className="Product-right col-12 col-lg-2 col-md-2">
            <FeaturesMenue />
          </div>
        </div>
      </div>
      <div className="col-12 d-flex">
        <div className="container-xxl d-flex flex-wrap flex-column">
          <Commentbox MyProduct={MyProduct} /> {/* تمرير كائن المنتج الفردي */}
        </div>
      </div>
      <Footer />
    </>
  )
}
