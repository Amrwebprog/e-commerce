import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GlobalContext } from './GlobalContext'

export default function FilterMenue() {
  const {
    allProducts,
    filterBrand,
    setFilterBrand,
    hideOutOfStock,
    setHideOutOfStock,
    maxPrice,
    setMaxPrice,
    minPrice,
    setMinPrice,
  } = useContext(GlobalContext)

  const location = useLocation()
  const newPathname = location.pathname.replace(/^\//, '')
  const finalPathname = newPathname.replace(/\//g, ' / ')
  const [showStock, setShowStock] = useState(false)
  const [showBrand, setShowBrand] = useState(false)
  const [showPrice, setShowPrice] = useState(false)
  const [currentMinPrice, setCurrentMinPrice] = useState(minPrice)

  const cat = location.pathname.split('/')
  const catlength = cat.length
  const category = cat[catlength - 1]

  useEffect(() => {
    if (allProducts.length > 0) {
      const filteredProducts = allProducts.filter(
        (el) =>
          !category || // تأكد من أن الـ category ليس فارغًا
          category.toLowerCase() === 'products' ||
          el.Categores.toLowerCase() === category.toLowerCase()
      )
      if (filteredProducts.length > 0) {
        const max = Math.max(...filteredProducts.map((el) => el.price))
        setMaxPrice(max)
      }
    }
  }, [allProducts, category, setMaxPrice])

  useEffect(() => {
    if (allProducts.length > 0) {
      const filteredProducts = allProducts.filter(
        (el) =>
          !category || // تأكد من أن الـ category ليس فارغًا
          category.toLowerCase() === 'products' ||
          el.Categores.toLowerCase() === category.toLowerCase()
      )
      if (filteredProducts.length > 0) {
        const min = Math.min(...filteredProducts.map((el) => el.price))
        setMinPrice(min)
        setCurrentMinPrice(min)
      }
    }
  }, [allProducts, category, setMinPrice])

  const handleRangeChange = (event) => {
    const value = parseInt(event.target.value, 10)
    setCurrentMinPrice(value)
  }

  const handleRangeFinalChange = () => {
    setMinPrice(currentMinPrice)
  }

  const toggleBrand = (brandName) => {
    setFilterBrand((prevBrands) => {
      if (prevBrands.includes(brandName)) {
        return prevBrands.filter((brand) => brand !== brandName)
      } else {
        return [...prevBrands, brandName]
      }
    })
  }

  const toggleStock = () => {
    setHideOutOfStock(!hideOutOfStock)
  }

  return (
    <>
      <div className="col-12 d-flex flex-column">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {finalPathname}
            </li>
          </ol>
        </nav>
        <div className="col-12 d-flex flex-column gap-1">
          <div className="col-12 border d-flex align-items-center gap-2">
            <div
              id="openFilter"
              className="p-1 bg-primary col-2 d-flex justify-content-center align-items-center"
              onClick={() => setShowBrand(!showBrand)}
            >
              +
            </div>
            <h2 className="m-0">Brand</h2>
          </div>
          {showBrand
            ? [
                ...new Set(
                  allProducts
                    .filter(
                      (product) =>
                        (!category || // التحقق من الفئة
                          category.toLowerCase() === 'products' ||
                          product.Categores.toLowerCase() ===
                            category.toLowerCase()) &&
                        (!hideOutOfStock || product.stock > 0)
                    )
                    .map((brand) => brand.brand.toLowerCase())
                ),
              ].map((brandName) => (
                <div
                  key={brandName}
                  className="form-check d-flex align-items-center border p-2 mb-2 brand-item col-12"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    const checkbox = document.getElementById(
                      `brand-${brandName}`
                    )
                    checkbox.checked = !checkbox.checked
                    toggleBrand(brandName)
                  }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={brandName}
                    id={`brand-${brandName}`}
                    onClick={(e) => e.stopPropagation()}
                    checked={filterBrand.includes(brandName)}
                    onChange={() => toggleBrand(brandName)}
                  />
                  <label
                    onClick={() => {
                      const checkbox = document.getElementById(
                        `brand-${brandName}`
                      )
                      checkbox.checked = !checkbox.checked
                    }}
                    className="form-check-label ms-2"
                    htmlFor={`brand-${brandName}`}
                  >
                    {brandName}
                  </label>
                </div>
              ))
            : null}

          <div className="col-12 border d-flex align-items-center gap-2">
            <div
              id="openFilter"
              className="p-1 bg-primary col-2 d-flex justify-content-center align-items-center"
              onClick={() => setShowStock(!showStock)}
            >
              +
            </div>
            <h2 className="m-0">Stock</h2>
          </div>
          {showStock ? (
            <div
              className="border d-flex flex-row p-2 align-items-center gap-2"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                const checkbox = document.getElementById('Stock')
                checkbox.checked = !checkbox.checked
                toggleStock()
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                name="Stock"
                id="Stock"
                onClick={(e) => e.stopPropagation()}
                checked={hideOutOfStock}
              />
              <h1 className="m-0">Hide Out Of Stock</h1>
            </div>
          ) : null}

          <div className="col-12 border d-flex align-items-center gap-2">
            <div
              id="openFilter"
              className="p-1 bg-primary col-2 d-flex justify-content-center align-items-center"
              onClick={() => setShowPrice(!showPrice)}
            >
              +
            </div>
            <h2 className="m-0">Price</h2>
          </div>
          {showPrice ? (
            <div className="col-12">
              <div className="d-flex flex-row col-12 justify-content-between">
                <p className="m-0">{currentMinPrice}</p>
                <p className="m-0">{maxPrice}</p>
              </div>
              <input
                type="range"
                className="col-12"
                min={minPrice}
                max={maxPrice}
                value={currentMinPrice}
                onChange={handleRangeChange}
                onMouseUp={handleRangeFinalChange}
                onTouchEnd={handleRangeFinalChange}
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}
