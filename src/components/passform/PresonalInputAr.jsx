/* eslint-disable react/prop-types */

export default function PresonalInputAr({ register, errors }) {
  return (
    <>
      {/* presonal data */}
      <div className="md:px-10 md:grid xl:grid-cols-4 lg:grid-cols-3 gap-x-5 md:grid-cols-2 flex flex-col-reverse  pt-5 text-greenAcc font-roboto text-xl m-auto font-medium">
        {/* first name input */}
        <div className="w-[100%] flex flex-col justify-center ">
          <label className="block py-3 ms-auto ml-2">العائله</label>
          <input
            {...register("first_name_ar", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            type="text"
            className={` xl:w-[240px] w-full bg-transparent focus:outline-none   h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
          />
          {/* set first name error */}
          {errors.last_name_ar && (
            <span className="text-red-500 text-[15px] py-5 ">
              {" "}
              ***{errors.last_name_ar.message}
            </span>
          )}
        </div>

        {/* father name */}
        <div className="w-[100%] flex flex-col justify-center ">
          <label className="block  py-3 ms-auto ml-2">الجد</label>
          <input
            type="text"
            {...register("third_name_ar", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            className={` xl:w-[240px] bg-transparent w-[99%] h-[50px] focus:outline-none  px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
          />

          {/* set secons name errors */}
          {errors.third_name_ar && (
            <span className="text-red-500 py-5 text-[15px] ">
              ***{errors.third_name_ar.message}
            </span>
          )}
        </div>

        {/* grandba */}
        <div className="w-[100%] flex flex-col justify-center ">
          <label className="block ms-auto py-3  ml-2">الأب</label>
          <input
            {...register("second_name_ar", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            type="text"
            className={` xl:w-[240px] bg-transparent w-[99%] h-[50px] focus:outline-none   px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
          />
          {/* third name errors */}
          {errors.second_name_ar && (
            <span className="text-red-500 py-5 text-[15px]">
              ***{errors.second_name_ar.message}
            </span>
          )}
        </div>

        {/* family name */}
        <div className="w-[100%] flex flex-col justify-center ">
          <label className="block py-3 ms-auto ml-2">الاسم الأول</label>
          <input
            type="text"
            {...register("last_name_ar", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            className={` xl:w-[240px]  w-[95%] h-[50px] bg-transparent focus:outline-none  px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
          />
          {/* set last name errors */}
          {errors.first_name_ar && (
            <span className="text-red-500 text-[15px] py-5 ">
              ***{errors.first_name_ar.message}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
