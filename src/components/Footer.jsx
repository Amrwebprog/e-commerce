import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="bg-dark z-3">
      <div className="container-lg py-4 d-flex justify-content-center">
        <div className="d-flex flex-row col-12 flex-wrap row gy-5 gx-5 justify-content-center ">
          <div className="col-12 col-lg-3 col-md-3  d-flex flex-wrap ">
            <div className="footer-content d-flex flex-column col-12 gap-3">
              <div className="header-foter text-white">
                <h1>Logo</h1>
              </div>

              <div className="d-flex flex-column text-white gap-2 ">
                <Link className="text-decoration-none text-white mx-2" to="#">
                  About us
                </Link>
                <Link className="text-decoration-none text-white mx-2" to="#">
                  Contact us
                </Link>
                <Link className="text-decoration-none text-white mx-2" to="#">
                  Login or Register
                </Link>
                <Link className="text-decoration-none text-white mx-2" to="#">
                  Privacy Policy{' '}
                </Link>
                <Link className="text-decoration-none text-white mx-2" to="#">
                  Our Branches
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-3  d-flex flex-wrap ">
            <div className="footer-content d-flex flex-column col-12 gap-3">
              <div className="header-foter text-white">
                <h6>information</h6>
              </div>

              <div className="d-flex flex-column text-white gap-2 ">
                <Link className="text-decoration-none text-white mx-2" to="#">
                  About us
                </Link>
                <Link className="text-decoration-none text-white mx-2" to="#">
                  Contact us
                </Link>
                <Link className="text-decoration-none text-white mx-2" to="#">
                  Login or Register
                </Link>
                <Link className="text-decoration-none text-white mx-2" to="#">
                  Privacy Policy{' '}
                </Link>
                <Link className="text-decoration-none text-white mx-2" to="#">
                  Our Branches
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-3  d-flex flex-wrap ">
            <div className="footer-content d-flex flex-column col-12 gap-3">
              <div className="header-foter  text-white">
                <h6>Brands</h6>
              </div>
              <div className="d-flex flex-column text-white gap-2">
                <Link className="text-decoration-none text-white mx-2" to="#">
                  Lenovo
                </Link>
                <Link className="text-decoration-none text-white mx-2" to="#">
                  Hp
                </Link>
                <Link className="text-decoration-none text-white mx-2" to="#">
                  Dell
                </Link>
                <Link className="text-decoration-none text-white mx-2" to="#">
                  Intell
                </Link>
                <Link className="text-decoration-none text-white mx-2" to="#">
                  AMD
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-3  d-flex flex-wrap ">
            <div className="footer-content d-flex flex-column col-12 gap-3">
              <div className="header-foter  text-white">
                <h6>Categories</h6>
              </div>
              <div className="d-flex flex-column text-white  gap-2">
                <Link className="text-decoration-none text-white mx-2" to="#">
                  Laptops
                </Link>
                <Link className="text-decoration-none text-white mx-2" to="#">
                  Storages
                </Link>
                <Link className="text-decoration-none text-white mx-2" to="#">
                  Accessories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
