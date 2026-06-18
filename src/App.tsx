
import './App.css'
import { Routes, Route } from 'react-router'
import Login from './Pages/Auth/Login'
import ForgotPassword from './Pages/Auth/ForgotPassword'
import ResetPassword from './Pages/Auth/ResetPassword'
import VerifyRecovery from './Pages/Auth/VerifyRecovery'
import SignUp from './Pages/Auth/SignUp'
import SetPassword from './Pages/Auth/SetPassword'


import VerifySignUp from './Pages/Auth/VerifySignUp'

import HomePage from './Pages/HomePage'
import DepartmentPage from './Pages/DepartmentPage'
import SupportPage from './Pages/SupportPage'
import ScrollToTop from './Components/ScrollToTop'
import PatientPage from './Pages/PatientPage'

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
function App() {

  return (
    <>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/verifySignUp" element={<VerifySignUp />} />
      <Route path="/setPassword" element={<SetPassword />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/verifyRecovery" element={<VerifyRecovery />} />


      <Route path="/" element={<HomePage />} />
      <Route path="/departments" element={<DepartmentPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path='/patientDashboard' element={<PatientPage />} />

    </Routes>
            <ToastContainer  position='top-center'
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    pauseOnHover
    draggable />
      <ScrollToTop />
    </>
  )
}

export default App
