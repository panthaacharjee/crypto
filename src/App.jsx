import { Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import Profile from "./pages/profile/Profile"
import AddFund from "./pages/profile/AddFund"
import Deposit from "./pages/profile/Deposit"



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Profile/>}/>
        <Route path="/add-fund" element={<AddFund/>}/>
        <Route path="/deposit" element={<Deposit/>}/>
      </Routes>
    </div>
  )
}

export default App