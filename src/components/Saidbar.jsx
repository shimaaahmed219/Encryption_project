
import Settingsicon from "../assets/saidbaricon/Group (1).svg";
import Encrypted from "../assets/saidbaricon/encrypted-icon (1) 1.svg";
import employee from "../assets/saidbaricon/business-team-icon 1.svg";
import users from "../assets/saidbaricon/male-add-icon 1.svg";
import img from "../assets/saidbaricon/graph-icon 1.svg";
import Edit from "../assets/saidbaricon/shape.svg";
import "./module.css";
import { Link } from "react-router-dom";
// import Logout from "./Logout";
import decimg from "../assets/EncAndEecICONS/Group 2288.svg";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { IconButton } from "@mui/material";
import { useGetProfileDataQuery } from "../rtk/api/apiSlice";
import Logout from "./Logout/Logout";





// eslint-disable-next-line react/prop-types
export default function Saidebar( {handilClose, showSidebar} ) {
  const links = [
    { id: 1, name: "Statistics", href: "/", src: img },
    { id: 2, name: "All Encrypted files", href: "/addFile", src: Encrypted },
    { id: 5, name: "Add request", href: "/passForm", src: Edit },
    { id: 9, name: "add employee", href: "/addEmployee", src: users },
    { id: 7, name: "Encryption file", href: "/encryption", src: Encrypted },
    { id: 8, name: "Decrypt file", href: "/Decrypt", src: decimg },
    { id: 9, name: "Employees", href: "/employee", src: employee },
    { id: 10, name: "forginEmployee", href: "/forginEmployee", src: users },
    { id: 11, name: "recruitment", href: "/recruitment", src: Settingsicon },
   
  ];

  const { data} = useGetProfileDataQuery();

  return (
    <div
      className={`${!data && "hidden"} transition-opacity 
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
          <ChevronLeftIcon className="ms-auto" />
        </IconButton>
      </div>

      <div className={`flex flex-col  items-center pb-6 bt-3`}>
        <div className="w-[65px] h-[67px] rounded-full userIcon flex justify-center items-center ">
          {data?.photo ? (
            <img
              className="w-[65px] h-[67px] rounded-full"
              src={`https://epassport-api.preview-ym.com/${data?.photo}`}
            />
          ) : (
            ""
          )}
        </div>
        <h2 className={`font-tinos text-yellowAcc capitalize text-[24px]`}>
          {data?.name}
        </h2>
        <h6 className={`font-roboto font-light text-email  text-[20px]`}>
          {data?.email}
        </h6>
        <div className="flex flex-col w-full mt-5  ">
          {links.map((link) => (
            <div   key={link.id} className="hover:bg-hover px-5 hover:pl-10">
              <Link
             
                to={link.href}
                className={`font-roboto font-medium hover:text-gray-100 flex my-2  capitalize items-center gap-[20px] w-full h-[40px] text-white border-none text-left text-[20px] hover:bg-opacity-10`}
              >
                <img src={link.src} alt="" width={20} height={20} />
                {link.name}
              </Link>
            </div>
          ))}
          <Logout />
        </div>
      </div>
    </div>
  );
}
