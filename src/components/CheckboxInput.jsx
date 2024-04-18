/* eslint-disable react/prop-types */

import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

import {
  CheckBoxOutlineBlank,
 
} from "@mui/icons-material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
export default function CheckboxInput({register}) {
 
  return (
    <div className=" ">
  
<FormControl>
{/* {errors.type&& (
                            <div className=" text-red-500 mx-5 text-[20px]  ">{`**${errors.type.message}`}</div>
                        )} */}
                  <FormLabel id="demo-radio-buttons-group-label">
                 
                  </FormLabel>
                  <RadioGroup
                  
                    aria-labelledby="demo-radio-buttons-group-label"
                     defaultValue="first_time"
                    name="radio-buttons-group"
                    className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-5 font-roboto text-xl px-10 pt-7 pb-5"
                  >
                    <FormControlLabel
                      value="first_time"
                      control={
                        <Radio
                        {...register("type" ,{
                           required:{
                            value:true,
                            message:"This field is required"
                           }
                          })}
                        value="first_time"
                        style={{ color: "#F6C90E" }}
                          icon={<CheckBoxOutlineBlank fontSize="small" />}
                          checkedIcon={
                            <CheckBoxIcon  fontSize="small" />
                          }
                        />
                      }
                      label="first_time"
                    />
                    <FormControlLabel
                    className="xl:ml-[-50px]"
                     value="Replacement_of_lost"
                      control={
                        <Radio
                        {...register("type" ,{
                          required:{
                           value:true,
                           message:"This field is required"
                          }
                         })}
                        value="Replacement_of_lost"
                        style={{ color: "#F6C90E" }}
                          icon={<CheckBoxOutlineBlank fontSize="small" />}
                          checkedIcon={
                            <CheckBoxIcon  fontSize="small" />
                          }
                        />
                      }
                      label="Replacement_of_lost"
                    />
                    <FormControlLabel
                      className="xl:ml-[-50px]"
                      value="Replacement_of_previous_passport"
                      control={
                        <Radio
                        {...register("type" ,{
                          required:{
                           value:true,
                           message:"This field is required"
                          }
                         })}
                        value="Replacement_of_previous_passport"
                        style={{ color: "#F6C90E" }}
                          icon={<CheckBoxOutlineBlank fontSize="small" />}
                          checkedIcon={
                            <CheckBoxIcon  fontSize="small" />
                          }
                        />
                      }
                      label="Replacement_of_previous_passport"
                    />
                    <FormControlLabel
                     value="Damaged_replacement"
                     className="xl:ml-[50px]"
                      control={
                        <Radio
                        {...register("type" ,{
                          required:{
                           value:true,
                           message:"This field is required"
                          }
                         })}
                        value="Damaged_replacement"
                        style={{ color: "#F6C90E" }}
                          icon={<CheckBoxOutlineBlank fontSize="small" />}
                          checkedIcon={
                            <CheckBoxIcon  fontSize="small" />
                          }
                        />
                      }
                      label="Damaged_replacement"
                    />
                  </RadioGroup>
                 
                </FormControl>


       
    </div>
  );
}