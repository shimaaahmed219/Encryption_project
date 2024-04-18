import { Link, useNavigate } from 'react-router-dom'
import logOuticon from '../../assets/saidbaricon/Group (2).svg'
import { useLogoutUserMutation } from '../../rtk/api/apiSlice';

export default function Logout() {
    const [logoutUser] = useLogoutUserMutation();
    const navigate = useNavigate();

    // handil logout function
    const logout = async (event) => {
        event.preventDefault();
        try {
          const response = await logoutUser();
          if (response.error) {
            console.error(response.error);
            localStorage.clear();
            navigate('/login');
          } else {
            localStorage.clear();
            navigate('/login');
          }
        } catch (error) {
          console.error(error);
          localStorage.clear();
          navigate('/login');
        }
    };

    return (
        <div className='px-5 py-2 hover:pl-10'>
            <Link
                to=""
                className={`font-roboto font-medium flex my-2 capitalize items-center gap-[20px] w-full h-[40px] text-white border-none text-left text-[20px] hover:bg-opacity-10`}
                onClick={logout}
            >
                <img src={logOuticon} alt='' width={20} height={20} />
                Log out
            </Link>
        </div>
    )
}
