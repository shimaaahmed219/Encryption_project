/* eslint-disable react/prop-types */

import Hr from "../Hr";

import HeaderFormPage from "../HeaderFormPage";
export default function StepFour({goToStep,prevStep,errors,register,step}) {
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
          <div className="my-10 m-auto  flex w-[80%] justify-around">
            <button
              className="w-[255px] mb-10  h-[65px] md:bg-greenAcc text-[32px] md:text-white text-greenAcc font-tinos rounded-input"
              type="button"
              onClick={prevStep}
            >
              back
            </button>
            <button
              className="w-[255px] mb-10  h-[65px] md:bg-greenAcc text-[32px] md:text-white text-greenAcc font-tinos rounded-input"
              type="submit"
            >
              Next
            </button>
          </div>
        </div>
  )
}
