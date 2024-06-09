



// import ecimg from '../../assets/EncAndEecICONS/Vector (1).svg'
// import decimg from '../../assets/EncAndEecICONS/Group 2288.svg'
import SearchIcon from '@mui/icons-material/Search';
// import { Link } from 'react-router-dom';
function Buttons() {
  return (
//     <div className={` font-roboto font-normal gap-x-11 py-[50px] w-[100%] m-auto  flex lg:flex-row  items-center gap-y-3 md:justify-between justify-center flex-col `}>

// <div className='flex md:flex-row flex-col md:justify-between items-center lg:w-[55%] w-full justify-center '>
// <Link to="/decrypt" className="  w-[16.88rem]     text-[20px] my-2 shadow-3xl  border-4 border-yellowAcc h-[70px]  justify-center flex flex-row items-center  bg-greenAcc capitalize   text-white rounded-input ">
//         <img src={decimg} alt=" Decrypt" className="mx-3" />
//         Decrypt the file
//       </Link>


//       <Link to="/encryption" className=" w-[16.5rem]  my-2 text-[20px]  shadow-3xl border-4 border-yellowAcc text-white  h-[70px] justify-center flex flex-row items-center capitalize  bg-greenAcc rounded-input ">
//         <img src={ecimg} alt=" encryption" className="mx-3" />
//         file encryption
//       </Link>
// </div>
     
<>
      {/* <div className={`md:w-[26.5rem] h-[70px] mt-2 bg-yellowAcc rounded-[10px] flex flex-row justify-center items-center`}>
      <input type="text" placeholder='search...' className=" focus:outline-none h-[62px] ps-5 md:w-[23rem]  placeholder:text-gray-400  placeholder:text-lg ms-[4px] rounded-tl-[10px]  rounded-bl-[10px] bg-bg x " />
      <div className="h-[70px] grid justify-center items-center w-[3.2rem]">
          <SearchIcon className=" text-white w-[33px] h-[42px]" />
        </div> 
      </div> */}
      <div className="lg:w-[431px] h-[51px] mb-5 border-yellowAcc border-2 m-auto  bg-searchbg rounded-[12px] justify-center items-center flex ">
          <span className="px-5">
          <SearchIcon className=" cursor-pointer text-white w-[33px] h-[42px]" />
          </span>
          <input
            // onChange={(e) => setSearch(e.target.value)}
            // value={search}
            type="search"
            className=" focus:outline-none px-5 w-[90%] h-full placeholder:text-[24px] placeholder:font-roboto focus:outline bg-transparent"
            placeholder="Search..."
          />
        </div>
    </>
    
  );
}

export default Buttons;
