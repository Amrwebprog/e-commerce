import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { GlobalProvider } from './components/GlobalContext'
import { LoginProvider } from './components/loginContext'
import CategoresPage from './pages/categoresPage'
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
          <Route path="/">
            <Route
              path="logreg"
              element={
                <LoginProvider>
                  <LoginAndRegisterPage />
                </LoginProvider>
              }
            />

            <Route index element={<HomePage />} />
            <Route path="categores">
              <Route index element={<CategoresPage />} />
              <Route path="products">
                <Route index element={<ProductsPage />} />
                <Route path="payment" element={<PayPage />} />
                <Route path=":name">
                  <Route index element={<ProductInfoPage />} />
                </Route>
              </Route>
            </Route>
            <Route path="*" element={<h1>this page is not found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
