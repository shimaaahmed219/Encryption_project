/* eslint-disable react/prop-types */

import {
  Table,
  Paper,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import icon1 from "../../assets/employee/edit.svg";
import icon2 from "../../assets/employee/shape (4).svg";
import { useEffect, useState } from "react";
import { url } from "../URL";
import axios from "axios";
import ReactPaginate from "react-paginate";
import last from "../../assets/employee/Last.svg";
import first from "../../assets/employee/First.svg";
import ".././style/style.css";

import { Link } from "react-router-dom";
// import { useDeleteClientMutation } from "../rtk/api/apiSlice";
import Swal from "sweetalert2";

const colum = [
  { id: "name", name: "Name" },
  { id: "National_ID", name: "National ID" },
  { id: "Request_date", name: "Request date" },
  { id: "Request_Status", name: "Request Status" },
  { id: " Options", name: " Options" },
];

export default function PassportAreaDesc({ search }) {
  const [cleint, setClient] = useState([]);
  const [carrentPage, setCarrentPage] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const pageSize = 7;

  // const handlePageChange = ({ selected }: { selected: number }) => {
  //   setCurrentPage(selected);
  // };

  const handleOpenModal = (client) => {
    setSelectedClient(client);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedClient(null);
  };

  // get client
  useEffect(() => {
    axios
      .get(`${url}/client?type=passport authority`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setClient(res.data.data);
        // setSelectedClient(res.data.dats)
        console.log(res);
      });
  }, []);

  // pagination
  const HandilPageChange = ({ selected }) => {
    setCarrentPage(selected);
  };
  const startIndex = carrentPage * pageSize;
  const visbleEmployees = cleint
    .slice(startIndex, startIndex + pageSize)
    .sort((a, b) => a.first_name.localeCompare(b.first_name));

  // delet client
  const handilDeletClient = (id) => {
    // checked delete
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
          .delete(`${url}/client/${id}`, {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
          })
          // deleted
          .then((res) => {
            setClient((prev) => prev.filter((client) => client.id !== id));
            console.log(res);
            Swal.fire(
              "Deleted!",
              "Client has been deleted successfully.",
              "success"
            );
          })
          // error messge
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

  const handilChange = async (event, id) => {
    try {
      const selectedValue = event.target.value;
      let rejectReasonManual = "";

      // Check if selected status is rejected
      if (selectedValue === "rejected") {
        // Prompt user to enter rejection reason using SweetAlert2
        const { value } = await Swal.fire({
          title: "the reason of refuse",
          input: "textarea",
          inputPlaceholder:
            "The purpose of the planned stay has not been established and its conditions are not m",
          inputAttributes: {
            autocapitalize: "off",
          },
          showCancelButton: true,
          confirmButtonText: "Save",
          cancelButtonText: "Cancel",
          confirmButtonColor: "#324134",
          cancelButtonColor: "#ccc",
          showLoaderOnConfirm: true,
          preConfirm: (reason) => {
            rejectReasonManual = reason;
          },
        });

        // If the user confirms and entered a reason, continue with the update
        if (value && value.trim() !== "") {
          // Perform the update with the entered reason
          const response = await axios.put(
            `${url}/clientOrder/${id}`,
            {
              status: selectedValue,
              reject_reason: rejectReasonManual,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
              },
            }
          );

          // Handle success and error responses
          if (response.status === 200) {
            // Update client status in state
            setClient((prevClients) => {
              return prevClients.map((client) => {
                if (client.id === id) {
                  return {
                    ...client,
                    status: selectedValue,
                    reject_reason: rejectReasonManual,
                  };
                } else {
                  return client;
                }
              });
            });

            Swal.fire({
              title: "Success!",
              text: "Client status updated successfully!",
              icon: "success",
            });
          } else {
            throw new Error("Failed to update client status");
          }
        }
      } else if (selectedValue === "approved") {
        // Prompt user to select 'received_type' using SweetAlert2
        const { value: receivedType } = await Swal.fire({
          title: "Select Received Type",
          input: "select",
          inputOptions: {
            mofa: "MOFA",
            "recruitment district": "Recruitment District",
          },
          inputPlaceholder: "Select received type",
          showCancelButton: true,
          confirmButtonText: "Save",
          cancelButtonText: "Cancel",
          confirmButtonColor: "#324134",
          cancelButtonColor: "#ccc",

          inputValidator: (value) => {
            if (!value) {
              return "You need to choose a received type";
            }
           
          },
        });

        // If the user selects a received type, continue with the update
        if (receivedType) {
          const response = await axios.put(
            `${url}/clientOrder/${id}`,
            {
              status: selectedValue,
              received_type: receivedType,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
              },
            }
          );

          // Handle success and error responses
          if (response.status === 200) {
            // Update client status in state
            setClient((prevClients) =>
              prevClients.map((client) =>
                client.id === id
                  ? {
                      ...client,
                      status: selectedValue,
                      received_type: receivedType,
                    }
                  : client
              )
            );

            Swal.fire({
              title: "Success!",
              text: "Client status updated successfully!",
              icon: "success",
            });

            const response = await axios.put(
              `${url}/clientOrder/${id}`,
              {
                status: "processing",
                received_type: receivedType,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${window.localStorage.getItem(
                    "token"
                  )}`,
                },
              }
            );
            console.log(response);
          } else {
            throw new Error("Failed to update client status");
          }
        }
      } else {
        // For other statuses ('pending' or any other), proceed with the update as before
        const response = await axios.put(
          `${url}/clientOrder/${id}`,
          {
            status: selectedValue,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
          }
        );

        // Handle success and error responses
        if (response.status === 200) {
          // Update client status in state

          setClient((prevClients) =>
            prevClients.map((client) =>
              client.id === id ? { ...client, status: selectedValue } : client
            )
          );

          Swal.fire({
            title: "Success!",
            text: "Client status updated successfully!",
            icon: "success",
          });
        } else {
          throw new Error("Failed to update client status");
        }
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to update client status",
        icon: "error",
      });
    }
    const res = await axios.get(`${url}/client`);
    setClient(res.data.data);
  };

  return (
    <div className="w-[85%]  m-auto my-10">
      <TableContainer
        component={Paper}
        className="shadow-employee   rounded-[14px]"
      >
        <Table className="">
          <TableHead className="bg-greenAcc h-[70px]  ">
            <TableRow className="flex   px-5 justify-between items-center xl:[&>*:nth-child(3)]:block [&>*:nth-child(3)]:hidden  lg:[&>*:nth-child(4)]:block  [&>*:nth-child(4)]:hidden      [&>*:nth-child(1)]:w-[22%]    [&>*:nth-child(2)]:w-[15%]  [&>*:nth-child(3)]:w-[13%] [&>*:nth-child(4)]:w-[15%] lg:[&>*:nth-child(5)]:w-[18%] [&>*:nth-child(5)]:w-[30%] ">
              {colum.map((col) => (
                <TableCell
                  className="border-none capitaliz items-center  justify-center h-[70px] text-[14px] md:text-[21px] font-tinos  text-white flex"
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
          const name = `${item.first_name} ${item.second_name} ${item.third_name}`;
          return search.toLowerCase() === ""
            ? item
            : item.first_name.toLowerCase().includes(search) ||
                item.second_name.toLowerCase().includes(search) ||
                item.third_name.toLowerCase().includes(search) ||
                name.toLowerCase().includes(search);
        })
        .map((user, index) => (
          <div
            key={user.id}
            className="flex justify-between  font-roboto xl:text-[20px]  my-4 bg-white rounded-[14px] shadow-employee lg:h-[70px]  lg:px-5"
          >
            {/* name */}
               <div className=" w-[22%] flex items-center text-yellowAcc">
               <span className="xl:text-[22px] sm:flex hidden mx-2 text-[15px] text-yellowAcc ">
                {index + 1}
              </span>
              -
              <img
                className="md:w-[50px]  md:h-[50px] w-[25px] h-[25px] rounded-full"
                src={`https://epassport-api.preview-ym.com/${user?.photo}`}
              />
              <span className="  font-roboto flex  mt-1 xl:text-[15px] text-[10px]  text-greenD mx-3 capitalize">
                {" "}
                {user.first_name} {user.second_name} {user.third_name}
              </span>
               </div>
               {/* user id nationalty */}
               <div className=" sm:w-[15%]  w-[20%] flex text-yellowAcc  xl:text-[18px] text-[12px]  items-center justify-center ">
               {user.national_id.substring(0, 14)}
               </div>
               <div className=" w-[13%] xl:flex hidden   justify-center items-center text-[20px] text-greenAcc">
               {user.updated_at.substring(0, 10)}
               </div>
               <div className="   w-[15%] lg:flex hidden  items-center justify-center" >
               <FormControl sx={{ width: 158 }}>
                <InputLabel
                  id="demo-simple-select-label"
                  className="mt-[-10px]"
                >
                  status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={user.client_order.status}
                  onChange={(event) => handilChange(event, user.id)}
                  className="h-[30px] focus:outline-none"
                >
                  <MenuItem value={"approved"}>
                    <div className="flex items-center">
                      <span className="px-2 py-2 rounded-full bg-approved mr-1"></span>
                      <span>approved</span>
                    </div>
                  </MenuItem>
                  <MenuItem value={"rejected"}>
                    <div className="flex items-center">
                      <span className="px-2 py-2 rounded-full bg-rejected mr-1"></span>
                      <span>rejected</span>
                    </div>
                  </MenuItem>
                  <MenuItem value={"processing"}>
                    <div className="flex items-center">
                      <span className="px-2 py-2 rounded-full bg-pending mr-1"></span>
                      <span>pending</span>
                    </div>
                  </MenuItem>
                </Select>
              </FormControl>
               </div>
               <div className="  lg:w-[18%] w-[30%] flex justify-between items-center">
               <button
                onClick={() => handleOpenModal(user)}
                className="md:text-[16px] px-2 text-[10px] font-normal text-white bg-yellowAcc sm:h-[37px] h-[20px]  md:w-[109px] rounded-[10px] md:rounded-[25px] flex items-center justify-center"
              >
                <span className="md:flex hidden mx-1">View</span> detail
              </button>

              <Link
                to={`/updateClient/${user.id}`}
                className="sm:mx-3 mx-1  "
              >
                <img src={icon1} className="w-[25px] h-[25px]"/>
              </Link>
              <button
                onClick={() => handilDeletClient(user.id)}
                className=""
              >
                <img src={icon2} className="w-[25px] h-[25px]" />
              </button>
               </div>
          </div>
        ))}
      {/* pageination */}
      <div className="flex justify-center my-10">-
        <ReactPaginate
          previousLabel={<img src={first} />}
          nextLabel={<img src={last} />}
          pageCount={Math.ceil(cleint.length / pageSize)}
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
      <Dialog open={modalOpen} onClose={handleCloseModal}>
        <DialogTitle
          style={{ fontFamily: "roboto", color: "green", fontSize: "25px" }}
        >
          Request Details
        </DialogTitle>
        <DialogContent>
          {/* Display request status and reason for rejection */}
          {selectedClient && (
            <>
              <p style={{ fontFamily: "roboto", fontWeight: "bold" }}>
                {" "}
                Request Status: {selectedClient.client_order.status}
              </p>
              {selectedClient.client_order.status === "rejected" && (
                <p style={{ fontFamily: "roboto", fontWeight: "bold" }}>
                  Reason for Rejection:{" "}
                  {selectedClient.client_order.reject_reason}
                </p>
              )}
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
