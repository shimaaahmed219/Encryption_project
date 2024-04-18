import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import icon from "../../assets/arrow-up.svg";
function EncryptionType() {
  return (
    <div className=" w-[100%] h-[5rem]  grid  my-10 bg-bg ">
      <form className="w-[100%] h-full bg-bg">
        <div className="flex md:flex-row flex-col lg:w-[80%] gap-y-5 items-center justify-around m-auto ">
          <input
            placeholder="Enter Encryption File Name"
            type="text"
            className=" lg:w-[30%] md:w-[40%] w-[70%]  bg-greenAcc border-4 pl-5 placeholder:text-white border-white h-[3.75rem] text-white focus:outline-none rounded-input"
          />
          <div className="lg:w-[35%] md:w-[40%] w-[70%] flex flex-row rounded-input border-white border-4 relative ">
            <select
              className={`font-tinos  focus:outline-none select appearance-none px-5  rounded-input text-2xl w-[100%]  h-[3.75rem] bg-greenAcc appearanse-none text-white `}
            >
              <option>Choose the encryption type </option>
              <option>Choose the encryption type </option>
              <option>Choose the encryption type </option>
              <option>Choose the encryption type </option>
            </select>
            <div className="text-white flex absolute mt-[10px]  justify-center items-center bg-greenAcc text-[50px]  right-5  h-[3.75rem ">
              <ExpandMoreIcon className="text-[40px]" />
            </div>
          </div>
        </div>
        <div className="md:block hidden bg-bg">
          <div className="w-6/6 m-auto h-[18rem] grid  mt-[5.5rem]">
            <div className=" relative  mt-10 w-[84px] h-[84px] bg-yellowAcc m-auto   rounded-full items-center justify-center grid">
              <img src={icon} alt="" />
            </div>
            <input
              type="file"
              className="z-40 absolute right-[30rem] w-6/6 h-[10rem] opacity-0"
            />
            <h1
              className={`font-roboto text-center w-3/6 m-auto xl:text-[32px] lg:text-[28px] text-[25px] mt-[-20px] px-[90px]  text-greenAcc`}
            >
              Upload a file from the authorities or drag the file here
            </h1>
          </div>
        </div>
        <div className="md:hidden border-2 border-greenAcc border-dotted bg-bg my-10 relative block w-[220px] m-auto h-[280px]">
        <div className=" absolute top-20 left-[4rem]  w-[84px] h-[84px] bg-yellowAcc m-auto   rounded-full items-center justify-center grid">
              <img src={icon} alt="" />
            </div>
            <input
              type="file"
              className="z-50 bg-black absolute w-6/6 w-full h-full opacity-0  "
            />
        </div>
        <div className="flex m-auto justify-center pb-[5rem] bg-bg w-full">
          <button
            className={` font-tinos w-[262px] h-[60px] font-bold text-2xl text-center  shadow-4xl rounded-input text-white bg-greenAcc md:mt-[5.5rem] `}
          >
            Encryption
          </button>
        </div>
      </form>
    </div>
  );
}
export default EncryptionType;
