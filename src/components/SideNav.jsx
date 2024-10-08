import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from './GlobalContext'

export default function SideNav() {
  const { sideNavToggle, setSideNavToggle, allProducts, setFilterBrand } =
    useContext(GlobalContext)

  const [filterProducts, setFilterProducts] = useState([])
  const [showCats, setShowCats] = useState(false)
  const [categories, setCategories] = useState([])
  const ToggleCats = () => {
    setShowCats(!showCats)
  }
  const ToggleSideNav = () => {
    setSideNavToggle(!sideNavToggle)
  }

  const getData = async () => {
    const product = await allProducts
    setFilterProducts(product)

    // استخراج الفئات الفريدة
    const uniqueCategories = [...new Set(product.flatMap((el) => el.Categores))]
    setCategories(uniqueCategories)
  }
  const handleBrandClick = (brand) => {
    setFilterBrand([brand.toLowerCase()])
  }
  const handleCatClick = () => {
    setFilterBrand([])
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div
      id="SideNavBar"
      className="bg-dark d-none text-white position-fixed overflow-auto start-0 top-0 h-50 col-9 z-2 p-4"
    >
      <button
        id="CloseNavSide"
        onClick={ToggleSideNav}
        className="btn-close btn-close-white position-absolute "
      ></button>
      <div className="d-flex flex-column align-items-center gap-4 mt-5">
        <button className="btn btn-info" onClick={ToggleCats}>
          Categories
        </button>

        {showCats && (
          <div
            id="sidNavCats"
            className="col-12 bg-light text-dark d-flex flex-column gap-4"
          >
            {categories.map((category, idx) => (
              <div key={idx} className="category-section">
                <Link
                  to={`/products/${category}`}
                  onClick={handleCatClick}
                  className="fs-2 text-uppercase mb-3 btn btn-primary "
                >
                  {category}
                </Link>
                <ul className="list-unstyled">
                  {[
                    ...new Set(
                      filterProducts
                        .filter((product) =>
                          product.Categores.includes(category)
                        )
                        .map((product) => product.brand)
                    ),
                  ].map((brand, i) => (
                    <li
                      key={i}
                      className="fs-4 mb-2 d-flex justify-content-center"
                    >
                      <Link
                        to={`/products/${category}`}
                        onClick={() => handleBrandClick(brand)}
                        className="text-decoration-none text-white btn btn-dark p-2 fs-2 col-10"
                      >
                        {brand}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <Link className="text-decoration-none text-white btn" to={'/'}>
          <h2 className="fs-3">Home</h2>
        </Link>
        <Link className="text-decoration-none text-white btn" to={'/aboutus'}>
          <h2 className="fs-3">About Us</h2>
        </Link>
        <Link className="text-decoration-none text-white btn" to={'/contactus'}>
          <h2 className="fs-3">Contact Us</h2>
        </Link>
      </div>
    </div>
  )
}
