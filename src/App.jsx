import { Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import Profile from "./pages/profile/Profile"
import AddFund from "./pages/profile/AddFund"
import Deposit from "./pages/profile/Deposit"
import Exchange from "./pages/profile/Exchange"
import ScrollToTop from "./components/ScrollToTop"
import Trade from "./pages/trade/Trade"
import Transfer from "./pages/trade/Transfer"
import Login from "./Shared/Login"
import SignIn from "./Shared/SignIn"
import ForgotPass from "./Shared/ForgotPass"
import SignUp from "./Shared/SignUp"



function App() {
  return (
    <div>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signIn" element={<SignIn></SignIn>}></Route>
        <Route path="/forgot" element={<ForgotPass></ForgotPass>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
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