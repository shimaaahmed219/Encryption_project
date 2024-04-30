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
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import last from "../../assets/employee/Last.svg";
import first from "../../assets/employee/First.svg";
import icon2 from "../../assets/employee/shape (4).svg";
export default function EmployeDetailsSmScreen({ visbleEmployees,handilemployeeStatus, DeleteEmployee,HandilPageChange,employee,search }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleModalOpen = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const pageSize = 7;
  const colum = [
    { id: "name", name: " Name" },
    { id: "options", name: "options" },
    { id: "details", name: "details" },
  ];

  return (
    <>
      <div className="w-5/6  m-auto my-10 ">
        <TableContainer
          component={Paper}
          className="shadow-employee   rounded-[14px]"
        >
          <Table className="">
            <TableHead className="bg-greenAcc border-none h-[70px]  ">
              <TableRow className="flex  justify-around h-[70px] items-center">
                {colum.map((col) => (
                  <TableCell
                    className=" text-white  font-tinos border-none text-center  font-bold   "
                    key={col.id}
                  >
                    <FormControlLabel
                      className="lg:block hidden"
                      control={<Checkbox style={{ color: "#F6C90E" }} />}
                      label=""
                    />
                    <div className="pl-10">{col.name}</div>
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
          .map((user) => (
            <div
              key={user.id}
              className="  font-roboto lg:text-[22px]  flex justify-around  my-4 py-2 bg-white rounded-[14px] shadow-employee lg:h-[70px] items-center "
            >
              <div className="  font-roboto xl:text-[22px] sm:text-[15px] text-[10px] text-greenD  capitalize">
                {user.name}{" "}
              </div>


              <div className="  flex justify-end">
              <Switch
                  checked={user.status}
                  onChange={() => handilemployeeStatus(user.id, user.status)}
                  style={{ color: "#F6C90E" }}
                  className=""
                />
                <Link to={`/EditEmployee/${user.id}`} className=" ">
                  <img src={icon1} className="w-[25px] h-[25px] mx-2" />
                </Link>
                <Link
                  to=""
                  onClick={() => DeleteEmployee(user.id)}
                  className=""
                >
                  {" "}
                  <img src={icon2} className="w-[25px] h-[25px] mx-2" />
                </Link>
               
              </div>
            <div>
              
            <Link
                onClick={() => handleModalOpen(user)}
                className="xl:text-[20px] cursor-pointer text-white text-[15px] p-2 rounded-full bg-yellowAcc bold  text-center"
              >
                Details
              </Link>
            </div>
            </div>
          ))}
      </div>

      {isModalOpen && selectedEmployee && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-100 p-8 rounded-lg m-auto font-roboto leading-9">
            <img src={selectedEmployee.photo} />
            <h2 className="">
              {" "}
              <span className="font-semibold capitalize"> name :</span> 
              {selectedEmployee.name}
            </h2>
            <p className="">
              <span className="font-semibold capitalize"> email :</span> 
                {selectedEmployee.email}
            </p>
            <p className="">
              <span className="font-semibold capitalize"> phone :</span> 
              {selectedEmployee.phone}
            </p>
            <p className="">
              <span className="font-semibold capitalize"> job :</span> 
              {selectedEmployee.position}
            </p>
            <button className="w-[100px] rounded-full my-2  text-white h-[40px] bg-yellowAcc" onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
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
    </>
  );
}
