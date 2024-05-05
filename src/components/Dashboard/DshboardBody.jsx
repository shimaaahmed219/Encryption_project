import img1 from "../../assets/dashboard/Group 2359.svg"
import img2 from "../../assets/dashboard/OBJECTS.svg"
import grop from "../../assets/dashboard/Group.svg"
import grop1 from "../../assets/dashboard/Group 2363.svg"
export default function DshboardBody() {
  return (
    <div className="w-[79%] ms-auto min-h-screen px-20 mt-20">
        <div className="w-full rounded-[40px] h-[264px] bg-Dashboard flex justify-between">
<div className="w-[45%] text-center py-10 px-6">
    <h1 className="font-tinos font-bold text-[40px] text-greenAcc ">WELCOME !</h1>
    <p className="text-[20px] leading-7 font-normal text-center text-white">
    Issuing ahigh,quality electronic passport that cntains an electronic chip to raise the level of security protection
    </p>
</div>
<div className="flex justify-center relative mt-[-px] right-[-30px]">
<img src={grop}  className="absolute top-[20px] left-[-140px]"/>
    <img src={img1} className="absolute ml-[-210px] mt-[-30px]"/>
    <img src={img2}  className="z-50"/>
    <img src={grop1}  className="absolute bottom-3 right-[-60px]"/>
    
   
    {/* <img src={img7}  className="absolute bottom-[55px]  right-[15px]"/> */}
  
    
</div>
        </div>


    </div>
  )
}
