import { Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import Profile from "./pages/profile/Profile"
import AddFund from "./pages/profile/AddFund"
import Deposit from "./pages/profile/Deposit"
import Exchange from "./pages/profile/Exchange"
import ScrollToTop from "./components/ScrollToTop"
import Trade from "./pages/trade/Trade"
import Transfer from "./pages/trade/Transfer"



function App() {
  return (
    <div>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Profile/>}/>
        <Route path="/add-fund" element={<AddFund/>}/>
        <Route path="/deposit" element={<Deposit/>}/>
        <Route path="/exchange" element={<Exchange/>}/>
        <Route path="/trade" element={<Trade/>}/>
        <Route path="/trade/transfer" element={<Transfer/>}/>
      </Routes>
    </div>
  )
}

export default App