
import {
    Table,
    Paper,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
 
  } from "@mui/material";


const colum = [
    { id: "name", name: "Name" },
    { id: "National_ID", name: "National ID" },
    { id: "Request_date", name: "Request date" },
    { id: "Request_Status", name: "Request Status" },
    { id: " Options", name: " Options" },
  ];
  
  export default function HeaderTable() {
    return (
     <>
    
      <TableContainer
        component={Paper}
        className="shadow-employee   rounded-[14px]"
      >
        <Table className="">
          <TableHead className="bg-greenAcc   ">
            {/* <TableRow className="flex py-1  px-5 justify-between items-center xl:[&>*:nth-child(3)]:block [&>*:nth-child(3)]:hidden  lg:[&>*:nth-child(4)]:block  [&>*:nth-child(4)]:hidden      [&>*:nth-child(1)]:w-[29%]   [&>*:nth-child(2)]:w-[15%]  [&>*:nth-child(3)]:w-[13%] [&>*:nth-child(4)]:w-[15%] lg:[&>*:nth-child(5)]:w-[18%] [&>*:nth-child(5)]:w-[30%] "> */}
            <TableRow className="flex py-1   justify-between [&>*:nth-child(1)]:px-[13%] items-center xl:[&>*:nth-child(3)]:block [&>*:nth-child(3)]:hidden  lg:[&>*:nth-child(4)]:block  [&>*:nth-child(4)]:hidden      [&>*:nth-child(1)]:w-[29%]   [&>*:nth-child(2)]:w-[15%]  [&>*:nth-child(3)]:w-[13%] [&>*:nth-child(4)]:w-[15%] lg:[&>*:nth-child(5)]:w-[18%] [&>*:nth-child(5)]:w-[30%] [&>*:nth-child(5)]:px-[5%]">
             
              {colum.map((col) => (
                <TableCell
                  className="border-none  capitaliz items-center    text-[14px] md:text-[18px] font-bold font-tinos  text-white flex"
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
     
     </>
    )
  }
  