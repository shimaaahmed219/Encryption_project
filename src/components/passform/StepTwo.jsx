/* eslint-disable react/prop-types */

import {
  FormControlLabel,
  Box,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import HeaderFormPage from "../HeaderFormPage";
import { useState, useEffect } from "react";

export default function StepTwo({
  nextStep,
  register,
  prevStep,
  step,
  goToStep,
  errors,
 watch,
}) {
  

  const [isStepValid2 ,setIsStepValid2]=useState(false)  
  const watchAllFields = watch()

  useEffect(()=>{
    const isFormValid =
    watchAllFields.marital_status !==null
    setIsStepValid2(isFormValid);
  },[watchAllFields])
  // console.log(isStepValid2,watchAllFields);
  return (
    <div
      className={`bg-bg min-h-screen w-full  ${
        step === 2 ? "block" : "hidden"
      } `}
    >
      <div className="bg-baform flex flex-col     shadow-shadowEmp   pt-6 pb-[55px] md:mx-[80px] mx-5 min-h-[520px] rounded-[20px] m-auto my-10">
        <HeaderFormPage goToStep={goToStep} step={step} />
        <hr className="h-[1px] w-full bg-slate-600 mt-6" />
        <Box className="my-5">
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
            <div className=" text-red-500 mb-5 mt-[-14px] text-[15px] m-auto md:ml-[100px] ">{`**${errors.marital_status.message}`}</div>
          )}
        </Box>

        <div className="  md:pr-0 mt-[-10px] pr-[20px] md:mx-20">
          {/* husband name */}
          <label className="text-greenAcc  font-roboto my-3 text-label font-bold block">
            Husband name /
          </label>
          <input
            {...register("husband_name")}
            type="text"
            className=" focus:outline-none font-roboto text-input  px-5 text-lg text-greenAcc rounded-input bg-transparent w-full h-[50px] border-[1px] border-yellowAcc"
          />
          <label className="text-greenAcc font-roboto mb-3  ms-2 mt-7 text-label font-bold block">
            Nationality
          </label>
          <input
            value="Eegyptian"
            type="text"
            className=" focus:outline-none  px-5 rounded-input font-roboto  text-hreenAcc w-full bg-transparent h-[50px] border-[1px] border-yellowAcc"
          />
        </div>
      </div>
      <div className="my-10 m-auto mt-[50px] flex w-[80%] justify-around">
        <button
          className="md:w-[255px] mb-10  h-[65px] text-[32px] md:text-greenAcc border-4 hover:bg-greenAcc hover:text-white font-bold border-greenAcc font-tinos rounded-input"
          type="button"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          className={`md:w-[255px] mb-10  h-[65px] md:bg-greenAcc ${!isStepValid2 && 'bg-gray-500' } text-[32px] md:text-white font-bold  rounded-input text-greenAcc font-tinos `}
          type="button"
          onClick={nextStep}
          disabled={!isStepValid2}
        >
          Next
        </button>
      </div>
    </div>
  );
}
