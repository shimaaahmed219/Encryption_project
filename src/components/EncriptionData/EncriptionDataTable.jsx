

/* eslint-disable react/prop-types */

import {
  Table,
  Paper,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";

import { useEffect, useState } from "react";
import { url } from "../URL";
import axios from "axios";
import ReactPaginate from "react-paginate";
import last from "../../assets/employee/Last.svg";
import first from "../../assets/employee/First.svg";
import "../style/style.css";
import { Link } from "react-router-dom";

const colum = [
  { id: "name", name: "Name" },
  { id: "National_ID", name: "National ID" },
  { id: "phone", name: "phone" },
  { id: "age", name: "age" },
];

export default function EncriptionDataTable({ search }) {
  const [carrentPage, setCarrentPage] = useState(0);
  // const [modalOpen, setModalOpen] = useState(false);

  const pageSize = 7;

  // fetchData
  const [client, setClient] = useState([]);
  useEffect(() => {
    axios.get(`${url}/encrypted/clients`).then((data) => {
      setClient(data.data.data);
    });
  }, []);
  console.log(client);

  const HandilPageChange = ({ selected }) => {
    setCarrentPage(selected);
  };

  const startIndex = carrentPage * pageSize;
  const visbleEmployees = client
    .slice(startIndex, startIndex + pageSize)
    
    

  return (
    <div className="w-[70%]  m-auto my-10">
      <TableContainer
        component={Paper}
        className="shadow-employee   rounded-[14px]"
      >
        <Table className="">
          <TableHead className="bg-greenAcc   ">
            <TableRow className="flex justify-around">
              {colum.map((col) => (
                <TableCell
                  className="border-none [&:nth-child(1)]:px-7 capitaliz items-center  w-[30%] [&:nth-child(4)]:w-[10%] md:[&:nth-child(3)]:block [&:nth-child(3)]:hidden md:[&:nth-child(4)]:block [&:nth-child(4)]:hidden text-[14px] md:text-[18px] font-bold font-tinos  text-white flex"
                  key={col.id}
                >
                  {/* <div className=" text-[20px]   text-center font-tinos capitalize font-bold "> */}
                  {col.name}
                  {/* </div> */}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      {visbleEmployees
        .filter((item) => {
          const name = `${item.first_name} ${item.last_name}`;
          return search.toLowerCase() === ""
            ? item
            : item.first_name.toLowerCase().includes(search) ||
                item.last_name.toLowerCase().includes(search) ||
                // item.third_name.toLowerCase().includes(search) ||
                name.toLowerCase().includes(search);
        })
        .map((user, index) => (
          <div
            key={user.id}
            className="flex  justify-around  font-roboto  my-4 bg-white rounded-[14px] shadow-employee py-[6px]  lg:px-5"
          >
            {/* name */}
            <div className=" w-[30%]  flex  text-yellowAcc">
              <span className="xl:text-[18px] sm:flex  mx-2 text-[15px] text-yellowAcc ">
                {index + 1}
              </span>
              -
              <span className="  font-roboto flex  mt-1 xl:text-[14px] text-[10px]  text-greenD mx-3 capitalize">
                {" "}
                <Link to={`/EncryptedFiles/${user.id}`}>
                  {user.first_name} {user.last_name}
                </Link>
              </span>
            </div>
            {/* user id nationalty */}
            <div className=" w-[30%] flex text-yellowAcc  xl:text-[17px] text-[12px]  items-center  ">
              {user.national_id.substring(0, 10)}
            </div>
            <div className="  w-[30%]  md:block hidden     text-[17px] text-greenAcc">
              {user.phone}
            </div>
            <div className="  justify-center md:block hidden  w-[10%] lg:flex  ">
              {user.age}
            </div>
          </div>
        ))}
      {/* pageination */}
      <div className="flex justify-center my-10">
        <ReactPaginate
          previousLabel={<img src={first} />}
          nextLabel={<img src={last} />}
          pageCount={Math.ceil(client.length / pageSize)}
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
  );
}
