import "./style/landingPage.css";
import img from "../assets/landingPage/guy-shows.svg";

import img2 from "../assets/landingPage/standard-quality-control-collage-concept (2) 1.svg";
import encIcon from "../assets/EncAndEecICONS/Vector (1).svg";
import decIcon from "../assets/EncAndEecICONS/Group 2288.svg";
import use from "../assets/landingPage/Vector.svg";
import Footer from "../components/LandingPage/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  
    const technology = [
        {
          id: 1,
          src: encIcon,
          name: "Encryption technology.",
          des: "The practice of protecting information using encrypted algorithms, hashes, and signatures",
        },
        {
          id: 2,
          src: decIcon,
          name: "Decryption technology.",
          des: "The practice of protecting information using encrypted algorithms, hashes, and signatures",
        },
        {
          id: 3,
          src: use,
          name: "Ease of use.",
          des: "The practice of protecting information using encrypted algorithms, hashes, and signatures",
        },
      ];
    
      return (
        <div className=" w-full">
          <div className="h-[434px]  relative">
            <img src={img} className="w-full absolute " />
            <div className="absolute w-full">
              <Navbar />
              <h1 className="text-white md:block hidden text-center lg:mt-[70px] capitalize md:text-[64px] font-tinos">
                About Us
              </h1>
            </div>
          </div>
          {/*  */}
    
          <div className="h-[360px]  w-full flex md:flex-row flex-col md:my-[100px]  justify-center gap-x-[70px] items-center">
            <div className="">
              <h1 className="md:text-[48px] ml-10 sm:text-[30] text-[25px] font-tinos sm:mt-0 mt-[-300px] font-bold">Our mission</h1>
              <p className="lg:w-[475px] ml-10 md:mb-0 mb-[50px] m-auto lg:text-[24px] md:[20px] font-normal text-greenAcc leading-8 font-roboto">
                text ever since when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
            </div>
            <div>
            <img src={img2}  />
            </div>
         
          </div>
    
          {/*  */}
    
          <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-5/6 justify-between m-auto text-center my-[200px]">
            {technology.map((item) => (
              <div key={item.id} className="">
                <div className="bg-yellowAcc w-[155px] h-[155px] m-auto  rounded-full flex justify-center items-center">
                  <img className="w-[73px] h-[91px]" src={item.src} />
                </div>
                <h1 className="text-[28px] leading-8 text-greenAcc my-3 font-tinos font-bold">
                  {item.name}
                </h1>
                <p className="w-[312px] m-auto mb-10 leading-7 font-normal text-[24px] font-roboto text-p">
                  {item.des}
                </p>
              </div>
            ))}
          </div>
          <Footer/>
        </div>
  )
}
