import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from './GlobalContext'
import SideNav from './SideNav'

export default function NavBar() {
  const { sideNavToggle, setSideNavToggle } = useContext(GlobalContext)
  const ToggleSideNav = () => {
    setSideNavToggle(!sideNavToggle)
  }
  return (
    <>
      <div className="bg-dark col-12 p-2 position-fixed z-3">
        <div className="d-flex flex-row justify-content-between align-items-center p-2 container-lg">
          <div id="navbar" className="d-flex flex-row gap-5 ">
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
                className="dropdown-menu p-3 flex-wrap "
                aria-labelledby="navbarDropdown"
              >
                <div className="d-flex flex-row gap-5 col-6 ">
                  {/* Category 1: Laptops */}
                  <ul className="list-group-item-dark col-sm-6">
                    <li className="fw-bold mb-2 animate__animated animate__fadeInDown">
                      Laptops
                    </li>
                    <li>
                      <Link
                        className="dropdown-item animate__animated animate__lightSpeedInLeft"
                        to="#"
                      >
                        Lenovo
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item animate__animated animate__lightSpeedInLeft"
                        to="#"
                      >
                        Dell
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item animate__animated animate__lightSpeedInLeft"
                        to="#"
                      >
                        HP
                      </Link>
                    </li>
                  </ul>

                  {/* Category 2: hards */}
                  <ul className="list-group-item-dark col-sm-6">
                    <li className="fw-bold mb-2 animate__animated animate__fadeInDown">
                      Storage
                    </li>
                    <li>
                      <Link
                        className="dropdown-item  animate__animated animate__lightSpeedInLeft"
                        to="#"
                      >
                        External Hards
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item animate__animated animate__lightSpeedInLeft"
                        to="#"
                      >
                        Internal Hards
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item animate__animated animate__lightSpeedInLeft"
                        to="#"
                      >
                        SSD
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item animate__animated animate__lightSpeedInLeft"
                        to="#"
                      >
                        M.2
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item animate__animated animate__lightSpeedInLeft"
                        to="#"
                      >
                        External SSD
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item animate__animated animate__lightSpeedInLeft"
                        to="#"
                      >
                        Memory Cards
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item animate__animated animate__lightSpeedInLeft"
                        to="#"
                      >
                        Flash Disks
                      </Link>
                    </li>
                  </ul>
                  <ul className="list-group-item-dark col-sm-6">
                    {/* Category 2: rams */}
                    <li className="fw-bold mb-2 animate__animated animate__fadeInDown">
                      Accessories
                    </li>
                    <li>
                      <Link
                        className="dropdown-item animate__animated animate__lightSpeedInLeft "
                        to="#"
                      >
                        Mouses And Keyboards
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item animate__animated animate__lightSpeedInLeft "
                        to="#"
                      >
                        HeadPhones
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item animate__animated animate__lightSpeedInLeft"
                        to="asd"
                      >
                        Mousepad
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item animate__animated animate__lightSpeedInLeft"
                        to="#"
                      >
                        Controlers
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item animate__animated animate__lightSpeedInLeft"
                        to="#"
                      >
                        Speakers
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item animate__animated animate__lightSpeedInLeft"
                        to="#"
                      >
                        Microphones
                      </Link>
                    </li>
                  </ul>
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
            className=" d-none flex-row justify-content-between col-12 gap-5"
          >
            <div className="text-white">
              <h1>Logo</h1>
            </div>
            <div
              className="menue"
              onClick={() => {
                ToggleSideNav()
              }}
            >
              <FontAwesomeIcon className="text-white fs-1" icon={faBars} />
            </div>
          </div>
        </div>
      </div>
      {sideNavToggle ? <SideNav /> : null}
    </>
  )
}
