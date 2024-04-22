/* eslint-disable react/prop-types */

import CheckboxInput from "../CheckboxInput";
import HeaderFormPage from "../HeaderFormPage";

import {
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import HeaderStepOne from "./HeaderStepOne";
import PresonalnputsName from "./PresonalnputsName";
import PresonalInputAr from "./PresonalInputAr";
export default function FirstStep({
  register,
  errors,
  nextStep,
  goToStep,
  step,
  handleImageChange,
  selectedImage,
}) {
  return (
    <div
      className={` ${
        step === 1 ? "block" : "hidden"
      } w-[90%] m-auto scroll-px-20`}
    >
      <form>
        {/* client photo */}
        <HeaderStepOne
          errors={errors}
          register={register}
          handleImageChange={handleImageChange}
          selectedImage={selectedImage}
        />
        {/* form body */}
        <div className="w-[95%] m-auto min-h-screen my-10 px-2 py-5 bg-baform rounded-[30px]">
          <HeaderFormPage goToStep={goToStep} step={step} />
          <hr className="w-[100%] h-[1px] my-10 bg-hr" />
          <div className=" md:px-8">
            <CheckboxInput register={register} errors={errors} />
{/* 
            <div className="w-[158px] m-auto mb-20 h-[207px] md:hidden block relative mt-10 bg-fileUploud  md:ml[0px]        ">
        <input
          {...register("photo", {
            required: {
              value: true,
              message: "This field is required",
            },
          })}
          onChange={(e) => handleImageChange(e, "photo")}
          type="file"
          className="opacity-0 w-[158px] absolute  h-[100%] z-50"
        />
        {selectedImage["photo"] && (
          <img
            src={selectedImage["photo"]}
            alt="Selected"
            className="w-full  z-40 absolute h-full object-cover "
          />
        )}
        <img src={uploadImg} className="absolute mt-[50px] ml-[55px]" />

        <h6
          className={`font-tions font-bold  text-thin text-greenAcc text-[18px] w-full text-center absolute mt-[100px] `}
        >
          Upload a photo
        </h6>
        <h6
          className={`font-tions font-bold text-thin text-greenAcc uppercase text-[24px] w-full text-center absolute mt-[120px] `}
        >
          4*6 cm
        </h6>
        {/* error messge from presonal image */}
        {/* {errors.photo && ( */}
        {/* //   <span className="text-red-500 text-[15px] ml-[-5px] absolute mt-[210px]">
        //     ***{errors.photo?.message}
        //   </span>
        // )} */}
      {/* </div> */} 
            {/* passport department input */}
            <div className="md:px-10 px-3 ">
              {/* passport department */}

              <div className="">
                <div className="md:flex md:gap-x-6 items-center">
                  {/* passport department input */}
                  <label className=" font-roboto mr-5 md:my-1  mb-[80px]  md:text-[22px] text-[15px] text-greenAcc md:font-semibold">
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
                    className=" my-1 bg-transparent focus:outline-none md:w-[350px]  w-full h-[50px] px-[20px]   py-[6px] border-[1px] rounded-input border-yellowAcc"
                  />
                </div>

                {/* set errors passport department */}
                {errors.passports_department && (
                  <span className="text-red-500 text-[15px] md:ml-[270px]">
                    ***{errors.passports_department.message}
                  </span>
                )}
              </div>
            </div>
            <PresonalnputsName register={register} errors={errors} />
            <PresonalInputAr register={register} errors={errors} />
            <div className="xl:flex mt-8  py-5">
              <div className="md:flex md:px-10 pt-[15px] items-center text-greenAcc lg:w-[60%] w-full font-roboto">
                <label className="font-roboto w-[150px] mt-[-20px] md:mb-0 my-5  mx-5 md:text-[22px] text-[17px] py-2 font-semibold text-greenAcc">
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
                    className="border-[1px] bg-transparent focus:outline-none md:mt-0 mt-5 mb-4 text-[20px] font-roboto px-5 border-yellowAcc xl:ml-[72px] lg:w-[350px] md:w-[90%] w-[97%] h-[50px] rounded-input"
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
                  <span className="text-red-500 text-[15px] ml-[-50px]">
                    ****{errors.gender.message}
                  </span>
                )}
              </div>
            </div>

            {/* Place of birth  */}
            <div className=" lg:grid lg:grid-cols-2  py-1">
              <div className="md:px-10 mt-5  font-roboto  items-center md:text-[20px] text-[15px] text-greenAcc">
                <label className="block my-3 mb-5 text-greenAcc font-roboto font-bold">
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
                      className=" rounded-input font-roboto text-[20px]  bg-transparent  mb-3 w-full  h-[50px] border-[1px] focus:outline-none  border-yellowAcc px-[20px] py-[6px]"
                    />
                  </div>
                </div>
                {errors.governorate && (
                  <span className="text-red-500 text-[15px] mt-[10px] mb-[5px]">
                    ***{errors.governorate.message}
                  </span>
                )}
              </div>

              <div className=" my-[20px] pt-2 font-roboto md:ml-5 items-center text-[20px] text-greenAcc">
                <label className="block  pb-6 font-bold text-greenAcc font-roboto">
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
                  className=" rounded-input font-roboto text-[20px] px-[20px] bg-transparent focus:outline-none  md:w-[93%] w-[97%] h-[50px] border-[1px] border-yellowAcc  md:pl-[20px] py-[6px]"
                />
                {errors.religion && (
                  <div className=" text-red-500 m-auto text-[15px] mt-[10px] mb-[5px]">{`***${errors.religion.message}`}</div>
                )}
              </div>
            </div>
            <div>
              <div className="flex flex-col md:px-10 my-5">
                <div>
                  <label className=" text-greenAcc font-roboto  font-bold text-[20px] mt-2 mb-2">
                    Latest educational qualification and its date
                  </label>
                  <input
                    {...register("academic_qualification", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    className="w-full h-[50px] font-roboto text-[20px] px-[20px] mt-6 mb-10  bg-transparent focus:outline-none   py-[6px] border-[1px] border-yellowAcc rounded-input "
                  />
                  {errors.academic_qualification && (
                    <span className=" text-red-500 text-[15px] m-auto  mt-[10px] mb-[5px]">
                      ***{errors.academic_qualification.message}
                    </span>
                  )}
                </div>
                <div>
                  <label className=" text-greenAcc font-roboto font-bold text-[20px] mt-5 ">
                    Profession
                  </label>
                  <input
                    {...register("job", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    className="w-full font-roboto text-[20px] px-[20px] h-[50px] mt-5  bg-transparent py-[6px] focus:outline-none  border-[1px] border-yellowAcc rounded-input "
                  />
                  {errors.job && (
                    <span className=" text-red-500 text-[15px] m-auto  mt-[10px] mb-[5px]">
                      {errors.job.message}
                    </span>
                  )}
                </div>

                <div className="grid md:grid-cols-2 mt-10 gap-x-16">
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
                      className=" w-full h-[50px] font-roboto text-[20px] px-[20px] mt-4  bg-transparent py-[6px] focus:outline-none  border-[1px] border-yellowAcc rounded-input"
                    />
                    {errors.phone && (
                      <div className=" text-red-500 m-auto text-[15px] mt-[10px] mb-[5px]">{`**${errors.phone.message}`}</div>
                    )}
                  </div>

                  <div className="py-3">
                    <label className=" block text-greenAcc font-roboto font-bold text-[20px] mt-2 mb-2 ">
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
                      className=" font-roboto text-[20px] px-[20px] w-full h-[50px]  bg-transparent mt-4 py-[6px] focus:outline-none  border-[1px] border-yellowAcc rounded-input"
                    />
                    {errors.home_phone && (
                      <div className=" text-red-500 m-auto text-[15px]  mt-[10px] mb-[5px]">{`**${errors.home_phone.message}`}</div>
                    )}
                  </div>
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
      </form>
    </div>
  );
}
