/* eslint-disable react/prop-types */
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
import icon1 from "../../assets/employee/edit.svg";
import icon2 from "../../assets/employee/shape (4).svg";
import { useEffect, useState } from "react";
import { url } from "../URL";
import axios from "axios";
import ReactPaginate from "react-paginate";
import last from "../../assets/employee/Last.svg";
import first from "../../assets/employee/First.svg";
// import '../style/'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import EmployeDetailsSmScreen from "./EmployeDetailsSmScreen";

const colum = [
  { id: "name", name: "Full Name" },
  { id: "E-mail", name: "E-mail" },
  { id: "Number", name: "Number" },
  { id: "options", name: "options" },
];

export default function EmployeeDetails({ search }) {
  const [employee, setEmployee] = useState([]);
  const [carrentPage, setCarrentPage] = useState(0);

  const pageSize = 7;

  useEffect(() => {
    axios
      .get(`${url}/employee`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setEmployee(res.data.data);
        console.log(res.data.data);
      });
  }, []);

  const HandilPageChange = ({ selected }) => {
    setCarrentPage(selected);
  };
  const startIndex = carrentPage * pageSize;
  const visbleEmployees = employee
    .slice(startIndex, startIndex + pageSize)
    .sort((a, b) => a.name.localeCompare(b.name));

  // {delete employee}

  const DeleteEmployee = (id) => {
    Swal.fire({
      title: "are you sure?",
      text: "You will not be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#324134",
      cancelButtonColor: "#d33",
      confirmButtonText: "delete",
      cancelButtonText: "cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${url}/employee/${id}`, {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            setEmployee((prev) =>
              prev.filter((employee) => employee.id !== id)
            );
            console.log(res);
            Swal.fire(
              "Deleted!",
              "Employee has been deleted successfully.",
              "success"
            );
          })
          .catch((error) => {
            console.error("Error deleting employee", error);
            Swal.fire(
              "Error",
              "An error occurred while trying to delete the employee.",
              "error"
            );
          });
      }
    });
  };

  // { update status }
  const handilemployeeStatus = async (id, currentStatus) => {
    setEmployee((prev) =>
      prev.map((employee) =>
        employee.id === id ? { ...employee, status: !currentStatus } : employee
      )
    );

    axios
      .post(
        `${url}/employee/status/${id}`,
        {
          status: currentStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.status);
      });
  };

  return (
    <>
      <div className="w-5/6  m-auto my-10 lg:block hidden">
      <TableContainer
        component={Paper}
        className="shadow-employee   rounded-[14px]"
      >
        <Table className="">
          <TableHead className="bg-greenAcc h-[70px]  ">
            <TableRow className="grid grid-cols-4 ">
              {colum.map((col) => (
                <TableCell
                  className="  text-white flex items-center [&:nth-child(3)]:pl-[100px] [&:nth-child(2)]:pl-[50px] [&:nth-child(4)]:text-yellowAcc font-tinos lg:text-[24px] text-[18px] font-bold  xl:[&:nth-child(4)]:px-32 [&:nth-child(4)]:px-[50px] "
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
                className="mr-3 lg:block hidden "
              >
                <img src={icon1} />
              </Link>
              <Link
                to=""
                onClick={() => DeleteEmployee(user.id)}
                className="lg:block hidden"
              >
                {" "}
                <img src={icon2} />
              </Link>
            </div>
          </div>
        ))}
      {/* pageination */}
      <div className="flex justify-center my-10">
        <ReactPaginate
          previousLabel={<img src={first} />}
          nextLabel={<img src={last} />}
          pageCount={Math.ceil(employee.length / pageSize)}
          onPageChange={HandilPageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
          className="flex space-x-4"
          pageClassName="relative"
          pageLinkClassName="block w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center transition duration-300"
          activeLinkClassName="bg-yellow-400"
          previousClassName="block w-8 h-8 rounded-full  bg-gray-50 flex items-center justify-center transition duration-300"
          previousLinkClassName="flex items-center justify-center text-black"
          nextClassName="block w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center transition duration-300"
          nextLinkClassName="flex items-center justify-center text-black"
        />
      </div>
    </div>
    <div className="lg:hidden block">
    <EmployeDetailsSmScreen visbleEmployees={visbleEmployees} employee={employee} search={search} HandilPageChange={HandilPageChange}/>
    </div>
    </>
  
  );
}
