/* eslint-disable react/prop-types */
import axios from "axios";
import { url } from "../URL";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Swal from "sweetalert2";

export default function MofaStatus({ setClient, user }) {
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

    const res = await axios.get(`${url}/client?type=mofa`);
    setClient(res.data.data);
  };

  return (
    <>
      <FormControl sx={{ width: 158 }}>
        <InputLabel id="demo-simple-select-label" className="mt-[-10px]">
          status
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={user.client_order.status}
          onChange={(event) => handilChange(event, user.client_order.id)}
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
    </>
  );
}
