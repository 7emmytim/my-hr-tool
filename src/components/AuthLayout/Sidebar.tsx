import { NavLink } from 'react-router-dom'
import { RiFileList3Line } from 'react-icons/ri'
import { IoGridOutline } from 'react-icons/io5'

const Sidebar = () => {

    const navData = [
        { to: '/', icon: <IoGridOutline className='h-6 w-6' />, name: 'Dashboard' },
        { to: '/invoice', icon: <RiFileList3Line className='h-6 w-6' />, name: 'Anonymous' }
    ]

    return (
        <div className="fixed flex flex-col left-0 w-14 hover:w-64 dark:bg-gray-900 h-full text-white transition-all duration-300 z-10 py-10">
            <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                <div className="flex flex-col py-4 space-y-4">
                    {
                        navData.map(item => {
                            return (
                                <NavLink to={item.to} key={item.name} className={({ isActive }) => `${isActive && 'text-[#1EAAE7]'} flex flex-row items-center text-gray-500 gap-6`}>
                                    <span className='inline-flex justify-center items-center ml-4'>
                                        {item.icon}
                                    </span>
                                    <span className='ml-2 font-bold tracking-wide truncate'>{item.name}</span>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar