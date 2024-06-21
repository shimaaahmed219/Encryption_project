import encIcon from "../../assets/landingPage/Group 2530.svg";
import setIcon from "../../assets/landingPage/Group 2530 (1).svg";
import decIcon from "../../assets/landingPage/Group 2530 (2).svg";

export default function LandingFut() {
  return (
   
    <div className="w-full bg-white text-greenAcc mt-5 mb-[100px] ">
    
      {/* title */}
      <h1 className="font-tinos text-center text-[40px] font-bold mb-20">
        Our website features
      </h1>


      {/* content  */}
      
      <div className="w-5/6 m-auto min-h-[146px]  grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-x-[77px]">
        {/*   Encryption technology. */}
        <div className="xl:w-[326px] border-b-2 border-yellowAcc md:w-[400px] min-h-[146px] xl:my-0 lg:my-10 my-10 bg-bg rounded-[20px] px-[20px] pt-[20px]">
          {/* icon */}
          <img src={encIcon} className="mt-[-43px] ml-[10px] mb-2" />

          {/* title */}
          <h4 className="text-greenAcc text-[20px] font-tinos font-bold">
            Encryption technology.
          </h4>

          {/* description */}
          <p className="font-roboto text-[13px] text-p font-normal pb-3 md:w-[252px]">
          The application encrypts sensitive citizen data, which enhances the security of your data
          </p>
        </div>


        {/* ************************* */}


        {/* Ease of use.  */}
        <div className="xl:w-[326px]  md:w-[400px] border-b-2 border-yellowAcc min-h-[146px] lg:m-auto md:m-auto xl:my-0 lg:my-10 my-10 bg-bg rounded-[20px] px-[20px] pt-[20px]">
          {/* icon */}
          <img src={setIcon} className="mt-[-43px] ml-[10px] mb-2" />

          {/* title */}
          <h4 className="text-greenAcc text-[20px] font-tinos font-bold">
            Ease of use.
          </h4>

          {/* description */}
          <p className="font-roboto text-[13px] text-p font-normal pb-3 md:w-[252px]">
          The application is characterized by ease of use, smoothness, and ease of obtaining the passport electronically
          </p>
        </div>

        {/* ******************************************* */}
        <div className="  xl:w-[326px] border-b-2 border-yellowAcc md:w-[400px] min-h-[146px] xl:ml-0 md:ml-[290px] ml-0  md:ms-auto xl:my-0 lg:my-10 my-10 bg-bg rounded-[20px] px-[20px] pt-[20px]">
          {/* icon */}
          <img src={decIcon} className="mt-[-43px] ml-[10px] mb-2" />

          {/* title */}
          <h4 className="text-greenAcc text-[20px] font-tinos font-bold">
            Decryption technology.
          </h4>

          {/* description */}
          <p className="font-roboto text-[13px] text-p font-normal pb-3 md:w-[252px]">
          The application also has a data decryption feature to ensure data protection
          </p>
        </div>
      </div>
    </div>
  )
}
