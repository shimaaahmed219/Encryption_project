


import { useForm } from "react-hook-form";
import icon from "../../assets/AddEmployee/edit-2.svg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { url } from "../URL";
import Swal from "sweetalert2";
import { useState } from "react";



const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];

const schema = z.object({
    name: z.string().min(6).max(50),
    email: z.string().email(),
    password: z.string()
        .min(8)
        .regex(/.*[A-Z].*/, { message: 'Password must contain at least one uppercase letter' })
        .regex(/.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-].*/, {
            message: 'Password must contain at least one special character',
        }),
    phone: z.string().min(10).max(15),
    job: z.string().refine((value) => value.trim() !== '', { message: 'Job is required' }),
    photo: z
        .any()
        .refine(
            (files) => files?.[0]?.size <= MAX_FILE_SIZE,
            `Only .jpg, .jpeg, .png and .webp formats are supported.`
        )
        .refine(
            (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported."
        ),
});
export default function AddEmployeeForm() {
    const [selectedImage, setSelectedImage] = useState(null)
    
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
        
        axios
            .post(`${url}/employee`, formdata, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    // "Authorization": `Bearer ${token}`, 
                    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
            // console.log(res)
            if(res.status === 200){
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
     } })
        //    console.log(token); 
           
    };

    return (
        <div className="lg:w-[70%] w-[90%]  lg:ms-auto m-auto lg:mr-[30px]  mt-5 min-h-[700px] pt-6 shadow-shadowEmp bg-bgEmp rounded-[20px]">
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
          {selectedImage && <img src={selectedImage} alt="Selected" className="w-full absolute h-full object-cover rounded-full"/>}
                    {/* {title} */}
                </div>
                
                <div className=" mt-[-35px] ml-[80px] z-50  w-[27px] h-[27px] bg-yellowAcc rounded-full flex justify-center items-center">
                    <img src={icon} className="text-yellowAcc  " />
                </div>
                {errors.photo&& (
                            <div className=" text-red-500 m-auto  mt-[10px] mb-[5px]">{`**${errors.photo.message}`}</div>
                        )}
                <h2 className={` font-tinos text-yellowAcc mt-5 text-[30px] capitalize`}>
                    Profil picture
                </h2>
                {/* <h1 className={` font-tinos text-yellowAcc text-[24px] capitalize`}>
          {" "}
          update
        </h1> */}

                <div
                    className={`  w-[100%]   grid md:grid-cols-2 grid-cols-1  gap-y-8 mt-10 rounded-[10px]`}
                >
                    {/* name */}
                    <div className="m-auto">
                        <label className=" text-[22px] font-roboto font-semibold capitalize ml-1 md:flex block">
                            name
                        </label>
                        <input
                            {...register("name")}
                            placeholder="name"
                            type="text"
                            className="xl:w-[365px] placeholder:text-[20px] text-[20px]
               placeholder:text-greenAcc  text-greenAcc placeholder:font-roboto
              font-roboto lg:w-[280px] md:w-[250px] w-full pl-2  focus:outline-none h-[50px] border-2 rounded-[10px] bg-transparent border-yellowAcc"
                        />
                        {errors.name && (
                            <div className=" text-red-500 m-auto  mt-[10px] mb-[5px]">{`**${errors.name.message}`}</div>
                        )}
                    </div>

                    <div className="m-auto">
                        {/* number*/}
                        <label className=" text-[22px] font-roboto font-semibold capitalize ml-1 md:flex block">
                            number
                        </label>
                        <input
                            {...register("phone")}
                            placeholder="enter employee phone number"
                            type="text"
                            className="  block placeholder:text-[20px] text-[20px] placeholder:text-greenAcc text-greenAcc placeholder:font-roboto font-roboto lg:w-[280px] pl-2 xl:w-[365px] focus:outline-none w-full md:w-[250px] h-[50px] border-2 rounded-[10px] bg-transparent border-yellowAcc"
                        />
                        {errors.phone && (
                            <div className=" text-red-500 m-auto  mt-[15px] mb-[15px]">{`**${errors.phone.message}`}</div>
                        )}
                    </div>

                    {/* email */}

                    <div className="m-auto">
                        <label className=" text-[22px] font-roboto font-semibold capitalize ml-1">
                            Email address
                        </label>
                        <input
                            {...register("email")}
                            placeholder="email Adress "
                            type="text"
                            className="xl:w-[365px]  placeholder:text-[20px] text-[20px] placeholder:text-greenAcc text-greenAcc placeholder:font-roboto font-roboto md:flex block focus:outline-none w-full lg:w-[280px] md:w-[250px]  pl-2 h-[50px] border-2 rounded-[10px] bg-transparent border-yellowAcc"
                        />
                        {errors.email && (
                            <div className=" text-red-500 m-auto  mt-[15px] mb-[5px]">{`**${errors.email.message}`}</div>
                        )}
                    </div>

                    {/* job */}
                    <div className="m-auto">
                        <label className=" text-[22px] font-roboto font-semibold capitalize ml-1">
                            The jop
                        </label>
                        <input
                            type="text"
                            {...register("job")}
                            placeholder="job "
                            className="xl:w-[365px] md:flex block  placeholder:text-[20px]  text-[20px] placeholder:text-greenAcc text-greenAcc  placeholder:font-roboto  font-roboto focus:outline-none lg:w-[280px]  w-full md:w-[250px] h-[50px] pl-2 border-2 rounded-[10px] bg-transparent border-yellowAcc"
                        />
                        {errors.job && (
                            <div className=" text-red-500 m-auto  mt-[15px] mb-[5px]">{`**${errors.job.message}`}</div>
                        )}
                    </div>

                    <div className="m-auto">
                        {/* password */}
                        <label className=" text-[22px] font-roboto font-semibold capitalize ml-1">
                            Password
                        </label>
                        <input
                            {...register("password")}
                            placeholder="password "
                            type="text"
                            className="xl:w-[365px] placeholder:text-[20px]   text-[20px] placeholder:text-greenAcc  text-greenAcc  placeholder:font-roboto
                                font-roboto  focus:outline-none md:flex block lg:w-[280px]  w-full md:w-[250px] pl-2 h-[50px] border-2 rounded-[10px] bg-transparent border-yellowAcc"
                        />
                        {errors.password && (
                            <div className=" text-red-500 m-auto  mt-[15px] mb-[5px]">{`**${errors.password.message}`}</div>
                        )}
                    </div>

                </div>
                <button
                    className={` font-tinos  m-auto my-[3rem] rounded-[10px] text-[26px] bg-greenAcc w-[240px] h-[57px] text-white`}
                >
                    add Employee
                </button>
            </form>
        </div>
    );
}

