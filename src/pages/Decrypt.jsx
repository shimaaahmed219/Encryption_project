

import DecryptType from '../components/Decryption/DecryptType'
import Bcol from '../components/EncriptionRowAndCol/Bcol'
import Brow from '../components/EncriptionRowAndCol/Brow'
import Nav from '../components/Nav'

export default function Decrypt() {
  return (
    <div className= 'h-[800px] bg-bg  py-[0.15rem] w-6/6 '>

      <Nav/>
      <hr className='w-6/6  h-[0.07                                                                                                                                 rem] bg-greenAcc my-3'/>


      <div className='w-4/6 h-[100px] m-auto'>
        
        <DecryptType/>
        
     <div className='md:block hidden'>
      
     <div className='flex flex-row my-0 m-auto justify-center'>
          <Bcol/>
          <Brow/>
          <Bcol />
       
        </div>
        <div className=' flex my-0 mt-[-4rem] justify-center'>
          <Brow />
        </div>
     </div>
      


       
      </div>
    

    </div>
  )
}