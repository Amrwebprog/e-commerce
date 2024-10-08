import { faGrip, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'
import { GlobalContext } from './GlobalContext'

export default function WorkSpace() {
  const { allProducts, filterBrand, hideOutOfStock, minPrice, maxPrice } =
    useContext(GlobalContext)
  const { cat } = useParams() // الحصول على الفئة من الـ URL
  const [row, setRow] = useState(true)

  // دالة للحصول على المنتجات التي تمر من خلال الفلاتر
  const getFilteredProducts = () => {
    let filteredProducts = allProducts

    // تصفية بناءً على الفئة
    if (cat && cat.toLowerCase() === 'offers') {
      filteredProducts = filteredProducts.filter((el) => el.offer > 0)
    } else if (cat && cat.toLowerCase() !== 'products') {
      // التحقق من أن الفئة موجودة وليست 'products'
      filteredProducts = filteredProducts.filter(
        (el) => el.Categores.toLowerCase() === cat.toLowerCase()
      )
    }

    // تصفية بناءً على العلامة التجارية
    if (filterBrand.length > 0) {
      filteredProducts = filteredProducts.filter((el) =>
        filterBrand.includes(el.brand.toLowerCase())
      )
    }

    // تصفية بناءً على توفر المخزون
    if (hideOutOfStock) {
      filteredProducts = filteredProducts.filter((el) => el.stock > 0)
    }

    // تصفية بناءً على السعر
    if (minPrice !== undefined && maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (el) => el.price >= minPrice && el.price <= maxPrice
      )
    }

    return filteredProducts
  }

  // المنتجات المفلترة
  const filteredProducts = getFilteredProducts()

  // تبديل عرض المنتجات (عرض شبكي أو عرض عمودي)
  const handleToggleRow = () => {
    setRow((prevRow) => !prevRow)
  }

  return (
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
            row ? 'text-white bg-primary p-1' : 'text-white bg-secondary p-1'
          }
          icon={faGrip}
          onClick={handleToggleRow}
        />
        <FontAwesomeIcon
          id="myIcon"
          className={
            !row ? 'text-white bg-primary p-1' : 'text-white bg-secondary p-1'
          }
          icon={faList}
          onClick={handleToggleRow}
        />
      </div>

      <div
        className={`d-flex ${
          row ? 'flex-row' : 'flex-column'
        } flex-wrap col-12 row g-3`}
      >
        {filteredProducts.length > 0 ? (
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
          <h1 className="text-danger">هذه الفئة لم تعد متاحة</h1>
        )}
      </div>
    </div>
  )
}
