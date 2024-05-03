/* eslint-disable react/prop-types */

export default function PresonalnputsName({ register, errors }) {
  return (
    <>
      {/* presonal data */}
      <div className="md:px-10 md:grid xl:grid-cols-4 lg:grid-cols-3 gap-x-5 md:grid-cols-2 flex flex-col pt-5 text-greenAcc font-roboto text-xl m-auto font-medium">
        {/* first name input */}
        <div className="w-[100%] flex flex-col justify-center items-center">
          <label className="block py-3 me-auto ml-2">First Name</label>
          <input
            {...register("first_name", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            type="text"
            className={` xl:w-[240px] w-full bg-transparent focus:outline-none  text-[18px] h-[50px] px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
          />
          {/* set first name error */}
          {errors.first_name && (
            <span className="text-red-500 text-[15px] py-5 ">
              {" "}
              ***{errors.first_name.message}
            </span>
          )}
        </div>

        {/* father name */}
        <div className="w-[100%] flex flex-col justify-center items-center">
          <label className="block  py-3 me-auto ml-2">Father name</label>
          <input
            type="text"
            {...register("second_name", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            className={` xl:w-[240px] bg-transparent text-[18px] w-[99%] h-[50px] focus:outline-none  px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
          />

          {/* set secons name errors */}
          {errors.second_name && (
            <span className="text-red-500 py-5 text-[15px] ">
              ***{errors.second_name.message}
            </span>
          )}
        </div>

        {/* grandba */}
        <div className="w-[100%] flex flex-col justify-center items-center">
          <label className="block py-3 me-auto ml-2">Grandpa</label>
          <input
            {...register("third_name", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            type="text"
            className={` xl:w-[240px] bg-transparent w-[99%] h-[50px] text-[18px] focus:outline-none   px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
          />
          {/* third name errors */}
          {errors.third_name && (
            <span className="text-red-500 py-5 text-[15px]">
              ***{errors.third_name.message}
            </span>
          )}
        </div>

        {/* family name */}
        <div className="w-[100%] flex flex-col justify-center items-center">
          <label className="block py-3 me-auto ml-2">Family name</label>
          <input
            type="text"
            {...register("last_name", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            className={` xl:w-[240px] text-[18px]  w-[95%] h-[50px] bg-transparent focus:outline-none  px-[20px] py-[6px] rounded-input border-[1px] border-yellowAcc `}
          />
          {/* set last name errors */}
          {errors.last_name && (
            <span className="text-red-500 text-[15px] py-5 ">
              ***{errors.last_name.message}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
