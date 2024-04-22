/* eslint-disable react/prop-types */

import { FiEye } from "react-icons/fi";
// import HeaderFormPage from "../HeaderFormPage";
// import HeaderFormPage from "../HeaderFormPage"
// import Hr from "../Hr";
import {  useState } from "react";
import { Dialog} from "@mui/material";
import { IoMdClose } from "react-icons/io";
import HeaderFormPage from "../HeaderFormPage";
import Hr from "../Hr";




 
    const ImageModal = ({
      isOpen,
      onRequestClose,
      imageUrl,
    
    }) => {
    
   
  return (
    <Dialog
      open={isOpen}
      onClose={onRequestClose}
      fullWidth
      maxWidth="sm"
    
    >
      <button  onClick={onRequestClose} className="w-full">
        <IoMdClose className="text-white ms-auto"   style={{right:"5px",top:"5px",position:"absolute",color:"white"}} />
      </button>
      <img src={imageUrl} alt="Image"  />
    </Dialog>
  );
};
  

export default function StepThree({register, errors,prevStep,image,nextStep ,step,goToStep}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
     <div className="w-[85%] shadow-shadowEmp mt-10 bg-baform min-h-[778px] m-auto py-7  rounded-[20px] justify-center ">
              <HeaderFormPage goToStep={goToStep} step={step} />

            <Hr/>
              

              {/* inputs */}

              <div className="py-10">
              <div className=" m-auto md:flex md:px-5 md:ml-0  justify-center items-center">
          <label className="text-greenAcc  mx-3 md:ml-0 mr-9 ml-6 font-roboto text-[22px] font-medium ">
            National ID Card
          </label>
          <input
            {...register("national_id", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            className="rounded-input px-5 font-roboto text-[20px] bg-transparent md:ml-0 ml-6 focus:outline-none border-[1px] border-yellowAcc md:w-[70%] w-[83%] h-[50px]"
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
            className="rounded-input px-5 font-roboto text-[20px]  bg-transparent  md:ml-[100px] ml-6 m-auto focus:outline-none w-full border-[1px] border-yellowAcc md:w-[65%] h-[50px]"
          />
        </div>
      </div>


              {/* fils */}
              <div className="md:flex justify-center gap-8">
                <div>
                  <div className="pl-5">
                    <label className="block text-yellowAcc my-3 font-roboto text-[22px] font-medium text-center">
                      Birth certificate
                    </label>
                    <div className="w-[236px] h-[200px] rounded-[7px] bg-fileUploud relative">
                      <input
                        {...register("birth_cert")}
                        type="file"
                        className="opacity-0 w-full h-[90%] absolute z-50"
                      />

                      <div className="absolute text-center ">
                        <img
                          className=" w-[236px] h-[200px]"
                          src={`https://epassport-api.preview-ym.com/${image?.birth_cert}`}
                        />

                      </div>
                      <button
                      type="button"
                      onClick={() => openModal(`https://epassport-api.preview-ym.com/${image?.birth_cert}`)}
                      className=" right-[-10px] bottom-[-8px] w-[30px] h-[30px] flex justify-center items-center rounded-full bg-yellowAcc absolute">
            <FiEye className="text-white   " />
          </button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="pl-5">
                    <label className="block text-yellowAcc my-3 font-roboto text-[22px] font-medium text-center">
                      Identification card
                    </label>
                    <div className="w-[236px] h-[200px] rounded-[7px] bg-fileUploud relative">
                      <input
                        {...register("national_id_photo")}
                        type="file"
                        className="opacity-0 w-full h-[90%] absolute z-50"
                      />
                      <div className="absolute text-center ">
                        <img
                          className=" w-[236px] h-[200px]"
                          src={`https://epassport-api.preview-ym.com/${image?.national_id_photo}`}
                        />
                      </div>
                      <button
                      type="button"
                      onClick={() => openModal(`https://epassport-api.preview-ym.com/${image?.national_id_photo}`)}
                      className=" right-[-10px] bottom-[-8px] w-[30px] h-[30px] flex justify-center items-center rounded-full bg-yellowAcc absolute">
            <FiEye className="text-white   " />
          </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="pl-5">
                    <label className="block my-3 text-yellowAcc font-roboto text-[22px] font-medium text-center">
                      graduation cert
                    </label>
                    <div className="w-[236px] h-[200px] rounded-[7px] bg-fileUploud relative">
                      <input
                        {...register("graduation_cert")}
                        type="file"
                        className="opacity-0 w-full h-[90%] absolute z-50"
                      />

                      <div className="absolute text-center ">
                        <img
                          className=" w-[236px] h-[200px]"
                          src={`https://epassport-api.preview-ym.com/${image?.graduation_cert}`}
                        />
                      </div>
                      <button
                      type="button"
                      onClick={() => openModal(`https://epassport-api.preview-ym.com/${image?.graduation_cert}`)}
                      className=" right-[-10px] bottom-[-8px] w-[30px] h-[30px] flex justify-center items-center rounded-full bg-yellowAcc absolute">
            <FiEye className="text-white   " />
          </button>
                  </div>
                  
                </div>
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
      >
        Next
      </button>
    </div>
            
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          imageUrl={selectedImage}
        />
    </>
  )
}
