import fileIcon from "../../assets/EncAndEecICONS/shape.svg";

import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../URL";
import { useParams } from "react-router-dom";
import Buttons from "./Buttons";
export default function EncryptedFilesBody() {
  const { id } = useParams();
  const [EncreptedFile, setEncreptydFile] = useState([]);
  const [search,setSearch] =useState("")
  useEffect(() => {
    axios
      .get(`${url}/encrypted/client/${id}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((data) => {
        setEncreptydFile(data.data.data);
        console.log(data.data.data);
      });
  }, []);

  const decryptFile = async (fileId) => {
    try {
      const response = await axios.get(
        `${url}/encrypted/decryptFile/${fileId}`,
        {
          responseType: "arraybuffer",
        }
      );

      const blob = new Blob([response.data], { type: "image/png" });
      const fileUrl = URL.createObjectURL(blob);
      console.log("Received file URL:", fileUrl);
      window.open(fileUrl, "_blank");
    } catch (error) {
      console.error("Error decrypting the file:", error);
      alert(
        "Error: Could not decrypt the file. Please check the file ID and try again."
      );
    }
  };
  return (
    <>
      <h1 className="font-tinos w-6/6 m-auto mt-10 text-greenAcc font-bold text-[29px] "></h1>
      <div className=" w-6/6  pb-10 m-auto flex flex-col justify-center  ">
        {/* {EncreptedFile.map(user=>( */}
        <Buttons search={search} setSearch={setSearch} />
        {/* ))} */}
        <div
          className={` font-roboto w-5/6 m-auto mt-5  justify-center items-center  grid lg:grid-cols-3  gap-16 md:grid-cols-2   `}
        >
          {EncreptedFile.filter((file)=>{
            return file.name.toLowerCase() ===""? file: file.name.toLowerCase().includes(search)
          }).map((file) => (
            <div
              key={file.order_client}
              className=" h-[250px] m-auto w-[15rem] my-4 bg-greenAcc shadow-3xl text-white rounded-tl-file rounded-tr-file"
            >
              <div className="w-[5rem]  h-[4rem] justify-center grid items-center shadow-2xl rounded-tl-file rounded-br-file ps-0 bg-yellowAcc">
                <img src={fileIcon} alt="pic" />
              </div>
              <div className="px-5 mt-[28px] text-[15px] font-then capitalize">
                <h6 className="my-4"> {`Name file : ${file.name}`}</h6>
                <hr className="w-6/6 h-[0.05rem] bg-black border-none" />
                <h6 className="my-4"> {`algo type : ${file.algo_type}`}</h6>
                <hr className="w-6/6 h-[0.05rem] bg-black border-none" />
                <h6 className="my-4">
                  {" "}
                  {`created_at : ${file.created_at.substring(0, 10)}`}
                </h6>
              </div>
              <button
                onClick={() => decryptFile(file.id)}
                className={`font-tinos w-full text-[20px] capitalize h-[50px]  mt-[-10px] rounded-b-[15px] bg-greenD py-5 flex items-center justify-center `}
              >
                decryption file
              </button>
            </div>

            //     <div key={user.id} className="text-xxl">{user.client_id} </div>
          ))}
        </div>
      </div>
    </>
  );
}
