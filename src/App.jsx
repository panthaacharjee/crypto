import { Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import Profile from "./pages/profile/Profile"



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Profile/>}/>
      </Routes>
    </>
  )
}

export default App