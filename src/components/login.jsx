import { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { LoginContext } from './loginContext'

export default function Login() {
  const { hasAccount, setHasAccount } = useContext(LoginContext)
  const em = useRef()
  const pass = useRef()
  const navigate = useNavigate()
  const token = localStorage.getItem('Token')

  const loginValidation = async () => {
    const email = em.current.value
    const password = pass.current.value

    if (!email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'يرجى إدخال البريد الإلكتروني وكلمة المرور',
      })
      return
    }

    try {
      const response = await fetch('http://localhost:1337/api/auth/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        console.error('Error response:', data)
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: data.error?.message || 'تسجيل الدخول غير صحيح',
        })
        console.log(response)
        return
      }

      Swal.fire({
        icon: 'success',
        title: 'تم تسجيل الدخول بنجاح',
        text: 'مرحبا بك!',
      })
      console.log('User token:', data.jwt)
      localStorage.setItem('Token', data.jwt)
      navigate('/')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'حدث خطأ أثناء محاولة تسجيل الدخول. يرجى المحاولة لاحقًا',
      })
      console.error('Error:', error)
    }
  }
  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [])
  return (
    <div className="col-8 mt-5 py-5">
      <div className="container-lg">
        <div className="d-flex flex-row p-2 boxbg shadow-lg  col-12 h-100 rounded flex-wrap">
          <div className=" animate__animated animate__lightSpeedInRight left col-12 col-lg-6 col-md-6 d-flex flex-column text-center justify-content-center align-items-center gap-3">
            <h1 className="text-white ">welcome back</h1>
            <h2 className="text-white">
              Please Login Using Your Personal information to stay connected
              with us{' '}
            </h2>
          </div>
          <div className=" animate__animated animate__lightSpeedInLeft right col-12 col-lg-6 col-md-6 ">
            <div className="login-form h-100 col-12 animate__animated   ">
              <label htmlFor="email" className="login-label">
                Email
              </label>
              <input
                ref={em}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="login-input"
              />

              <label htmlFor="password" className="login-label">
                Password
              </label>
              <input
                ref={pass}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="login-input"
              />
              <div
                className="text-primary p-2 converter"
                onClick={() => {
                  setHasAccount(!hasAccount)
                }}
              >
                You Dont have an account? Sign up here.
              </div>
              <div className="d-flex flex-row justify-content-start px-2 py-1 align-items-center gap-2">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me </label>
              </div>
              <button className="login-button" onClick={loginValidation}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
