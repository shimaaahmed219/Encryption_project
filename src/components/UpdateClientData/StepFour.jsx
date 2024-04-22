/* eslint-disable react/prop-types */
import HeaderFormPage from "../HeaderFormPage";
import Hr from "../Hr";



export default function StepFour({register, errors,prevStep ,step,goToStep}) {
  return (
   <>
     <div className=" w-5/6 min-h-[423px] mb-10 py-5 bg-baform shadow-shadowEmp rounded-[20px] m-auto mt-10">
              <HeaderFormPage goToStep={goToStep} step={step} />
              <Hr />
              <div className="grid xl:grid-cols-3  lg:grid-cols-2 grid-cols-1 px-10 pt-10 mb-5">
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
                    className="border-[1px] font-roboto text-lg px-5  border-yellowAcc bg-transparent md:w-[330px] rounded-input h-[50px]"
                  />
                  {errors.age && (
                    <div className="text-[20px] text-red-500">
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
                    className="border-[1px] font-roboto text-lg px-5  border-yellowAcc bg-transparent md:w-[330px] rounded-input h-[50px]"
                  />
                  {errors.address && (
                    <div className="text-[20px] text-red-500">
                      ***{errors.address.message}
                    </div>
                  )}
                </div>
              </div>
              {/*  */}
              <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 px-10 pt-10 mb-5"></div>
            </div>
          

           
            <div className="my-10 m-auto mt-[50px] flex w-[80%] justify-around">
              <button
                className="w-[255px] mb-10  h-[65px] bg-greenAcc text-[32px] text-white font-tinos rounded-input"
                type="button"
                onClick={prevStep}
              >
                back
              </button>
              <button
                className="w-[255px] mb-10  h-[65px] bg-greenAcc text-[32px] text-white font-tinos rounded-input"
                type="submit"
              >
                Next
              </button>
            </div>
   </>
  )
}
