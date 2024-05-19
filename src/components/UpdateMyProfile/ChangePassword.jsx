
import { zodResolver } from "@hookform/resolvers/zod";
import {  useForm } from "react-hook-form";
import { z } from "zod";
import { url } from "../URL";
import axios from "axios";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";


const schema = z.object({
  current_password: z
    .string()
    .min(8)
    .regex(/.*[A-Z].*/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-].*/, {
      message: "Password must contain at least one special character",
    }),

  new_password: z
    .string()
    .min(8)
    .regex(/.*[A-Z].*/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-].*/, {
      message: "Password must contain at least one special character",
    }),
  new_password_confirmation: z.string().refine(
    (data) => {
      return data === undefined || data === "" || data !== data.new_password;
    },
    {
      message: "New Password Confirmation must match New Password",
    }
  ),
});

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const changePasswordHandle = async (data) => {
    axios
      .post(`${url}/auth/changePassword`, data, {
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => console.log(res));
  };

  return (
    <>
      <form onSubmit={handleSubmit(changePasswordHandle)}>
        <div className="w-full flex flex-col gap-y-5">
          <div className="flex md:flex-row flex-col justify-around px-5 md:gap-y-1  gap-y-5">
          <div className="  md:w-editEmplyeInput w-full  flex flex-col  ">
              <label className="my-2 mx-1 text-label font-semibold capitalize">current password</label>
             
             <div className="relative flex">
             <input
                {...register("current_password")}
                type={showPassword ? "text" : "password"}
                placeholder="current password"
                className="  w-full text-input border-[1px] bg-transparent focus:outline-none rounded-input h-[50px] px-5  border-yellowAcc "
              />
               <span
                onClick={() => setShowPassword(!showPassword)}
                className="  absolute right-4 top-[15px]  cursor-pointer"
              >
                {showPassword ? (
                  <FiEye size={20} color="yellow" />
                ) : (
                  <FiEyeOff size={20} color="yellow" />
                )}
              </span>
             </div>
             
              {errors.current_password && (
                <div className=" text-red-500 m-auto text-[14px] mt-[15px] mb-[15px]">{`**${errors.current_password.message}`}</div>
              )}
            </div>
            <div className="  2xl:w-[40%] md:md:w-[39%] w-full  flex flex-col  ">
              <label className="my-2 mx-1 text-label capitalize font-semibold">New password</label>
             <div className="flex relative">
             <input
                {...register("new_password")}
                type={showPassword ? "text" : "password"}
                placeholder="new password"
                className=" w-full  border-[1px] text-input bg-transparent focus:outline-none rounded-input h-[50px] px-5  border-yellowAcc "
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="  absolute  right-4 top-[15px] cursor-pointer"
              >
                {showPassword ? (
                  <FiEye size={20} color="yellow" />
                ) : (
                  <FiEyeOff size={20} color="yellow" />
                )}
              </span>
             </div>
            
              {errors.new_password && (
                <div className=" text-red-500 m-auto text-[14px] mt-[15px] mb-[15px]">{`**${errors.new_password.message}`}</div>
              )}
            </div>

            </div>

            <div className="md:flex justify-around px-5">
          <div className="  md:w-editEmplyeInput w-full  flex flex-col  ">
              <label className="my-2 mx-1 capitalize text-label font-semibold">new password confirmation</label>
           <div className="flex relative">
              <input
                {...register("new_password_confirmation")}
                type={showPassword ? "text" : "password"}
                placeholder="new password confirmation"
                className="  w-full border-[1px] text-input bg-transparent focus:outline-none rounded-input h-[50px] px-5  border-yellowAcc "
              />
  <span
                onClick={() => setShowPassword(!showPassword)}
                className="  absolute  right-4 top-[15px] cursor-pointer"
              >
                {showPassword ? (
                  <FiEye size={20} color="yellow" />
                ) : (
                  <FiEyeOff size={20} color="yellow" />
                )}
              </span>
              </div>
              {errors.new_password_confirmation && (
                <div className=" text-red-500 m-auto text-[14px] mt-[15px] mb-[15px]">{`**${errors.new_password_confirmation.message}`}</div>
              )}
            </div>
            <div className="  md:w-editEmplyeInput w-full  flex flex-col  ">
             
           
            </div>
         
            </div>
            <div className=" flex justify-center">
            <button
              type="submit"
              className={` outline-none:focus-none font-tinos font-bold xl:ms-7 leading-6 my-[3rem] rounded-[10px] text-[26px] bg-greenAcc sm:w-[198px] w-[150px] h-[50px] text-white`}
            >
              save
            </button>
        </div> 
            </div>
            

      

        
      </form>
    </>
  );
}
