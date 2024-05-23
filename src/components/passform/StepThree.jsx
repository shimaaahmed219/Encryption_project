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

    setIsStepValid(isFormValid);
  }, [watchAllFields]);

  return (
    <div className={`${step === 3 ? "block" : "hidden"}`}>
      <div className="w-[85%] shadow-shadowEmp mt-10 bg-baform min-h-[778px] m-auto py-7  rounded-[20px] justify-center ">
        <HeaderFormPage goToStep={goToStep} step={step} />
        <Hr />

        {/* inputs */}

        {/* <div className="py-10 md:pl-[100px]"> */}
          {/* <div className=" m-auto md:flex-row flex flex-col md:ml-0  md:justify-start justify-center  items-center">
           <div className="w-full">
           <label className="text-greenAcc mx-3 md:ml-0 mr-9 ml-6 font-roboto text-label font-semibold ">
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
              className="rounded-input font-roboto text-input px-[20px] bg-transparent md:ml-0  focus:outline-none border-[1px] border-yellowAcc md:w-[70%] w-[83%] h-[50px]"
            />
          </div> */}
          {/* <div className="flex md:flex-row flex-col    items-center ">
            <div className=" md:w-[20%] md:py-0 py-3 w-full pl-3">
              <label className="text-greenAcc   mx-3 md:ml-0 mr-9 ml-6 font-roboto text-label font-semibold ">
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
              type="text"
              className="rounded-input font-roboto text-input px-[20px] bg-transparent md:ml-0  focus:outline-none border-[1px] border-yellowAcc md:w-[70%] w-[83%] h-[50px]"
            />
          </div>
          {errors.national_id && (
            <div className="text-red-500 text-[15px] my-5 md:ml-[300px]">
              ***{errors.national_id.message}
            </div>
          )} */}

          {/* <div className="w-5/6 md:flex items-center mt-[45px]">
            <label className="text-greenAcc font-roboto text-label font-semibold capitalize ">
              university Id
            </label>
            <input
              {...register("university_id")}
              type="text"
              className="rounded-input font-roboto text-input px-[20px] bg-transparent  md:ml-[100px] ml-6 m-auto focus:outline-none w-full border-[1px] border-yellowAcc md:w-[65%] h-[50px]"
            />
          </div>
        </div> */}
        {/* <div className="flex md:flex-row flex-col    items-center my-10">
        <div className="md:w-[10%] md:py-0 py-3 w-full md:pl-3 pl-10 ">
        <label className="text-greenAcc  font-roboto text-label font-semibold capitalize ">
              university Id
            </label>
        </div>
        
          <input    {...register("university_id")} className="rounded-input m-auto  font-roboto text-input px-[20px] bg-transparent  focus:outline-none  border-[1px] border-yellowAcc md:w-[65%] w-[83%] h-[50px]"type="text" />
        </div>
        </div> */}
        <div className="flex  md:flex-row flex-col-reverse lg:px-[90px] justify-center  items-center">
        <div className="w-[35%] flex justify-center my-10">
          
          <div className="">
            <div>
            <label className="block text-yellowAcc my-3 font-roboto text-inputFile font-medium px-2">
              Identification card
            </label>

            </div>
           
            <div className="w-[236px] h-[200px] rounded-[7px] bg-fileUploud relative">
              <input
                {...register("national_id_photo")}
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
            <div className="my-7 ">
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
              className="rounded-input font-roboto text-input px-[20px] bg-transparent md:ml-0 focus:outline-none border-[1px] border-yellowAcc md:w-[95%] w-[90%] h-[50px]"
            />
            </div>
            {/* input 2 */}
            <div>
              {/* label */}
              <div  className="py-2">
                <label  className="text-greenAcc  font-roboto text-label font-semibold "> university Id</label>
              </div>
              <input
              {...register("university_id")}
              type="text"
              className="rounded-input font-roboto text-input px-[20px] bg-transparent   focus:outline-none  border-[1px] border-yellowAcc md:w-[95%] w-[90%] h-[50px]"
            />

            </div>
          </div>
          {/* card */}
        
        </div>

        {/* fils */}
        <div className=" w-[80%]  m-auto grid xl:grid-cols-3 md:grid-cols-2  justify-center gap-8">
          <div>
            <div className="md:pl-5 pl-[2px]">
              <label className="block text-yellowAcc my-3 font-roboto text-inputFile font-medium px-2">
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
                  className="opacity-0 w-full text-input h-full absolute z-50"
                />

                <div></div>
                <div className="absolute text-center ">
                  <img src={upload} className="mt-[40px] ml-[79px]" />
                  <div className="mt-[30px] ml-[60px] text-[18px] font-tinos text-greenAcc">
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
              <div className="w-[236px] h-[200px] rounded-[7px] bg-fileUploud relative">
                <input
                  // {...register("national_id_photo")}
                  // onChange={(e) => handleImageChange(e, "national_id_photo")}
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
                {/* {selectedImage["national_id_photo"] && (
                  <img
                    src={selectedImage["national_id_photo"]}
                    alt="Selected"
                    className="w-full  z-40 absolute h-full object-cover "
                  />
                )} */}
              </div>
            </div>
            {/* {errors.national_id_photo && (
              <div className="text-red-500 mx-5 text-[15px] my-2">
                ***{errors.national_id_photo.message}
              </div>
            )} */}
          </div>
          <div>
            <div className="md:pl-5 pl-[2px]">
              <label className="block my-3 text-yellowAcc font-roboto text-inputFile font-medium px-2">
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
          className="w-[255px] mb-10  h-[65px] md:bg-greenAcc text-[32px] text-greenAcc md:text-white font-tinos rounded-input"
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
