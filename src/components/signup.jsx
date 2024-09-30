import axios from 'axios'
import { useContext, useRef } from 'react'
import Swal from 'sweetalert2'
import { LoginContext } from './loginContext'

export default function Signup() {
  const { hasAccount, setHasAccount } = useContext(LoginContext)
  const username = useRef()
  const email = useRef()
  const phone_number = useRef()
  const password = useRef()

  const RegisterValidation = () => {
    const { name, mail, number, pass } = {
      name: username.current.value,
      mail: email.current.value,
      number: phone_number.current.value,
      pass: password.current.value,
    }

    const checkNumber = /^(010|011|012|015)[0-9]{8}$/
    const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const checkPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (!name.trim() || !mail.trim() || !number.trim() || !pass.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'يرجى ملء جميع الحقول.',
      })
      return false
    }

    if (!checkNumber.test(number)) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'رقم الهاتف غير صحيح. يجب أن يكون رقماً مصرياً صالحاً.',
      })
      return false
    }

    if (!checkEmail.test(mail)) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'البريد الإلكتروني غير صحيح. تأكد من إدخال بريد إلكتروني صحيح.',
      })
      return false
    }

    if (!checkPassword.test(pass)) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'كلمة المرور غير صحيحة. يجب أن تحتوي على حرف كبير وحرف صغير ورقم ورمز خاص وأن تكون 8 أحرف على الأقل.',
      })
      return false
    }

    return true
  }

  const insertRegisterData = async () => {
    const isValid = RegisterValidation()

    if (isValid) {
      let phoneNumber = phone_number.current.value.trim().replace(/\D/g, '') // إزالة أي رموز غير الأرقام
      console.log(phoneNumber)

      const data = {
        username: username.current.value.trim(),
        email: email.current.value.trim(),
        role: 'Authenticated',
        password: password.current.value.trim(),
        phone_number: phoneNumber, // استخدام المتغير المعدل
      }

      console.log(data)

      try {
        const response = await axios.post(
          'http://localhost:1337/api/auth/local/register',
          data
        )
        console.log(response.data)
        Swal.fire({
          icon: 'success',
          title: 'نجاح',
          text: 'تم التسجيل بنجاح!',
        })
      } catch (error) {
        if (error.response) {
          console.error(error.response.data)
          Swal.fire({
            icon: 'error',
            title: 'خطأ',
            text: error.response.data.message || 'حدث خطأ غير متوقع.',
          })
        } else {
          console.error('Error', error.message)
        }
      }
    }
  }

  return (
    <div className="col-8 h-50 mt-5 py-5 ">
      <div className="d-flex flex-row p-2 boxbg shadow-lg col-12 rounded flex-wrap">
        <div className="right col-12 col-lg-6 animate__animated animate__lightSpeedInLeft">
          <div className="login-form col-12">
            <label htmlFor="username" className="login-label">
              Username
            </label>
            <input
              ref={username}
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="login-input"
            />

            <label htmlFor="email" className="login-label">
              Email
            </label>
            <input
              ref={email}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="login-input"
            />

            <label htmlFor="phone" className="signup-label">
              Phone Number
            </label>
            <input
              ref={phone_number}
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="login-input"
            />

            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input
              ref={password}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="login-input"
            />

            <div
              className="text-primary p-2 converter"
              onClick={() => setHasAccount(!hasAccount)}
            >
              Already have an account? Login here.
            </div>

            <button className="login-button" onClick={insertRegisterData}>
              Signup
            </button>
          </div>
        </div>

        <div className="animate__animated animate__lightSpeedInRight left col-12 col-lg-6 col-md-6 d-flex flex-column text-center justify-content-center align-items-center gap-3">
          <h1 className="text-white">Join us today</h1>
          <h2 className="text-white">
            Please Signup to start using your account and stay connected with
            us.
          </h2>
        </div>
      </div>
    </div>
  )
}
