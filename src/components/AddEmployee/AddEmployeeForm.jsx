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
    .refine((value) => value.trim() !== "", { message: "This field is required" }),
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
  phone: z.string().refine((value) => value.trim() !== "", { message: "This field is required" }),
  job: z
    .string()
    .refine((value) => value.trim() !== "", { message: "This field is required" }),
    // photo: z.any()
    // .refine((file) => {
    //   if (file) return false; 
   
    // }, {
    //   message: "The photo field must be an image with .jpg, .jpeg, .png, or .webp extension."
    // })
  
  
  
   
    // .refine(
    //     (files) => {
    //         if (!files || !files[0]) {
    //             return false; 
    //         }
    //         return files[0].size <= MAX_FILE_SIZE; 
    //     },
    //     `Photo is required.."`
    // )
    // .refine(
    //     (files) => {
    //         if (!files || !files[0]) {
    //             return false; 
    //         }
    //         return ACCEPTED_IMAGE_TYPES.includes(files[0].type); 
    //     },
    //     "Photo is required. Only .jpg, .jpeg, .png and .webp formats are supported."
    // ),
});
export default function AddEmployeeForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // إنشاء عنوان URL للصورة المحددة وتخزينه في الحالة
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
 // تحديث حالة التحميل عند بدء إرسال الطلب

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
  setIsLoading(false); // تحديث حالة التحميل بعد الانتهاء من الطلب، سواء بنجاح أو فشل
}
}
console.log(errors);
  return (
    <div className="w-[80%] font-roboto text-[20px] h-full text-greenAcc shadow-shadowEmp bg-bgEmp rounded-[20px] my-10">
      <form
        onSubmit={handleSubmit(onsubmit)}
        className=" flex-col flex items-center "
      >
        <div className=" relative w-[115px] h-[115px] rounded-full userIconForm flex justify-center items-center ">
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
          className={` font-tinos text-yellowAcc mt-5  text-[30px] capitalize`}
        >
          Profil picture
        </h2>
        <div className="flex flex-col md:gap-y-3 gap-y-5 w-full px-5 ">
          <div className=" flex md:flex-row flex-col gap-y-3 w-full justify-around ">
            {/* name */}
            <div className="  md:w-editEmplyeInput w-full  flex flex-col  ">
              <label className="my-2 mx-1">Name</label>
              <input
                {...register("name")}
                type="text"
                placeholder="name"
                className="  w-full border-[1px] bg-transparent focus:outline-none rounded-input h-[50px] px-5  border-yellowAcc "
              />
              {errors.name && (
                <div className=" text-red-500  text-[14px] mt-[15px] mb-[15px]">{`**${errors.name.message}`}</div>
              )}
            </div>

            {/* phone */}
            <div className="   md:w-editEmplyeInput w-full flex flex-col ">
              <label className="my-2 mx-1">phone</label>
              <input
                {...register("phone")}
                type="text"
                placeholder="phone Number"
                className=" border-[1px] focus:outline-none bg-transparent rounded-input h-[50px] px-5  border-yellowAcc"
              />
              {errors.phone && (
                <div className=" text-red-500  text-[15px] mt-[15px] mb-[15px]">{`**${errors.phone.message}`}</div>
              )}
            </div>
          </div>
          <div className="flex flex-col  w-full ">
            <div className=" flex md:flex-row flex-col gap-y-4 w-full justify-around ">
              {/* name */}
              <div className="  md:w-editEmplyeInput w-full flex flex-col  ">
                <label className="my-2 mx-1">Email address</label>
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
                <label className="my-2 mx-1">The job</label>
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
                <label className="my-2 mx-1">Password</label>
                <div className="flex relative">
             <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="new password"
                className=" w-full  border-[1px] bg-transparent focus:outline-none rounded-input h-[50px] px-5  border-yellowAcc "
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="  absolute right-2 top-3 cursor-pointer"
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
             </div>
             </div>
            </div>
        </div>
        
        <button
          className={` font-tinos m-auto  my-[3rem] rounded-[10px] text-[26px] bg-greenAcc w-[240px] h-[57px] text-white`}
        >
          {isLoading ? 'Loading...' : 'add Employee'}
        
        </button>
      </form>
    </div>
  );
}


