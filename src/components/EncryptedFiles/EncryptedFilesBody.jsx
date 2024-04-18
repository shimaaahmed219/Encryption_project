



import fileIcon from "../../assets/EncAndEecICONS/shape.svg";

export default function EncryptedFilesBody() {
  return (
    <div className="w-5/6 m-auto pb-10 ">

    <div className={` font-roboto w-6/6   grid lg:grid-cols-3  gap-16 md:grid-cols-2   `}>

        <div className=" h-[350px] m my-4 bg-greenAcc shadow-3xl text-white rounded-file ">
            <div className="w-[5rem]  h-[4rem] justify-center grid items-center shadow-2xl rounded-tl-file rounded-br-file ps-0 bg-yellowAcc">
               <img src={fileIcon} alt="pic"/>
            </div>
            <div className="px-10 mt-[28px] text-2xl font-then capitalize">
                <h6 className="my-4">file name</h6>
                <hr className="w-6/6 h-[0.05rem] bg-black border-none" />
                <h6 className="my-4"> encription type</h6>
                <hr className="w-6/6 h-[0.05rem] bg-black border-none" />
                <h6 className="my-4">the time</h6>
                
            </div>
            <button className={`font-tinos w-full text-3xl capitalize h-[60px]  mt-[2.42rem] rounded-b-[15px] bg-greenD`}>delete</button>
        </div>
        {/*  */}
        <div className=" h-[350px] my-4 bg-greenAcc shadow-3xl text-white rounded-file ">
            <div className="w-[5rem] h-[4rem] justify-center grid items-center shadow-2xl rounded-tl-file rounded-br-file ps-0 bg-yellowAcc">
               <img src={fileIcon} alt="pic"/>
            </div>
            <div className="px-10 mt-[28px] text-2xl font-then capitalize">
                <h6 className="my-4">file name</h6>
                <hr className="w-6/6 h-[0.05rem] bg-black border-none" />
                <h6 className="my-4"> encription type</h6>
                <hr className="w-6/6 h-[0.05rem] bg-black border-none" />
                <h6 className="my-4">the time</h6>
                
            </div>
            <button className={`font-tinos w-full text-3xl capitalize h-[60px]  mt-[2.42rem] rounded-b-[15px] bg-greenD`}>delete</button>
        </div>
        
        {/*  */}
        <div className=" h-[350px] my-4 bg-greenAcc shadow-3xl text-white rounded-file ">
            <div className="w-[5rem] h-[4rem] justify-center grid items-center shadow-2xl rounded-tl-file rounded-br-file ps-0 bg-yellowAcc">
               <img src={fileIcon} alt="pic"/>
            </div>
            <div className="px-10 mt-[28px] text-2xl font-then capitalize">
                <h6 className="my-4">file name</h6>
                <hr className="w-6/6 h-[0.05rem] bg-black border-none" />
                <h6 className="my-4"> encription type</h6>
                <hr className="w-6/6 h-[0.05rem] bg-black border-none" />
                <h6 className="my-4">the time</h6>
                
            </div>
            <button className={`font-tinos w-full text-3xl capitalize h-[60px]  mt-[2.42rem] rounded-b-[15px] bg-greenD`}>delete</button>
        </div>
        {/*  */}
       

    </div>
</div>


  )}