/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import icon from "../../assets/AddEmployee/edit-2.svg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { url } from "../URL";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import iconAdd from "../../assets/AddEmployee/Group.svg";
// import { useAddEmployeeMutation } from "../../rtk/api/apiSlice";
// const MAX_FILE_SIZE = 5000000;
// const ACCEPTED_IMAGE_TYPES = [
//   "image/jpeg",
//   "image/jpg",
//   "image/png",
//   "image/webp",
// ];

const schema = z.object({
  name: z.string().refine((value) => value.trim() !== "", {
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
  phone: z.string().refine((value) => value.trim() !== "", {
    message: "This field is required",
  }),
  job: z.string().refine((value) => value.trim() !== "", {
    message: "This field is required",
  }),
  photo: z.any(),
  user_type: z.any(),
});

export default function AddEmployeeForm({ setIsLoading, isLoading }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(false);
  // const addEmployee = useAddEmployeeMutation();
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
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const watching = watch();
  useEffect(() => {
    const checkIsValid =
      watching.name !== "" &&
      watching.password !== "" &&
      watching.email !== "" &&
      watching.phone !== "" &&
      watching.position !== "" &&
      watching.user_type !== "" &&
      watching.photo?.length > 0;
    setIsValid(checkIsValid);
  }, [watching]);

  const onsubmit = async (data) => {
    const finalData = {
      ...data,
      photo: data.photo[0],
      position: data.job,
    };
    setIsLoading(true);
    try {
      const response = await axios.post(`${url}/employee`, finalData, {
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

  console.log("errors:", errors);

  return (
    <div className="lg:w-[70%] w-[80%] font-roboto text-[20px] h-full text-greenAcc shadow-shadowEmp bg-bgEmp rounded-[20px] my-10">
      <form
        onSubmit={handleSubmit(onsubmit)}
        className=" flex-col flex items-center "
      >
        {/* userIconForm */}
        <div className=" relative mt-5 w-[80px] h-[80px] bg-greenAcc rounded-full  flex justify-center items-center ">
          <img src={iconAdd} className="w-[80%]" />
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
            <div className=" bottom-[10px] right-[-2px] z-30 absolute w-[27px] h-[27px] bg-yellowAcc rounded-full flex justify-center items-center">
              <img src={icon} className="text-yellowAcc  " />
            </div>
          </div>
        </div>

        {errors.photo && (
          <div className=" text-red-500 m-auto px-10 mt-[10px] mb-[5px]">{`**${errors.photo.message}`}</div>
        )}
        <h2
          className={` font-tinos text-yellowAcc my-2   text-[23px] capitalize`}
        >
          Profil picture
        </h2>
        <div className="flex flex-col md:gap-y-3 gap-y-5 w-full px-5 mt-[-5px] ">
          <div className=" flex md:flex-row flex-col gap-y-3 w-full justify-around ">
            {/* name */}
            <div className="  md:w-editEmplyeInput w-full  flex flex-col  ">
              <label className="my-2 mx-1 text-label font-semibold">Name</label>
              <input
                {...register("name")}
                type="text"
                placeholder="name"
                className=" text-input w-full border-[1px] bg-transparent focus:outline-none
                 rounded-input h-input px-5   border-yellowAcc "
              />
              {errors.name && (
                <div className=" text-red-500  text-[14px] mt-[15px] mb-[15px]">
                  {`**${errors.name.message}`}
                </div>
              )}
            </div>

            {/* phone */}
            <div className="   md:w-editEmplyeInput w-full flex flex-col ">
              <label className="my-2 mx-1 text-label  font-semibold">
                phone
              </label>
              <input
                {...register("phone")}
                type="text"
                placeholder="phone Number"
                className=" border-[1px] text-input focus:outline-none bg-transparent rounded-input
                 h-input px-5  border-yellowAcc"
              />
              {errors.phone && (
                <div className=" text-red-500  text-[15px] mt-[15px] mb-[15px]">
                  {`**${errors.phone.message}`}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col  w-full ">
            <div className=" flex md:flex-row flex-col gap-y-4 w-full justify-around ">
              {/* name */}
              <div className="  md:w-editEmplyeInput w-full flex flex-col  ">
                <label className="my-2 mx-1 text-label font-semibold">
                  Email address
                </label>
                <input
                  {...register("email")}
                  type="text"
                  placeholder="email@example.com"
                  className="  w-full border-[1px] text-input focus:outline-none bg-transparent rounded-input h-input px-5  border-yellowAcc "
                />
                {errors.email && (
                  <div className=" text-red-500 text-[15px] mt-[15px] mb-[15px]">{`**${errors.email.message}`}</div>
                )}
              </div>

              {/* phone */}
              <div className="   md:w-editEmplyeInput w-full flex flex-col ">
                <label className="my-2 mx-1 text-label  font-semibold">
                  The job
                </label>
                <input
                  {...register("job")}
                  type="text"
                  placeholder="job"
                  className=" border-[1px] bg-transparent text-input focus:outline-none  rounded-input h-input px-5  border-yellowAcc"
                />
                {errors.job && (
                  <div className=" text-red-500 text-[15px] mt-[15px] mb-[15px]">{`**${errors.job.message}`}</div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col  w-full ">
            <div className=" flex md:flex-row flex-col gap-y-4 w-full justify-around ">
              <div className="  md:w-editEmplyeInput w-full flex flex-col  ">
                <label className="my-2 mx-1 text-label font-semibold">
                  Password
                </label>
                <div className="flex relative">
                  <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="new password"
                    className=" w-full  border-[1px] bg-transparent text-input focus:outline-none rounded-input h-input px-5  border-yellowAcc "
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
              <div className="   md:w-editEmplyeInput w-full flex flex-col ">
                <label className="my-2 mx-1 text-label font-semibold">
                  user type
                </label>
                <select
                  {...register("user_type")}
                  name="user_type"
                  className="bg-transparent focus:outline-none rounded-input h-input px-5 text-input font-greenAcc  border-[1px] border-yellowAcc"
                >
                  <option value="admin">Admin</option>
                  <option value="passport authority">passport authority</option>
                  <option value="mofa">mofa</option>
                  <option value="recruitment district">
                    recruitment district
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <button
          // className={`lg:w-[255px] w-[180px] mb-10  h-[50px] md:h-[65px] ${!isValid ? 'bg-gray-500':' bg-greenAcc' } lg:text-[32px] text-[20px] text-white font-tinos rounded-input `}
          className={` font-tinos m-auto flex  ${!isValid ? 'bg-gray-500':' bg-greenAcc' } items-center justify-center my-[2rem] rounded-[10px] text-[22px]  w-[240px] h-[57px] text-white`}
          disabled={!isValid}
        >
          {isLoading ? "Adding.." : "add Employee"}
        </button>
      </form>
    </div>
  );
}
