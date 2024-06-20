

import img from "../assets/saidbaricon/graph-icon 1.svg";
import Edit from "../assets/saidbaricon/shape.svg";
import "./module.css";
import { Link } from "react-router-dom";
// import Logout from "./Logout";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { IconButton } from "@mui/material";
import Logout from "./Logout/Logout";
import { useState ,useEffect } from "react";
import axios from "axios";
import { url } from "./URL";
import AdminLinks from "./Sidebar/AdminLinks";
import RecruitmentDstrict from "./Sidebar/RecruitmentDstrict";
import MofaLinka from "./Sidebar/MofaLinka";
import PassportAuthorityLinks from "./Sidebar/PassportAuthorityLinks";





// eslint-disable-next-line react/prop-types
export default function Saidebar( {handilClose, showSidebar} ) {
  const links = [
    { id: 1, name: "Home", href: "/", src: img },
  ];

  
  const [data, setData] = useState({});
  //   const [close, setClose] = useState(false);
  useEffect(() => {
    axios
      .get(`${url}/auth/myProfile`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => setData(res.data.data));
  }, []);
  // console.log(data);

  //   const handilClose = () => {
  //     setClose(true);
  //   };

  return (
    <div
      className={`${!data && "hidden"} z-50 transition-opacity 
      ${!showSidebar ? "hide" : "show"} 
      ${!showSidebar && "hidden"}

         w-[311px] h-screen pb-20 bg-greenAcc overflow-y-auto  fixed top-0 left-0 z-50 `}
    >
      <div className="flex justify-end p-5">
        <IconButton
          className="text-white  text-[50px]"
          onClick={handilClose}
          edge="start"
        >
          <ChevronLeftIcon className="ms-auto mt-[-20px]" />
        </IconButton>
      </div>

      <div className={`flex flex-col  items-center pb-6 bt-3`}>
        <div className="w-[65px] mt-[-20px] h-[67px] rounded-full userIcon flex justify-center items-center ">
          {data?.photo ? (
            <img
              className="w-[65px] h-[67px] rounded-full"
              src={`https://epassport-api.preview-ym.com/${data?.photo}`}
            />
          ) : (
            ""
          )}
        </div>
        <h2 className={`font-tinos text-yellowAcc capitalize text-[20px]`}>
          {data?.name}
        </h2>
       

        <h6 className={`font-roboto font-light text-email  text-[17px]`}>
          {data?.user_type}
        </h6>

        <div className="flex flex-col w-full   ">
          {links.map((link) => (
            <div   key={link.id} className="hover:bg-hover px-5 hover:pl-10">
              <Link
             
                to={link.href}
                className={`font-roboto font-medium hover:text-gray-100 flex my-1  capitalize items-center gap-[20px] w-full h-[40px] text-white border-none text-left text-[16px] hover:bg-opacity-10`}
              >
                <img src={link.src} alt="" width={20} height={20} />
                {link.name}
              </Link>
            </div>
          ))}

{data && data.user_type === "admin" ? (
<div className="flex flex-col w-full ">
              <AdminLinks/>
              </div>
            ) : null}

            {data && data.user_type === "recruitment district" ? (
              <div className="flex flex-col w-full ">
               <RecruitmentDstrict/>
              </div>
            ) : null}

            {data && data.user_type === "mofa" ? (
              <div className="flex flex-col w-full ">
             <MofaLinka/>
              </div>
            ) : null}

{data && data.user_type === "passport authority" ? (
              <div className="flex flex-col w-full ">
                <PassportAuthorityLinks/>
              </div>
            ) : null}

             <div className="hover:bg-hover px-5 hover:pl-10">
             <Link
             
             to={`/updateProfile/${data?.id}`}
             className={`font-roboto font-medium  hover:text-gray-100 flex my-2  capitalize items-center gap-[20px] w-full h-[40px] text-white border-none text-left text-[16px] hover:bg-opacity-10`}
           >
            <img src={Edit}/>
          update my profile
                </Link>
              </div>
     <div className="">
     <Logout />
     </div>
        </div>
      </div>
    </div>
  );
}
