import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from './GlobalContext'

export default function SideNav() {
  const { sideNavToggle, setSideNavToggle } = useContext(GlobalContext)
  const [showCats, setShowCats] = useState(false)
  const ToggleCats = () => {
    setShowCats(!showCats)
  }
  const ToggleSideNav = () => {
    setSideNavToggle(!sideNavToggle)
  }
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
            <div className="category-section">
              <h2 className="fs-2 text-uppercase mb-3">Laptops</h2>
              <ul className="list-unstyled">
                <li className="fs-4 mb-2">Hp</li>
                <li className="fs-4 mb-2">Dell</li>
                <li className="fs-4 mb-2">Lenovo</li>
              </ul>
            </div>

            <div className="category-section">
              <h2 className="fs-2 text-uppercase mb-3">Storage</h2>
              <ul className="list-unstyled">
                <li className="fs-4 mb-2">SSD</li>
                <li className="fs-4 mb-2">HDD</li>
                <li className="fs-4 mb-2">External Drives</li>
              </ul>
            </div>

            <div className="category-section">
              <h2 className="fs-2 text-uppercase mb-3">Accessories</h2>
              <ul className="list-unstyled">
                <li className="fs-4 mb-2">Mouses</li>
                <li className="fs-4 mb-2">Keyboards</li>
                <li className="fs-4 mb-2">Headphones</li>
              </ul>
            </div>
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
