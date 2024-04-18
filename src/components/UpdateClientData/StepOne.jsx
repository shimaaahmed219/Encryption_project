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
          <img src={img} alt="" />
        </div>

        <div className="w-3/6 mt-20 mmd:block hidden">
          <div className=" text-center lg:ml-10 flex flex-col justify-center  items-center">
            <h3 className={`font-tinos font-bold text-[26px] leading-8 `}>
              Request to issue a regular Egyptian passport
            </h3>
            <h5 className="font-roboto font-medium text-[24px] leading-7 mt-3 ">
              (Form No. 19 Passports) is possible
            </h5>
          </div>
        </div>
      </div>

      {/* image 4*6  */}
      <div className="w-[95%] ">
        <div className="w-[158px] relative h-[207px] bg-fileUploud ms-auto mt-[-9rem]   ">
          <input
            {...register("photo")}
            type="file"
            className="opacity-0 absolute w-[6/6] h-[90%] z-50"
          />

          <img
            className="absolutew-[158px] h-[207px]"
            src={`https://epassport-api.preview-ym.com/${image?.photo}`}
          />
          <button
            type="button"
            onClick={handleOpenDialog}
            className=" right-[-10px] top-[-8px] w-[30px] h-[30px] flex justify-center items-center rounded-full bg-yellowAcc absolute"
          >
            <FiEye className="text-white   " />
          </button>
        </div>
      </div>

      {/* show image */}
    
      {/* form1 */}
      <div className="w-[100%] mt-10 min-h-screen bg-white rounded-[30px] p-10 shadow-shadowEmp">
        {/* Select the active page */}
        <HeaderFormPage goToStep={goToStep} step={step} />
        <hr className="w-[100%] h-[1px] my-10 bg-hr" />

        {/* checkbox input */}
        <CheckboxInput register={register} errors={errors} client={client} />

        {/* data and passport department */}
        <div className="px-10 flex lg:flex-row flex-col justify-between">
          {/* passport department */}

          <div className="">
            <div className="flex gap-x-6 items-center">
              {/* passport department input */}
              <label className=" font-roboto mr-5 text-[22px] text-greenAcc font-semibold">
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
                className=" font-roboto text-[20px] focus:outline-none w-[300px] h-[50px] px-[20px]   py-[6px] border-[1px] rounded-input border-yellowAcc"
              />
            </div>

            {/* set errors passport department */}
            {errors.passports_department && (
              <span className="text-red-500 text-[20px] ml-[270px]">
                ***{errors.passports_department.message}
              </span>
            )}
          </div>

          {/* date */}
          <div className="gap-x-6 flex items-center font-roboto lg:mt-0 mt-3 text-[22px] text-greenAcc ">
            <label>The date</label>
            <input
              type="text"
              className="date-input focus:outline-none "
              value=" .... /   ..../....   22__"
            />
          </div>
        </div>

        {/* presonal data */}
        <div className="px-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-5 text-greenAcc font-roboto text-xl font-medium">
          {/* first name input */}
          <div className="">
            <label className="block p-3">First Name</label>
            <input
              {...register("first_name", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              type="text"
              className={` md:w-[240px] w-[90%] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
            />
            {/* set first name error */}
            {errors.first_name && (
              <span className="text-red-500 py-5 ">
                {" "}
                ***{errors.first_name.message}
              </span>
            )}
          </div>

          {/* father name */}
          <div className="">
            <label className="block p-3">Father name</label>
            <input
              type="text"
              {...register("second_name", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              className={` md:w-[240px] w-[90%] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
            />

            {/* set secons name errors */}
            {errors.second_name && (
              <span className="text-red-500 py-5 ">
                ***{errors.second_name.message}
              </span>
            )}
          </div>

          {/* grandba */}
          <div className="">
            <label className="block p-3">Grandpa</label>
            <input
              {...register("third_name", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              type="text"
              className={` md:w-[240px] w-[90%] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
            />
            {/* third name errors */}
            {errors.third_name && (
              <span className="text-red-500 py-5 ">
                ***{errors.third_name.message}
              </span>
            )}
          </div>

          {/* family name */}
          <div className="">
            <label className="block p-3">Family name</label>
            <input
              type="text"
              {...register("last_name", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              className={` md:w-[240px] w-[90%] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
            />
            {/* set last name errors */}
            {errors.last_name && (
              <span className="text-red-500 py-5 ">
                ***{errors.last_name.message}
              </span>
            )}
          </div>
        </div>

        {/* PresonalFormArabic  */}
        <div className="px-10 grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 pt-3 text-greenAcc font-roboto text-xl font-medium ">
          <div className="">
            <label className="block px-10 py-3 text-right">اسم العائله</label>
            <input
              {...register("last_name_ar", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              type="text"
              className=" w-[240px] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc"
            />
            {errors.last_name_ar && (
              <div className="text-[20px] text-red-500 my-5">
                ***{errors.last_name_ar.message}
              </div>
            )}
          </div>
          <div className="">
            <label className="block px-10 py-3 text-right">اسم الجد</label>
            <input
              {...register("third_name_ar", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              type="text"
              className=" w-[240px] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc"
            />
            {errors.third_name_ar && (
              <div className="text-[20px] text-red-500 my-5">
                ***{errors.third_name_ar.message}
              </div>
            )}
          </div>
          <div className="">
            <label className="block px-10 py-3 text-right ">اسم الاب</label>
            <input
              {...register("second_name_ar", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              type="text"
              className=" w-[240px] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc"
            />
            {errors.second_name_ar && (
              <div className="text-[20px] text-red-500 my-5">
                ***{errors.second_name_ar.message}
              </div>
            )}
          </div>

          <div className="">
            <label className="block px-10 py-3 text-right">الاسم الاول</label>
            <input
              {...register("first_name_ar", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              type="text"
              className=" w-[240px] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc"
            />
            {errors.first_name_ar && (
              <div className="text-[20px] text-red-500 my-5">
                ***{errors.first_name_ar.message}
              </div>
            )}
          </div>
        </div>

        {/* date of birth */}
        <div className="xl:flex  py-5">
          <div className="md:flex px-10 pt-[15px] items-center text-greenAcc lg:w-[60%] w-full font-roboto">
            <label className="font-roboto w-[150px] mx-5 text-[22px] font-semibold text-greenAcc">
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
                placeholder="00-00-2000"
                type="text"
                className="border-[1px] text-[20px] font-roboto px-5 border-yellowAcc lg:w-[250px] w-[90%] h-[50px] rounded-input"
              />
              {/* data of birth error */}
              {errors.date_of_birth && (
                <span className="text-red-500 my-5 text-[20px] ">
                  {" "}
                  ***{errors.date_of_birth.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col w-[40%]  justify-around px-10 items-center mt-[30px] ">
            <div>
              <FormControl className="flex flex-row items-center gap-x-5">
                <FormLabel
                  id="demo-radio-buttons-group-label "
                  className="text-greenAcc text-[20px] font-roboto font-bold "
                >
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  className="flex flex-row"
                  value={client.gender}
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
                    control={<Radio style={{ color: "#F6C90E" }} />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            {errors.gender && (
              <span className="text-red-500 text-[20px] ml-[-50px]">
                ****{errors.gender.message}
              </span>
            )}
          </div>
        </div>

        {/* Place of birth  */}
        <div className=" lg:flex">
          <div className="px-10 mt-5  font-roboto  items-center text-[20px] text-greenAcc">
            <label className="block my-3 text-greenAcc font-roboto font-bold">
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
                  className=" rounded-input lg:w-[320px] w-full  h-50px border-[1px] border-yellowAcc px-[20px] py-[6px]"
                />
              </div>
            </div>
            {errors.governorate && (
              <span className="text-red-500  mt-[10px] mb-[5px]">
                ***{errors.governorate.message}
              </span>
            )}
          </div>
          <div className=" my-[20px]  font-roboto ml-5 items-center text-[20px] text-greenAcc">
            <label className="block my-[12px] text-greenAcc font-roboto font-bold">
              {" "}
              Religion
            </label>
            <div className="items-center flex">
              <input
                {...register("religion", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                type="text"
                className=" rounded-input  w-[276px] h-50px border-[1px] border-yellowAcc  pl-[20px] py-[6px]"
              />
            </div>
            {errors.religion && (
              <div className=" text-red-500 m-auto  mt-[10px] mb-[5px]">{`***${errors.religion.message}`}</div>
            )}
          </div>
        </div>
        {/*  educational qualification . */}
        <div>
          <div className="flex flex-col px-10">
            <div>
              <label className=" text-greenAcc font-roboto font-bold text-[20px] mt-2 mb-2">
                Latest educational qualification and its date
              </label>
              <input
                {...register("academic_qualification", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                className="  mt-3 mb-5 font-roboto text-[20px] w-full h-[50px] px-[20px] py-[6px] border-[1px] border-yellowAcc rounded-input "
              />
              {errors.academic_qualification && (
                <span className=" text-red-500 text-[20px] m-auto  mt-[10px] mb-[5px]">
                  ***{errors.academic_qualification.message}
                </span>
              )}
            </div>

            <div>
              <label className="  text-greenAcc font-roboto font-bold text-[20px] mt-5 ">
                Profession
              </label>
              <input
                {...register("job", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                className=" font-roboto mt-3 text-[20px] w-full h-[50px] px-[20px] py-[6px] border-[1px] border-yellowAcc rounded-input "
              />
              {errors.job && (
                <span className=" text-red-500 text-[20px] m-auto  mt-[10px] mb-[5px]">
                  {errors.job.message}
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-x-16">
              <div className="py-3">
                <label className=" block text-greenAcc font-roboto font-bold text-[20px] mt-2 mb-2  ">
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
                  className="font-roboto text-[20px]  w-full h-[50px] px-[20px] py-[6px] border-[1px] border-yellowAcc rounded-input"
                />
                {errors.phone && (
                  <div className=" text-red-500 m-auto  mt-[10px] mb-[5px]">{`**${errors.phone.message}`}</div>
                )}
              </div>

              <div className="py-3">
                <label className=" block text-greenAcc font-roboto mb-2 font-bold text-[20px] mt-2 mb-2 ">
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
                  className=" font-roboto text-[20px] w-full h-[50px] px-[20px] py-[6px] border-[1px] border-yellowAcc rounded-input"
                />
                {errors.home_phone && (
                  <div className=" text-red-500 m-auto  mt-[10px] mb-[5px]">{`**${errors.home_phone.message}`}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-10">
        <button
          className="w-[255px] mb-10  h-[65px] bg-greenAcc text-[32px] text-white font-tinos rounded-input"
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
           <Button style={{position:"absolute",right:"5px",top:"5px" }} className="" onClick={handleCloseDialog} color="primary">
          <IoMdClose className="text-white "   style={{right:"5px",top:"5px",fontSize:"20px",position:"absolute",color:"white"}} />
          </Button>
       
          <img
          style={{width:"100%"}}
            src={`https://epassport-api.preview-ym.com/${image?.photo}`}
            alt="Passport Photo"
          />
       
      
       
       
      </Dialog>
    </>
  );
}
