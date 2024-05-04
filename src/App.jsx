import {  Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Service from "./pages/Service";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddEmployee from "./pages/AddEmployee";
import Employee from "./pages/Employee";
import EditEmployee from "./pages/EditEmployee";
import EncryptedFiles from "./pages/EncryptedFiles";
import Decrypt from "./pages/Decrypt";
import Encryption from "./pages/Encryption";
import TryAgain from "./pages/TryAgain";
import PassportFormReq from "./pages/PassportFormReq";
import PassEmployee from "./pages/PassEmployee";
import ForeignEmployee from "./pages/ForeignEmployee";
import RecruitmentArea from "./pages/RecruitmentArea";
import UpdateClientData from "./pages/UpdateClientData";
import Security from "./pages/Security";
import UpdateMyProfile from "./pages/UpdateMyProfile";
import { useEffect } from "react";







export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  return (
    <>
    
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/security" element={<Security/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/addEmployee" element={<AddEmployee/>}/>
      <Route path="/employee" element={<Employee/>}/>
      <Route path="/EditEmployee/:id" element={<EditEmployee />} />
      <Route path="/EncryptedFiles" element={<EncryptedFiles/>} />
      <Route path="/decrypt" element={<Decrypt/>} />
      <Route path="/Encryption" element={<Encryption/>} />
      <Route path="/tryagain" element={<TryAgain/>} />
      <Route path="/passform" element={<PassportFormReq/>} />
      <Route path="/passEployee" element={<PassEmployee/>} />
      <Route path="/ForgenEmployee" element={<ForeignEmployee/>} />
      <Route path="/recruitmentArea" element={<RecruitmentArea/>} />
      <Route path="/updateClient/:id" element={<UpdateClientData/>} />
      <Route path="/updateProfile/:id" element={<UpdateMyProfile/>} />
     
      <Route path="*" element={<div>not found</div>} />
    </Routes>
    
    
    </>
  )
}
