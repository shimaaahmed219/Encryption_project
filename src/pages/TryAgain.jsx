

import polygon from '../assets/tryAgain/Polygon.svg'
import Countdown from '../components/TryAgain/CountDown'

export default function TryAgain() {
  return (
    <div className='bg-bg md:flex md:flex-row h-screen grid justify-center md:placeholder:justify-between text-center'>
<img src={polygon} alt="polygon" className='md:block hidden'/>
<Countdown/>



    </div>
  )
}

