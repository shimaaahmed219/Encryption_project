import fileIcon from "../../assets/EncAndEecICONS/shape.svg";

import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../URL";
import { useParams } from "react-router-dom";
import Buttons from "./Buttons";

export default function EncryptedFilesBody() {
  const { id } = useParams();
  // console.log(id);
  const [EncreptedFile, setEncreptydFile] = useState([]);
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
      });
  }, []);
  console.log(EncreptedFile);
  return (
    <>

    <h1 className="font-tinos w-5/6 m-auto mt-10 text-greenAcc font-bold text-[29px] ">user name</h1>
       <div className="w-5/6 m-auto pb-10 ">
   {/* {EncreptedFile.map(user=>( */}
<Buttons/>
   {/* ))} */}
        <div className={` font-roboto w-6/6   grid lg:grid-cols-3  gap-16 md:grid-cols-2   `}>
        {EncreptedFile.map(user=>(
            <div key={user.order_client} className=" h-[250px] w-[15rem] my-4 bg-greenAcc shadow-3xl text-white rounded-tl-file rounded-tr-file">
                <div className="w-[5rem]  h-[4rem] justify-center grid items-center shadow-2xl rounded-tl-file rounded-br-file ps-0 bg-yellowAcc">
                   <img src={fileIcon} alt="pic"/>
                </div>
                <div className="px-5 mt-[28px] text-[18px] font-then capitalize">
                    <h6 className="my-4"> {`Name file : ${user.name}`}</h6>
                    <hr className="w-6/6 h-[0.05rem] bg-black border-none" />
                    <h6 className="my-4"> {`algo type : ${user.algo_type}`}</h6>
                    <hr className="w-6/6 h-[0.05rem] bg-black border-none" />
                    <h6 className="my-4"> {`created_at : ${user.created_at}`}</h6>

                </div>
                <button className={`font-tinos w-full text-[20px] capitalize h-[50px]  mt-[-10px] rounded-b-[15px] bg-greenD py-5 flex items-center justify-center `}>decryption file</button>
            </div>


//     <div key={user.id} className="text-xxl">{user.client_id} </div>
))} 
            
            {/*  */}
          
            {/*  */}
        
            {/*  */}

        </div>
    </div>

    
    </>
     
//     <div>
//        {EncreptedFile.map(user=>(
//     <div key={user.id} className="text-xxl">{user.client_id} </div>
// ))} 


//     </div>
  );
}
