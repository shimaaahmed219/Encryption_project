import { Link } from "react-router-dom";
import { useGetProfileDataQuery } from "../../rtk/api/apiSlice";

export default function NavDropDowen() {
  const { data } = useGetProfileDataQuery();
  return (
    <div className="flex ">
      <div className=" z-50 w-[200px] h-[200px] bg-landingBg  xl:hidden block shadow-lg text-yellowAcc overflow-auto text-[20px] rounded-xl fixed md:top-[100px] right-[50px]">
        <ul>
          <Link to="/">
            {" "}
            <li className="hover:bg-greenAcc py-2 px-5 text-greenAcc font-tinos  rounded-xl font-bold hover:px-8 hover:text-white">
              Home
            </li>
          </Link>

          <Link to="/about">
            {" "}
            <li className="hover:bg-greenAcc py-2 px-5 text-greenAcc font-tinos  rounded-xl font-bold hover:px-8 hover:text-white">
              About Us
            </li>
          </Link>

          <Link to="/service">
            {" "}
            <li className="hover:bg-greenAcc py-2 px-5 text-greenAcc font-tinos  rounded-xl font-bold hover:px-8 hover:text-white">
              Service
            </li>
          </Link>
          <Link to="/security">
            <li className="hover:bg-greenAcc py-2 px-5 text-greenAcc font-tinos  rounded-xl font-bold hover:px-8 hover:text-white">
              Security
            </li>
          </Link>
          <Link to="/passform">
            <li className="hover:bg-greenAcc py-2 px-5 text-greenAcc font-tinos  rounded-xl font-bold hover:px-8 hover:text-white">
              passport
            </li>
          </Link>
          <li  className={`${data && "hidden"}`}><Link to="/login" className='"hover:bg-greenAcc py-2 px-5 text-greenAcc font-tinos  rounded-xl font-bold hover:px-8 hover:text-white'>Sign in</Link> </li>
        <li  className={`${!data && "hidden"}`}><Link to="/login" className='"hover:bg-greenAcc py-2 px-5 text-greenAcc font-tinos  rounded-xl font-bold hover:px-8 hover:text-white'>dashboard</Link> </li>
        </ul>
       
      </div>
    </div>
  );
}
