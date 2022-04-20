import ThemeSwitcher from "../General/ThemeSwitcher"

const Header = () => {
    return (
        <div className="flex flex-col bg-gray-100 dark:bg-[#0d1117]">
            <ThemeSwitcher />
            <ThemeSwitcher />
        </div>
    )
}

export default Header