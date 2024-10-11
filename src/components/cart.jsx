import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import lap from '../assets/lap.jpg'
import { GlobalContext } from './GlobalContext'

export default function Cart() {
  const { cartArray, setCartArray, setCartToggle } = useContext(GlobalContext)
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartArray)) // تحديث localStorage عند تغيير cartArray
  }, [cartArray])

  const closeCart = () => {
    setCartToggle(false)
  }

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
    <div className="cart d-flex flex-column position-fixed gap-3 bottom-0 end-0 w-25 h-75 z-3 bg-lightt bg-gradient justify-content-between p-5 overflow-auto position-relative">
      <div className="position-absolute top-0 start-0 p-2">
        <button
          onClick={closeCart}
          type="button"
          className="btn-close"
          aria-label="Close"
        ></button>
      </div>
      {cartArray.map((el, index) => {
        return (
          <div key={index} className="card col-12 p-3 for-height">
            <div className="card-head col-12 ">
              <img src={lap} className="col-12" alt="" />
            </div>
            <div className="card-foter d-flex justify-content-center align-items-center d-flex flex-column">
              <h1>{el.product_name}</h1>
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
                    onClick={() => {
                      addNumber(el.id)
                    }}
                    id="pointer"
                    className="bg-primary p-2 border text-white justify-content-center align-items-center"
                  >
                    +
                  </span>
                </div>
                <span>{el.price * el.quantity}</span>
              </h1>
              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteItem(el.id)
                }}
              >
                Delete
              </button>
            </div>
          </div>
        )
      })}
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-info text-white"
          onClick={() => {
            navigate('/cart')
          }}
        >
          Go to Cart
        </button>
      </div>
    </div>
  )
}
