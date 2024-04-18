import Buttons from "../components/EncryptedFiles/Buttons";
import EncryptedFilesBody from "../components/EncryptedFiles/EncryptedFilesBody";
import Nav from "../components/Nav";


export default function EncryptedFiles() {
  return (
    <div className='min-h-screen bg-bg py-1'>
    <div className=''>
        <Nav />
        <hr className='w-6/6 h-0.5 bg-gray-300 my-3 '/>
        <div className='w-5/6 m-auto lg:flex lg:flex-row lg:justify-between flex-col justify-center'>
            <Buttons />
        </div>
        <EncryptedFilesBody />
    </div>
    
</div>
  )
}
