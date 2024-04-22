import { useState } from "react";
// import EmployeeDetails from '../Components/Employee/EmployeeDetails'

import icon from "../assets/employee/business-team-icon 1.svg";
import searchicon from "../assets/employee/shape (3).svg";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import EmployeeDetails from "../components/Employee/EmployeeDetails";
export default function Empolyee() {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div className="bg-bg min-h-screen w-6/6 py-4">
      <Nav />
      <hr className="w-6/6 h-[0.15rem] bg-greenAcc my-4" />

      {/* title */}
      <div className="flex w-5/6 m-auto gap-x-3 items-center py-10">
        <img src={icon} />{" "}
        <h2 className="text-greenAcc font-normal text-[24px] font-roboto ">
          Employees
        </h2>
      </div>
      <form>
        <div className=" w-5/6 m-auto gap-y-7 flex md:flex-row flex-col items-center gap-x-[61px]  ">
          {/* add employee button */}
          <Link to="/addEmployee">
            <button className="w-[267px] h-[60px] bg-greenAcc text-white rounded-input font-roboto text-[24px] font-thin items-center flex justify-center">
              {" "}
              <span className=" pr-3">+</span>Add an employee
            </button>
          </Link>

          {/* search input */}
          <div className="md:w-[431px] h-[51px] bg-searchbg rounded-[12px] justify-center items-center flex ">
            <span className="px-5">
              <img src={searchicon} />
            </span>
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="search"
              className=" focus:outline-none px-5 md:w-[90%]  h-full placeholder:text-[24px] placeholder:font-roboto focus:outline bg-transparent"
              placeholder="Search..."
            />
          </div>
        </div>

        <EmployeeDetails search={search} />
      </form>
    </div>
  );
}
