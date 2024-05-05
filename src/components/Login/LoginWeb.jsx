import img from "../../assets/login/Group (2).svg";
import img2 from "../../assets/navImg/Group (1).svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../pages/style/login.css";
import Swal from "sweetalert2";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useLoginUserMutation } from "../../rtk/api/apiSlice";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schima = z.object({
  email: z.string().email(),
  password: z.string().min(8, "password must be at last 8 characters"),
});

export default function LoginWeb() {
  const navigate = useNavigate();
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [isValid, setIsValid] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(schima),
    mode: "all",
  });
  const isWatched = watch();
  useEffect(() => {
    const checkValid = isWatched.email !== "" && isWatched.password !== "";
    setIsValid(checkValid);
  }, [isWatched]);

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
    <div className="login w-full h-full xsm:block hidden  justify-between items-center ">
      {/* description */}
      <div className="w-full h-full flex justify-between">
        <div className="h-full w-[30%] flex justify-center items-center">
          <div className=" w-full h-[65%]  pt-20 pr-[60px]   ">
            <h3
              className={` mb-2 font-ruwudu  w-4/6 text-center text-white m-auto lg:text-3xl md:text-2xl sxm:text-lg text-lg `}
            >
              جمهورية مصر العربيه
            </h3>
            <h4
              className={` font-khand uppercase w-4/6 text-center m-auto text-white lg:text-xl text-lg font-thin `}
            >
              ARAB REPUBLIC OF EGYPT
            </h4>

            <img
              src={img}
              alt="enc"
              className=" my-7 lg:w-[90px] md:w-[70px] sm:w-[50px] m-auto"
            />

            <h3
              className={`font-ruwudu font-medium m-auto w-4/6 text-center text-white md:text-3xl text-lg `}
            >
              جواز سفر
            </h3>
            <h4
              className={` font-khand m-auto mt-2 uppercase  w-4/6 text-center text-white md:text-xl text-lg font-extralight`}
            >
              passport
            </h4>
          </div>
        </div>

        {/* form */}
        <div className="w-[40%] max-h-screen grid items-center lg:mr-[60px]  mr-5 lg:pt-20 md:pt-10 pt-7">
          <div className="w-full h-[80%] ">
            <img src={img2} alt="img" className="m-auto" />

            <h1
              className={`font-tinos font-bold mb-[52px] mt-[-5px] text-center uppercase text-[48px] text-greenAcc`}
            >
              log in
            </h1>
            <form
              onSubmit={handleSubmit(handilform)}
              className="text-center mt-[-20px] "
            >
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className={`block focus:outline-none h-[55px] shadow-form placeholder:text-2xl
                 rounded-input m-auto lg:w-[429px] md:w-[350px] sm:w-[280px] w-[240px] px-5 py-[20px]
                  mb-5 mt-10`}
              />
              {errors.email && (
                <div className="text-red-500 mt-[-10px] px-[65px] text-right mb-[15px]">
                  {`**${errors.email.message}`}
                </div>
              )}
              <div className=" relative flex m-auto lg:w-[429px] md:w-[350px] sm:w-[280px] w-[240px] ">
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="block  focus:outline-none h-[55px] 
                   shadow-form placeholder:text-2xl rounded-input m-auto 
                     w-full  px-5 py-[18px] mb-10"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-4 right-4 cursor-pointer "
                >
                  {showPassword ? (
                    <FiEye size={20} color="yellow" />
                  ) : (
                    <FiEyeOff size={20} color="yellow" />
                  )}
                </div>
              </div>
              {errors.password && (
                <div className="text-red-500 px-[65px] text-right  mt-[-20px] mb-[20px]">
                  {`**${errors.password.message}`}
                </div>
              )}
              <button
                type="submit"
                className={` ${
                  !isValid && "bg-gray-500"
                }  bg-greenAcc font-tinos font-bold md:w-[210px]  mt-[15px] w-[180px] h-[60px] capitalize  text-center text-white text-[32px] rounded-input`}
                disabled={!isValid}
              >
                login
              </button>
            </form>
          </div>
        </div>
      </div>
      {isLoading && (
        <div>
          <div className="w-full h-screen absolute left-0 top-0 bg-black opacity-85"></div>
          <div className="w-full h-full top-0 left-0 absolute flex flex-col justify-center items-center">
            <div className="mt-[-60px] text-white text-[20px] capitalize font-tinos">
              Loading...
            </div>
            <svg
              className="animate-spin h-12 w-12 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4zm10-1.395A7.957 7.957 0 0120 12h4c0 4.418-3.582 8-8 8v-4zm-14-.896A7.957 7.957 0 014 12H0c0 4.418 3.582 8 8 8v-4z"
              ></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
