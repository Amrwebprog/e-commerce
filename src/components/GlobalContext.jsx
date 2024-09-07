import { createContext, useState } from 'react'

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
  const [sideNavToggle, setSideNavToggle] = useState(false)
  return <GlobalContext.Provider value={{sideNavToggle,setSideNavToggle}}>
    {children}
    </GlobalContext.Provider>
}

export { GlobalContext, GlobalProvider }
