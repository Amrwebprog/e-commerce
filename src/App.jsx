import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { GlobalProvider } from './components/GlobalContext'
import { LoginProvider } from './components/loginContext'

import AboutUs from './pages/aboutUsPage'
import CartPage from './pages/cartPage'
import CheckoutPage from './pages/CheckoutPage'
import ContactusPage from './pages/ContactUsPage'
import HomePage from './pages/homepage'
import LoginAndRegisterPage from './pages/logregPage'
import PayPage from './pages/paymentPage'
import ProductInfoPage from './pages/productinfoPage'
import ProductsPage from './pages/productsPage'

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="Checkout" element={<CheckoutPage />} />
          <Route path="contactus" element={<ContactusPage />} />
          <Route
            path="logreg"
            element={
              <LoginProvider>
                <LoginAndRegisterPage />
              </LoginProvider>
            }
          />

          <Route path="products">
            <Route index element={<ProductsPage />} />

            <Route path=":cat" element={<ProductsPage />} />

            <Route path=":cat/:name" element={<ProductInfoPage />} />
          </Route>

          <Route path="payment" element={<PayPage />} />

          <Route path="*" element={<h1>this page is not found</h1>} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
