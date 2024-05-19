import { Link, useLocation } from "react-router-dom";
import icon from "../../assets/landingPage/Group (1).svg";
import { useState } from "react";
import icon2 from "../../assets/filters-2.svg";

import NavDropDowen from "./NavDropDowen";
import { useGetProfileDataQuery } from "../../rtk/api/apiSlice";
export default function NavLandingPage() {
  const { data } = useGetProfileDataQuery();
  // import {log} from '@mui/icons-material'
  const location = useLocation();
  const [showDropDowen, setShowDropDowen] = useState(false);

  const toogleDropDowen = () => {
    const value = showDropDowen ? false : true;
    setShowDropDowen(value);
    console.log(showDropDowen);
  };

  return (
    <div className="w-5/6 m-auto  items-center justify-between pt-5 pb-10 h-70px flex ">
      <div className="flex ">
        <img src={icon} className="md:block hidden" />
        <h1
          className={` font-tinos text-[24px]  items-center gap-x-8 text-greenAcc mt-3 ml-3  text-xl`}
        >
          <span className="text-yellowAcc md:text-[24px] text-[15px]">E-</span>
          passport
        </h1>
      </div>

      <nav className="xl:block hidden ms-auto items-center">
        <ul className="flex text-greenAcc justify-between gap-x-14 font-tinos font-bold text-[20px] items-center">
          <li
            className={` 
            ${
              location.pathname === "/" ? "border-b-2 border-yellowAcc" : ""
            } hover:text-yellowAcc 
            `}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={` ${
              location.pathname === "/about"
                ? "border-b-2 border-yellowAcc"
                : ""
            }  hover:text-yellowAcc `}
          >
            <Link to="/about">About Us</Link>
          </li>
          <li
            className={` ${
              location.pathname === "/service"
                ? "border-b-2 border-yellowAcc"
                : ""
            }  hover:text-yellowAcc  `}
          >
            <Link to="/service">Service</Link>
          </li>
          <li
            className={` ${
              location.pathname === "/passform"
                ? "border-b-2 border-yellowAcc"
                : ""
            }  hover:text-yellowAcc `}
          >
            <Link to="/security">Security</Link>
          </li>
          <li
            className={` ${
              location.pathname === "/passform"
                ? "border-b-2 border-yellowAcc"
                : ""
            }  hover:text-yellowAcc `}
          >
            <Link to="/passform">passport</Link>
          </li>

          <li className={`${data && "hidden"}`}>
            <Link
              to="/login"
              className="font-roboto    text-white bg-yellowAcc py-[10px] px-[24px] rounded-[25px] h-[48p]"
            >
              Sign in
            </Link>
          </li>
          <li className={`${!data && "hidden"}`}>
            <Link
              to="/dashboard"
              className="font-tinos text-yellowAcc flex items-center mt-[4px] hover:text-greenAcc   "
            >
              <span className="text-greenAcc">D</span>ashboard
            </Link>
          </li>
        </ul>
      </nav>
      <div className="xl:hidden block w-6/6 ms-auto">
        <div className="flex">
          <button onClick={toogleDropDowen} className="">
            <img src={icon2} className="mt-2" />
          </button>
        </div>
      </div>
      {showDropDowen ? <NavDropDowen /> : ""}
    </div>
  );
}
