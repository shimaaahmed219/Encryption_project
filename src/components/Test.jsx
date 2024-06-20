/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useGetClientQuery } from "../rtk/api/clientSlice";
import HeaderTable from "./HeaderTable";
import { Link } from "react-router-dom";
import icon1 from "../assets/employee/edit.svg";
import icon2 from "../assets/employee/shape (4).svg";
import Swal from "sweetalert2";
import { useDeleteClientMutation } from "../rtk/api/apiSlice";

// eslint-disable-next-line react/prop-types
export default function Test({ search }) {
  // show data
  const { data, error, isLoading } = useGetClientQuery();
  const [deleteClient] = useDeleteClientMutation();
  // pagination Page
  const [page, setPage] = useState(1);
  const itemParePage = 7;
  //
  const [clients, setClients] = useState([]);
console.log(clients);
  // handel page
  useEffect(() => {
    if (data) {
      setClients(data.data);
    }
  }, []);

  const startIndex = (page - 1) * itemParePage;
  const endIndex = startIndex + itemParePage;
  const currentData = data?.data?.slice(startIndex, endIndex);

  
  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePreviousPage = () =>
    setPage((prevPage) => Math.max(prevPage - 1, 1));

  const handleDelete = (id) => {
   
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
        deleteClient(id)
          .unwrap()
          .then(() => {
            setClients((prevClients) => prevClients.filter(client => client.id !== id));
          
            Swal.fire(
              "Deleted!",
              "Client has been deleted successfully.",
              "success"
            );
          })
          .catch((error) => {
            console.error("Error deleting client", error);
            Swal.fire(
              "Error",
              "An error occurred while trying to delete the employee.",
              "error"
            );
          });
      }
    });
  };



  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message || "Something went wrong"}</div>;

  return (
    <div className="w-[80%] m-auto my-5 rtl">
      <HeaderTable />

      {currentData
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
            className="flex justify-between  font-roboto xl:text-[20px]  my-4 bg-white rounded-[14px] shadow-employee py-[6px]  lg:px-5"
          >
            {/* name */}
            <div className=" w-[29%] flex items-center text-yellowAcc">
              <span className="xl:text-[15px] sm:flex hidden mx-2 text-[15px] text-yellowAcc ">
                {index + 1}
              </span>
              -
              <img
                className="md:w-[40px] ml-1 md:h-[40px] w-[25px] h-[25px] rounded-full"
                src={`https://epassport-api.preview-ym.com/${user?.photo}`}
              />
              <span className="  font-roboto flex  mt-1 xl:text-[14px] text-[10px]  text-greenD mx-3 capitalize">
                {" "}
                {user.first_name} {user.second_name} {user.third_name}
              </span>
            </div>
            {/* user id nationalty */}
            <div className=" sm:w-[15%]  w-[20%] flex text-yellowAcc  xl:text-[17px] text-[12px]  items-center  ">
              {user.national_id.substring(0, 14)}
            </div>
            <div className=" w-[13%] xl:flex hidden   items-center text-[18px] text-greenAcc">
              {user.updated_at.substring(0, 10)}
            </div>
            <div className="   w-[12%] lg:flex hidden  items-center justify-center">
              {/* <Status setClient={setClient} user={user}/> */}
            </div>
            <div className="  lg:w-[18%] w-[30%] flex justify-between items-center">
              <button
                // onClick={() => handleOpenModal(user)}
                className="md:text-[14px] px-2 text-[10px] font-normal text-white bg-yellowAcc sm:h-[33px] h-[20px]  md:w-[100px] rounded-[10px] md:rounded-[25px] flex items-center justify-center"
              >
                <span className="md:flex hidden mx-1">View</span> detail
              </button>

              <Link to={`/updateClient/${user.id}`} className="sm:mx-3 mx-1  ">
                <img src={icon1} className="w-[25px] h-[25px]" />
              </Link>
              <button onClick={()=>handleDelete(user.id)} className="">
                <img src={icon2} className="w-[25px] h-[25px]" />
              </button>
            </div>
          </div>
        ))}

      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={handleNextPage}
          disabled={endIndex >= data?.data?.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}
