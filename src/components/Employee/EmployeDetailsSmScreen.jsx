/* eslint-disable react/prop-types */
const columns = [
  { id: "name", name: "Name" },
  { id: "email", name: "E-mail" },
  { id: "phone", name: "Number" },
  { id: "options", name: "options" },
];
// import ReactPaginate from "react-paginate";
// import last from "../../assets/employee/Last.svg";
// import first from "../../assets/employee/First.svg";
// const pageSize = 7;
import icon1 from "../../assets/employee/edit.svg";
import icon2 from "../../assets/employee/shape (4).svg";
import {
  Table,
  Paper,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  FormControlLabel,
  Checkbox,
  Switch,
} from "@mui/material";
import { Link } from "react-router-dom";
export default function EmployeDetailsSmScreen({
  visbleEmployees,
  // employee,
  search,
  DeleteEmployee,
  handilemployeeStatus,
  // HandilPageChange,
}) {
  return (
    // <div className="w-[80%] h-full m-auto my-20">
    //   <table className="w-[100%] m-auto  shadow-2xl">
    //     <thead className="w-full rounded-md">
    //       <tr className=" rounded-md  bg-greenAcc">
    //         {columns.map((col) => (
    //           <th
    //             className="sm:text-[20px]  py-5 font-tinos [&:nth-child(4)]:text-yellowAcc text-white text-[14px]"
    //             key={col.id}
    //           >
    //             {col.name}
    //           </th>
    //         ))
    //         }
    //       </tr>
    //     </thead>
    //     <tbody className="">
    //       {visbleEmployees.filter((item) => {
    //         return search.toLowerCase() === ""
    //           ? item
    //           : item.name.toLowerCase().includes(search);
    //       }).map((user)=>(
    //         <tr key={user.id} className="px-5 bg-white">
    //               <td className="sm:text-[18px]  px-1 border-b-2 border-greenAcc py-3 text-[10px]">{user.name}</td>
    //               <td className="text-center text-yellowAcc font-roboto sm:text-[15px] border-b-2 border-greenAcc text-[10px]"><a href={`mailto:${user.email}`}>{user.email}</a></td>
    //               <td className="text-center sm:text-[18px] border-b-2 border-greenAcc  text-[13px]">{user.phone}</td>
                 
    //         </tr>
          
    //       ))}

    //     </tbody>
    //   </table>
    //    {/* pageination */}
    //    <div className="flex justify-center my-10">
    //     <ReactPaginate
    //       previousLabel={<img src={first} />}
    //       nextLabel={<img src={last} />}
    //       pageCount={Math.ceil(employee.length / pageSize)}
    //       onPageChange={HandilPageChange}
    //       containerClassName={"pagination"}
    //       activeClassName={"active"}
    //       className="flex space-x-4"
    //       pageClassName="relative"
    //       pageLinkClassName="block w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center transition duration-300"
    //       activeLinkClassName="bg-yellow-400"
    //       previousClassName="block w-8 h-8 rounded-full  bg-gray-50 flex items-center justify-center transition duration-300"
    //       previousLinkClassName="flex items-center justify-center text-black"
    //       nextClassName="block w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center transition duration-300"
    //       nextLinkClassName="flex items-center justify-center text-black"
    //     />
    //   </div>
    // </div>
    <div className="w-5/6  m-auto my-10 lg:hidden block">
    <TableContainer
      component={Paper}
      className="shadow-employee   rounded-[14px]"
    >
      <Table className="">
        <TableHead className="bg-greenAcc h-[70px]  ">
          <TableRow className="flex justify-around ">
            {columns.map((col) => (
              <TableCell
                className="  text-white flex items-center  [&:nth-child(4)]:text-yellowAcc font-tinos lg:text-[24px] text-[18px] font-bold  xl:[&:nth-child(4)]:px-32 [&:nth-child(4)]:px-[50px] "
                key={col.id}
              >
                <FormControlLabel
                  control={<Checkbox style={{ color: "#F6C90E" }} />}
                  label=""
                />
                <span className="ml-[-20px]">{col.name}</span>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
    {visbleEmployees
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.name.toLowerCase().includes(search);
        })
        .map((user, index) => (
          <div
            key={user.id}
            className="grid gap-x-16 font-roboto text-[22px] grid-cols-4  my-4 bg-white rounded-[14px] shadow-employee lg:h-[70px] items-center px-5"
          >
            <div>
              <span className="xl:text-[22px] text-[15px] text-yellowAcc ">
                {index + 1} -
              </span>
              <span className="font-roboto xl:text-[22px] text-[15px] text-greenD mx-3 capitalize">
                {user.name}{" "}
              </span>
            </div>
            <div className="text-yellowAcc text-[18px]"><a href={`mailto:${user.email}`}>{user.email}</a></div>
            <div className="xl:text-[20px] text-[15px] text-greenD ml-[80px] w-[150px]">
              {user.phone}
            </div>
            <div className=" flex gap-x-3 items-center w-[180px] lg:ms-auto ">
              <Switch
                checked={user.status}
                onChange={() => handilemployeeStatus(user.id, user.status)}
                style={{ color: "#F6C90E" }}
                className=""
              />

              <Link
                to={`/EditEmployee/${user.id}`}
                className="mr-3  "
              >
                <img src={icon1} />
              </Link>
              <Link
                to=""
                onClick={() => DeleteEmployee(user.id)}
                className=""
              >
                {" "}
                <img src={icon2} />
              </Link>
            </div>
          </div>
        ))}
</div>
  );
}
