import Hr from "../components/Hr";
import Nav from "../components/Nav";
import user from "../assets/AddEmployee/Group.svg";
import { useParams } from "react-router-dom";
export default function UserDsc() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="bg-bg w-full min-h-screen p-1">
      <Nav />
      <Hr />
      <div className="w-full h-[500px] flex justift-between">
        <div className="w-2/6 h-200px justify-center items-center">
          <img src={user} />
        </div>
        <div></div>
      </div>
    </div>
  );
}
