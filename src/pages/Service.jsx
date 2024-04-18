

import img from "../assets/landingPage/elaosboa79384 2.svg";
import secImg from "../assets/landingPage/securty.svg";
import icon2 from "../assets/landingPage/Group56.svg";
import icon from "../assets/landingPage/Group55.svg";
import Footer from "../components/LandingPage/Footer";
import Navbar from "../components/Navbar";

export default function Service() {
  return (
    <div>
      <div className="h-[434px]  relative">
        <img src={img} className="w-full absolute " />
        <div className="absolute w-full">
          <Navbar/>
          <h1 className="text-white text-center lg:mt-[70px] mt-[-50px] capitalize md:text-[64px] text-[20px] font-tinos">
            Security
          </h1>
        </div>
      </div>

      {/*  */}
      <div className=" md:my-[200px] my-[-100px] px-10">
        <div className="flex md:w-[20%] md:m-auto ml-[100px] ">
          <img src={secImg} className="" />
          <img src={icon} className="absolute mx-[100px] " />
          <img src={icon2} className="absolute mx-[150px] mt-[50px] " />
        </div>
        <p className="lg:w-[904px] m-auto my-[50px] text-[37px] font-roboto font-normal leading-[47px] text-center text-greenAcc">
          text ever since when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <Footer/>
    </div>
  )
}
