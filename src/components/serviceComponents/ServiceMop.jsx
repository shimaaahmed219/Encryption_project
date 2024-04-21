
import dec from "../../assets/landingPage/dec2.svg";
import enc from "../../assets/landingPage/enc.svg";
import air from "../../assets/landingPage/Vector33.svg"
import air2 from "../../assets/landingPage/air.svg"
export default function ServiceMop() {
  return (
    <div className=" min-h-[900px]  sm:mt-[-100px] mt-[-300px] gap-y-10 flex flex-col justify-center items-center">
        <h1 className="text-greenAcc text-center  capitalize sm:text-[64px] text-[50px] font-tinos">
        Service
          </h1>
        <div className=" z-50  sm:w-[328px] w-[280px] relative  flex flex-col justify-center items-center h-[206px] bg-greenAcc rounded-[11px]">
                <div className="h-[200px] sm:w-[330px] w-[280px] bg-white opacity-5  absolute top-[-100px] rounded-[50%]">

                </div>
                <img src={dec} className="z-50"/>
                <h1 className="font-tinos mt-5 font-bold text-[32px] px-10 text-center text-white">
                Decryption technology
                </h1>
              </div>
       
              <div className=" z-40 sm:w-[328px] w-[280px] relative  flex flex-col justify-center items-center h-[206px] bg-greenAcc rounded-[11px]">
                <div className="h-[200px] mt-5  sm:w-[330px] w-[280px] bg-white opacity-5  absolute sm:top-[-100px] top-[-120px] rounded-[50%]">

                </div>
                <img src={enc} className="z-50"/>
                <h1 className="font-tinos mt-5 font-bold text-[32px] px-10 text-center text-white">
                Encryption technology
                </h1>
              </div>
        <div className="relative sm:w-[330px] w-[280px] h-[206px] mb-20">
        <div className=" absolute flex flex-col justify-center items-center  sm:w-[328px] w-[280px] h-[206px] bg-greenAcc rounded-[11px] ">
                <div className="h-[200px]  sm:w-[330px] w-[280px] bg-white opacity-5 absolute top-[-100px] rounded-[50%]">
              
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
  )
}
