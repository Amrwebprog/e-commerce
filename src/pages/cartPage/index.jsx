import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import lap from '../../assets/lap.jpg'
import Footer from '../../components/Footer'
import { GlobalContext } from '../../components/GlobalContext'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'

export default function CartPage() {
  const { cartArray, setCartArray } = useContext(GlobalContext)
  const navigate = useNavigate()

  const reduceNumber = (id) => {
    setCartArray((prevCartArray) =>
      prevCartArray.map((el) => {
        if (el.id === id) {
          if (el.quantity > 1) {
            return { ...el, quantity: el.quantity - 1 }
          }
        }
        return el
      })
    )
  }

  const addNumber = (id) => {
    setCartArray((prevCartArray) =>
      prevCartArray.map((el) => {
        if (el.id === id) {
          return { ...el, quantity: el.quantity + 1 }
        }
        return el
      })
    )
  }
  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <div className="container">
          <h1>Shoping cart </h1>
          <div className="col-12">
            <ul className="col-12 d-flex flex-column gap-4 mt-3">
              {cartArray.length > 0 ? (
                cartArray.map((el, index) => {
                  return (
                    <>
                      <li
                        key={index}
                        className="col-12 bg-light d-flex flex-row my-item justify-content-between "
                      >
                        <div className="d-flex flex-row gap-2 align-items-center">
                          <img className="h-100 col-1" src={lap} alt="" />
                          <h1>{el.product_name}</h1>
                        </div>
                        <div className="d-flex flex-row gap-2 align-items-center">
                          <h1 className="d-flex flex-row justify-content-center align-items-center">
                            {el.quantity}
                            <div className="d-flex flex-row">
                              <span
                                id="pointer"
                                className="bg-dark p-2 border text-white justify-content-center align-items-center "
                                onClick={() => {
                                  reduceNumber(el.id)
                                }}
                              >
                                -
                              </span>
                              <span
                                id="pointer"
                                className="bg-primary p-2 border text-white justify-content-center align-items-center"
                                onClick={() => {
                                  addNumber(el.id)
                                }}
                              >
                                +
                              </span>
                            </div>
                            <span>{el.price * el.quantity}</span>
                          </h1>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                          ></button>
                        </div>
                      </li>
                    </>
                  )
                })
              ) : (
                <h1 className="text-danger mt-5 mb-5">Your cart is Empty</h1>
              )}
            </ul>
          </div>
          <button onClick={navigate('/products')} className="btn btn-primary">
            Countinue shoping
          </button>
        </div>
      </div>
      <div></div>
      <Footer />
    </div>
  )
}
