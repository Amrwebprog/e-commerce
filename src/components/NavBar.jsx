import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from './GlobalContext'
import SideNav from './SideNav'

export default function NavBar() {
  const { sideNavToggle, setSideNavToggle, setFilterBrand } =
    useContext(GlobalContext)
  const [productData, setProductData] = useState([])
  const [categories, setCategories] = useState([])

  const ToggleSideNav = () => {
    setSideNavToggle(!sideNavToggle)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:1337/api/products')
        setProductData(res.data.data)

        const uniqueCategories = [
          ...new Set(res.data.data.flatMap((item) => item.Categores)),
        ]
        setCategories(uniqueCategories)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  const handleBrandClick = (brand) => {
    setFilterBrand([brand.toLowerCase()])
  }

  const handleCatClick = () => {
    setFilterBrand([])
  }

  return (
    <>
      <div className="bg-dark col-12 p-2 z-3">
        <div className="d-flex flex-row justify-content-between align-items-center p-2 container-lg">
          <div id="navbar" className="d-flex flex-row gap-5">
            <li className="nav-item dropdown d-flex">
              <Link
                className="nav-link dropdown-toggle text-decoration-none text-light"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </Link>
              <div
                className="dropdown-menu p-3 flex-wrap"
                aria-labelledby="navbarDropdown"
              >
                <div className="d-flex flex-wrap gap-5">
                  {categories.map((category, index) => (
                    <div key={index} className="dropdown-category col-sm-6">
                      <Link
                        to={`/products/${category}`}
                        className="dropdown-item fw-bold mb-2 animate__animated animate__fadeInDown"
                        onClick={handleCatClick}
                      >
                        {category}
                      </Link>
                      <ul>
                        {' '}
                        {/* إضافة <ul> هنا لاحتواء عناصر <li> الخاصة بالعلامات التجارية */}
                        {[
                          ...new Set(
                            productData
                              .filter(
                                (product) => product.Categores === category
                              )
                              .map((product) => product.brand)
                          ),
                        ].map((brand, i) => (
                          <li key={i}>
                            {' '}
                            {/* الآن <li> داخل <ul> مما يحل المشكلة */}
                            <Link
                              onClick={() => handleBrandClick(brand)}
                              className="dropdown-item animate__animated animate__lightSpeedInLeft"
                              to={`/products/${category}`}
                            >
                              {brand}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>

            <Link className="text-decoration-none text-light fs-5" to="/">
              Home
            </Link>
            <Link
              className="text-decoration-none text-light fs-5"
              to="/aboutus"
            >
              About us
            </Link>
            <Link
              className="text-decoration-none text-light fs-5"
              to="/Contactus"
            >
              Contact us
            </Link>
          </div>

          <div
            id="mobnav"
            className="d-none flex-row justify-content-between col-12 gap-5"
          >
            <div className="text-white">
              <h1>Logo</h1>
            </div>
            <div className="menue" onClick={ToggleSideNav}>
              <FontAwesomeIcon className="text-white fs-1" icon={faBars} />
            </div>
          </div>
        </div>
      </div>
      {sideNavToggle && <SideNav />}
    </>
  )
}
