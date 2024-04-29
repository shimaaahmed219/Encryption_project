/* eslint-disable react/prop-types */

import Hr from "../Hr";

import HeaderFormPage from "../HeaderFormPage";

export default function StepFour({goToStep,prevStep,errors,register,step}) {

  
  const disableNextStep = () => {
    // Check if there are errors in the form inputs
    if (errors.age || errors.address) {
      return true; 
    } else {
      return false; 
    }
  };

  disableNextStep()
   
  return (
    <div className={`${step === 4 ? "block" : "hidden"}`}>
          <div className=" w-5/6 min-h-[423px] mb-10 py-5 bg-baform shadow-shadowEmp rounded-[20px] m-auto mt-10">
            <HeaderFormPage goToStep={goToStep} step={step} />
            <Hr />
            <div className="grid gap-x-20   lg:grid-cols-2 grid-cols-1 px-10 pt-10 mb-5">
              {/* name input */}

              <div>
                <label className="block font-roboto my-2 text-[20px] text-greenAcc">
                  The age
                </label>
                <input
                  type="text"
                  {...register("age", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  className="border-[1px] px-[20px] font-roboto text-[20px] focus:outline-none  border-yellowAcc bg-transparent  w-full rounded-input h-[50px]"
                />
                {errors.age && (
                  <div className="text-[15px] my-5  text-red-500">
                    ***{errors.age.message}
                  </div>
                )}
              </div>

              {/* address input */}
              <div>
                <label className="block my-2 font-roboto text-[20px] text-greenAcc">
                  The address
                </label>
                <input
                  {...register("address", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  className="border-[1px] px-[20px] font-roboto text-[20px]  focus:outline-none border-yellowAcc bg-transparent  w-full rounded-input h-[50px]"
                />
                {errors.address && (
                  <div className="text-[15px]  my-5 focus:outline-none text-red-500">
                    ***{errors.address.message}
                  </div>
                )}
              </div>
            </div>
            {/*  */}

            <div className="md:block hidden"></div>
          </div>
          {/* <Hr /> */}
       
          <div className="my-10 m-auto  flex w-[80%] justify-around">
            <button
              className="w-[255px] mb-10  h-[65px] md:bg-greenAcc text-[32px] md:text-white text-greenAcc font-tinos rounded-input"
              type="button"
              onClick={prevStep}
            >
              back
            </button>
            <button
           disabled={disableNextStep()}
              className="w-[255px] mb-10  h-[65px] md:bg-greenAcc text-[32px] md:text-white text-greenAcc font-tinos rounded-input"
              type="submit"
             
            >
              Next
            </button>
          </div>
        </div>
  )
}