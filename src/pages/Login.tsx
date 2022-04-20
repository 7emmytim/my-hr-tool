import 'antd/dist/antd.min.css'
import { useAuth } from '../contexts/AuthContext'
import ThemeSwitcher from '../components/General/ThemeSwitcher'

const Login = () => {

  const [, changeAuth] = useAuth()

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-[#0d1117] w-full'>
      <div className='flex flex-col bg-white dark:bg-[#161b22] shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-full sm:w-1/2 xl:w-1/4'>
        <ThemeSwitcher />

        <div className='mt-5 space-y-6'>
          <div className='w-full space-y-1'>
            <input type='text' placeholder='User ID' className='w-full pl-4 py-2 dark:text-white bg-blue-100 dark:bg-[#0d1117] rounded-md border-[#30363d] dark:border-[1px] focus:outline-none focus:text-black dark:focus:text-white' />
          </div>
          <div className='w-full space-y-1'>
            <input type='password' placeholder='Password' className='w-full pl-4 py-2 dark:text-white bg-blue-100 dark:bg-[#0d1117] rounded-md border-[#30363d] dark:border-[1px] focus:outline-none focus:text-black dark:focus:text-white' />
          </div>
          <button onClick={() => changeAuth('login')} className='w-full bg-[#58a6ff] text-white p-3 rounded-md'>LOGIN</button>
        </div>
      </div>
    </div>
  )
}

export default Login