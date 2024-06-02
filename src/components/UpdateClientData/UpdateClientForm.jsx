/* eslint-disable no-unused-vars */

import { url } from "../URL";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import StepTwo from "./StepTwo";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";


export default function UpdateClientForm() {
  // get client id
  const { id } = useParams();
const [isLoding,setIsLoading] =useState()
  // add multi step
  const [step, setStep] = useState(1);

  // show client images
  const [image, setImage] = useState({});

  // set data in form
  const [client, setClient] = useState({
    first_name: "",
    second_name: "",
    third_name: "",
    last_name: "",
    first_name_ar: "",
    second_name_ar: "",
    third_name_ar: "",
    last_name_ar: "",
    type: "",
    passports_department: "",
    national_id: "",
    date_of_birth: "",
    job: "",
    phone: "",
    home_phone: "",
    academic_qualification: "",
    university_id: "",
    marital_status: "",
    address: "",
    governorate: "",
    gender: "",
    husband_name: "",
    photo: "",
    national_id_photo: "",
    birth_cert: "",
    graduation_cert: "",
    religion: "",
    age: "",
    client_order: {
      created_at: "",
      received_type: "",
      reject_reason: "",
      status: "",
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm({ mode: "all" });
  // console.log("errors", errors);

  // next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // prev step
  const prevStep = () => {
    setStep(step - 1);
  };

  // goto page from header
  const goToStep = (stepNumber) => {
    setStep(stepNumber);
  };

  // view data
  useEffect(() => {
    axios.get(`${url}/client/${id}`).then((res) => {
      const {
        photo,
        national_id_photo,
        birth_cert,
        graduation_cert,
        ...restData
      } = res.data.data;
      setClient(restData);
      Object.keys(res.data.data).forEach((key) => {
        if (
          key === "photo" ||
          key === "national_id_photo" ||
          key === "graduation_cert" ||
          key === "birth_cert"
        ) {
          // return setValue(key, null);
        } else {
          return setValue(key, res.data.data[key]);
        }
      });
    });
  }, []);

  useEffect(() => {
    axios.get(`${url}/client/${id}`).then((res) => {
      setImage(res.data.data);
      console.log(res);
    });
  }, []);

  // update client data
  const onsubmit = (data) => {
    // add data in form data
    const formdata = new FormData();

    // checked data
    Object.entries(data).forEach(([key, value]) => {
      if (
        value &&
        ![
          "photo",
          "national_id_photo",
          "birth_cert",
          "graduation_cert",
        ].includes(key)
      ) {
        formdata.append(key, value);
      }
    });

    // Append image data to formData if provided
    const imageFields = [
      "photo",
      "national_id_photo",
      "birth_cert",
      "graduation_cert",
    ];
    imageFields.forEach((field) => {
      // Check if the field has a value before appending it
      if (data[field] && data[field][0]) {
        formdata.append(field, data[field][0]);
      }
    });

    axios
      .post(`${url}/client/${id}`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          uthorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Citizen data updated successfully.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "An error occurred while updating citizen data.",
          });
        }
      })
      .catch((error) => {
        // console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "An error occurred while updating citizen data.",
        });
      });
  };
console.log("errors",errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        {/* page1 */}
     
          <div
            className={` ${
              step === 1 ? "block" : "hidden"
            } w-[88%] m-auto scroll-px-20 `}
          >
            <StepOne
              client={client}
              register={register}
              nextStep={nextStep}
              errors={errors}
              step={step}
              goToStep={goToStep}
              image={image}
            />
          </div>
     

        {/* steep 2 */}

       
          <div
            className={`bg-bg min-h-screen w-full ${
              step === 2 ? "block" : "hidden"
            } `}
          >
            <StepTwo
              client={client}
              register={register}
              nextStep={nextStep}
              errors={errors}
              prevStep={prevStep}
              step={step}
              goToStep={goToStep}
              image={image}
            />
          </div>
   

        {/* steep 3 */}

       
          <div className={`${step === 3 ? "block" : "hidden"}`}>
            <StepThree
              register={register}
              nextStep={nextStep}
              image={image}
              errors={errors}
              prevStep={prevStep}
              step={step}
              goToStep={goToStep}
            />
          </div>
      
        {/* steep  4 */}
      
          <div className={`${step === 4 ? "block" : "hidden"}`}>
            <StepFour
              register={register}
              errors={errors}
              prevStep={prevStep}
              step={step}
              goToStep={goToStep}
              watch={watch}
            />
          </div>
    
        {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
      </form>
    </div>
  );
}
