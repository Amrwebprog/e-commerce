import { faGrip, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'
import { GlobalContext } from './GlobalContext'

export default function WorkSpace() {
  const { allProducts, filterBrand, hideOutOfStock, minPrice, maxPrice } =
    useContext(GlobalContext)
  const { cat } = useParams()
  const [row, setRow] = useState(true)
  let filteredProducts = !cat
    ? allProducts
    : allProducts.filter(
        (el) => el.Categores.toLowerCase() == cat.toLowerCase()
      )

  // فلترة المنتجات بناءً على العلامة التجارية
  if (filterBrand.length > 0) {
    filteredProducts = filteredProducts.filter((el) =>
      filterBrand.includes(el.brand.toLowerCase())
    )
  }

  // فلترة المنتجات بناءً على المخزون
  if (hideOutOfStock) {
    filteredProducts = filteredProducts.filter((el) => el.stock > 0)
  }

  // فلترة المنتجات بناءً على السعر
  if (minPrice !== undefined && maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter(
      (el) => el.price >= minPrice && el.price <= maxPrice
    )
  }

  return (
    <>
      <div className="d-flex flex-column gap-4 col-12 p-4">
        <div className="d-flex flex-column gap-2">
          <h2 className="mb-0">{cat}</h2>
          <div id="line" className="col-12">
            <div id="line-tow" className="col-3"></div>
          </div>
        </div>
        <div className="d-flex flex-row gap-1">
          <FontAwesomeIcon
            id="myIcon"
            className={
              !row ? 'text-white bg-secondary p-1' : 'text-white bg-primary p-1'
            }
            icon={faGrip}
            onClick={() => {
              !row ? setRow(!row) : null
            }}
          />
          <FontAwesomeIcon
            id="myIcon"
            className={
              row ? 'text-white bg-secondary p-1' : 'text-white bg-primary p-1'
            }
            icon={faList}
            onClick={() => {
              row ? setRow(!row) : null
            }}
          />
        </div>
        <div
          className={
            row
              ? 'd-flex flex-row flex-wrap col-12 row g-3'
              : 'd-flex flex-column flex-wrap col-12 row g-3'
          }
        >
          {' '}
          {/* "d-flex flex-row flex-wrap col-12 row g-3" */}
          {filteredProducts.length != 0 ? (
            filteredProducts.map((el, index) => (
              <Card
                display={row}
                key={index}
                productName={el.product_name}
                brand={el.brand}
                price={el.price}
                description={el.description}
                Specifications={el.Specifications}
              />
            ))
          ) : (
            <h1 className="text-danger">هذة الفئة لم تعد متاحة</h1>
          )}
        </div>
      </div>
    </>
  )
}
