import { Link } from "react-router-dom";
import users from "../../assets/saidbaricon/male-add-icon 1.svg";
import employee from "../../assets/saidbaricon/business-team-icon 1.svg";
import { RiAdminFill } from "react-icons/ri";
import "../style/scrol.css";
import { Dashboard } from "@mui/icons-material";
export default function AdminLinks() {
  return (
    <>
      <div className="hover:bg-hover px-5 hover:pl-10">
        <Link
          to="/Employee"
          className="links font-roboto hover:text-gray-100 flex my-1 capitalize items-center gap-[20px] w-full h-[40px] text-white border-none text-left text-[16px] hover:bg-opacity-10"
        >
          <img src={employee} alt="user icon" width={20} height={20} />
          employee
        </Link>
      </div>

      <div className="hover:bg-hover px-5 hover:pl-10">
        <Link
          to="/addEmployee"
          className="links font-roboto hover:text-gray-100 flex my-1 capitalize items-center gap-[20px] w-full h-[40px] text-white border-none text-left text-[16px] hover:bg-opacity-10"
        >
          <img src={users} alt="user icon" width={20} height={20} />
          add employee
        </Link>
      </div>

      <div className="hover:bg-hover px-5 hover:pl-10">
        <Link
          to="/encriptionData"
          className="links font-roboto hover:text-gray-100 flex my-1 capitalize items-center gap-[20px] w-full h-[40px] text-white border-none text-left text-[16px] hover:bg-opacity-10"
        >
          <img src={employee} alt="user icon" width={20} height={20} />
          Accepted citizens
        </Link>
      </div>
      <div className="hover:bg-hover px-5 hover:pl-10">
        <Link
          to="/dashboard"
          className="links font-roboto hover:text-gray-100 flex my-1 capitalize items-center gap-[20px] w-full h-[40px] text-white border-none text-left text-[16px] hover:bg-opacity-10"
        >
          {/* <img src={employee} alt="user icon" width={20} height={20} /> */}
          <Dashboard />
          Dashboard
        </Link>
      </div>
      <div className="hover:bg-hover px-4 hover:pl-10">
        <Link
          to="/passEployee"
          className="links font-roboto hover:text-gray-100 flex my-1 capitalize items-center gap-[20px] w-full h-[40px] text-white border-none text-left text-[16px] hover:bg-opacity-10"
        >
          <RiAdminFill className=" text-[25px]" />
          passport authority
        </Link>
      </div>
      <div className="hover:bg-hover px-4 hover:pl-10">
        <Link
          to="/ForgenEmployee"
          className="links font-roboto hover:text-gray-100 flex my-1 capitalize items-center gap-[20px] w-full h-[40px] text-white border-none text-left text-[16px] hover:bg-opacity-10"
        >
          <RiAdminFill className=" text-[25px]" />
          mofa
        </Link>
      </div>
      <div className="hover:bg-hover px-4 hover:pl-10">
        <Link
          to="/recruitmentArea"
          className="links font-roboto hover:text-gray-100 flex my-1 capitalize items-center gap-[20px] w-full h-[40px] text-white border-none text-left text-[16px] hover:bg-opacity-10"
        >
          <RiAdminFill className=" text-[25px]" />
          recruitment district
        </Link>
      </div>
    </>
  );
}
