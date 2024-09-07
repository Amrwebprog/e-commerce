import { createContext, useState } from 'react'

const LoginContext = createContext()

const LoginProvider = ({ children }) => {
  const [hasAccount, setHasAccount] = useState(true)
  return (
    <LoginContext.Provider value={{ hasAccount, setHasAccount }}>
      {children}
    </LoginContext.Provider>
  )
}

export { LoginContext, LoginProvider }
