




import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import icon from '../../assets/arrow-up.svg'

function DecryptType() {
  return (
    <div className=' w-[100%] h-[6rem]  grid  my-10'>



      <form className='w-[100%] h-full '>
        <div className='flex w-[100%] justify-between  '>

          <input placeholder='Enter Encryption File Name' type="text" className='w-[40%] bg-greenAcc border-4 pl-5 placeholder:text-white border-white h-[3.75rem] text-white focus:outline-none rounded-input' />
          <div className='w-[50%] flex flex-row rounded-input border-white border-4 relative '>
            <select className={`font-roboto focus:outline-none select appearance-none px-5  rounded-input text-2xl w-[100%]  h-[3.75rem] bg-greenAcc appearanse-none text-white `}>
              <option>Choose the encryption type </option>
              <option>Choose the encryption type </option>
              <option>Choose the encryption type </option>
              <option>Choose the encryption type </option>

            </select>
            <div className='text-white flex absolute mt-[10px]  justify-center items-center bg-greenAcc text-[50px]  right-5  h-[3.75rem '><ExpandMoreIcon className='text-[40px]' /></div>

          </div>
        </div>

        <div className="w-5/6 m-auto h-[18rem] grid  mt-[5.5rem]">
          <div className=" relative  mt-10 w-[84px] h-[84px] bg-yellowAcc m-auto   rounded-full items-center justify-center grid">
            <img src={icon} alt='' />
          </div>
          <input
            type="file"
            className="z-40 absolute right-[30rem] w-6/6 h-[10rem] opacity-0"
          />
          <h1 className={`font-roboto text-center text-[32px] px-[140px]`}>
          Upload the file you want to decrypt or name here
          </h1>
        </div>
        <div className="flex justify-center mb-[3rem] w-[6/6] bg-bg">
          <button className={` font-tinos w-[262px] h-[60px]  text-2xl text-center  shadow-4xl rounded-input text-white bg-greenAcc mt-[5.5rem] m-auto`}>Decryption</button>
        </div>
      </form>
    </div>
  )
}
export default DecryptType