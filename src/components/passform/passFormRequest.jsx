import { useState } from "react";
import {useForm } from "react-hook-form";
import img from "../../assets/passForm/Group.svg";
import uploadImg from "../../assets/passForm/upload.svg";

import upload from "../../assets/passForm/uploadfile.svg";

import Hr from "../Hr";
import axios from "axios";
import { url } from "../URL";
import {
  FormControlLabel,
  Box,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import HeaderFormPage from "../HeaderFormPage";
import CheckboxInput from "../CheckboxInput";

export default function PassFormRequest() {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm({ mode: "all" });

  // next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // prev step
  const prevStep = () => {
    setStep(step - 1);
  };

  // goto page from header
  const goToStep = (stepNumber) => {
    setStep(stepNumber);
  };

  // fatching data
  const onsubmit = (data) => {
    console.log(data);

    // add data in form data
    const formdata = new FormData();
    formdata.append("first_name", data.first_name);
    formdata.append("second_name", data.second_name);
    formdata.append("third_name", data.third_name);
    formdata.append("last_name", data.last_name);
    formdata.append("first_name_ar", data.first_name_ar);
    formdata.append("second_name_ar", data.second_name_ar);
    formdata.append("third_name_ar", data.third_name_ar);
    formdata.append("last_name_ar", data.last_name_ar);
    formdata.append("type", data.type);
    formdata.append("passports_department", data.passports_department);
    formdata.append("national_id", data.national_id);
    formdata.append("national_id_photo", data.national_id_photo[0]);
    formdata.append("date_of_birth", data.date_of_birth);
    formdata.append("birth_cert", data.birth_cert[0]);
    formdata.append("photo", data.photo[0]);
    formdata.append("job", data.job);
    formdata.append("phone", data.phone);
    formdata.append("home_phone", data.home_phone);
    formdata.append("academic_qualification", data.academic_qualification);
    formdata.append("graduation_cert", data.graduation_cert[0]);
    formdata.append("university_id", data.university_id);
    formdata.append("marital_status", data.marital_status);
    formdata.append("address", data.address);
    formdata.append("governorate", data.governorate);
    formdata.append("gender", data.gender);
    formdata.append("husband_name", data.husband_name);
    formdata.append("religion", data.religion);
    formdata.append("age", data.age);
    axios
      .post(`${url}/client`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
           Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        {/* page1 */}
        {step >= 1 && (
          <div
            className={` ${
              step === 1 ? "block" : "hidden"
            } w-[88%] m-auto scroll-px-20`}
          >
            <div className="flex">
              {/* title  */}
              <div className="w-1/6 lg:mt-5 mt-20 ml-10 md:block hidden ">
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
            <div className="w-[95%]  ">
              <div className="w-[158px] h-[207px] bg-fileUploud md:ms-auto md:ml[0px]     md:mt-[-9rem]   ">
                <input
                  {...register("photo", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  type="file"
                  className="opacity-0 w-[6/6] h-[100%] z-50"
                />

                <img
                  src={uploadImg}
                  className="absolute mt-[-170px] ml-[55px]"
                />

                <h6
                  className={`font-tions font-bold  text-thin text-greenAcc text-[18px] text-center absolute mt-[-7rem] ml-[1rem]`}
                >
                  Upload a photo
                </h6>
                <h6
                  className={`font-tions font-bold text-thin text-greenAcc uppercase text-[24px] text-center absolute mt-[-5.25rem] ml-[2.5rem]`}
                >
                  4*6 cm
                </h6>
                {/* error messge from presonal image */}
                {errors.photo && (
                  <span className="text-red-500">{errors.photo?.message}</span>
                )}
              </div>
            </div>
            {/* form1 */}
            <div className="w-[100%] mt-10 min-h-screen bg-white rounded-[30px] p-10 shadow-shadowEmp">
              {/* Select the active page */}
              <HeaderFormPage goToStep={goToStep} step={step} />
              <hr className="w-[100%] h-[1px] my-10 bg-hr" />

              {/* checkbox input */}
              <CheckboxInput register={register} errors={errors} />

              {/* data and passport department */}
              <div className="md:px-10 flex lg:flex-row flex-col justify-between">
                {/* passport department */}

                <div className="">
                  <div className="md:flex md:gap-x-6 items-center">
                    {/* passport department input */}
                    <label className=" font-roboto mr-5 my-1  md:text-[22px] text-[15px] text-greenAcc font-semibold">
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
                      className=" my-1 focus:outline-none md:w-[300px] h-[50px] px-[20px]   py-[6px] border-[1px] rounded-input border-yellowAcc"
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
                
                <div className="gap-x-6 flex  items-center font-roboto lg:mt-0 mt-3 text-[22px] text-greenAcc ">
                  <label className="md:block hidden">The date</label>
                  <input
                    type="text"
                    className="date-input focus:outline-none md:block hidden "
                    value=" .... /   ..../....   22__"
                    
                  />
                </div>
              </div>

              {/* presonal data */}
              <div className="md:px-10 md:grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 flex flex-col pt-5 text-greenAcc font-roboto text-xl font-medium">
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
                    className={` md:w-[240px] w-[99%] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
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
                    className={` md:w-[240px]  w-[99%] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
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
                    className={` md:w-[240px]  w-[99%] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
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
                    className={` md:w-[240px]  w-[99%] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
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
              <div className="md:px-10 md:grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  flex flex-col-reverse pt-5 text-greenAcc font-roboto text-xl font-medium" >
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
        {errors.last_name_ar&&<div className="text-[20px] text-red-500 my-5">***{errors.last_name_ar.message}</div>}
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
         {errors.third_name_ar&&<div  className="text-[20px] text-red-500 my-5">***{errors.third_name_ar.message}</div>}
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
         {errors.second_name_ar&&<div  className="text-[20px] text-red-500 my-5">***{errors.second_name_ar.message}</div>}
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
         {errors.first_name_ar&&<div className="text-[20px] text-red-500 my-5">***{errors.first_name_ar.message}</div>}
      </div>
    </div>

              {/* date of birth */}
              <div className="xl:flex  py-5">
                <div className="md:flex md:px-10 pt-[15px] items-center text-greenAcc lg:w-[60%] w-full font-roboto">
                  <label className="font-roboto w-[150px] mx-5 md:text-[22px] text-[17px] py-2 font-semibold text-greenAcc">
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
                      className="border-[1px] text-[20px] font-roboto px-5 border-yellowAcc lg:w-[250px] md:w-[90%] w-[97%] h-[50px] rounded-input"
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

                <div className="flex flex-col md:w-[40%]   justify-around md:px-10 items-center mt-[30px] ">
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
                <div className="md:px-10 mt-5  font-roboto  items-center md:text-[20px] text-[15px] text-greenAcc">
                  <label className="block my-3 text-greenAcc font-roboto font-medium">
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
                        className=" rounded-input lg:w-[320px] w-full  h-50px border-[1px] border-yellowAcc md:px-[20px] py-[6px]"
                      />
                    </div>
                  </div>
                  {errors.governorate && (
                    <span className="text-red-500  mt-[10px] mb-[5px]">
                      ***{errors.governorate.message}
                    </span>
                  )}
                </div>
                <div className=" my-[20px]  font-roboto md:ml-5 items-center text-[20px] text-greenAcc">
                  <label className="block my-[12px] text-greenAcc font-roboto font-medium">
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
                      className=" rounded-input  md:w-[276px] h-50px border-[1px] border-yellowAcc  md:pl-[20px] py-[6px]"
                    />
                  </div>
                  {errors.religion && (
                    <div className=" text-red-500 m-auto  mt-[10px] mb-[5px]">{`***${errors.religion.message}`}</div>
                  )}
                </div>
              </div>
              {/*  educational qualification . */}
              <div>
                <div className="flex flex-col md:px-10">
                  <div>
                    <label className=" text-greenAcc font-roboto font-medium text-[20px] mt-2 mb-2">
                      Latest educational qualification and its date
                    </label>
                    <input
                      {...register("academic_qualification", {
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                      })}
                      className="w-full h-[50px] px-[20px] py-[6px] border-[1px] border-yellowAcc rounded-input "
                    />
                    {errors.academic_qualification && (
                      <span className=" text-red-500 text-[20px] m-auto  mt-[10px] mb-[5px]">
                        ***{errors.academic_qualification.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className=" text-greenAcc font-roboto font-medium text-[20px] mt-5 ">
                      Profession
                    </label>
                    <input
                      {...register("job", {
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                      })}
                      className="w-full h-[50px] px-[20px] py-[6px] border-[1px] border-yellowAcc rounded-input "
                    />
                    {errors.job && (
                      <span className=" text-red-500 text-[20px] m-auto  mt-[10px] mb-[5px]">
                        {errors.job.message}
                      </span>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-16">
                    <div className="py-3">
                      <label className=" block text-greenAcc font-roboto font-medium text-[20px] mt-2 mb-2  ">
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
                        className=" w-full h-[50px] px-[20px] py-[6px] border-[1px] border-yellowAcc rounded-input"
                      />
                      {errors.phone && (
                        <div className=" text-red-500 m-auto  mt-[10px] mb-[5px]">{`**${errors.phone.message}`}</div>
                      )}
                    </div>

                    <div className="py-3">
                      <label className=" block text-greenAcc font-roboto font-medium text-[20px] mt-2 mb-2 ">
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
                        className=" w-full h-[50px] px-[20px] py-[6px] border-[1px] border-yellowAcc rounded-input"
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
          </div>
        )}

        {/* steep 2 */}

        {step >= 2 && (
          <div
            className={`bg-bg min-h-screen w-full ${
              step === 2 ? "block" : "hidden"
            } `}
          >
            <div className="bg-baform flex flex-col   shadow-shadowEmp w-6/6 pl-6 pt-10 pb-[55px] mx-20 min-h-[520px] rounded-[20px] m-auto my-10">
              <HeaderFormPage goToStep={goToStep} step={step} />
              <hr className="h-[1px] w-full bg-slate-600 my-8" />
              <Box className="">
                <FormControl className="flex flex-row items-center gap-x-5">
                  <FormLabel
                    id="demo-radio-buttons-group-label "
                    className="text-greenAcc text-[20px] font-roboto font-bold "
                  ></FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-5/6  m-auto  justify-around lg:gap-x-[13rem] font-medium  font-roboto text-xl pt-7 pb-5  "
                  >
                    <FormControlLabel
                      {...register("marital_status", {
                        required: {
                          value: true,
                          message: "please choose your maryial status",
                        },
                      })}
                      value={"Under 16 years old"}
                      control={<Radio style={{ color: "#F6C90E" }} />}
                      label="Under 16 years old"
                    />
                    <FormControlLabel
                      {...register("marital_status")}
                      value={"Married"}
                      control={<Radio style={{ color: "#F6C90E" }} />}
                      label="Married"
                    />
                    <FormControlLabel
                      {...register("marital_status")}
                      value={"unMarried"}
                      control={<Radio style={{ color: "#F6C90E" }} />}
                      label="unMarried"
                    />
                  </RadioGroup>
                </FormControl>
                {errors.marital_status && (
                  <div className=" text-red-500 mt-[-30px]  m-auto ml-[100px] text-[20px]">{`**${errors.marital_status.message}`}</div>
                )}
              </Box>

              <div className="px-[100px]">
                {/* husband name */}
                <label className="text-greenAcc font-roboto my-3 text-xl font-medium block">
                  Husband name /
                </label>
                <input
                  {...register("husband_name")}
                  type="text"
                  className=" focus:outline-none px-5 text-lg text-hreenAcc rounded-input bg-transparent w-full h-[50px] border-[1px] border-yellowAcc"
                />
                <label className="text-greenAcc font-roboto mb-3 mt-7 text-xl font-medium block">
                  Nationality /
                </label>
                <input
                  type="text"
                  className=" focus:outline-none px-5 rounded-input  text-lg text-hreenAcc w-full bg-transparent h-[50px] border-[1px] border-yellowAcc"
                />
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
                type="button"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* steep 3 */}

        {step >= 3 && (
          <div className={`${step === 3 ? "block" : "hidden"}`}>
            <div className="w-[85%] shadow-shadowEmp mt-10 bg-baform min-h-[778px] m-auto py-7  rounded-[20px] justify-center ">
              <HeaderFormPage goToStep={goToStep} step={step} />
              <Hr />

              {/* inputs */}

              <div className="py-10">
                <div className="w-6/5 m-auto flex px-5 items-center">
                  <label className="text-greenAcc mx-3 font-roboto text-[22px] font-medium ">
                    National ID Card
                  </label>
                  <input
                    {...register("national_id", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    className="rounded-input bg-transparent focus:outline-none border-[1px] border-yellowAcc w-[83%] h-[50px]"
                  />
                </div>
                {errors.national_id && (
                  <div className="text-red-500 text-[20px] ml-[200px]">
                    ***{errors.national_id.message}
                  </div>
                )}

                <div className="w-5/6 px-5 mx-5 flex items-center my-10">
                  <label className="text-greenAcc  font-roboto text-[22px] font-medium capitalize ">
                    university Id
                  </label>
                  <input
                    {...register("university_id")}
                    type="text"
                    className="rounded-input  bg-transparent m-auto focus:outline-none border-[1px] border-yellowAcc w-[65%] h-[50px]"
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
                        {...register("birth_cert", {
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                        })}
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
                    </div>
                    {errors.birth_cert && (
                      <span className="text-red-500 text-[20px] my-10">
                        ***{errors.birth_cert.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <div className="pl-5">
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
                    </div>
                  </div>
                  {errors.national_id_photo && (
                    <span className="text-red-500 mx-5 text-[20px] my-10">
                      ***{errors.national_id_photo.message}
                    </span>
                  )}
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
                        className="opacity-0 w-full h-full absolute z-50"
                      />
                      <div className="absolute text-center ">
                        <img src={upload} className="mt-[40px] ml-[79px]" />
                        <div className="mt-[30px] ml-[60px] text-[18px] font-tinos text-greenAcc">
                          <h3>Upload a photo</h3>
                          <h3>4*6 CM</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* date */}

              <div className="w-5/6 m-auto mt-10">
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
                className="w-[255px] mb-10  h-[65px] bg-greenAcc text-[32px] text-white font-tinos rounded-input"
                type="button"
                onClick={prevStep}
              >
                back
              </button>
              <button
                className="w-[255px] mb-10  h-[65px] bg-greenAcc text-[32px] text-white font-tinos rounded-input"
                type="button"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {/* steep  4 */}
        {step >= 4 && (
          <div className={``}>
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
                    className="border-[1px]  border-yellowAcc bg-transparent md:w-[330px] rounded-input h-[50px]"
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
                    className="border-[1px] border-yellowAcc bg-transparent md:w-[330px] rounded-input h-[50px]"
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
          </div>
        )}
        {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
      </form>
    </div>
  );
}
