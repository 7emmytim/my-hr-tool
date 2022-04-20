import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'
import Header from './Header'
import Sidebar from './Sidebar'

const AuthLayout = () => {
  return (
    <div className='min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white'>
      <Sidebar />
      <div className='h-full ml-14 mb-10 md:ml-64'>
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}

export default AuthLayout