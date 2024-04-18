import LoginMob from "../components/Login/LoginMob";
import LoginWeb from "../components/Login/LoginWeb";


export default function Login() {
  return (
    <div className='w-full h-screen'>
    {/* web screen */}

    <LoginWeb />


    {/* mobile screen  */}
    <div className=' w-full h-screen xsm:hidden block'>


        <LoginMob />

    </div>
</div>
  )
}
