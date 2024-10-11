import { faCartFlatbedSuitcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect } from 'react'

import { Link } from 'react-router-dom'
import useLogout, { useCheckToken } from '../customhooks/CostmHooks'
import { GlobalContext } from './GlobalContext'
import Cart from './cart'

export default function Header() {
  const { logout } = useLogout()
  const { userData, isVerified } = useCheckToken()
  const { cartToggle, setCartToggle, cartArray, setCartArray } =
    useContext(GlobalContext)

  const togglecart = () => {
    setCartToggle(!cartToggle)
  }
  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    const cartArrayFromStorage = storedCart ? JSON.parse(storedCart) : []
    setCartArray(cartArrayFromStorage)
  }, [setCartArray])

  return (
    <>
      {cartToggle ? <Cart /> : null}
      <div className="headercolor position-sticky top-0 z-3">
        <div className="d-flex flex-row p-3 justify-content-between align-items-center container-xxl ">
          <div>
            <h1>logo</h1>
          </div>
          <div className="d-flex flex-row gap-3">
            <div className="d-flex justify-content-center align-items-center gap-3">
              {isVerified ? (
                <>
                  <h1>{userData.username}</h1>
                  <h1 className="text-white btn btn-danger" onClick={logout}>
                    logout
                  </h1>
                  <div className="position-relative">
                    <FontAwesomeIcon
                      style={{ cursor: 'pointer' }}
                      onClick={togglecart}
                      className="fs-3"
                      icon={faCartFlatbedSuitcase}
                    />
                    <h1
                      className="position-absolute top-0 background-color text-dark rounded-circle p-1"
                      style={{ cursor: 'pointer' }}
                      onClick={togglecart}
                    >
                      <b>{cartArray.length}</b>
                    </h1>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/logreg" className="text-decoration-none">
                    Login/Register
                  </Link>
                  <div className="position-relative">
                    <FontAwesomeIcon
                      style={{ cursor: 'pointer' }}
                      onClick={togglecart}
                      className="fs-3"
                      icon={faCartFlatbedSuitcase}
                    />
                    <h1
                      className="position-absolute top-0 background-color text-dark rounded-circle p-1"
                      style={{ cursor: 'pointer' }}
                      onClick={togglecart}
                    >
                      <b>{cartArray.length}</b>
                    </h1>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
