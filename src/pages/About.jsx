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
      des: " The application encrypts sensitive data, which enhances the security of your data",
    },
    {
      id: 2,
      src: decIcon,
      name: "Decryption technology.",
      des: "  The application also has a data decryption feature to ensure data protection",
    },
    {
      id: 3,
      src: use,
      name: "Ease of use.",
      des: "The application is characterized by ease of use, smoothness,",
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

      <div className="h-[360px]  w-full flex md:flex-row flex-col lg:my-[100px] sm:my-[-50px]    justify-center gap-x-[70px] items-center">
        <div className="">
          <h1 className="md:text-[48px] ml-10 sm:text-[30] text-[25px] font-tinos sm:mt-0 mt-[-270px] sm:text-left  font-bold">
            Our mission
          </h1>
          <p className="lg:w-[475px] md:w-[350px] sm:pr-0 sm:w-[475px] w-[250px] text-greenAcc pr-6 ml-10 md:mb-0 mb-[50px] m-auto lg:text-[19px] md:text-[17px] text-[15px] font-normal  leading-8 font-roboto">
          Receiving the data after the citizen enters his data, reviewing and protecting it, sending the data electronically to the competent authorities, encrypted until approved by all parties, and communicating with the citizen if there is a deficiency or error in the sent data. There is a decryption feature after sending the approval.
          </p>
        </div>
        <div className="px-10">
          <img src={img2} />
        </div>
      </div>

      {/*  */}

      <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-5/6 justify-between m-auto text-center md:my-[200px] my-[50px]">
        {technology.map((item) => (

          <div key={item.id} className="w-full my-10">
            <div className="bg-yellowAcc w-[155px] h-[155px] m-auto  rounded-full flex justify-center items-center">
            
            
              <img className="w-[73px] h-[91px]" src={item.src} />
            </div>
           
            <h1 className="sm:text-[28px] text-[24px] leading-8 text-greenAcc my-3 font-tinos font-bold">
              {item.name}
            </h1>
           
            <p className="sm:w-[312px] m-auto mb-10 leading-7 font-normal sm:text-[20px] text-[20px] font-roboto text-p">
              {item.des}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
