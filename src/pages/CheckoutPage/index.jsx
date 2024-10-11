import { faPaperPlane, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import dilveryimg from '../../assets/3696913.jpg'
import retalimg from '../../assets/img.jpg'
import Footer from '../../components/Footer'
import { GlobalContext } from '../../components/GlobalContext'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import useLogout, { useCheckToken } from '../../customhooks/CostmHooks'
import './index.scss'

export default function CheckoutPage() {
  const paymentMethod = useRef()
  const CashOnshiping = useRef()
  const vodafoneCash = useRef()
  const Etisalatcash = useRef()
  const orangecash = useRef()
  const inputuserName = useRef(null)
  const inputPhoneNumber = useRef(null)
  const inputAddress = useRef(null)
  const inputCity = useRef(null)
  const { cartArray, setCartArray } = useContext(GlobalContext)
  const navigate = useNavigate()
  const token = localStorage.getItem('Token')
  const { logout } = useLogout()
  const { userData, isVerified } = useCheckToken()
  const [showBody, setShowBody] = useState(true)
  const [showDelevryMethod, setShowDelevryMethod] = useState(false)
  const [showPickup, setShowPickup] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [changeNumber, setChangeNumber] = useState(false)
  const [showShippingInfo, setShowShippingInfo] = useState(true)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null)
  const [finalBill, setFinalBill] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState(null)
  const [selectedCashWalletOption, setSelectedCashWalletOption] = useState(null)
  const [deliveryMethod, setDeliveryMethod] = useState(false)

  const [orderAdress, setOrderAdress] = useState()
  const [orderName, setOrderName] = useState()
  const [orderPhoneNumber, setOrderPhoneNumber] = useState()
  const [orderCity, setOrderCity] = useState()
  const [lastFinalPrice, setLastFinalPrice] = useState()
  let finalPrice = 0
  let dilvery = 100

  const ShowFinalbill = () => {
    let payment = paymentMethod.current ? paymentMethod.current.value : ''
    let cashWalletOption = ''
    setDeliveryMethod(true)
    if (!payment) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'يرجى اختيار وسيلة دفع!',
      })
      return
    }

    if (selectedPaymentMethod === 'Cash Wallet') {
      if (vodafoneCash.current && vodafoneCash.current.checked) {
        cashWalletOption = vodafoneCash.current.value
      } else if (Etisalatcash.current && Etisalatcash.current.checked) {
        cashWalletOption = Etisalatcash.current.value
      } else if (orangecash.current && orangecash.current.checked) {
        cashWalletOption = orangecash.current.value
      }

      if (!cashWalletOption) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'يرجى اختيار وسيلة دفع عبر المحفظة النقدية!',
        })
        return
      }
    }

    setSelectedPayment(payment)
    setSelectedCashWalletOption(cashWalletOption)

    console.log('Selected Payment Method:', payment)
    console.log('Selected Cash Wallet Option:', cashWalletOption)

    setFinalBill(!finalBill)
  }

  const insertOrder = () => {
    const nameOfUserWhoDidOrder = userData.username
    const deliveryFunds = deliveryMethod && !showPickup ? 100 : 0 // القيمة الأصلية
    const paymentMethod =
      selectedCashWalletOption === '' ? 'On Shipping' : selectedCashWalletOption

    let mylastprice = 0
    let Myfinalprice = 0
    cartArray.forEach((el) => {
      Myfinalprice += el.price * el.quantity
    })

    if (Myfinalprice > 0) {
      mylastprice = Myfinalprice + deliveryFunds
    }

    const orderData = {
      username: orderName,
      Products: cartArray,
      delivery: String(deliveryFunds), // تحويل إلى نص
      order_name: nameOfUserWhoDidOrder,
      date: new Date().toISOString(),
      final_price: String(mylastprice), // تحويل إلى نص
      Address: orderAdress,
      city: orderCity,
      payment_method: paymentMethod,
      phone_number: orderPhoneNumber,
    }

    // هنا نستخدم axios لإرسال البيانات
    axios
      .post('http://localhost:1337/api/orders', { data: orderData })
      .then((res) => {
        console.log('Order successfully created:', res.data)
        setCartArray([])
        localStorage.removeItem('cart')
        Swal.fire({
          icon: 'success',
          title: 'مبرووووك',
          text: 'تم تسجيل طلبك و سوف نتاوصل مع قريباً من خلال رقم الهاتم',
        })
        navigate('/')
      })
      .catch((err) => {
        console.error(
          'Error sending order:',
          err.response ? err.response.data : err.message
        )
      })
  }

  const alertAndNavigate = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'يرجي تسجيل الدخول اولا',
    })
    navigate('/logreg')
  }

  const toggleDilveryMethod = () => {
    setShowDelevryMethod(!showDelevryMethod)
    setShowPickup(false)
    setShowPayment(false)
  }

  const togglePickup = () => {
    setShowPickup(!showPickup)
    setShowDelevryMethod(false)
    setShowPayment(false)
    setDeliveryMethod(false)
  }

  const ChangeNumber = () => {
    setChangeNumber(!changeNumber)
  }

  const validation = (userData) => {
    const inputs = {
      name: inputuserName.current?.value || userData.username,
      phone: inputPhoneNumber.current?.value || userData.phone_number,
      address: inputAddress.current?.value || '',
      city: inputCity.current?.value || '',
    }

    const errors = {}

    if (!inputs.name || inputs.name.length < 3) {
      errors.name = 'Name must be at least 3 characters long!'
    }

    if (!inputs.phone || !/^[0-9]{11}$/.test(inputs.phone)) {
      errors.phone = 'Phone number must be 11 digits!'
    } else if (inputs.phone === userData.phone_number) {
      delete errors.phone
    }

    if (!inputs.address || inputs.address.length < 5) {
      errors.address = 'Address must be at least 5 characters long!'
    }

    if (!inputs.city) {
      errors.city = 'City must be provided!'
    }

    if (Object.keys(errors).length > 0) {
      for (const [field, message] of Object.entries(errors)) {
        Swal.fire({
          icon: 'error',
          title: `Invalid ${field.charAt(0).toUpperCase() + field.slice(1)}`,
          text: message,
        })
      }
      return false
    }

    return true
  }

  const handleConfirm = () => {
    const valid = validation(userData)
    if (valid) {
      setShowPayment(true)
      setShowPickup(false)
      setShowDelevryMethod(false)
      const name = inputuserName.current?.value || userData.username
      const phone = inputPhoneNumber.current?.value || userData.phone_number
      const address = inputAddress.current?.value || ''
      const city = inputCity.current?.value || ''
      setOrderAdress(address)
      setOrderName(name)
      setOrderPhoneNumber(phone)
      setOrderCity(city)
    }
  }

  useEffect(() => {
    if (!token) {
      alertAndNavigate()
    }
  }, [])

  return (
    <>
      {finalBill ? (
        <>
          <div className="overlay d-flex justify-content-center align-items-center">
            <div className="paper bg-white p-4 overflow-auto">
              <button
                style={{ cursor: 'pointer' }}
                type="button"
                className="btn-close position-absolute top-0 start-0"
                aria-label="Close"
                onClick={() => {
                  setFinalBill(false)
                }}
              ></button>
              <div className="doc d-flex flex-column  position-relative overflow-auto">
                <div className="position-absolute p-1 top-0 start-0 ">
                  <h1 className="m-3">Logo</h1>
                </div>
                <h1 className="text-center">Your Final bill is </h1>
                <div className="line"></div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col">Full price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartArray.map((el, index) => {
                      finalPrice += el.price * el.quantity
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
                      <th>delivery</th>
                      <td colSpan="4" className="text-center">
                        {deliveryMethod && !showPickup ? dilvery : null}
                      </td>
                    </tr>
                    <tr>
                      <th>Final price</th>
                      <td colSpan="4" className="text-center">
                        {deliveryMethod && !showPickup
                          ? finalPrice + dilvery
                          : finalPrice}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="d-flex flex-row  gap-2">
                  <h1>Client Name : </h1>

                  {orderName || userData.username}
                </div>

                {deliveryMethod && !showPickup ? (
                  <div className="d-flex flex-row  gap-2">
                    <h1>Client Address : </h1>
                    {orderCity + ' : ' + orderAdress}
                  </div>
                ) : null}
                {selectedCashWalletOption ? (
                  <div className="d-flex flex-row  gap-2">
                    <h1> cash wallet : </h1>
                    {selectedCashWalletOption}
                  </div>
                ) : null}
                <div className="d-flex flex-row  gap-2">
                  <h1>Client Phone Number : </h1>
                  {orderPhoneNumber || userData.phone_number}
                </div>
                <button className="btn btn-dark" onClick={insertOrder}>
                  Make Your Order
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <Header />
      <NavBar />
      {isVerified && userData ? (
        <div className="container">
          <div className="d-flex justify-content-center align-items-center mt-5">
            <h1 className="text-info">Your Bill</h1>
          </div>
          <table className="table table-success table-striped mt-5">
            <thead>
              <tr>
                <th>#</th>
                <td>Product Name</td>
                <td>Quantity</td>
                <td>Price</td>
                <td>Full price</td>
              </tr>
            </thead>
            <tbody>
              {cartArray.map((el, index) => {
                finalPrice += el.price * el.quantity
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{el.product_name}</td>
                    <td>{el.quantity}</td>
                    <td>{el.price}</td>
                    <td>{el.price * el.quantity}</td>
                  </tr>
                )
              })}

              <tr>
                <th>Total Price</th>
                <td className="text-center" colSpan="4">
                  {finalPrice}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="col-12 d-flex flex-wrap flex-row justify-content-between row g-3">
            <div className="col-12 d-flex justify-content-center">
              <h1>
                <b className="text-danger">Receiving method</b>
              </h1>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className="card col-12 mycard-height d-flex flex-column justify-content-between bg-primary p-2">
                <img src={dilveryimg} className="col-12 h-75" alt="Delivery" />
                <button
                  onClick={toggleDilveryMethod}
                  className="btn btn-dark mt-2"
                >
                  Delivery
                </button>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-4">
              <div className="card col-12 mycard-height d-flex flex-column justify-content-between bg-primary p-2">
                <img src={retalimg} className="col-12 h-75" alt="Pickup" />
                <button onClick={togglePickup} className="btn btn-dark mt-2">
                  Pick up in store.
                </button>
              </div>
            </div>
          </div>
          {showDelevryMethod ? (
            <div className="col-12 d-flex flex-column mt-3">
              <div className="col-12 col-md-6 mx-auto">
                <div className="bg-primary p-3 rounded-top d-flex flex-row gap-2 align-items-center">
                  <FontAwesomeIcon className="text-white" icon={faPaperPlane} />
                  <h2 className="m-0 text-white">Shipping Information</h2>
                </div>
                {showShippingInfo && (
                  <div className="bg-light p-4 rounded-bottom border">
                    <div className="form-group mb-3">
                      <label htmlFor="name">Full Name</label>
                      {changeNumber ? (
                        <input
                          ref={inputuserName}
                          type="text"
                          id="name"
                          className="form-control"
                          defaultValue={userData.username}
                        />
                      ) : (
                        <h1>{userData.username}</h1>
                      )}
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="phone">Phone Number</label>
                      {!changeNumber ? (
                        <h1 className="d-flex flex-row justify-content-between col-12">
                          {userData.phone_number}
                          <FontAwesomeIcon
                            icon={faPen}
                            style={{ cursor: 'pointer' }}
                            onClick={ChangeNumber}
                          />
                        </h1>
                      ) : (
                        <input
                          ref={inputPhoneNumber}
                          type="text"
                          id="phone"
                          className="form-control"
                          defaultValue={userData.phone_number}
                        />
                      )}
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="address">Address</label>
                      <input
                        ref={inputAddress}
                        type="text"
                        id="address"
                        className="form-control"
                        placeholder="Enter your address"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="city">City</label>
                      <input
                        ref={inputCity}
                        type="text"
                        id="city"
                        className="form-control"
                        placeholder="Enter your city"
                      />
                    </div>
                    <button
                      onClick={handleConfirm}
                      className="btn btn-primary mt-3"
                    >
                      Confirm
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : null}

          {showPickup ? (
            <div className="col-12 d-flex flex-column mt-3">
              <div className="col-12 col-md-6 mx-auto">
                <div className="bg-primary p-3 rounded-top d-flex flex-row gap-2 align-items-center">
                  <FontAwesomeIcon className="text-white" icon={faPaperPlane} />
                  <h2 className="m-0 text-white">Pickup Information</h2>
                </div>
                <div className="bg-light p-4 rounded-bottom border">
                  <p>Please visit the nearest store to pickup your items!</p>
                  <p> فروعنا </p>
                  <p> الفرع الاول </p>
                  <p> العنوان </p>
                  <button
                    onClick={() => setShowPayment(true)}
                    className="btn btn-primary mt-3"
                  >
                    Confirm Pickup
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          {showPayment && (
            <div className="col-12 d-flex flex-column mt-3">
              <div className="col-12 col-md-6 mx-auto">
                <div className="bg-primary p-3 rounded-top d-flex flex-row gap-2 align-items-center">
                  <FontAwesomeIcon className="text-white" icon={faPaperPlane} />
                  <h2 className="m-0 text-white">Payment Method</h2>
                </div>
                <div className="bg-light p-4 rounded-bottom border">
                  <div className="form-group mb-3">
                    <label>Choose Payment Method:</label>
                    <div>
                      <input
                        type="radio"
                        ref={paymentMethod}
                        id="cash_wallet"
                        name="payment"
                        value="Cash Wallet"
                        checked={selectedPaymentMethod === 'Cash Wallet'}
                        onChange={() => setSelectedPaymentMethod('Cash Wallet')}
                      />
                      <label htmlFor="cash_wallet" className="ms-2">
                        Cash Wallet
                      </label>
                    </div>
                    {selectedPaymentMethod === 'Cash Wallet' && (
                      <div className="ms-3">
                        <input
                          ref={vodafoneCash}
                          type="radio"
                          id="cash_wallet_specific_1"
                          name="cash_wallet_option"
                          value="vodafoneCash"
                        />
                        <label
                          htmlFor="cash_wallet_specific_1"
                          className="ms-2"
                        >
                          vodafone cash
                        </label>
                        <br />
                        <input
                          ref={orangecash}
                          type="radio"
                          id="cash_wallet_specific_2"
                          name="cash_wallet_option"
                          value="orange cash"
                        />
                        <label
                          htmlFor="cash_wallet_specific_2"
                          className="ms-2"
                        >
                          Orange Cash
                        </label>
                        <br />
                        <input
                          ref={Etisalatcash}
                          type="radio"
                          id="cash_wallet_specific_2"
                          name="cash_wallet_option"
                          value="Etisalat Cash"
                        />
                        <label
                          htmlFor="cash_wallet_specific_2"
                          className="ms-2"
                        >
                          Etisalat Cash
                        </label>
                      </div>
                    )}
                    <div>
                      <input
                        ref={CashOnshiping}
                        type="radio"
                        id="cash_on_delivery"
                        name="payment"
                        value="Cash On Delivery"
                        checked={selectedPaymentMethod === 'Cash On Delivery'}
                        onChange={() =>
                          setSelectedPaymentMethod('Cash On Delivery')
                        }
                      />
                      <label htmlFor="cash_on_delivery" className="ms-2">
                        Cash On Delivery
                      </label>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary mt-3"
                    onClick={ShowFinalbill}
                  >
                    Complete Order
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <h1>Please log in!</h1>
      )}
      <Footer />
    </>
  )
}
