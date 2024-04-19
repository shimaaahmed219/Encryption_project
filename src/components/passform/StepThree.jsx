/* eslint-disable react/prop-types */
import HeaderFormPage from "../HeaderFormPage";
import upload from "../../assets/passForm/uploadfile.svg";
import Hr from "../Hr";
export default function StepThree({
    register,
    errors,
    nextStep,
    goToStep,
    prevStep,
    step,
    handleImageChange,
    selectedImage,
  }) {
  return (
   
    
    <div className={`${step === 3 ? "block" : "hidden"}`}>
    <div className="w-[85%] shadow-shadowEmp mt-10 bg-baform min-h-[778px] m-auto py-7  rounded-[20px] justify-center ">
      <HeaderFormPage goToStep={goToStep} step={step} />
      <Hr />

      {/* inputs */}

      <div className="py-10">
        <div className=" m-auto md:flex md:px-5 md:ml-0  justify-center items-center">
          <label className="text-greenAcc mx-3 md:ml-0 ml-6 font-roboto text-[22px] font-medium ">
            National ID Card
          </label>
          <input
            {...register("national_id", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            className="rounded-input bg-transparent md:ml-0 ml-6 focus:outline-none border-[1px] border-yellowAcc w-[83%] h-[50px]"
          />
        </div>
        {errors.national_id && (
          <div className="text-red-500 text-[20px] ml-[200px]">
            ***{errors.national_id.message}
          </div>
        )}

        <div className="w-5/6 md:px-5 md:mx-5 md:flex items-center my-10">
          <label className="text-greenAcc md:ml-0 ml-6  font-roboto text-[22px] font-medium capitalize ">
            university Id
          </label>
          <input
            {...register("university_id")}
            type="text"
            className="rounded-input  bg-transparent md:ml-0 ml-6 m-auto focus:outline-none w-full border-[1px] border-yellowAcc md:w-[65%] h-[50px]"
          />
        </div>
      </div>

      {/* fils */}
      <div className=" w-[80%]  m-auto grid xl:grid-cols-3 md:grid-cols-2  justify-center gap-8">
        <div>
          <div className="md:pl-5 pl-[6px]">
            <label className="block text-yellowAcc my-3 font-roboto text-[22px] font-medium text-center">
              Birth certificate
            </label>
            <div className="w-[236px] h-[200px] rounded-[7px] bg-fileUploud relative">
              <input
                {...register("birth_cert", {
                  required: {
                    value: true,
                    
                    message: "This field is required",
                  },
                })}
                onChange={(e) => handleImageChange(e, "birth_cert")}
                type="file"
                className="opacity-0 w-full h-full absolute z-50"
              />

              <div></div>
              <div className="absolute text-center ">
                <img src={upload} className="mt-[40px] ml-[79px]" />
                <div className="mt-[30px] ml-[60px] text-[18px] font-tinos text-greenAcc">
                  <h3>Upload a photo</h3>
                  <h3>4*6 CM</h3>
                </div>
              </div>
              {selectedImage["birth_cert"] && <img src={selectedImage["birth_cert"]} alt="Selected" className="w-full  z-40 absolute h-full object-cover "/>}
            </div>
            {errors.birth_cert && (
              <span className="text-red-500 text-[20px] my-10">
                ***{errors.birth_cert.message}
              </span>
            )}
          </div>
        </div>

        <div>
          <div className="md:pl-5 pl-[6px]">
            <label className="block text-yellowAcc my-3 font-roboto text-[22px] font-medium text-center">
              Identification card
            </label>
            <div className="w-[236px] h-[200px] rounded-[7px] bg-fileUploud relative">
              <input
                {...register("national_id_photo", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                onChange={(e) => handleImageChange(e, "national_id_photo")}
                type="file"
                className="opacity-0 w-full h-full absolute z-50"
              />
              <div className="absolute text-center ">
                <img src={upload} className="mt-[40px] ml-[79px]" />
                <div className="mt-[30px] ml-[60px] text-[18px] font-tinos text-greenAcc">
                  <h3>Upload a photo</h3>
                  <h3>4*6 CM</h3>
                </div>
              </div>
              {selectedImage["national_id_photo"] && <img src={selectedImage["national_id_photo"]} alt="Selected" className="w-full  z-40 absolute h-full object-cover "/>}
            </div>
         
          </div>
          {errors.national_id_photo && (
            <span className="text-red-500 mx-5 text-[20px] my-10">
              ***{errors.national_id_photo.message}
            </span>
          )}
        </div>
        <div>
          <div className="md:pl-5 pl-[6px]">
            <label className="block my-3 text-yellowAcc font-roboto text-[22px] font-medium text-center">
              graduation cert
            </label>
            <div className="w-[236px] h-[200px] rounded-[7px] bg-fileUploud relative">
              <input
                {...register("graduation_cert", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                onChange={(e) => handleImageChange(e, "graduation_cert")}
                type="file"
                className="opacity-0 w-full h-full absolute z-50"
              />
              <div className="absolute text-center ">
                <img src={upload} className="mt-[40px] ml-[79px]" />
                <div className="mt-[30px] ml-[60px] text-[18px] font-tinos text-greenAcc">
                  <h3>Upload a photo</h3>
                  <h3>4*6 CM</h3>
                </div>
              </div>
              {selectedImage["graduation_cert"] && <img src={selectedImage["graduation_cert"]} alt="Selected" className="w-full  z-40 absolute h-full object-cover "/>}
            </div>
        
          </div>
        </div>
      </div>
      {/* date */}

      <div className="w-5/6 m-auto mt-10 md:block hidden">
        <label className="block font-ropoto text-[22px] font-medium text-greenAcc">
          Issuer
        </label>

        <div className="flex">
          <input
            type="text "
            className="border-[1px] border-yellowAcc rounded-input w-[276px] h-[50px] bx-[20px] by-[6px] bg-transparent"
          />

          <label className="text-[22px] my-2 ml-10 mr-5 text-greenAcc font-roboto font-medium">
            Release Date
          </label>
          <input
            type="text"
            className="date-input focus:outline-none bg-transparent "
            value=" .... /   ..../....   22__"
          />
        </div>
      </div>
    </div>
    <div className="my-10 m-auto mt-[50px] flex w-[80%] justify-around">
      <button
        className="w-[255px] mb-10  h-[65px] md:bg-greenAcc text-[32px] text-greenAcc md:text-white font-tinos rounded-input"
        type="button"
        onClick={prevStep}
      >
        back
      </button>
      <button
        className="w-[255px] mb-10  h-[65px] md:bg-greenAcc text-[32px] text-greenAcc md:text-white font-tinos rounded-input"
        type="button"
        onClick={nextStep}
      >
        Next
      </button>
    </div>
  </div>

  )
}
