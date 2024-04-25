import AddEmployeeForm from "../components/AddEmployee/AddEmployeeForm";
import FexidSidebar from "../components/FexidSidebar";
import Nav from "../components/Nav";

import icon from "../assets/navImg/Group (1).svg";
export default function AddEmployee() {
  return (
    // </div>
    <div className="min-h-screen bg-bg">
      <div className="xl:flex  flex-row">
        <div className=" w-[26%] min-h-screen xl:block hidden">
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
            <AddEmployeeForm />
          </div>
        </div>
      </div>
    </div>
  );
}
