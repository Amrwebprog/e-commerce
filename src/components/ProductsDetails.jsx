import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from './GlobalContext'

export default function ProductsDetails() {
  const { name } = useParams()
  const { allProducts } = useContext(GlobalContext)
  const [MyProduct, setMyProduct] = useState([])

  useEffect(() => {
    const foundProduct = allProducts.filter(
      (el) => el.product_name.toLowerCase() === name.toLowerCase()
    )
    setMyProduct(foundProduct)
  }, [name, allProducts])

  console.log(MyProduct)

  return (
    <>
      {MyProduct.length > 0 ? (
        <div className="HandleText col-12 d-flex flex-wrap flex-column p-2 gap-4">
          {MyProduct[0].product_name}
          <div className="d-flex flex-row gap-3">
            <a href="" className="text-decoration-none ">
              review |
            </a>
            <div className="Comment rounded  d-flex align-items-center">
              <a href="" className="text-decoration-none text-white">
                <p className="mb-0  ">write a review</p>
              </a>
            </div>
          </div>
          <div className="col-12 d-flex flex-row justify-content-between align-items-center">
            <div className="d-flex flex-row gap-3">
              <h1 className="text-info price m-0">{MyProduct[0].price} LE</h1>
              <div className="d-flex justify-content-center align-items-center MyBadge ">
                <p className="text-white m-0 bg-success px-3 py-1 rounded">
                  shipped by (logo)
                </p>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center gap-3">
              <p className="m-0">Availablite : </p>
              {MyProduct[0].stock > 0 ? (
                <div className="d-flex align-items-center flex-row gap-2">
                  <FontAwesomeIcon
                    className="text-success"
                    icon={faCircleCheck}
                  />
                  <p className="m-0 text-info">
                    In Stock{' '}
                    <span className="text-danger m-0">
                      only {MyProduct[0].stock} item left
                    </span>
                  </p>
                </div>
              ) : (
                <div className="d-flex align-items-center flex-row gap-2">
                  <FontAwesomeIcon className="text-danger" icon={faXmark} />
                  <p className="m-0 text-info">
                    Out of Stock{' '}
                    <span className="text-danger m-0">
                      only {MyProduct[0].stock} item left
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="rowline bg-secondary"></div>
          <div className="d-flex flex-row gap-2">
            <div className="height-line bg-info "></div>
            <div className="d-flex flex-column gap-4">
              <div>
                <h1 className="">brand : {MyProduct[0].brand}</h1>
              </div>
              <div className="d-flex flex-column ">
                <h1 className="">model : {MyProduct[0].product_name}</h1>
                <h1 className="">seller : logo</h1>
                <h1>description : {MyProduct[0].description}</h1>
                <h1>Specifications : {MyProduct[0].Specifications}</h1>
              </div>
              <div className="fourm d-flex flex-column gap-2 col-12 p-2">
                <button className="col-12 btn btn-info text-white fw-bold">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>This Product is Not More Available</p>
      )}
    </>
  )
}
