import { Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import Profile from "./pages/profile/Profile"
import AddFund from "./pages/profile/AddFund"



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Profile/>}/>
        <Route path="/add-fund" element={<AddFund/>}/>
      </Routes>
    </div>
  )
}

export default App