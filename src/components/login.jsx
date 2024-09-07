import { useContext } from 'react'
import { LoginContext } from './loginContext'

export default function Login() {
  const { hasAccount, setHasAccount } = useContext(LoginContext)
  return (
    <div className="col-8 mt-5 py-5">
      <div className="container-lg">
        <div className="d-flex flex-row p-2 boxbg shadow-lg  col-12 h-100 rounded flex-wrap">
          <div className=" animate__animated animate__lightSpeedInRight left col-12 col-lg-6 col-md-6 d-flex flex-column text-center justify-content-center align-items-center gap-3">
            <h1 className="text-white ">welcome back</h1>
            <h2 className="text-white">
              Pleas Login Using Your Personal information to stay connected with
              us{' '}
            </h2>
          </div>
          <div className=" animate__animated animate__lightSpeedInLeft right col-12 col-lg-6 col-md-6 ">
            <div className="login-form h-100 col-12 animate__animated   ">
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
                You Dont have an account? Login here.
              </div>
              <div className="d-flex flex-row justify-content-start px-2 py-1 align-items-center gap-2">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">remember me </label>
              </div>
              <button className="login-button">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
