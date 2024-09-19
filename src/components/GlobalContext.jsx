import { createContext, useEffect, useState } from 'react'

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
  const [sideNavToggle, setSideNavToggle] = useState(false)
  const [maxPrice, setMaxPrice] = useState()
  let allData = JSON.parse(localStorage.getItem('Allproducts'))
  const [allProducts, setAllProducts] = useState([])
  const [filterBrand, setFilterBrand] = useState([])
  const [hideOutOfStock, setHideOutOfStock] = useState(false)
  const [minPrice, setMinPrice] = useState()

  useEffect(() => {
    setAllProducts(allData)
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        sideNavToggle,
        setSideNavToggle,
        maxPrice,
        setMaxPrice,
        allProducts,
        setAllProducts,
        filterBrand,
        setFilterBrand,
        hideOutOfStock,
        setHideOutOfStock,
        minPrice,
        setMinPrice,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }
