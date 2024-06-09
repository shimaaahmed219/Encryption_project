/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import HeaderFormPage from "../HeaderFormPage";
import upload from "../../assets/passForm/uploadfile.svg";
import Hr from "../Hr";
import { useEffect, useState } from "react";

export default function StepThree({
  register,
  errors,
  nextStep,
  goToStep,
  prevStep,
  step,
  handleImageChange,
  selectedImage,
  watch,
}) {
  const [isStepValid, setIsStepValid] = useState(false);
  const watchAllFields = watch();
  useEffect(() => {
    const isFormValid =
      watchAllFields.national_id !== "" &&
      watchAllFields.birth_cert?.length > 0;
    watchAllFields.national_id_photo?.length > 0;
    watchAllFields.graduation_cert?.length > 0;
    watchAllFields.army_cert?.length > 0;
    setIsStepValid(isFormValid);
  }, [watchAllFields]);

  return (
    <div className={`${step === 3 ? "block" : "hidden"}`}>
      <div className="w-[85%] shadow-shadowEmp mt-10 bg-baform h-full m-auto py-[50px]  rounded-[20px] justify-center ">
        <HeaderFormPage goToStep={goToStep} step={step} />
        <Hr />

        <div className="flex  md:flex-row flex-col-reverse lg:px-[90px] justify-center  items-center">
        <div className="w-[35%] flex justify-center mb-10 mt-5">
          
          <div className="">
            <div>
            <label className="block text-yellowAcc my-3 font-roboto text-inputFile font-medium px-2">
              Identification card
            </label>

            </div>
           
            <div className="w-[200px] h-[150px] rounded-[7px] bg-fileUploud relative">
              <input
                {...register("national_id_photo")}
                onChange={(e) => handleImageChange(e, "national_id_photo")}
                type="file"
                className="opacity-0 w-full h-full absolute z-50"
              />
              <div className="absolute text-center w-full h-full flex flex-col items-center justify-center">
                <img src={upload} className="" />
                <div className=" text-[18px] font-tinos text-greenAcc">
                  <h3>Upload a photo</h3>
                  <h3>4*6 CM</h3>
                </div>
              </div>
              {selectedImage["national_id_photo"] && (
                <img
                  src={selectedImage["national_id_photo"]}
                  alt="Selected"
                  className="w-full  z-40 absolute h-full object-cover "
                />
              )}
            </div>
          </div>
          {/* {errors.national_id_photo && (
            <div className="text-red-500 mx-5 text-[15px] my-2">
              ***{errors.national_id_photo.message}
            </div>
          )} */}
        </div>

         
          {/* inputs */}
          <div  className=" lg:w-[63%] md:w-[50%] w-[90%] md:pl-0  pl-6 ">
            {/* input1 */}
            <div className="my-5 ">
              {/* label */}
              <div className="py-2">
              <label  className="text-greenAcc  font-roboto text-label font-semibold ">
              National ID Card
              </label>
              </div>
             
              <input
              {...register("national_id", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              className="rounded-input font-roboto text-input px-[20px] bg-transparent md:ml-0 focus:outline-none border-[1px] border-yellowAcc md:w-[95%] w-[90%] h-input"
            />
            </div>
            {/* input 2 */}
            <div>
              {/* label */}
              <div  className="py-1">
                <label  className="text-greenAcc  font-roboto text-label font-semibold "> university Id</label>
              </div>
              <input
              {...register("university_id")}
              type="text"
              className="rounded-input font-roboto text-input px-[20px] bg-transparent   focus:outline-none  border-[1px] border-yellowAcc md:w-[95%] w-[90%] h-input"
            />

            </div>
          </div>
          {/* card */}
        
        </div>

        {/* fils */}
        <div className=" w-[95%]  m-auto grid xl:grid-cols-3 md:grid-cols-2 2xl:pl-[200px] xl:pl-[120px] lg:pl-[100px] md:pl-[80px]  gap-8 justify-center ">
          <div>
            <div className="md:pl-5 pl-[2px]">
              <label className="block text-yellowAcc my-3 font-roboto text-inputFile font-medium px-2">
                Birth certificate
              </label>
              <div className="w-[200px] h-[150px] rounded-[7px] bg-fileUploud relative">
                <input
                  {...register("birth_cert", {
                    required: {
                      value: true,

                      message: "This field is required",
                    },
                  })}
                  onChange={(e) => handleImageChange(e, "birth_cert")}
                  type="file"
                  className="opacity-0 w-full text-input h-full absolute z-50"
                />

            
                <div className="absolute w-full h-full text-center flex flex-col justify-center items-center  ">
                  <img src={upload} className="" />
                  <div className=" text-[18px] font-tinos text-greenAcc">
                    <h3>Upload a photo</h3>
                    <h3>4*6 CM</h3>
                  </div>
                </div>
                {selectedImage["birth_cert"] && (
                  <img
                    src={selectedImage["birth_cert"]}
                    alt="Selected"
                    className="w-full  z-40 absolute h-full object-cover "
                  />
                )}
              </div>
              {errors.birth_cert && (
                <div className="text-red-500 text-[15px] my-2">
                  ***{errors.birth_cert.message}
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="md:pl-5 pl-[2px]">
              <label className="block text-yellowAcc my-3 font-roboto text-inputFile font-medium px-2">
              Military situation
              </label>
              <div className="w-[200px] h-[150px] rounded-[7px] bg-fileUploud relative">
                <input
                  {...register("army_cert",{
                    required: {
                      value: true,
                      message: "This field is required",
                    }
                  })}
                  onChange={(e) => handleImageChange(e, "army_cert")}
                  type="file"
                  className="opacity-0 w-full h-full absolute z-50"
                />
                <div className="absolute w-full flex flex-col justify-center items-center h-full text-center ">
                  <img src={upload} className="" />
                  <div className=" text-[18px] font-tinos text-greenAcc">
                    <h3>Upload a photo</h3>
                    <h3>4*6 CM</h3>
                  </div>
                </div>
                {selectedImage["army_cert"] && (
                  <img
                    src={selectedImage["army_cert"]}
                    alt="Selected"
                    className="w-full  z-40 absolute h-full object-cover "
                  />
                )}
              </div>
            </div>
            {errors.army_cert && (
              <div className="text-red-500 mx-5 text-[15px] my-2">
                ***{errors.army_cert.message}
              </div>
            )}
          </div>
          <div>
            <div className="md:pl-5 pl-[2px]">
              <label className="block my-3 text-yellowAcc font-roboto text-inputFile font-medium px-2">
                graduation cert
              </label>
              <div className="w-[200px] h-[150px] rounded-[7px] bg-fileUploud relative">
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
                <div className="absolute w-full flex flex-col justify-center items-center h-full text-center ">
                  <img src={upload} className="" />
                  <div className=" text-[18px] font-tinos text-greenAcc">
                    <h3>Upload a photo</h3>
                    <h3>4*6 CM</h3>
                  </div>
                </div>
                {selectedImage["graduation_cert"] && (
                  <img
                    src={selectedImage["graduation_cert"]}
                    alt="Selected"
                    className="w-full  z-40 absolute h-full object-cover "
                  />
                )}
              </div>
            </div>
            {errors.national_id_photo && (
              <div className="text-red-500 mx-5 text-[15px] my-2">
                ***{errors.graduation_cert.message}
              </div>
            )}
          </div>
        </div>
        {/* date */}
      </div>
      <div className="my-10 m-auto mt-[50px] flex w-[80%] justify-around">
        <button
          className="w-[255px] capitalize mb-10  h-[65px] md:bg-greenAcc text-[32px] text-greenAcc md:text-white font-tinos rounded-input"
          type="button"
          onClick={prevStep}
        >
          back
        </button>
        <button
          className="w-[255px] mb-10  h-[65px] md:bg-greenAcc text-[32px] ${!isStepValid && 'bg-gray-500' } text-greenAcc md:text-white font-tinos rounded-input"
          type="button"
          onClick={nextStep}
          disabled={!isStepValid}
        >
          Next
        </button>
      </div>
    </div>
  );
}
