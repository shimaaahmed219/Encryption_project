import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { url } from "../URL";
// import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import FirstStep from "./FirstStep";
import Swal from 'sweetalert2';
export default function PassFormRequest() {
  const [selectedImage, setSelectedImages] = useState({});
  const [step, setStep] = useState(1);
  const [uploadComplete, setUploadComplete] = useState(false);
  
  // show image
  const handleImageChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImages((prevState) => ({
        ...prevState,
        [fieldName]: URL.createObjectURL(file),
      }));
    }
  };

  // useform
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  // Determine if all fields are filled
  
  const [uploadProgress, setUploadProgress] = useState(0);
  // fatching data
  const onsubmit = (data) => {
    console.log(data);

    // add data in form data

    const finalData = {
      ...data,
      photo: data.photo[0],
      national_id_photo: data.national_id_photo[0],
      birth_cert: data.birth_cert[0],
      graduation_cert: data.graduation_cert[0],
    };

   
  axios
  .post(`${url}/client`, finalData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      setUploadProgress(percentCompleted);
    },
  })
  .then((res) => {
    setUploadProgress(0);
    console.log(res);
    // Show SweetAlert upon successful submission
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'The citizen has been added successfully!',
    });
    setUploadComplete(true); // تعيين uploadComplete إلى true بعد الانتهاء من الرفع بنجاح
  })
  .catch((error) => {
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'An error occurred while adding the citizen. Please try again later.',
    });
  })
      // setUploadComplete(true)
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        {/* page1 */}
        <FirstStep
          register={register}
          step={step}
          goToStep={goToStep}
          errors={errors}
          nextStep={nextStep}
          handleImageChange={handleImageChange}
          selectedImage={selectedImage}
         uploadProgress={uploadProgress}
        />

        {/* steep 2 */}
        <StepTwo
          register={register}
          step={step}
          goToStep={goToStep}
          errors={errors}
          nextStep={nextStep}
          prevStep={prevStep}
         
        />

        {/* steep 3 */}
        <StepThree
          register={register}
          step={step}
          goToStep={goToStep}
          errors={errors}
          nextStep={nextStep}
          prevStep={prevStep}
          handleImageChange={handleImageChange}
          selectedImage={selectedImage}
         
        />
        {/* steep  4 */}
        <StepFour
          register={register}
          step={step}
          goToStep={goToStep}
          errors={errors}
          nextStep={nextStep}
          prevStep={prevStep}
          uploadProgress={uploadProgress}
          uploadComplete={uploadComplete}
         
        />

        {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
      </form>
    </div>
  );
}
