import { Link, useLocation } from "react-router-dom";
import icon from "../../assets/landingPage/Group (1).svg";
import { useState } from "react";
import icon2 from "../../assets/filters-2.svg";

import { LoginOutlined } from "@mui/icons-material";
import NavDropDowen from "./NavDropDowen";
export default function NavLandingPage() {
  // import {log} from '@mui/icons-material'
  const location = useLocation()
  const [showDropDowen, setShowDropDowen] = useState(false);

  const toogleDropDowen = () => {
    const value = showDropDowen ? false : true;
    setShowDropDowen(value);
    console.log(showDropDowen);
  };

  return (
    <div className='w-5/6 m-auto  items-center justify-between py-10 h-70px flex '>
      <div className='flex '>

      <img src={icon} />
        <h1 className={` font-tinos text-[24px]  items-center gap-x-8 text-greenAcc mt-3 ml-3  text-xl`}>
          <span className='text-yellowAcc text-[24px]'>E-</span>passport
        </h1>
      
      </div>

      <nav className='xl:block hidden ms-auto'>

        <ul className='flex text-greenAcc justify-between gap-x-16 font-tinos font-bold text-[24px] items-center'>
          <li className={`relative ${location.pathname==='/'?"border-b-2 border-yellowAcc":''} `}><Link to="/">Home</Link></li>
          <li className={`relative ${location.pathname==='/about'?"border-b-2 border-yellowAcc":''} `}><Link to="/about">About Us</Link></li>
          <li className={`relative ${location.pathname==='/service'?"border-b-2 border-yellowAcc":''} `}><Link to="/service">Service</Link></li>
          <li className={`relative ${location.pathname==='/passForm'?"border-b-2 border-yellowAcc":''} `}><Link to="/passForm">passport</Link></li>
          <li><Link to="/login" className='font-roboto    text-white bg-yellowAcc py-[10px] px-[24px] rounded-[25px] h-[48p]'>Sign in</Link></li>
        </ul>
      </nav>
      <div className='xl:hidden block w-6/6 ms-auto'>
        <div className="flex">
        <button onClick={toogleDropDowen} className=''>
        <img src={icon2} />
      
      </button>
      <Link to="/login" className='font-roboto text-greenAcc py-[10px] px-[24px]  h-[48p]'> <LoginOutlined/> Sign in</Link>
        </div>
    
      </div>
     {showDropDowen?<NavDropDowen/> :''}
    </div>
   
  
  );
}
