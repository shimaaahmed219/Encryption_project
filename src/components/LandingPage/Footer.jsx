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
              <span className="text-white mx-2 font-thin"><Link to="/">eagensi@mail.com</Link></span>
            </h6>
            <h6 className="my-2">
              <LocalPhoneIcon className="text-gray-500 " />
              <span className="text-white mx-2">011234567</span>
            </h6>
          </div>

          {/*  */}
          <div className=" xl:my-0 py-7">
            <h6 className="text-yellowAcc text-[20px] font-roboto capitalize font-light">
              Navigation
            </h6>
            <div className="w-[153px] flex-col flex text-white font-ropoto text-[20px]">
              <Link to="">Home </Link>
              <Link to="">About Us </Link>
              <Link to="">What We Do </Link>
              <Link to="">To The Power of 10 Donate </Link>
            </div>
          </div>
          {/*  */}
          <div className="xl:my-0 py-7">
            <h6 className="text-yellowAcc text-[20px] font-roboto capitalize font-light">
              What We Do
            </h6>
            <div className=" flex-col flex text-white font-ropoto text-[20px]">
              <ul>
                <li>Encouraging Testing</li>
                <li>Strengthening Advocacy</li>
                <li>Sharing Information</li>
                <li>Building Leadership</li>
                <li>Engaging With Global Fund</li>
                <li>Shining a Light</li>
              </ul>
            </div>
          </div>
          {/*  */}

          <div className="xl:my-0 py-7">
            <h6 className="text-yellowAcc xl:ml-[60px] text-[20px] font-roboto capitalize font-light">
              TALK TO US
            </h6>
            <div className=" flex-col flex xl:ml-[60px] text-white font-ropoto text-[20px]">
              <ul>
                <li>support@ercom.com</li>
                <li>+66 2399 1145</li>
                <li>Contact Us</li>
                <li>Facebook</li>
                <li>Linkedin</li>
                <li>Twitter</li>
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
