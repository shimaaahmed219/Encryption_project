import AddEmployeeForm from "../components/AddEmployee/AddEmployeeForm";
import FexidSidebar from "../components/FexidSidebar";
import Nav from "../components/Nav";


export default function AddEmployee() {
  return (
   
//     <div className='min-h-screen bg-bg pb-20 '>
//     <div className='flex  flex-row'>
     
//         <div className='lg:block hidden'>
//       <FexidSidebar/>
       
//         </div>
       
//         <div className='w-full h-full'>
//         <Nav/>
//         <hr className='w-full h-[0.15rem] bg-greenAcc my-2'/>
//         <div className='w-full h-full p-7'>
//         <h1 className={` font-roboto ms-[50px] text-[26px] lg:ml-[400px]  capitalize text-greenAcc`}>Add Employee </h1>
//         </div>
//         <div></div>
//        <AddEmployeeForm/>
//         </div>
//     </div>
  


// </div>
<div className="min-h-screen bg-bg">
<div className="xl:flex  flex-row">
  <div className=" w-[26%] min-h-screen xl:block hidden">
    <FexidSidebar />
  </div>
  <div className=" py-2 w-full h-full">
    <Nav />
    <hr className="w-full h-[0.15rem] bg-greenAcc my-2" />
    <div className="w-full h-full flex justify-center items-center p-1">
      {/* <h1 className={`${rob.className} ms-[50px]  text-[26px]  capitalize text-greenAcc`}>Edit Employee </h1> */}
      <AddEmployeeForm/>
    </div>
  </div>
</div>
</div>
  )
}
