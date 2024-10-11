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
  let finalprice = 0
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
  const deleteItem = (id) => {
    const updatedCartArray = cartArray.filter((el) => el.id !== id)
    setCartArray(updatedCartArray)
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
                            onClick={() => {
                              deleteItem(el.id)
                            }}
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
            <div className="col-12 d-flex flex-row-reverse">
              <div className="col-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">product Name</th>
                      <th scope="col">quantity</th>
                      <th scope="col">price</th>
                      <th scope="col">total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartArray.map((el, index) => {
                      finalprice += el.price * el.quantity
                      console.log(finalprice)
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{el.product_name}</td>
                          <td>{el.quantity}</td>
                          <td>{el.price}</td>
                          <td>{el.price * el.quantity}</td>
                        </tr>
                      )
                    })}
                    <tr>
                      <th scope="row">Final Price</th>
                      <td>{finalprice}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between col-12">
            <button
              onClick={() => {
                navigate('/products')
              }}
              className="btn btn-primary"
            >
              Countinue shoping
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                navigate('/checkout')
              }}
            >
              Countinue Checkout
            </button>
          </div>
        </div>
      </div>
      <div></div>
      <Footer />
    </div>
  )
}
