

import img from "../assets/landingPage/elaosboa79384 2.svg";
import dec from "../assets/landingPage/dec2.svg";
import enc from "../assets/landingPage/enc.svg";
import air from "../assets/landingPage/Vector33.svg"
import air2 from "../assets/landingPage/air.svg"
import Footer from "../components/LandingPage/Footer";
import Navbar from "../components/Navbar";
import ServiceMop from "../components/serviceComponents/ServiceMop";


export default function Service() {
  return (
    <div>
      <div className="h-[434px] z-50 relative">
        <img src={img} className="w-full absolute " />
        <div className="absolute w-full z-50">
          <Navbar />
          <h1 className="text-white md:block hidden text-center lg:mt-[70px] mt-[-50px] capitalize md:text-[64px] text-[20px] font-tinos">
          Service
          </h1>
        </div>
      </div>

      {/*  */}
      <div className="md:block hidden">
        {/* cntainer */}
        <div className="  w-full min-h-[600px] py-10 mb-[200px] flex flex-col items-center justify-center">
          
          <div className="relative  w-full flex flex-col items-center justify-center">
            <div className="absolute z-30 md:w-[351px] md:block hidden w-[30%] h-[255px] rounded-[11px] border-2 border-yellowAcc"></div>

            <div className="absolute z-40 flex gap-x-[60px]">
              <div className="  md:w-[328px] w-[40%] flex flex-col justify-center items-center h-[206px] bg-greenAcc rounded-[11px]">
                <div className="h-[200px] w-[330px]  bg-white opacity-5 absolute top-[-100px] rounded-[50%]">

                </div>
                <img src={dec} className="z-50"/>
                <h1 className="font-tinos font-bold text-[32px] px-10 text-center text-white">
                Decryption technology
                </h1>
              </div>


           <div className="  w-[328px] flex flex-col justify-center items-center h-[206px] bg-greenAcc rounded-[11px]">
                <div className="h-[200px] w-[330px] bg-white opacity-5 absolute top-[-100px] rounded-[50%]">
               
                </div>
                <img src={enc} className="z-50"/>
                <h1 className="font-tinos font-bold text-[32px] px-10 text-center text-white">
                Encryption technology
                </h1>
              </div>

            </div>
          </div>
           
          <div className="  absolute flex flex-col justify-center items-center mt-[550px] w-[328px] h-[206px] bg-greenAcc rounded-[11px] ">
                <div className="h-[200px]  w-[330px] bg-white opacity-5 absolute top-[-100px] rounded-[50%]">
              
                </div>
                <div className=" z-50 ">
                  <div className="">
                  <img src={air} className="z-30 absolute top-[20px] left-[120px] my-2"/>
                <img src={air2} className="z-40 absolute top-[20px]  left-[130px] my-2"/>
                  </div>
              
                <h1 className="font-tinos font-bold text-[32px] mt-20 px-10 text-center text-white">
                Obtaining a passport
                </h1>
                </div>
        </div>
       
        </div>
      </div>

      <div className="md:hidden block z-40">

      
        <ServiceMop/>
        </div>

      <Footer />
    </div>
  );
}
