import FexidSidebar from "../components/FexidSidebar";
import Nav from "../components/Nav";
import icon from "../assets/navImg/Group (1).svg";
import UpdateProfileForm from "../components/UpdateMyProfile/UpdateProfileForm";
import { useState } from "react";

export default function UpdateMyProfile() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="min-h-screen bg-bg">
      <div className="xl:flex  flex-row">
        <div className=" w-[26%] min-h-screen z-30 xl:block hidden">
          <FexidSidebar />
        </div>

        <div className=" py-2 w-full h-full">
          <div className="xl:hidden block">
            <Nav />
          </div>
          <div className="xl:block hidden">
            <div className="flex row w-full">
              <div className="ms-auto flex">
                <h1
                  className={` font-tinos text-[26px] text-greenAcc mt-2 mr-3  text-xl`}
                >
                  <span className="text-yellowAcc text-[22px]">E-</span>passport
                </h1>

                <img
                  src={icon}
                  alt="enc-img"
                  className="ms-auto md:block hidden transition mr-[90px] ease-in-out delay-150 duration-700 "
                />
              </div>
            </div>
          </div>
          <hr className="w-full h-[0.15rem] bg-greenAcc my-2" />
          <div className="w-full h-full flex justify-center items-center p-1">
            {/* <h1 className={`${rob.className} ms-[50px]  text-[26px]  capitalize text-greenAcc`}>Edit Employee </h1> */}
            <UpdateProfileForm isLoading={isLoading} setIsLoading={setIsLoading}/>
          </div>
        </div>
      </div>
      {isLoading && (
        <div>
          <div className="w-full z-40 min-h-[1200px] absolute left-0 top-0 bg-black opacity-85"></div>
          <div className="w-full h-full top-0 left-0 absolute flex flex-col justify-center items-center">
            <div className="mt-[-60px] text-white text-[20px] capitalize z-50 font-tinos">
              Adding...
            </div>
            <div className="absolute top-0 flex  justify-center items-center h-full w-full z-50">
              <div className="h-[25px] w-[30%] border-[1px] py-[5px] px-2 border-white animate-pulse">
                <div className="bg-approved w-full h-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
