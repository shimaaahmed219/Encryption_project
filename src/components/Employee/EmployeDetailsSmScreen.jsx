/* eslint-disable react/prop-types */
const columns = [
  { id: "name", name: "Name" },
  { id: "email", name: "E-mail" },
  { id: "phone", name: "Number" },
 
];import ReactPaginate from "react-paginate";
import last from "../../assets/employee/Last.svg";
import first from "../../assets/employee/First.svg";
const pageSize = 7;
export default function EmployeDetailsSmScreen({
  visbleEmployees,
  employee,
  search,
  HandilPageChange,
}) {
  return (
    <div className="w-[80%] h-full m-auto my-20">
      <table className="w-[100%] m-auto  shadow-2xl">
        <thead className="w-full rounded-md">
          <tr className=" rounded-md  bg-greenAcc">
            {columns.map((col) => (
              <th
                className="sm:text-[20px]  py-5 font-tinos [&:nth-child(4)]:text-yellowAcc text-white text-[14px]"
                key={col.id}
              >
                {col.name}
              </th>
            ))
            }
          </tr>
        </thead>
        <tbody className="">
          {visbleEmployees.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search);
          }).map((user)=>(
            <tr key={user.id} className="px-5 bg-white">
                  <td className="sm:text-[18px]  px-1 border-b-2 border-greenAcc py-3 text-[10px]">{user.name}</td>
                  <td className="text-center text-yellowAcc font-roboto sm:text-[15px] border-b-2 border-greenAcc text-[10px]"><a href={`mailto:${user.email}`}>{user.email}</a></td>
                  <td className="text-center sm:text-[18px] border-b-2 border-greenAcc  text-[13px]">{user.phone}</td>
                 
            </tr>
          
          ))}

        </tbody>
      </table>
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
  );
}
