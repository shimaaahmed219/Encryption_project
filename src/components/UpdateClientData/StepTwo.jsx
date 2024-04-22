/* eslint-disable react/prop-types */

import { Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import HeaderFormPage from "../HeaderFormPage";


export default function StepTwo({register,client, errors,prevStep,nextStep ,step,goToStep}) {
 
 
 
    return (
   <>
   <div className="bg-baform flex flex-col   shadow-shadowEmp w-6/6 pl-6 pt-10 pb-[55px] md:mx-20 mx-5 min-h-[520px] rounded-[20px] m-auto my-10">
        <HeaderFormPage goToStep={goToStep} step={step} />
        <hr className="h-[1px] w-full bg-slate-600 my-8" />
        <Box className="">
          <FormControl className="flex flex-row items-center gap-x-5">
            <FormLabel
              id="demo-radio-buttons-group-label "
              className="text-greenAcc text-[20px] font-roboto font-bold "
            ></FormLabel>
            <RadioGroup
            defaultValue={client.marital_status}
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
            <div className=" text-red-500 mb-5 mt-[-14px] text-[15px] m-auto ml-[100px] ">{`**${errors.marital_status.message}`}</div>
          )}
        </Box>

        <div className="  md:pr-0 pr-[20px] md:mx-20">
          {/* husband name */}
          <label className="text-greenAcc font-roboto my-3 text-xl font-bold block">
            Husband name /
          </label>
          <input
            {...register("husband_name")}
            type="text"
            className=" focus:outline-none px-5 text-lg text-hreenAcc rounded-input bg-transparent w-full h-[50px] border-[1px] border-yellowAcc"
          />
          <label className="text-greenAcc font-roboto mb-3 mt-7 text-xl font-bold block">
            Nationality 
          </label>
          <input
          value="Eegyptian"
            type="text"
            className=" focus:outline-none px-5 rounded-input font-roboto text-lg text-hreenAcc w-full bg-transparent h-[50px] border-[1px] border-yellowAcc"
          />
        </div>
      </div>
      <div className="my-10 m-auto mt-[50px] flex w-[80%] justify-around">
        <button
          className="md:w-[255px] mb-10  h-[65px] md:bg-greenAcc text-[32px] md:text-white text-greenAcc font-tinos rounded-input"
          type="button"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          className="md:w-[255px] mb-10  h-[65px] md:bg-greenAcc text-[32px] md:text-white text-greenAcc font-tinos rounded-input"
          type="button"
          onClick={nextStep}
        >
          Next
        </button>
      </div>
   
   </>
  )
}

