import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { url } from "../URL";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

export default function PassFormRequest() {
  const [selectedImage, setSelectedImages] = useState({});
  const [step, setStep] = useState(1);

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
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        {/* page1 */}
        <StepOne
          register={register}
          step={step}
          goToStep={goToStep}
          errors={errors}
          nextStep={nextStep}
          handleImageChange={handleImageChange}
          selectedImage={selectedImage}
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
        />

        {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
      </form>
    </div>
  );
}
