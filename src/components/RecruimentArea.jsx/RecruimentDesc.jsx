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
  import "../style/style.css";
  import { Link } from "react-router-dom";
  import Swal from "sweetalert2";
  
  
  const colum = [
    { id: "name", name: "Name" },
    { id: "National_ID", name: "National ID" },
    { id: "Request_date", name: "Request date" },
    { id: "Request_Status", name: "Request Status" },
    { id: " Options", name: " Options" },
  ];
  
  
  
  export default function RecruimentDesc({ search }) {
    const [cleint, setClient] = useState([]);
    const [carrentPage, setCarrentPage] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);
    const pageSize = 7;
  
  
  
    
    const handleOpenModal = (client) => {
      setSelectedClient(client);
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
      setSelectedClient(null);
    };  
    
    // fetchData
    useEffect(() => {
      axios
        .get(`${url}/client?type=recruitment district`, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setClient(res.data.data);
        });
    }, []);
    console.log(cleint);
  
    
    const HandilPageChange = ({ selected }) => {
      setCarrentPage(selected);
    };
   
    const startIndex = carrentPage * pageSize;
    const visbleEmployees = cleint
      .slice(startIndex, startIndex + pageSize)
      .sort((a, b) =>` ${a.first_name} ${a.second_name} ${a.third_name}`.localeCompare(` ${b.first_name} ${b.second_name} ${b.third_name}`));
  
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
  
  
      // handil status
      const handilChange = async (
        event,
        id
      ) => {
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
            // Set received_type automatically to "mofa"
            const receivedType = "mofa";
            // setClient((prev)=>prev.filter((client)=>client.id !== id))
  
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
                    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                  },
                }
              );
  console.log(response);
            } else {
              throw new Error("Failed to update client status");
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
       
        const res = await axios.get(`${url}/client`)
        setClient(res.data.data)
      };
    return (
      <div className="w-5/6  m-auto my-10">
        <TableContainer
          component={Paper}
          className="shadow-employee   rounded-[14px]"
        >
          <Table className="">
            <TableHead className="bg-greenAcc h-[70px]  ">
              <TableRow className="flex  [&>*:nth-child(1)]:w-[150px]    [&>*:nth-child(2)]:pl-[60px]  [&>*:nth-child(3)]:ml-[-30px] [&>*:nth-child(4)]:ml-[-40px] [&>*:nth-child(1)]:justify-center justify-around items-center ">
                {colum.map((col) => (
                  <TableCell
                    className="border-none h-[70px] items-center text-white flex"
                    key={col.id}
                  >
                    <span className="ml-[-20px] text-[24px] font-tinos capitalize font-bold ">
                      {col.name}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
  
        {visbleEmployees.filter((item) => {
          const name = `${item.first_name} ${item.second_name} ${item.third_name}`
          return search.toLowerCase() === ""
            ? item
            : item.first_name.toLowerCase().includes(search) || item.second_name.toLowerCase().includes(search)||item.third_name.toLowerCase().includes(search)||name.toLowerCase().includes(search)
  
            
        })
  
          .map((user, index) => (
            <div
              key={user.id}
              className="flex   font-roboto text-[22px]   my-4 bg-white rounded-[14px] shadow-employee lg:h-[70px] items-center px-5"
            >
              <div className="flex  w-[25%] items-center ">
                <span className="xl:text-[22px] text-[15px] text-yellowAcc ">
                  {index + 1} -
                </span>
                <img
                className="w-[40px] h-[40px] rounded-full"
                  src={`https://epassport-api.preview-ym.com/${user?.photo}`}
                />
                <span className="font-roboto flex  mt-1 xl:text-[15px] text-[15px]  text-greenD mx-3 capitalize">
                  {" "}
                  {user.first_name} {user.second_name} {user.third_name}
                </span>
              </div>
              <div className="text-yellowAcc text-[18px] w-[150px]  text-center">
                {user.national_id.substring(0, 14)}
              </div>
              <div className="xl:text-[20px]  text-[15px]  w-[130px] text-greenD ml-[80px] ">
                {user.updated_at.substring(0, 10)}
              </div>
             
              <div className="xl:text-[20px] w-[150px] text-center text-[15px]  text-greenD ml-[40px]">
          {/* status */}
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" className="mt-[-10px]">
              status
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={user.client_order.status}
              onChange={(event) => handilChange(event ,user.id)}
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
              <div className=" flex gap-x-3 items-center  lg:ms-auto ">
              <button
                  onClick={() => handleOpenModal(user)}
                  className="text-[16px] font-normal text-white bg-yellowAcc h-[34px] w-[140px] rounded-[25px] flex items-center justify-center"
                >
                  View details
                </button>
  
                <Link to={`/updateClient/${user.id}`} className="mr-3 lg:block hidden ">
                  <img src={icon1} />
                </Link>
                <button
                  onClick={() => handilDeletClient(user.id)}
                  className="lg:block hidden"
                >
                  <img src={icon2} />
                </button>
              </div>
            </div>
          ))}
        {/* pageination */}
        <div className="flex justify-center my-10">
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
          <DialogTitle style={{color:"green"}}>Request Details</DialogTitle>
          <DialogContent>
            {/* Display request status and reason for rejection */}
            {selectedClient && (
              <>
                <p style={{fontFamily:"Roboto",fontWeight:"bold"}}>Request Status: {selectedClient.client_order.status}</p>
                {selectedClient.client_order.status === "rejected" && (
                  <p style={{fontFamily:"Roboto",fontWeight:"bold"}}>Reason for Rejection: {selectedClient.client_order.reject_reason}</p>
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
  