/* eslint-disable no-unused-vars */

import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { url } from "../URL";
import { useParams } from "react-router-dom";
import { GiPassport } from "react-icons/gi";

// eslint-disable-next-line react/prop-types
function Buttons({ search, setSearch }) {
  const { id } = useParams();
  console.log(id);
  const extractPassport = (id) => {
    axios
      .get(`${url}/client/extractPassport/${id}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const data = res.data;

        const newTab = window.open("", "_blank");
        if (newTab) {
          newTab.document.write(data);
          newTab.document.close();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="flex w-6/6  my-5  justify-center gap-x-[5rem] ">
        <button
          onClick={() => extractPassport(id)}
          className="w-[300px] flex justify-center items-center gap-x-2 bg-greenAcc capitalize h-[55px] text-white rounded-input border-4 border-yellowAcc font-roboto font-semibold"
        >
          <GiPassport className="text-[28px]" /> extract passport
        </button>

        <div className="lg:w-[431px] h-[51px] mb-5 border-yellowAcc border-2   bg-searchbg rounded-[12px] justify-center items-center flex ">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            className=" focus:outline-none px-5 w-[90%] h-full placeholder:text-[24px] placeholder:font-roboto focus:outline bg-transparent"
            placeholder="Search..."
          />
          <button className="h-full bg-yellowAcc">
            <span className="px-5 py-1 rounded-tr-[12px] rounded-br-[12px] bg-yellowAcc">
              <SearchIcon className=" cursor-pointer text-white w-[33px] h-[42px]" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Buttons;
