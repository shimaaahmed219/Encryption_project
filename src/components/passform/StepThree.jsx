/* eslint-disable react/prop-types */

// import Hr from "../Hr";

// import HeaderFormPage from "../HeaderFormPage";
// export default function StepFour({
//   goToStep,
//   // uploadComplete,
//   prevStep,
//   errors,
//   register,
//   step,
//   uploadProgress,
// }) {
//   console.log(errors);
//   return (
//     <div className={`${step === 3 ? "block" : "hidden"}`}>
//       <div className=" w-5/6 min-h-[423px] mb-10 py-5 bg-baform shadow-shadowEmp rounded-[20px] m-auto mt-10">
//         <HeaderFormPage goToStep={goToStep} step={step} />
//         <Hr />
//         <div className="grid gap-x-20   lg:grid-cols-2 grid-cols-1 px-10 pt-10 mb-5">
//           {/* name input */}

//           <div>
//             <label className="block font-roboto my-2 text-[20px] text-greenAcc">
//               The age
//             </label>
//             <input
//               type="text"
//               {...register("age", {
//                 required: {
//                   value: true,
//                   message: "This field is required",
//                 },
//               })}
//               className="border-[1px] px-[20px] font-roboto text-[20px] focus:outline-none  border-yellowAcc bg-transparent  w-full rounded-input h-[50px]"
//             />
//             {errors.age && (
//               <div className="text-[15px] my-5  text-red-500">
//                 ***{errors.age.message}
//               </div>
//             )}
//           </div>

//           {/* address input */}
//           <div>
//             <label className="block my-2 font-roboto text-[20px] text-greenAcc">
//               The address
//             </label>
//             <input
//               {...register("address", {
//                 required: {
//                   value: true,
//                   message: "This field is required",
//                 },
//               })}
//               className="border-[1px] px-[20px] font-roboto text-[20px]  focus:outline-none border-yellowAcc bg-transparent  w-full rounded-input h-[50px]"
//             />
//             {errors.address && (
//               <div className="text-[15px]  my-5 focus:outline-none text-red-500">
//                 ***{errors.address.message}
//               </div>
//             )}
//           </div>
//         </div>
//         {/*  */}

//         <div className="md:block hidden"></div>
//       </div>
//       {/* <Hr /> */}
//       {/* paragraph */}
//       <div className="md:block hidden">
//         {/* <div className="w-5/6 mt-5 px-10 py-10 m-auto md:block hidden">
//               <p className="font-tinos text-[26px] font-bold">
//                 I, the undersigned, declare that all the data shown above, as
//                 well as the documents provided , are correct and conform to the
//                 situation, and I have not obtained a valid or renewable passport
//                 at the present time.
//               </p>
//             </div> */}

//         <div className="w-5/6 my-5 px-10  m-auto flex ">
//           {/* <div className="flex items-center py-6">
//                 <label className="text-[22px] my-2 ml-10 mr-5 text-greenAcc font-roboto font-medium">
//                   Done in
//                 </label>
//                 <input
//                   type="text"
//                   className="date-input focus:outline-none bg-transparent "
//                   value=" .... /   ..../....   22__"
//                 />
//               </div> */}
//           {/* 
//               <div className="w-[65%]">
//                 <label className="block font-roboto my-5 text-[20px] font-medium mt-[-20px]">
//                   Signature of the student (or legal representative)
//                 </label>
//                 <input className="w-full border-[1px] border-yellowAcc h-[50px] bg-transparent py-[6px] px-[20px] rounded-input" />
//               </div> */}
//         </div>
//       </div>
//       <div className="my-10 m-auto  flex w-[80%] justify-around">
//         <button
//           className="w-[255px] mb-10  h-[65px] md:bg-greenAcc text-[32px] md:text-white text-greenAcc font-tinos rounded-input"
//           type="button"
//           onClick={prevStep}
//         >
//           back
//         </button>
//         <button
//           className="w-[255px] mb-10  h-[65px] md:bg-greenAcc text-[32px] md:text-white text-greenAcc font-tinos rounded-input"
//           type="submit"
//         >
//           {uploadProgress > 0 ? `Uploading... %` : "Submit"}
//           <div className="progress mt-[215px] absolute top-[-100px] left-[50px]">
//             {/* <img src={selectedImage["photo"]} alt="Selected" className="w-full z-40 absolute h-full object-cover" /> */}
//           </div>
//         </button>
//       </div>
//       {/* <div
//         className={`min-h-[780px]  ${
//           uploadComplete && "hidden"
//         } absolute flex bg-black opacity-30 top-0 justify-center w-full items-center`}
//       >
//         <div className="progress m-auto absolute z-50">
//           <div
//             className="border-2 border-gray-200   rounded-full w-[50px] h-[50px] animate-spin"
//             style={{ borderTopColor: "black" }}
//           />
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800 font-bold text-lg">
//             {uploadProgress}%
//           </div>
//         </div> */}
//       {/* </div> */}
//     </div>
//   );
// }

