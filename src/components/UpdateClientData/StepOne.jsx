/* eslint-disable react/prop-types */

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Dialog,
} from "@mui/material";
import { FiEye } from "react-icons/fi";
import img from "../../assets/passForm/Group.svg";
// import HeaderFormPage from "../HeaderFormPage";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
// import CheckboxInput from "../CheckboxInput";
import HeaderFormPage from "../HeaderFormPage";
import CheckboxInput from "../CheckboxInput";

// data

export default function StepOne({
  register,
  client,
  image,
  errors,
  nextStep,
  step,
  goToStep,
}) {
  const [openDialog, setOpenDialog] = useState(false);
  // const [hovered, setHovered] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <div className="flex">
        {/* title  */}
        <div className="w-1/6 lg:mt-5 mt-20 ml-10 ">
          <img src={img} alt="" className="md:block hidden" />
        </div>

        <div className="w-3/6 mt-20 mmd:block hidden">
          <div className=" text-center lg:ml-10 flex flex-col justify-center  items-center">
            <h3 className={`font-tinos  text-[24px] leading-8 `}>
              Request to issue a regular Egyptian passport
            </h3>
            <h5 className="font-roboto font-medium text-[22px] leading-7 mt-3 ">
              (Form No. 19 Passports) is possible
            </h5>
          </div>
        </div>
      </div>

      {/* image 4*6  */}
      <div className="w-[90%] m-auto ">
        <div className="w-[158px] md:block hidden relative h-[207px] bg-fileUploud md:ms-auto md:mt-[-9rem] mt-[-4rem]   ">
          <input
            {...register("photo")}
            type="file"
            className="opacity-0 absolute bottom-0 w-[6/6] h-[92%] 10-[10%] z-50"
          />

          <img
            className="absolutew-[158px] h-[207px]"
            src={`https://epassport-api.preview-ym.com/${image?.photo}`}
          />
          <button
            type="button"
            onClick={handleOpenDialog}
            className=" right-[-10px] top-[-8px] w-[30px] h-[30px] flex justify-center items-center rounded-full bg-gray-200 absolute"
          >
            <FiEye className="  text-gray-500 " />
          </button>
        </div>
      </div>

      {/* show image */}

      {/* form1 */}
      <div className="w-[100%] mt-10 min-h-screen bg- bg-baform rounded-[30px] md:p-10 p-2 shadow-shadowEmp">
        {/* Select the active page */}
        <HeaderFormPage goToStep={goToStep} step={step} />
        <hr className="w-[100%] h-[1px] my-10 bg-hr" />

        {/* checkbox input */}
        <div className="flex justify-center items-center">
          <div className="w-[158px] md:hidden block relative h-[207px] bg-fileUploud  my-5   ">
            <input
              {...register("photo")}
              type="file"
              className=" opacity-0 absolute w-[158px] bg-red-500 h-[90%] bottom-0 z-50"
            />

            <img
              className="absolutew-[158px] h-[207px]"
              src={`https://epassport-api.preview-ym.com/${image?.photo}`}
            />
            {/* <button
              type="button"
              onClick={handleOpenDialog}
              className=" right-[0px] top-[-8px] w-[30px] h-[30px] flex justify-center items-center rounded-full absolute"
            >
              <FiEye
                // onMouseEnter={() => setHovered(true)}
                // onMouseLeave={() => setHovered(false)}
                className="text-yellowAcc  mt-3 "
              />
            </button> */}
          </div>
        </div>

        <CheckboxInput register={register} errors={errors} client={client} />

        {/* data and passport department */}
        <div className=" flex lg:flex-row flex-col justify-between">
          {/* passport department */}

          <div className="">
            <div className="md:flex md:px-10 mt-5 px-2 w-full gap-x-6 items-center">
              {/* passport department input */}
              <label className=" font-roboto  md:mr-5  text-label text-greenAcc font-semibold">
                Passports Department
              </label>
              <input
                {...register("passports_department", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                type="type"
                className="  mt-3  font-roboto text-input  md:mt-1 bg-transparent focus:outline-none md:w-[350px]  w-full h-input px-[20px]   py-[6px] border-[1px] rounded-input border-yellowAcc"
              />
            </div>

            {/* set errors passport department */}
            {errors.passports_department && (
              <span className="text-red-500 text-[15px] md:ml-[300px]">
                ***{errors.passports_department.message}
              </span>
            )}
          </div>

          {/* date */}
          <div className="gap-x-6 flex items-center font-roboto lg:mt-0 mt-3 text-[22px] text-greenAcc "></div>
        </div>
        <div className="md:px-10 md:grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 flex flex-col pt-5 text-greenAcc font-roboto text-xl font-medium">
          {/* first name input */}
          <div className="">
            <label className="block p-3 text-label font-semibold">First Name</label>
            <input
              {...register("first_name", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              type="text"
              className={` md:w-[240px] font-roboto text-input  bg-transparent focus:outline-none  w-[99%] h-input px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
            />
            {/* set first name error */}
            {errors.first_name && (
              <span className="text-red-500 text-[15px] py-5 ">
                {" "}
                ***{errors.first_name.message}
              </span>
            )}
          </div>

          {/* father name */}
          <div className="">
            <label className="block p-3 text-label font-semibold">Father name</label>
            <input
              type="text"
              {...register("second_name", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              className={` md:w-[240px] font-roboto text-input  bg-transparent w-[99%] h-input focus:outline-none  px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
            />

            {/* set secons name errors */}
            {errors.second_name && (
              <span className="text-red-500 py-5 text-[15px] ">
                ***{errors.second_name.message}
              </span>
            )}
          </div>

          {/* grandba */}
          <div className="">
            <label className="block p-3 text-label font-semibold">Grandpa</label>
            <input
              {...register("third_name", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              type="text"
              className={` md:w-[240px] bg-transparent font-roboto text-input  w-[99%] h-input focus:outline-none   px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
            />
            {/* third name errors */}
            {errors.third_name && (
              <span className="text-red-500 py-5 text-[15px]">
                ***{errors.third_name.message}
              </span>
            )}
          </div>

          {/* family name */}
          <div className="">
            <label className="block p-3 text-label font-semibold">Family name</label>
            <input
              type="text"
              {...register("last_name", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              className={` md:w-[240px] font-roboto text-input  w-[99%] h-input bg-transparent focus:outline-none  px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
            />
            {/* set last name errors */}
            {errors.last_name && (
              <span className="text-red-500 text-[15px] py-5 ">
                ***{errors.last_name.message}
              </span>
            )}
          </div>
        </div>

        {/* PresonalFormArabic  */}
        <div className="md:px-10 md:grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  flex flex-col-reverse pt-5 text-greenAcc font-roboto text-xl font-medium">
          <div className="">
            <label className="block px-10 py-3 text-right font-semibold text-label">اسم العائله</label>
            <input
              {...register("last_name_ar", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              type="text"
              className=" md:w-[240px]font-roboto text-input  w-[98%] bg-transparent h-input focus:outline-none   px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc"
            />
            {errors.last_name_ar && (
              <div className="text-[15px] text-red-500 my-5">
                ***{errors.last_name_ar.message}
              </div>
            )}
          </div>
          <div className="">
            <label className="block px-10 py-3 text-label font-semibold text-right">اسم الجد</label>
            <input
              {...register("third_name_ar", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              type="text"
              className="md:w-[240px] font-roboto text-input  bg-transparent w-[98%] h-input focus:outline-none  px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc"
            />
            {errors.third_name_ar && (
              <div className="text-[15px] text-red-500 my-5">
                ***{errors.third_name_ar.message}
              </div>
            )}
          </div>
          <div className="">
            <label className="block px-10 py-3 font-semibold text-right text-label">اسم الاب</label>
            <input
              {...register("second_name_ar", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              type="text"
              className=" md:w-[240px] bg-transparent font-roboto text-input  w-[98%] h-input px-[20px] py-[6px] focus:outline-none  rounded-input border-[1px] border-yellowAcc"
            />
            {errors.second_name_ar && (
              <div className="text-[15px] text-red-500 my-5">
                ***{errors.second_name_ar.message}
              </div>
            )}
          </div>

          <div className="">
            <label className="block px-10 py-3 font-semibold text-right text-label">الاسم الاول</label>
            <input
              {...register("first_name_ar", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              type="text"
              className=" md:w-[240px] font-roboto text-input  bg-transparent w-[98%] h-input px-[20px] py-[6px] focus:outline-none  rounded-input border-[1px] border-yellowAcc"
            />
            {errors.first_name_ar && (
              <div className="text-[15px] text-red-500 my-5">
                ***{errors.first_name_ar.message}
              </div>
            )}
          </div>
        </div>

        {/* date of birth */}
        <div className="xl:flex mt-8  py-5">
          <div className="md:flex md:px-10 pt-[15px] items-center text-greenAcc lg:w-[60%] w-full font-roboto">
            <label className="font-roboto w-[150px]  mt-[-20px] md:mb-0 my-5  mx-5 text-label py-2 font-semibold text-greenAcc">
              Date of birth
            </label>

            <div className="lg:w-[250px] w-full">
              <input
                {...register("date_of_birth", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                // value={client.date_of_birth}
                placeholder="00-00-2000"
                type="text"
                className="border-[1px]  bg-transparent focus:outline-none md:mt-0 mt-5 mb-4 text-input font-roboto px-5 border-yellowAcc xl:ml-[72px] lg:w-[350px] md:w-[90%] w-[97%] h-input rounded-input"
              />
              {/* data of birth error */}
              {errors.date_of_birth && (
                <span className="text-red-500 mt-[30px] text-[15px] md:ml-[80px] ">
                  {" "}
                  ***{errors.date_of_birth.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col md:w-[40%]   justify-around md:px-10 items-center mt-[30px] ">
            <div>
              <FormControl className="flex flex-row items-center gap-x-5">
                <FormLabel
                  id="demo-radio-buttons-group-label font-semibold "
                  className="text-greenAcc text-input font-roboto  "
                >
                  Gender
                </FormLabel>
                <RadioGroup
                 value={client.gender}
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  className="flex flex-row"
                 
                >
                  <FormControlLabel
                 
                    {...register("gender", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                
                    value="female"
                    control={<Radio style={{ color: "#F6C90E" }} />}
                    label="Female"
                  />
                  <FormControlLabel
                    {...register("gender")}
                    value="male"
                    defaultValue={client.gender}
                    control={<Radio style={{ color: "#F6C90E" }} />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            {errors.gender && (
              <span className="text-red-500 text-[15px] ml-[-50px]">
                ****{errors.gender.message}
              </span>
            )}
          </div>
        </div>

        {/* Place of birth  */}
        <div className=" lg:grid lg:grid-cols-2  py-1">
          <div className="md:px-10 mt-5  font-roboto  items-center md:text-input text-[15px] text-greenAcc">
            <label className="block my-3 mb-5 text-greenAcc font-semibold text-label font-roboto ">
              {" "}
              Place of birth (department / governorate)
            </label>
            <div className="items-center flex">
              <div className="w-full">
                <input
                  {...register("governorate", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  type="text"
                  className=" rounded-input bg-transparent font-roboto text-input  mb-3 w-full  h-input border-[1px] focus:outline-none  border-yellowAcc px-[20px] py-[6px]"
                />
              </div>
            </div>
            {errors.governorate && (
              <span className="text-red-500 text-[15px] mt-[10px] mb-[5px]">
                ***{errors.governorate.message}
              </span>
            )}
          </div>

          <div className=" my-[20px] pt-2 font-roboto md:ml-5 items-center text-input text-greenAcc">
            <label className="block  pb-6 text-label font-semibold  text-greenAcc font-roboto">
              Religion
            </label>
            {/* <div className="items-center flex"> */}
            <input
              {...register("religion", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              type="text"
              className=" rounded-input bg-transparent font-roboto text-input px-5 focus:outline-none  md:w-[93%] w-[97%] h-input border-[1px] border-yellowAcc  md:pl-[20px] py-[6px]"
            />
            {errors.religion && (
              <div className=" text-red-500 m-auto text-[15px] mt-[10px] mb-[5px]">{`***${errors.religion.message}`}</div>
            )}
          </div>
        </div>
        {/* </div> */}
        {/*  educational qualification . */}
        <div>
          <div className="flex flex-col md:px-10 my-5">
            <div>
              <label className=" text-greenAcc font-roboto font-semibold   text-label mt-2 mb-2">
                Latest educational qualification and its date
              </label>
              <input
                {...register("academic_qualification", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                className="w-full h-input mt-6 mb-10 font-roboto text-input  bg-transparent focus:outline-none  px-[20px] py-[6px] border-[1px] border-yellowAcc rounded-input "
              />
              {errors.academic_qualification && (
                <span className=" text-red-500 text-[15px] m-auto  mt-[10px] mb-[5px]">
                  ***{errors.academic_qualification.message}
                </span>
              )}
            </div>

            <div>
              <label className=" text-greenAcc font-roboto font-semibold text-label mt-5 ">
                Profession
              </label>
              <input
                {...register("job", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                className="w-full h-input font-roboto text-input  mt-5 px-[5px] bg-transparent py-[6px] focus:outline-none  border-[1px] border-yellowAcc rounded-input "
              />
              {errors.job && (
                <span className=" text-red-500 text-[15px] m-auto  mt-[10px] mb-[5px]">
                  {errors.job.message}
                </span>
              )}
            </div>

            <div className="grid md:grid-cols-2 mt-10 gap-x-16">
              <div className="py-3">
                <label className=" block text-greenAcc font-semibold font-roboto  text-label mt-2 mb-2  ">
                  Work phone
                </label>
                <input
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  type="text"
                  className=" w-full h-input mt-4font-roboto text-input px-5 bg-transparent py-[6px] focus:outline-none  border-[1px] border-yellowAcc rounded-input"
                />
                {errors.phone && (
                  <div className=" text-red-500 m-auto text-[15px] mt-[10px] mb-[5px]">{`**${errors.phone.message}`}</div>
                )}
              </div>

              <div className="py-3">
                <label className=" block text-greenAcc font-roboto font-semibold  text-label mt-2 mb-2 ">
                  Home phone
                </label>
                <input
                  {...register("home_phone", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  type="text"
                  className=" w-full h-input mt-4font-roboto text-input px-5 bg-transparent py-[6px] focus:outline-none  border-[1px] border-yellowAcc rounded-input"
                />
                {errors.home_phone && (
                  <div className=" text-red-500 m-auto text-[15px]  mt-[10px] mb-[5px]">{`**${errors.home_phone.message}`}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-10">
        <button
          className=" mb-10  h-[65px]  text-[32px] md:w-[255px]  md:text-white bg-greenAcc text-greenAcc font-tinos rounded-input"
          type="button"
          onClick={nextStep}
        >
          Next
        </button>
      </div>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={openDialog}
        onClose={handleCloseDialog}
      >
        <Button
          style={{ position: "absolute", right: "5px", top: "5px" }}
          className=""
          onClick={handleCloseDialog}
          color="primary"
        >
          <IoMdClose
            className="text-white "
            style={{
              right: "5px",
              top: "5px",
              fontSize: "20px",
              position: "absolute",
              color: "white",
            }}
          />
        </Button>

        <img
          style={{ width: "100%" }}
          src={`https://epassport-api.preview-ym.com/${image?.photo}`}
          alt="Passport Photo"
        />
      </Dialog>
    </>
  );
}
