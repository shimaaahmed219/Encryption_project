import icon from "../../assets/landingPage/Group (1).svg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
     <div className="w-full bg-greenAcc min-h-[332px] pt-10">
        <div className=" w-5/6 m-auto py-10 grid lg:grid-cols-4  md:grid-cols-2  grid-cols-1 ">
          <div>
            <img src={icon} />
            <h6 className="text-white text-[16px] w-[165px]">
              Funding freemium long tail hypotheses first mover.
            </h6>
            <h6 className="my-2">
              <MailOutlineIcon className="text-gray-400" />
              <span className=" mx-2 font-thin  text-yellowAcc"><Link to="/">eagensi@mail.com</Link></span>
            </h6>
            <h6 className="my-2">
              <LocalPhoneIcon className="text-gray-500 " />
              <span className= "mx-2 text-yellowAcc">011234567</span>
            </h6>
          </div>

          {/*  */}
          <div className=" xl:my-0 py-7">
            <h6 className="text-white text-[18px] my-1 font-roboto capitalize font-semibold ">
              Navigation
            </h6>
            <div className="w-[153px] flex-col flex text-white font-ropoto  leading-6 text-[16px]">
              <Link to="/" className="hover:text-yellowAcc">Home </Link>
              <Link to="/about"  className="hover:text-yellowAcc">About Us </Link>
              <Link to="/service"  className="hover:text-yellowAcc">service </Link>
              <Link to="/security"  className="hover:text-yellowAcc">security </Link>
            </div>
          </div>
          {/*  */}
          <div className="xl:my-0 py-7">
            <h6 className="text-white text-[18px] font-roboto font-semibold capitalize ">
              What We Do
            </h6>
            <div className=" flex-col flex text-white font-ropoto leading-6 my-1 text-[16px]">
              <ul>
                <li>Providing an electronic </li>
                  <li>passport service</li>
                <li>Data encryption</li>
                <li>Decrypt data</li>
               
              </ul>
            </div>
          </div>
          {/*  */}

          <div className="xl:my-0 py-7">
            <h6 className="text-white font-semibold my-1 xl:ml-[60px] xxl:text-[20px] text-[18px] font-roboto capitalize ">
              TALK TO US
            </h6>
            <div className=" flex-col flex xl:ml-[60px] font-ropoto text-[16px]">
              <ul className="leading-6">
                <li><Link className="text-yellowAcc"> support@ercom.com</Link></li>
                <li><Link className="text-yellowAcc">+66 2399 1145</Link></li>
                <li><Link className="text-yellowAcc">Contact Us</Link></li>
                <li><Link className="text-yellowAcc">Facebook</Link></li>
                <li><Link className="text-yellowAcc">Linkedin</Link></li>
                <li><Link className="text-yellowAcc">Twitter</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full bg-greenAcc">
          <h6 className="text-[14px] text-white m-auto text-center py-2">
            {" "}
            © 2019 Lift Media. All Rights Reserved.
          </h6>
        </div>
      </div>
    
    
    </>
  )
}
