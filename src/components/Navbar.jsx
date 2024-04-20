import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import NavDropDowen from "./LandingPage/NavDropDowen";
import { useGetProfileDataQuery } from "../rtk/api/apiSlice";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
export default function Navbar() {
  const location = useLocation();
  const [showDropDowen, setShowDropDowen] = useState(false);
  const { data } = useGetProfileDataQuery();
  const toogleDropDowen = () => {
    const value = showDropDowen ? false : true;
    setShowDropDowen(value);
    console.log(showDropDowen);
  };
  return (
    <div className="w-5/6 m-auto my-5  z-50 items-center justify-between  h-70px flex ">
      <div className="flex ">
        <h1
          className={` font-tinos text-[24px]  items-center gap-x-8 text-white mt-3 ml-3  text-xl`}
        >
          <span className="text-yellowAcc text-[20px]">E-</span>passport
        </h1>
      </div>

      <nav className="xl:block hidden ms-auto">
        <ul className="flex text-white justify-between gap-x-16 font-tinos font-bold text-[24px] items-center">
          <li
            className={`relative ${
              location.pathname === "/" ? "border-b-2 border-yellowAcc" : ""
            } `}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`relative ${
              location.pathname === "/about"
                ? "border-b-2 border-yellowAcc"
                : ""
            } `}
          >
            <Link to="/about">About Us</Link>
          </li>
          <li
            className={`relative ${
              location.pathname === "/service"
                ? "border-b-2 border-yellowAcc"
                : ""
            } `}
          >
            <Link to="/service">Service</Link>
          </li>
          <li
            className={`relative ${
              location.pathname === "/passForm"
                ? "border-b-2 border-yellowAcc"
                : ""
            } `}
          >
            <Link to="/passForm">passport</Link>
          </li>
          <li className={`${data && "hidden"}`}>
            <Link
              to="/login"
              className={`font-roboto    text-white bg-yellowAcc py-[10px] px-[24px] rounded-[25px] h-[48p]`}
            >
              Sign in
            </Link>
          </li>
          <li className={`${!data && "hidden"}`}>
            <Link
              to="/dashboard"
              className="font-tinos white flex items-center mt-[4px] hover:text-greenAcc   "
            >
              <span className="text-greenAcc">D</span>ashboard
            </Link>
          </li>
        </ul>
      </nav>

      <div className="xl:hidden block w-6/6 ms-auto">
        <div className="flex md:flex-row flex-col">
          <button
            onClick={toogleDropDowen}
            className={`${showDropDowen && <NavDropDowen />} `}
          >
            <FormatListBulletedIcon className="text-white"/>
          </button>
          <div className={`${!showDropDowen && "hidden"} `}>
            <NavDropDowen />
          </div>
          ~
        </div>
      </div>
    </div>
  );
}