// <div
//           className={`  w-[100%]   grid md:grid-cols-2 grid-cols-1  gap-y-8 mt-10 rounded-[10px]`}
//         >
//           {/* name */}
//           <div className="m-auto flex flex-col items-center w-[100%]">
//             <label className=" text-[22px] me-auto my-2 px-[9%] font-roboto font-semibold capitalize ml-1 md:flex block">
//               name
//             </label>
//             <input
//               {...register("name")}
//               placeholder="name"
//               type="text"
//               className="xl:w-[365px] placeholder:text-[20px] text-[20px]
//                placeholder:text-greenAcc  text-greenAcc placeholder:font-roboto
//               font-roboto   w-[90%]  pl-2  focus:outline-none h-[50px] border-2 rounded-[10px] bg-transparent border-yellowAcc"
//             />
//             {errors.name && (
//               <div className=" text-red-500 me-auto px-[9%]  mt-[10px] mb-[5px]">{`**${errors.name.message}`}</div>
//             )}
//           </div>

//           <div className="m-auto w-[100%] flex flex-col items-center">
//             {/* number*/}
//             <label className=" text-[22px] px-[9%] py-2 me-auto font-roboto font-semibold capitalize ml-1 md:flex block">
//               phone
//             </label>
//             <input
//               {...register("phone")}
//               placeholder="enter employee phone number"
//               type="text"
//               className=" w-[90%] block placeholder:text-[20px] text-[20px] placeholder:text-greenAcc text-greenAcc placeholder:font-roboto font-roboto lg:w-[280px] pl-2 xl:w-[365px] focus:outline-none  h-[50px] border-2 rounded-[10px] bg-transparent border-yellowAcc"
//             />
//             {errors.phone && (
//               <div className=" text-red-500 me-auto px-[9%] mt-[15px] mb-[15px]">{`**${errors.phone.message}`}</div>
//             )}
//           </div>

//           {/* email */}

//           <div className="m-auto flex flex-col items-center w-[100%] ">
//             <label className=" text-[22px] me-auto my-2 px-[9%] font-roboto font-semibold capitalize ml-1">
//               Email address
//             </label>
//             <input
//               {...register("email")}
//               placeholder="email Adress "
//               type="text"
//               className="xl:w-[365px] w-[90%]  placeholder:text-[20px] text-[20px] placeholder:text-greenAcc text-greenAcc placeholder:font-roboto font-roboto md:flex block focus:outline-none   pl-2 h-[50px] border-2 rounded-[10px] bg-transparent border-yellowAcc"
//             />
//             {errors.email && (
//               <div className=" text-red-500 me-auto px-[9%]  mt-[15px] mb-[5px]">{`**${errors.email.message}`}</div>
//             )}
//           </div>

//           {/* job */}
//           <div className="m-auto flex flex-col items-center w-[100%]">
//             <label className=" text-[22px] me-auto px-[9%] py-2 font-roboto font-semibold capitalize ml-1">
//               The jop
//             </label>
//             <input
//               type="text"
//               {...register("job")}
//               placeholder="job "
//               className="xl:w-[365px] md:flex block  placeholder:text-[20px]  text-[20px] placeholder:text-greenAcc text-greenAcc  placeholder:font-roboto  font-roboto focus:outline-none lg:w-[280px]  w-[90%] h-[50px] pl-2 border-2 rounded-[10px] bg-transparent border-yellowAcc"
//             />
//             {errors.job && (
//               <div className=" text-red-500 me-auto px-[9%] mt-[15px] mb-[5px]">{`**${errors.job.message}`}</div>
//             )}
//           </div>

//           <div className="m-auto w-[100%] flex flex-col items-center">
//             {/* password */}
//             <label className=" text-[22px] me-auto px-[9%] py-2   font-roboto font-semibold capitalize ml-1">
//               Password
//             </label>
//             <input
//               {...register("password")}
//               placeholder="password "
//               type="password"
//               className="xl:w-[365px] m-auto placeholder:text-[20px]   text-[20px] placeholder:text-greenAcc  text-greenAcc  placeholder:font-roboto
//                                 font-roboto  focus:outline-none md:flex block lg:w-[280px]  w-[90%] pl-2 h-[50px] border-2 rounded-[10px] bg-transparent border-yellowAcc"
//             />
//             {errors.password && (
//               <div className=" text-red-500 me-auto px-[9%] mt-[15px] mb-[5px]">{`**${errors.password.message}`}</div>
//             )}
//           </div>