

import { z } from 'zod';
import img from '../../assets/navImg/Group (1).svg'
import { useLoginUserMutation } from '../../rtk/api/apiSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";



const schima = z.object({
  email: z.string().email(),
  password: z.string().min(8, "password must be at last 8 characters"),
});
export default function LoginMob() {
  const navigate = useNavigate();
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schima),
  });

  // handil login function
  const handilform = async (data) => {
    try {
      const response = await loginUser(data).unwrap();

      const userData = {
        name: response.user.name,
        token: response.access_token,
        email: response.user.email,
        phone: response.user.phone,
      };

      // set user data in localStorge
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", response.access_token);

      navigate("/dashboard");
      
    } catch (error) {
      console.error(error);
      if (error.status === 422 || error.status === 401) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incorrect username or password!",
        });
      }
      setLoginAttempts(loginAttempts + 1);
      if (loginAttempts >= 2) {
        navigate("/tryagain");
      }
    }
  };

  return (
    <div className=' bg-bg w-full h-full'>
       <div className=' w-full h-full grid justify-center items-center'>
      <div>
        
<img
src={img}
alt="enc"
className=' my-4 m-auto'
/>
<h1 className={`font-tinos font-bold text-center  uppercase text-[48px] text-greenAcc`}>login</h1>
      
<form onSubmit={handleSubmit(handilform)} className='text-center mt-[-20px] '>
                            <input
                              {...register("email")}
                                type="email"
                                placeholder='Email'
                                className={`block focus:outline-none shadow-form placeholder:text-2xl rounded-input m-auto w-[70%]   px-5 py-[20px] my-10`} />
                           
                           {errors.email && (
                                  <div className="text-red-500 mt-[-20px] mb-[15px]">{`**${errors.email.message}`}</div>
                                )}
                                  <div className="relative">

                                  <input
                              
                              {...register("password")}
                                type={showPassword ? "text" : "password"}
                                placeholder='password'
                                className='block focus:outline-none shadow-form placeholder:text-2xl rounded-input m-auto  w-[70%] px-5 py-[20px] my-10' />
  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute cursor-pointer top-5 xl:right-[80px] lg:right-[30px] md:right-[30px] right-[10px]"
                  >
                    {showPassword ? (
                      <FiEye size={20} color="yellow" />
                    ) : (
                      <FiEyeOff size={20} color="yellow" />
                    )}
                    
                  </span>
                  {errors.password && (
                    <div className="text-red-500 mt-[-20px] mb-[20px]">{`**${errors.password.message}`}</div>
                  )}

                                  </div>
                          
                            <button
                                className={`font-tinos font-bold  w-[210px] h-[60px] capitalize  text-center text-white text-[32px] bg-greenAcc rounded-input`}>  {isLoading ? "Logging in..." : "Login"}</button>
                        </form>


      </div>
       </div>
    </div>
  )
}
