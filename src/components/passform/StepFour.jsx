/* eslint-disable react/prop-types */

import Hr from "../Hr";

import HeaderFormPage from "../HeaderFormPage";
import { useEffect, useState } from "react";

export default function StepFour({
  goToStep,
  prevStep,
  errors,
  register,
  step,
  isLoading,
  watch
}) {

  const [isStepValid ,setIsStepValid]=useState(false)  
  const watchAllFields = watch()
  useEffect(() => {
    const isFormValid =
      watchAllFields.age !== "" &&
      watchAllFields.address !== "" 
    setIsStepValid(isFormValid);
  
  }, [watchAllFields]);
  

  return (
    <div className={`${step === 4 ? "block" : "hidden"}`}>
      <div className=" w-5/6 min-h-[423px] mb-10 py-5 bg-baform shadow-shadowEmp rounded-[20px] m-auto mt-10">
        <HeaderFormPage goToStep={goToStep} step={step} />
        <Hr />
        <div className=" mt-20">
<div className="flex md:flex-row flex-col items-center justify-center gap-x-6">
<div className=" md:w-[100px] w-[80%]">
<label className="block font-roboto my-2 text-[20px] text-greenAcc">
              The age
            </label>
</div>

            <input
              type="text"
              {...register("age", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              className="border-[1px] px-[20px] font-roboto text-[18px] focus:outline-none  border-yellowAcc bg-transparent  w-[80%] rounded-input h-[50px]"
            />
            {errors.age && (
              <div className="text-[15px] my-5  text-red-500">
                ***{errors.age.message}
              </div>
            )}
</div>
<div className="flex md:flex-row flex-col items-center  justify-center gap-x-6 my-10">
<div className=" md:w-[100px] w-[80%]">
<label className="block font-roboto my-2 text-[20px] text-greenAcc">
address
            </label>
</div>
            <input
              type="text"
              {...register("address", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              className="border-[1px] px-[20px] font-roboto text-[18px] focus:outline-none  border-yellowAcc bg-transparent  w-[80%] rounded-input h-[50px]"
            />
            {errors.address && (
              <div className="text-[15px] my-5  text-red-500">
                ***{errors.address.message}
              </div>
            )}
</div>

       

        </div>
        
      </div>
      {/* <Hr /> */}

      <div className="my-10 m-auto  flex w-[80%] justify-around">
        <button
          className="lg:w-[255px] capitalize w-[180px] mb-10  h-[50px] md:h-[65px] md:text-[32px] text-[20px] font-semibold  text-greenAcc font-tinos rounded-input"
          type="button"
          onClick={prevStep}
        >
          back
        </button>
        <button
          //  disabled={disableNextStep()}
          className={`lg:w-[255px] w-[180px] mb-10 h-[50px] md:h-[65px] ${!isStepValid ? 'bg-gray-500':' bg-greenAcc' } md:text-[32px] text-[20px] font-semibold text-white font-tinos rounded-input `}
          type="submit"
          disabled={!isStepValid}
        >
          Next
          {/* {isLoading && (
            <div className="w-full h-full flex justify-center items-center">
             <div className="  h-5 border-[1px] border-white w-[300px] px-[5] absolute">
               
             <div className=" ">
    <div className="h-full bg-gradient-to-r from-green-400 to-green-600 animate-pulse"></div>
  </div>
             </div>
            </div>
  
)} */}

      
{isLoading && (
  <div>
    <div className="w-full h-[750px] absolute left-0 top-0 bg-black opacity-85"></div>
    <div className="w-full h-full top-0 left-0 absolute flex flex-col justify-center items-center">
      <div className="mt-[-60px] text-white text-[20px] capitalize font-tinos">Loading...</div>
      <div className="absolute top-0 flex justify-center items-center h-full w-full z-50">
        <span className="bg-white px-[2px] rounded-full mx-1"></span>
        <div className="h-[25px] w-[30%] border-[1px] py-[5px] px-2 border-white animate-pulse">
          <div className="bg-approved w-full h-full rounded-full"></div>
        </div>
        <span className="bg-white px-[6px] rounded-full mx-1"></span>
      </div>
    </div>
  </div>
)}

        </button>
      </div>
     
    
     
    </div>
  );
}
