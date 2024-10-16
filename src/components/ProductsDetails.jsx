import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify' // استيراد Toastify
import 'react-toastify/dist/ReactToastify.css' // استيراد CSS الخاصة بـ Toastify
import Cart from './cart'
import { GlobalContext } from './GlobalContext'

export default function ProductsDetails(props) {
  const navigate = useNavigate()
  const { cartToggle, setCartToggle, cartArray, setCartArray } =
    useContext(GlobalContext)

  let Discount = null
  const product =
    props.MyProduct && props.MyProduct[0] ? props.MyProduct[0] : null

  if (product && product.offer > 0) {
    Discount = product.price - (product.offer / 100) * product.price
  }

  const toggleCart = () => {
    let updatedCartArray = [...cartArray] // استخدام cartArray الحالي

    const existingItem = updatedCartArray.find(
      (cartItem) => cartItem.id === product.id
    )

    if (existingItem) {
      existingItem.quantity += 1
      toast.success('تمت إضافة المنتج إلى السلة!', {
        position: 'top-right', // الموضع
        autoClose: 3000, // يغلق بعد 3 ثوانٍ
      })
    } else {
      product.quantity = 1
      updatedCartArray.push(product)
      toast.success('تمت إضافة المنتج الجديد إلى السلة!', {
        position: 'top-right',
        autoClose: 3000,
      })
    }

    localStorage.setItem('cart', JSON.stringify(updatedCartArray))
    setCartArray(updatedCartArray)
    setCartToggle(true)
  }

  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    const cartArrayFromStorage = storedCart ? JSON.parse(storedCart) : []
    setCartArray(cartArrayFromStorage)
  }, [setCartArray])

  return (
    <>
      <ToastContainer /> {/* إضافة ToastContainer هنا */}
      {cartToggle ? <Cart /> : null}
      {product ? (
        <div className="HandleText col-12 d-flex flex-wrap flex-column p-2 gap-4">
          <h1>{product.product_name}</h1>
          <div className="d-flex flex-row gap-3">
            <a className="text-decoration-none ">review |</a>
            <div className="Comment rounded d-flex align-items-center">
              <a href="#MyComment" className="text-decoration-none text-white">
                <p className="mb-0">write a review</p>
              </a>
            </div>
          </div>

          <div className="col-12 d-flex flex-row justify-content-between align-items-center">
            <div className="d-flex flex-row gap-3">
              <h1 className="text-info price m-0">
                {Discount ? (
                  <>
                    <del className="text-danger">{product.price}</del>
                    {Discount}
                  </>
                ) : (
                  product.price
                )}
                LE
              </h1>
              <div className="d-flex justify-content-center align-items-center MyBadge">
                <p className="text-white m-0 bg-success px-3 py-1 rounded">
                  shipped by (logo)
                </p>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center gap-3">
              <p className="m-0">Availability: </p>
              {product.stock > 0 ? (
                <div className="d-flex align-items-center flex-row gap-2">
                  <FontAwesomeIcon
                    className="text-success"
                    icon={faCircleCheck}
                  />
                  <p className="m-0 text-info">
                    In Stock{' '}
                    <span className="text-danger m-0">
                      only {product.stock} item left
                    </span>
                  </p>
                </div>
              ) : (
                <div className="d-flex align-items-center flex-row gap-2">
                  <FontAwesomeIcon className="text-danger" icon={faXmark} />
                  <p className="m-0 text-info">Out of Stock</p>
                </div>
              )}
            </div>
          </div>

          <div className="rowline bg-secondary"></div>

          <div className="d-flex flex-row gap-2">
            <div className="height-line bg-info"></div>
            <div className="d-flex flex-column gap-4">
              <div>
                <h2>Brand: {product.brand}</h2>
              </div>
              <div className="d-flex flex-column">
                <h2>Model: {product.product_name}</h2>
                <h2>Seller: logo</h2>
                <h2>Description: {product.description}</h2>
                <h2>Specifications: {product.Specifications}</h2>
              </div>
              <div className="fourm d-flex flex-column gap-2 col-12 p-2">
                <button
                  className="col-12 btn btn-info text-white fw-bold"
                  onClick={toggleCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h2>This Product is Not Available</h2>
        </div>
      )}
    </>
  )
}
