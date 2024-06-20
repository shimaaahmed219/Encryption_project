import { Link } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import Edit from "../../assets/saidbaricon/shape.svg";
export default function PassportAuthorityLinks() {
  return (
    <>
      <div className="hover:bg-hover px-5 hover:pl-10">
        <Link
          to="/passForm"
          className="links font-roboto hover:text-gray-100 flex my-1 capitalize items-center gap-[20px] w-full h-[40px] text-white border-none text-left text-[16px] hover:bg-opacity-10"
        >
          <img src={Edit} alt="user icon" width={20} height={20} />
          Add request
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
    </>
  );
}
