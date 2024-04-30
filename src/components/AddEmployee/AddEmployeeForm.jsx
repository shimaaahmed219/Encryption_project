import { useForm } from "react-hook-form";
import icon from "../../assets/AddEmployee/edit-2.svg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { url } from "../URL";
import Swal from "sweetalert2";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
// const MAX_FILE_SIZE = 5000000;
// const ACCEPTED_IMAGE_TYPES = [
//   "image/jpeg",
//   "image/jpg",
//   "image/png",
//   "image/webp",
// ];

const schema = z.object({
  name: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(/.*[A-Z].*/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-].*/, {
      message: "Password must contain at least one special character",
    }),
  phone: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
  job: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
  photo: z.any()

});

export default function AddEmployeeForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });


  const onsubmit = async (data) => {
    const formdata = new FormData();

    formdata.append("name", data.name);
    formdata.append("password", data.password);
    formdata.append("email", data.email);
    formdata.append("position", data.job);
    formdata.append("photo", data.photo[0]);
    formdata.append("phone", data.phone);
   setIsLoading(true)
    try {
      const response = await axios.post(`${url}/employee`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        Swal.fire({
          title: "Good job!",
          text: "Employee added successfully!",
          icon: "success",
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        Swal.fire({
          title: "Error!",
          text: "This email is already registered",
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "An error occurred while adding the employee",
          icon: "error",
        });
      }
    } finally {
      setIsLoading(false); 
    }
  };
  console.log(isLoading);
  console.log("errors:",errors);
  return (
    <div className="w-[80%] font-roboto text-[22px] h-full text-greenAcc shadow-shadowEmp bg-bgEmp rounded-[20px] my-10">
      <form
        onSubmit={handleSubmit(onsubmit)}
        className=" flex-col flex items-center "
      >
        <div className=" relative mt-10 w-[115px] h-[115px] rounded-full userIconForm flex justify-center items-center ">
          <input
            {...register("photo")}
            onChange={handleImageChange}
            type="file"
            className="w-full h-full absolute z-40 opacity-0"
          />
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full absolute h-full object-cover rounded-full"
            />
          )}
          {/* {title} */}
          <div className=" md:block hidden">
            <div className=" bottom-[10px] right-[-2px] z-50 absolute w-[27px] h-[27px] bg-yellowAcc rounded-full flex justify-center items-center">
              <img src={icon} className="text-yellowAcc  " />
            </div>
          </div>
        </div>

        {errors.photo && (
          <div className=" text-red-500 m-auto px-10 mt-[10px] mb-[5px]">{`**${errors.photo.message}`}</div>
        )}
        <h2
          className={` font-tinos text-yellowAcc my-5  text-[30px] capitalize`}
        >
          Profil picture
        </h2>
        <div className="flex flex-col md:gap-y-3 gap-y-5 w-full px-5 ">
          <div className=" flex md:flex-row flex-col gap-y-3 w-full justify-around ">
            {/* name */}
            <div className="  md:w-editEmplyeInput w-full  flex flex-col  ">
              <label className="my-2 mx-1 font-semibold">Name</label>
              <input
                {...register("name")}
                type="text"
                placeholder="name"
                className="  w-full border-[1px] bg-transparent focus:outline-none
                 rounded-input h-[50px] px-5  border-yellowAcc "
              />
              {errors.name && (
                <div className=" text-red-500  text-[14px] mt-[15px] mb-[15px]">
                  {`**${errors.name.message}`}</div>
              )}
            </div>

            {/* phone */}
            <div className="   md:w-editEmplyeInput w-full flex flex-col ">
              <label className="my-2 mx-1  font-semibold">phone</label>
              <input
                {...register("phone")}
                type="text"
                placeholder="phone Number"
                className=" border-[1px] focus:outline-none bg-transparent rounded-input
                 h-[50px] px-5  border-yellowAcc"
              />
              {errors.phone && (
                <div className=" text-red-500  text-[15px] mt-[15px] mb-[15px]">
                  {`**${errors.phone.message}`}</div>
              )}
            </div>
          </div>
          <div className="flex flex-col  w-full ">
            <div className=" flex md:flex-row flex-col gap-y-4 w-full justify-around ">
              {/* name */}
              <div className="  md:w-editEmplyeInput w-full flex flex-col  ">
                <label className="my-2 mx-1  font-semibold">Email address</label>
                <input
                  {...register("email")}
                  type="text"
                  placeholder="email@example.com"
                  className="  w-full border-[1px] focus:outline-none bg-transparent rounded-input h-[50px] px-5  border-yellowAcc "
                />
                {errors.email && (
                  <div className=" text-red-500 text-[15px] mt-[15px] mb-[15px]">{`**${errors.email.message}`}</div>
                )}
              </div>

              {/* phone */}
              <div className="   md:w-editEmplyeInput w-full flex flex-col ">
                <label className="my-2 mx-1  font-semibold">The job</label>
                <input
                  {...register("job")}
                  type="text"
                  placeholder="job"
                  className=" border-[1px] bg-transparent focus:outline-none  rounded-input h-[50px] px-5  border-yellowAcc"
                />
                {errors.job && (
                  <div className=" text-red-500 text-[15px] mt-[15px] mb-[15px]">{`**${errors.job.message}`}</div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col  w-full ">
            <div className=" flex md:flex-row flex-col gap-y-4 w-full justify-around ">
              {/* name */}
              <div className="  md:w-editEmplyeInput w-full flex flex-col  ">
                <label className="my-2 mx-1 font-semibold">Password</label>
                <div className="flex relative">
                  <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="new password"
                    className=" w-full  border-[1px] bg-transparent focus:outline-none rounded-input h-[50px] px-5  border-yellowAcc "
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="  absolute right-3 top-4 cursor-pointer"
                  >
                    {showPassword ? (
                      <FiEye size={20} color="yellow" />
                    ) : (
                      <FiEyeOff size={20} color="yellow" />
                    )}
                  </span>
                </div>
                {errors.password && (
                  <div className=" text-red-500 text-[15px] mt-[15px] mb-[15px]">{`**${errors.password.message}`}</div>
                )}
              </div>

              {/* phone */}
              <div className="   md:w-editEmplyeInput w-full flex flex-col "></div>
            </div>
          </div>
        </div>

        <button
          className={` font-tinos m-auto flex items-center justify-center my-[3rem] rounded-[10px] text-[26px] bg-greenAcc w-[240px] h-[57px] text-white`}
       disabled={isLoading}
       >
  

  
  {isLoading ? (
    <svg
      className="animate-spin  mr-3 h-6 w-6 text-white"
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
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12a8 8 0 01-8 8v4c4.627 0 10-5.373 10-12h-4zm-2-5.291A7.962 7.962 0 0120 12h4c0-3.042-1.135-5.824-3-7.938l-3 2.647z"
      ></path>
    </svg>
  ) : null}
  {isLoading ? "Adding.." : "add Employee"}
</button>
      </form>
    </div>
  );
}

