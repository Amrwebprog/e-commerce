import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<h1>this is home page</h1>} />
          <Route path="categores">
            <Route index element={<h1>this is categores page</h1>} />
            <Route path="products">
              <Route index element={<h1>this is product page</h1>} />
              <Route path=":name">
                <Route index element={<h1>this is product details </h1>} />
                <Route path="cart">
                  <Route index element={<h1>this is cart page</h1>}></Route>
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
