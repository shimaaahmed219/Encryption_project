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
            <Hr />
            {/* paragraph */}
            <div className="w-5/6 mt-5 px-10 py-10 m-auto">
              <p className="font-tinos text-[26px] font-bold">
                I, the undersigned, declare that all the data shown above, as
                well as the documents provided , are correct and conform to the
                situation, and I have not obtained a valid or renewable passport
                at the present time.
              </p>
            </div>

            <div className="w-5/6 my-5 px-10 py-10 m-auto flex">
              <div className="flex items-center py-6">
                <label className="text-[22px] my-2 ml-10 mr-5 text-greenAcc font-roboto font-medium">
                  Done in
                </label>
                <input
                  type="text"
                  className="date-input focus:outline-none bg-transparent "
                  value=" .... /   ..../....   22__"
                />
              </div>

              <div className="w-[65%]">
                <label className="block font-roboto my-5 text-[20px] font-medium mt-[-20px]">
                  Signature of the student (or legal representative)
                </label>
                <input className="w-full border-[1px] border-yellowAcc h-[50px] bg-transparent py-[6px] px-[20px] rounded-input" />
              </div>
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
