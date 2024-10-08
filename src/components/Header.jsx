import { faCartFlatbedSuitcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import useLogout, { useCheckToken } from '../customhooks/CostmHooks'
import { GlobalContext } from './GlobalContext'
import Cart from './cart'

export default function Header() {
  const [verifyAccount, setverifyAccount] = useState(false)
  const token = localStorage.getItem('Token')
  const { logout } = useLogout()
  const { userData, isVerified } = useCheckToken()
  const { cartToggle, setCartToggle } = useContext(GlobalContext)
  const togglecart = () => {
    setCartToggle(!cartToggle)
    console.log(cartToggle)
  }
  useEffect(() => {
    isVerified ? console.log(userData) : null
  }, [])
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
                  <FontAwesomeIcon
                    style={{ cursor: 'pointer' }}
                    onClick={togglecart}
                    className="fs-3"
                    icon={faCartFlatbedSuitcase}
                  />
                </>
              ) : (
                <>
                  <Link to="/logreg" className="text-decoration-none">
                    Login/Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
