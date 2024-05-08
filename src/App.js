import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.scss"

import Nav from "./components/Layout/Nav/Nav"
import NavBottom from "./components/Layout/Nav/NavBottom/NavBottom"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import Notification from "./pages/Notification/Notification"
import FlashSalePage from "./pages/FlashSalePage/FlashSale"
import PurchasePage from "./pages/PurchasePage/PurchasePage"
import SettingInfoPage from "./pages/SettingInfoPage/SettingInfoPage"

function App() {
  return (
    <>
      <Router>
        {/* Render Navbar */}
        <div className='nav-wrap'>
          <Nav />
          <NavBottom />
        </div>
        {/* Render Routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/notification' element={<Notification />} />
          <Route path='/flashsale' element={<FlashSalePage />} />
          <Route path='/purchase' element={<PurchasePage />} />
          <Route path='/info' element={<SettingInfoPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
