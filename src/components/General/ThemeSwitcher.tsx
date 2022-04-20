import React from 'react'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
import { useTheme } from '../../contexts/ThemeContext'

const ThemeSwitcher = () => {

    const { theme, changeTheme } = useTheme()

    return (
        <span onClick={changeTheme} className='cursor-pointer mx-auto my-5'>
            {theme === 'light' ? <IoMoonOutline className='w-8 h-8' /> : <IoSunnyOutline className='text-white w-8 h-8' />}
        </span>
    )
}

export default ThemeSwitcher