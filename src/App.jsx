import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Service from "./pages/Service";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddEmployee from "./pages/AddEmployee";
import Employee from "./pages/Employee";
import EditEmployee from "./pages/EditEmployee";
import EncryptedFiles from "./pages/EncryptedFiles";
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
import EncriptionData from "./pages/EncriptionData";
// import axios from "axios";
// import { url } from "./components/URL";

export default function App() {
  const location = useLocation();
  // const [data, setData] = useState({});
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // useEffect(() => {
  //   axios
  //     .get(`${url}/auth/myProfile`, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  //       },
  //     })
  //     .then((res) => setData(res.data.data));
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/tryagain" element={<TryAgain />} />
        <Route path="/passform" element={<PassportFormReq />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/security" element={<Security />} />
        <Route path="/Dashboard" element={<Dashboard />} /> 
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/EditEmployee/:id" element={<EditEmployee />} />
        <Route path="/EncryptedFiles/:id" element={<EncryptedFiles />} />
        <Route path="/Encryption" element={<Encryption />} />
        <Route path="/passEployee" element={<PassEmployee />} />
        <Route path="/ForgenEmployee" element={<ForeignEmployee />} />
        <Route path="/recruitmentArea" element={<RecruitmentArea />} />
        <Route path="/updateClient/:id" element={<UpdateClientData />} /> 
        <Route path="/updateProfile/:id" element={<UpdateMyProfile />} />
        <Route path="/encriptionData" element={<EncriptionData />} />

        {/* {data.user_type === "admin" && (
          <>
            <Route path="/addEmployee" element={<AddEmployee />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/EditEmployee/:id" element={<EditEmployee />} />
            <Route path="/EncryptedFiles/:id" element={<EncryptedFiles />} />
            <Route path="/Encryption" element={<Encryption />} />
            <Route path="/passEployee" element={<PassEmployee />} />
            <Route path="/ForgenEmployee" element={<ForeignEmployee />} />
            <Route path="/recruitmentArea" element={<RecruitmentArea />} />
            <Route path="/updateClient/:id" element={<UpdateClientData />} />
            <Route path="/updateProfile/:id" element={<UpdateMyProfile />} />
            <Route path="/encriptionData" element={<EncriptionData />} />
          </>
        )}
        {data.user_type === "mofa" && (
          <>
           <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/ForgenEmployee" element={<ForeignEmployee />} />
            <Route path="/updateProfile/:id" element={<UpdateMyProfile />} />
          </>
        )}

        {data.user_type === "passport authority" && (
          <> <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/passEployee" element={<PassEmployee />} />
            <Route path="/updateProfile/:id" element={<UpdateMyProfile />} />
          </>
        )}

        {data.user_type === "recruitment district" && (
          <>
         <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/recruitmentArea" element={<RecruitmentArea />} />
            <Route path="/updateProfile/:id" element={<UpdateMyProfile />} />
          </>
        )} */}
        <Route
          path="*"
          element={
            <div className="text-greenAcc flex justify-center items-center w-full min-h-screen text-[25px] capitalize font-semibold">
              You are not authorized to access this page
            </div>
          }
        />
      </Routes>
    </>
  );
}
