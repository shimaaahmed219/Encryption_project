/* eslint-disable react/prop-types */

const HeaderFormPage = ({step}) => {
  const isPageOpen = (pagestep) => step === pagestep;

  return (
    <div className="xl:flex lg:grid px-3 lg:grid-cols-2 justify-between">
      <div
        className={`flex items-center cursor-pointer xl:my-0 my-5  xl:justify-between xl:w-[170px] `}
        // onClick={() => goToStep(1)}
      >
        <div
          className={`w-[29px] mx-2  h-[29px] cursor-pointer rounded-full bg-fileUploud flex justify-center items-center ${
            isPageOpen(1) ? "bg-yellowAcc text-white" : ""
          } font-roboto text-lg`}
        >
          1
        </div>
        <h5 className="xl:w-[126px] leading-6 text-start capitalize font-tinos font-bold md:twxt-header text-[18px] text-greenAcc">
          Personal information
        </h5>
      </div>
      <div
        className={`flex items-center xl:my-0 my-5  xl:justify-between `}
        // onClick={() => goToStep(2)}
      >
        <div
          className={`w-[29px] mx-2 h-[29px] rounded-full bg-fileUploud flex  ${
            isPageOpen(2) ? "bg-yellowAcc" : ""
          } justify-center items-center font-roboto text-lg`}
        >
          2
        </div>
        <h5 className="xl:w-[150px] leading-6 text-start capitalize font-tinos font-bold md:twxt-header text-[18px] text-greenAcc">Annats marital status</h5>
      </div>
      <div
        className={`flex items-center cursor-pointer xl:my-0 my-5  `}
        // onClick={() => goToStep(3)}
      >
        <div
          className={`w-[29px] mx-2 h-[29px] ${
            isPageOpen(3) ? "bg-yellowAcc" : ""
          } rounded-full bg-fileUploud flex justify-center items-center font-roboto text-lg`}
        >
          3
        </div>
        <h5 className="w-[150px] text-start leading-6 capitalize font-tinos font-bold md:twxt-header text-[18px] text-greenAcc">
          {" "}
          I need proof of identity
        </h5>
      </div>
      <div
        className={`flex items-center cursor-pointer xl:my-0 my-5 `}
        // onClick={() => goToStep(4)}
      >
        <div
          className={`w-[29px] mx-2 md:px-0 px-2  h-[29px] rounded-full bg-fileUploud ${
            isPageOpen(4) ? "bg-yellowAcc" : ""
          } flex justify-center leading-6 items-center font-roboto text-lg`}
        >
          4
        </div>
        <h5 className="xl:w-[405px] mf:ml-0  text-start capitalize font-tinos font-bold md:twxt-header text-[17px] text-greenAcc">
          {" "}
          Names of those who can be reviewed when necessary in the A.S.C
        </h5>
      </div>
    </div>
  );
};

export default HeaderFormPage;
