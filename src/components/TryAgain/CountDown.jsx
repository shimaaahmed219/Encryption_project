

import { useState, useEffect } from 'react'
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { useNavigate } from 'react-router-dom';
useNavigate
export default function Countdown() {

  const [seconds, setSeconds] = useState(5 * 60);
  const navigate = useNavigate()
  useEffect(() => {


    const timeoutId = setTimeout(() => {
      navigate('/login')
    }, seconds * 1000);

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
      clearTimeout(timeoutId)
    }

  }, [seconds, navigate]);




  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, '0')}  :   ${seconds.toString().padStart(2, '0')}`;

  };



  return (
    <div className='md:w-3/6  w-6/6 h-full  flex justify-center flex-col lg:mr-[230px] text-greenAcc m-auto'>

      <h2 className={`font-urdo lg:text-4xl text-3xl leading-extra-loose`}>Sorry, your account has been</h2>
      <h2 className={` font-urdo lg:text-4xl text-3xl leading-extra-loose mt-4`}>disabled for <span className='text-yellowAcc'>5 minutes</span></h2>



      <div className={`font-Stick text-[96px] my-[2.75rem] `}>
        <h2 className=''>{formatTime(seconds)}</h2>
      </div>
      <div>
        <button className='w-[219px] h-[70px] text-2xl  text-white bg-greenAcc rounded-xl'>< AutorenewIcon />  Try again</button>
      </div>

    </div>


  )
}


