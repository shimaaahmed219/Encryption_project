/* eslint-disable react/prop-types */
import uploadImg from "../../assets/passForm/upload.svg";
import img from "../../assets/passForm/Group.svg";
export default function HeaderStepOne({
  register,
  errors,
  selectedImage,
  handleImageChange,
}) {
  return (
    <div className=" md:flex justify-between px-10">
      <div className="w-1/6 lg:mt-[60px] mt-20 md:block hidden ">
        <img src={img} alt="" />
      </div>

      <div className="md:w-3/6 w-full mt-20 ">
        <div className=" text-center lg:ml-[-90px] flex flex-col justify-center  items-center">
          <h3
            className={`font-tinos font-bold md:text-[26px] text-center leading-8 `}
          >
            Request to issue a regular Egyptian passport
          </h3>
          <h5 className="font-roboto font-medium md:text-[24px] leading-7 mt-3 ">
            (Form No. 19 Passports) is possible
          </h5>
        </div>
      </div>

      <div className="w-[158px] h-[207px]  relative mt-10 bg-fileUploud  md:ml[0px]        ">
        <input
          {...register("photo", {
            required: {
              value: true,
              message: "This field is required",
            },
          })}
          onChange={(e) => handleImageChange(e, "photo")}
          type="file"
          className="opacity-0 w-[158px] absolute  h-[100%] z-50"
        />
        {selectedImage["photo"] && (
          <img
            src={selectedImage["photo"]}
            alt="Selected"
            className="w-full  z-40 absolute h-full object-cover "
          />
        )}
        <img src={uploadImg} className="absolute mt-[50px] ml-[55px]" />

        <h6
          className={`font-tions font-bold  text-thin text-greenAcc text-[18px] w-full text-center absolute mt-[100px] `}
        >
          Upload a photo
        </h6>
        <h6
          className={`font-tions font-bold text-thin text-greenAcc uppercase text-[24px] w-full text-center absolute mt-[120px] `}
        >
          4*6 cm
        </h6>
        {/* error messge from presonal image */}
        {errors.photo && (
          <span className="text-red-500 text-[15px] ml-[-5px] absolute mt-[210px]">
            ***{errors.photo?.message}
          </span>
        )}
      </div>
    </div>
  );
}
