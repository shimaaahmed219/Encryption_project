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
      <div className="w-[70%]  m-auto my-10 lg:block hidden">
        <TableContainer
          component={Paper}
          className="shadow-employee   rounded-[14px]"
        >
          <Table className="">
            <TableHead className="bg-greenAcc border-none h-[70px]  ">
              <TableRow className="flex justify-around  ">
                {colum.map((col) => (
                  <TableCell
                    className=" w-[25%] text-white  font-tinos lg:[&:nth-child(1)]:ml-[-45px] lg:[&:nth-child(3)]:block 
                    [&:nth-child(3)]:hidden [&:nth-child(4)]:text-yellowAcc
                      font-bold border-none [&:nth-child(2)]:text-left [&:nth-child(2)]:ms-[160px]
                       [&:nth-child(3)]:ms-[-40px] text-center  text-employee capitalize "
                    key={col.id}
                  >
                    <FormControlLabel
                      className="mr-[-4px] mt-[-5px]"
                      control={<Checkbox style={{ color: "#F6C90E" }} />}
                      label=""
                    />
                    <span className="">{col.name}</span>
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
              className="flex font-roboto lg:text-name text-[15px] justify-around my-4 bg-white rounded-[14px] shadow-employee lg:h-[55px] items-center px-5"
            >
              <div className="w-[25%] flex">
                <span className="xl:text-name lg:block hidden text-[15px] text-yellowAcc ">
                  {index + 1} -
                </span>
                <span className="font-roboto xl:text-name text-[15px] text-greenD mx-3 capitalize">
                  {user.name}{" "}
                </span>
              </div>
              <div className="text-yellowAcc w-[25%] text-email lg:ps-[120px] ps-10 text-left  ">
                <a href={`mailto:${user.email}`}>
                  {user.email.substring(0, 12)}...
                </a>
              </div>
              <div className="xl:text-[20px] w-[25%] lg:block hidden text-[15px] ml-[58px] text-greenD text-center">
                {user.phone}
              </div>
              <div className=" flex gap-x-3 w-[25%] lg:items-center lg:justify-center pl-[45px] ">
                <Switch
                  checked={user.status}
                  onChange={() => handilemployeeStatus(user.id, user.status)}
                  style={{ color: "#F6C90E" }}
                  className=""
                />

                <Link to={`/EditEmployee/${user.id}`} className="mr-3  ">
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
        <EmployeDetailsSmScreen
          DeleteEmployee={DeleteEmployee}
          handilemployeeStatus={handilemployeeStatus}
          visbleEmployees={visbleEmployees}
          employee={employee}
          search={search}
          HandilPageChange={HandilPageChange}
        />
      </div>
    </>
  );
}
