import { useContext } from 'react'
import { LoginContext } from './loginContext'

export default function Signup() {
  const { hasAccount, setHasAccount } = useContext(LoginContext)
  return (
    <div className="col-8 h-50 mt-5 py-5 ">
      <div className="d-flex flex-row p-2 boxbg shadow-lg  col-12 rounded flex-wrap">
        <div className="right col-12 col-lg-6 animate__animated animate__lightSpeedInLeft">
          <div className="login-form  col-12">
            <label htmlFor="username" className="login-label">
              Username
            </label>
            <input
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
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="login-input"
            />

            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input
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
              Already have an account? Login here.
            </div>

            <button className="login-button">Signup</button>
          </div>
        </div>

        <div className="animate__animated animate__lightSpeedInRight left col-12 col-lg-6 col-md-6 d-flex flex-column text-center justify-content-center align-items-center gap-3">
          <h1 className="text-white ">Join us today</h1>
          <h2 className="text-white">
            Please Signup to start using your account and stay connected with
            us.
          </h2>
        </div>
      </div>
    </div>
  )
}
