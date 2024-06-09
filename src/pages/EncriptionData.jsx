

import { useState } from "react";

// import RecruimentDesc from "../Components/RecruitimentArea/RecruimentDesc";
import searchicon from "../assets/employee/shape (3).svg";
import Nav from "../components/Nav";
import Hr from "../components/Hr";
import EncriptionDataTable from "../components/EncriptionData/EncriptionDataTable";


export default function EncriptionData() {
  const [search, setSearch] = useState("");


  return (
   
   <div className="w-full min-h-screen bg-bg py-2">
     
      <Nav />
      <Hr />
     
      <div className="w-5/6 m-auto">
        <h1 className="font-tinos my-[50px] leading-9 font-bold text-[25px] text-greenAcc">
        Accepted citizens
        </h1>

        <div className="w-[431px] h-[51px] mt-[-50px] m-auto bg-searchbg rounded-[12px] justify-center items-center flex ">
         
          <span className="px-5">
            <img src={searchicon} />
          </span>
          
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="search"
            className=" focus:outline-none px-5 w-[90%] h-full placeholder:text-[24px] placeholder:font-roboto focus:outline bg-transparent"
            placeholder="Search..."
          />
          
        </div>
      </div>
      <EncriptionDataTable search={search} />
    </div>
  );
}
