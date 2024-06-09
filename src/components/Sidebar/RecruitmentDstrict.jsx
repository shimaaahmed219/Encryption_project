import { Link } from "react-router-dom"
import { RiAdminFill } from "react-icons/ri";

export default function RecruitmentDstrict() {
  return (
   <>
   <div className="hover:bg-hover px-4 hover:pl-10">
     <Link
      to="/recruitmentArea"
      className="links font-roboto hover:text-gray-100 flex my-1 capitalize items-center gap-[20px] w-full h-[40px] text-white border-none text-left text-[16px] hover:bg-opacity-10"

   >
     < RiAdminFill className=" text-[25px]"/>
     recruitment district
    </Link>
    </div>
   </>
  )
}
