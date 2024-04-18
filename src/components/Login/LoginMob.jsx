

import img from '../../assets/navImg/Group (1).svg'
export default function LoginMob() {
  return (
    <div className=' bg-bg w-full h-full'>
       <div className=' w-full h-full grid justify-center items-center'>
      <div>
        
<img
src={img}
alt="enc"
className=' my-4 m-auto'
/>
<h1 className={`font-tinos font-bold text-center uppercase text-[48px] text-greenAcc`}>login</h1>
      
<form className='text-center mt-[-20px] '>
                            <input
                                type="email"
                                placeholder='Email'
                                className={`block focus:outline-none shadow-form placeholder:text-2xl rounded-input m-auto w-[380px] px-5 py-[20px] my-10`} />
                            <input
                                type="password"
                                placeholder='password'
                                className='block focus:outline-none shadow-form placeholder:text-2xl rounded-input m-auto  w-[380px] px-5 py-[20px] my-10' />

                            <button
                                className={`font-tinos font-bold  w-[210px] h-[60px] capitalize  text-center text-white text-[32px] bg-greenAcc rounded-input`}>login</button>
                        </form>


      </div>
       </div>
    </div>
  )
}
