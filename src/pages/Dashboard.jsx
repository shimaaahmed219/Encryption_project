import { useState, useEffect } from "react";
import FexidSidebar from "../components/FexidSidebar";
import { url } from "../components/URL";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState(null);
  //   const [close, setClose] = useState(false);
  useEffect(() => {
    axios
      .get(`${url}/auth/myProfile`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => setData(res.data.data));
  }, []);
  return (
    <>
      {!data ? (
        <div className="w-full min-h-screen flex  text-[30px] font-tinos font-semibold text-greenAcc justify-center items-center">
<h1>You are not authorized to access the dashboard</h1>
        </div>
      ) : (
        <div className="w-full min-h-screen">
          <FexidSidebar />
        </div>
      )}
    </>
  );
}
