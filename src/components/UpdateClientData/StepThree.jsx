/* eslint-disable react/prop-types */

import { FiEye } from "react-icons/fi";
// import HeaderFormPage from "../HeaderFormPage";
// import HeaderFormPage from "../HeaderFormPage"
// import Hr from "../Hr";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import HeaderFormPage from "../HeaderFormPage";
import Hr from "../Hr";

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <Dialog open={isOpen} onClose={onRequestClose} fullWidth maxWidth="sm">
      <button onClick={onRequestClose} className="w-full">
        <IoMdClose
          className="text-white ms-auto"
          style={{
            right: "5px",
            top: "5px",
            position: "absolute",
            color: "white",
          }}
        />
      </button>
      <img src={imageUrl} alt="Image" />
    </Dialog>
  );
};

export default function StepThree({
  register,
  errors,
  prevStep,
  image,
  nextStep,
  step,
  goToStep,
}) {
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
      <div className="w-[85%] shadow-shadowEmp mt-10 bg-baform h-full py-10 m-auto  rounded-[20px] justify-center ">
        <HeaderFormPage goToStep={goToStep} step={step} />

        <Hr />

        <div className="flex  md:flex-row my-3 flex-col-reverse lg:px-[90px] justify-center  items-center">
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
                  type="file"
                  className="opacity-0 w-full h-full absolute z-50"
                />
                <div className="absolute text-center ">
                  <img
                    className=" w-[200px] h-[150px] rounded-[7px]"
                    src={`https://epassport-api.preview-ym.com/${image?.national_id_photo}`}
                  />
                </div>
                <button
                  type="button"
                  onClick={() =>
                    openModal(
                      `https://epassport-api.preview-ym.com/${image?.national_id_photo}`
                    )
                  }
                  className=" right-[-10px] top-[-8px] w-[25px] h-[25px] flex justify-center items-center rounded-[5px] bg-gray-200 absolute"
                >
                  <FiEye className="text-gray-400   " />
                </button>
              </div>
            </div>
            {errors.national_id_photo && (
              <div className="text-red-500 mx-5 text-[15px] my-2">
                ***{errors.national_id_photo.message}
              </div>
            )}
          </div>

          {/* inputs */}
          <div className=" lg:w-[63%] md:w-[50%] w-[90%] md:pl-0  pl-6 ">
            {/* input1 */}
            <div className="my-5 ">
              {/* label */}
              <div className="py-2">
                <label className="text-greenAcc  font-roboto text-label font-semibold ">
                  National ID Card
                </label>
              </div>

              <input
                {...register("national_id")}
                className="rounded-input font-roboto text-input px-[20px] bg-transparent md:ml-0 focus:outline-none border-[1px] border-yellowAcc md:w-[95%] w-[90%] h-input"
              />
            </div>
            {/* input 2 */}
            <div>
              {/* label */}
              <div className="py-1">
                <label className="text-greenAcc  font-roboto text-label font-semibold ">
                  {" "}
                  university Id
                </label>
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

        {/* inputs */}

        <div className=" w-[95%] my-5  m-auto grid xl:grid-cols-3 md:grid-cols-2 2xl:pl-[200px] xl:pl-[120px] lg:pl-[100px] md:pl-[80px]  gap-8 justify-center ">
          <div>
            <div className="md:pl-5 pl-[2px]">
              <label className="block text-yellowAcc my-3 font-roboto text-inputFile font-medium px-2">
                Birth certificate
              </label>
              <div className="w-[200px] h-[150px] rounded-[7px] bg-fileUploud relative">
                <input
                  {...register("birth_cert")}
                  type="file"
                  className="opacity-0 w-full text-input h-full absolute z-50"
                />
                <div className="absolute text-center ">
                  <img
                    className=" w-[200px] h-[150px] rounded-[7px]"
                    src={`https://epassport-api.preview-ym.com/${image?.birth_cert}`}
                  />
                </div>
                <button
                  type="button"
                  onClick={() =>
                    openModal(
                      `https://epassport-api.preview-ym.com/${image?.birth_cert}`
                    )
                  }
                  className=" right-[-10px] top-[-8px] w-[25px] h-[25px] flex justify-center items-center rounded-[5px] bg-gray-200 absolute"
                >
                  <FiEye className="text-white   " />
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="md:pl-5 pl-[2px]">
              <label className="block text-yellowAcc my-3 font-roboto text-inputFile font-medium px-2">
                Military situation
              </label>
              <div className="w-[200px] h-[150px] rounded-[7px] bg-fileUploud relative">
                <input
                  {...register("army_cert")}
                  type="file"
                  className="opacity-0 w-full h-full absolute z-50"
                />

<div className="absolute text-center ">
                  <img
                    className=" w-[200px] h-[150px] rounded-[7px]"
                    src={`https://epassport-api.preview-ym.com/${image?.army_cert}`}
                  />
                </div>
                <button
                  type="button"
                  onClick={() =>
                    openModal(
                      `https://epassport-api.preview-ym.com/${image?.army_cert}`
                    )
                  }
                  className=" right-[-10px] top-[-8px] w-[25px] h-[25px] flex justify-center items-center rounded-[5px] bg-gray-200 absolute"
                >
                  <FiEye className="text-white   " />
                </button>
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
              <div className="w-[200px] h-[150px] rounded-[7px] bg-fileUploud relative">
                <input
                  {...register("graduation_cert")}
                  type="file"
                  className="opacity-0 w-full h-full absolute z-50"
                />

                <div className="absolute text-center ">
                  <img
                    className=" w-[200px] h-[150px] rounded-[7px]"
                    src={`https://epassport-api.preview-ym.com/${image?.graduation_cert}`}
                  />
                </div>
                <button
                  type="button"
                  onClick={() =>
                    openModal(
                      `https://epassport-api.preview-ym.com/${image?.graduation_cert}`
                    )
                  }
                  className=" right-[-10px] top-[-8px] w-[25px] h-[25px] flex justify-center items-center rounded-[5px] bg-gray-200 absolute"
                >
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
  );
}
