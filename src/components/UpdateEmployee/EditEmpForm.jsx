/* eslint-disable react/prop-types */
import { url } from "../URL";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";
import iconAdd from "../../assets/AddEmployee/Group.svg";
const schema = z.object({
  name: z.string().min(6).max(50),
  email: z.string().email(),

  phone: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
    user_type:z.any(),
  job: z
    .string()
    .refine((value) => value.trim() !== "", {
      message: "This field is required",
    }),
   
  photo: z
    .any()
    .refine((value) => value !== "", { message: "This field is required" }),
   
});


export default function EditEmpForm({ setIsLoading, isLoading }) {
  const { id } = useParams();

  // add defolt value in inputs
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  const [employeeData, setemployeeData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    photo: "",
    user_type:"",
  });

  // from apdate
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      ...employeeData,
    },
  });
  console.log("data", employeeData);
  // show employee data
  useEffect(() => {
    axios
      .get(`${url}/employee/${id}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setemployeeData(res.data.data);
        Object.keys(res.data.data).forEach((key) => {
          setValue(key, res.data.data[key]);
          console.log("set", res.data.data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
 
  // update employee
  const onSubmitForm = async (data) => {
    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("email", data.email);
    formdata.append("position", data.job);
    formdata.append("user_type", data.user_type);
    formdata.append("photo", data.photo[0]);
    formdata.append("phone", data.phone);
   
    setIsLoading(true);
    try {
        const res = await axios.post(`${url}/employee/${id}`, formdata, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
        });
        console.log(res.data);
        if (res.status === 200) {
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
            });
        }
    } catch (error) {
        // handle error
    }
    setIsLoading(false);
};

  return (
    <div
      className="xl:w-[70%] w-[80%] font-roboto text-[18px] h-full text-greenAcc
     shadow-shadowEmp bg-bgEmp rounded-[20px] my-10"
    >
      <form onSubmit={handleSubmit(onSubmitForm)}>
        {/* update image */}

        <div className="w-full  flex flex-col items-center justify-center">
          <div
            className="w-[80px] h-[80px] mt-6 mb-5 relative rounded-full
         bg-greenAcc flex justify-center items-center "
          >
             <img src={iconAdd} className="w-[80%]" />
            <input
              {...register("photo")}
              onChange={handleImageChange}
              type="file"
              className=" w-full h-full z-50 m-auto opacity-0 absolute"
            />
            {employeeData.photo ? (
              <img
                className=" object-cover w-full h-full absolute rounded-full "
                src={`https:epassport-api.preview-ym.com/${employeeData.photo}`}
              />
            ) : (
              ""
            )}
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full absolute h-full object-cover rounded-full"
              />
            )}
            {errors.photo && (
              <div className=" text-red-500 m-auto ml-[-20px] text-[15px] ">{`**${errors.photo.message}`}</div>
            )}
          </div>
          <h2 className={` font-tinos text-greenAcc text-[22px] mt-[-20px] capitalize`}>
            {employeeData.name}
          </h2>
          <h1
            className={` font-tinos font-bold text-yellowAcc text-[20px] capitalize`}
          >
            {" "}
            update
          </h1>
        </div>

        {/* inputs */}
        <div className="flex flex-col md:gap-y-3 gap-y-5 w-full px-5 ">
          <div className=" flex md:flex-row flex-col gap-y-3 w-full justify-around ">
            {/* name */}
            <div className="  md:w-editEmplyeInput w-full  flex flex-col  ">
              <label className="my-2 mx-1 text-label font-semibold">Name</label>
              <input
                {...register("name")}
                type="text"
                placeholder="name"
                className="  w-full text-input border-[1px] bg-transparent focus:outline-none rounded-input h-input px-5  border-yellowAcc "
              />
              {errors.name && (
                <div className=" text-red-500 m-auto text-[14px] mt-[15px] mb-[15px]">
                  {`**${errors.name.message}`}
                </div>
              )}
            </div>

            {/* phone */}
            <div className="   md:w-editEmplyeInput w-full flex flex-col ">
              <label className="my-2 mx-1 text-label font-semibold">phone</label>
              <input
                {...register("phone")}
                type="text"
                placeholder="phone Number"
                className=" border-[1px] text-input focus:outline-none bg-transparent rounded-input h-input px-5  border-yellowAcc"
              />
              {errors.phone && (
                <div className=" text-red-500 m-auto text-[15px] mt-[15px] mb-[15px]">
                  {`**${errors.phone.message}`}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col  w-full ">
            <div className=" flex md:flex-row flex-col gap-y-4 w-full justify-around ">
              {/* name */}
              <div className="  md:w-editEmplyeInput w-full flex flex-col  ">
                <label className="my-2 mx-1 text-label font-semibold">Email address</label>
                <input
                  {...register("email")}
                  type="text"
                  placeholder="Email Address"
                  className="  w-full border-[1px] text-input focus:outline-none bg-transparent rounded-input h-input px-5  border-yellowAcc "
                />
                {errors.email && (
                  <div className=" text-red-500 text-[15px] mt-[15px] mb-[15px]">{`**${errors.email.message}`}</div>
                )}
              </div>

              {/* phone */}
              <div className="   md:w-editEmplyeInput w-full flex flex-col ">
                <label className="my-2 mx-1 text-label font-semibold">The job</label>
                <input
                  {...register("job")}
                  type="text"
                  placeholder="job"
                  className=" border-[1px] text-input bg-transparent focus:outline-none  rounded-input h-input px-5  border-yellowAcc"
                />
                {errors.job && (
                  <div className=" text-red-500 text-[15px] mt-[15px] mb-[15px]">{`**${errors.job.message}`}</div>
                )}
              </div>
              
            </div>
            {/* <div className="   md:w-editEmplyeInput w-full flex flex-col ">
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
                  <option value="mofa">recruitment district</option>
                </select>
              </div> */}
                <div className=" flex md:flex-row flex-col gap-y-3 w-full justify-around ">
            {/* name */}
            <div className="  md:w-editEmplyeInput w-full  flex flex-col  ">
            <label className="my-3 mx-1 text-label font-semibold">
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
                  <option value="recruitment district">recruitment district</option>
                </select>
             
              
            </div>

            {/* phone */}
            <div className="   md:w-editEmplyeInput w-full flex flex-col ">
            
            
            </div>
          </div>
          </div>
          <div className="w-full flex justify-center">
            <button
            disabled={isLoading}
              type="submit"
              className={` outline-none:focus-none font-tinos font-bold xl:ms-7  my-[2rem] rounded-[10px] text-[26px] bg-greenAcc sm:w-[198px] w-[150px] h-[55px] text-white`}
            >
              save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