/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import HeaderFormPage from "../HeaderFormPage";
import upload from "../../assets/passForm/uploadfile.svg";
import Hr from "../Hr";
// import { useEffect, useState } from "react";

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
  // const [fieldsFilled, setFieldsFilled] = useState(false);
  // useEffect(() => {
  //   const isFormFilled =
  //     register.national_id &&
  //     register.birth_cert &&
  //     register.national_id_photo &&
  //     register.graduation_cert &&
  //     setFieldsFilled(isFormFilled);
  // }, [register]);
  return (
    <div className={`${step === 3 ? "block" : "hidden"}`}>
      <div className="w-[85%] shadow-shadowEmp mt-10 bg-baform min-h-[778px] m-auto py-7  rounded-[20px] justify-center ">
        <HeaderFormPage goToStep={goToStep} step={step} />
        <Hr />

        {/* inputs */}

        <div className="py-10">
          <div className=" m-auto md:flex md:px-5 md:ml-0  justify-center items-center">
            <label className="text-greenAcc mx-3 md:ml-0 mr-9 ml-6 font-roboto text-[22px] font-medium ">
              National ID Card
            </label>
            <input
              {...register("national_id", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              className="rounded-input font-roboto text-[20px] px-[20px] bg-transparent md:ml-0 ml-6 focus:outline-none border-[1px] border-yellowAcc md:w-[70%] w-[83%] h-[50px]"
            />
          </div>
          {errors.national_id && (
            <div className="text-red-500 text-[15px] my-5 md:ml-[300px]">
              ***{errors.national_id.message}
            </div>
          )}

          <div className="w-5/6 md:px-5 md:mx-5 md:flex items-center mt-[45px]">
            <label className="text-greenAcc md:ml-11 ml-6 md:mx-10 font-roboto text-[22px] font-medium capitalize ">
              university Id
            </label>
            <input
              {...register("university_id")}
              type="text"
              className="rounded-input font-roboto text-[20px] px-[20px] bg-transparent  md:ml-[100px] ml-6 m-auto focus:outline-none w-full border-[1px] border-yellowAcc md:w-[65%] h-[50px]"
            />
          </div>
        </div>

        {/* fils */}
        <div className=" w-[80%]  m-auto grid xl:grid-cols-3 md:grid-cols-2  justify-center gap-8">
          <div>
            <div className="md:pl-5 pl-[2px]">
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
                {selectedImage["national_id_photo"] && (
                  <img
                    src={selectedImage["national_id_photo"]}
                    alt="Selected"
                    className="w-full  z-40 absolute h-full object-cover "
                  />
                )}
              </div>
            </div>
            {errors.national_id_photo && (
              <div className="text-red-500 mx-5 text-[15px] my-2">
                ***{errors.national_id_photo.message}
              </div>
            )}
          </div>
          <div>
            <div className="md:pl-5 pl-[2px]">
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
          className="w-[255px] mb-10  h-[65px] md:bg-greenAcc text-[32px] text-greenAcc md:text-white font-tinos rounded-input"
          type="button"
          onClick={nextStep}
          // disabled={!fieldsFilled}
        >
          Next
        </button>
      </div>
    </div>
  );
}