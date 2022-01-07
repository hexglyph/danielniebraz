import useAppData from '../data/hook/UseAppData'
import { MoonSolidIcon, SunSolidIcon } from './Icons'

export default function ToggleButton(props) {
    const { switchTheme } = useAppData()

    return props.theme === 'dark' ? (
        <div onClick={switchTheme} className={`toggletheme
            hidden sm:flex items-center justify-start
            bg-gradient-to-r from-cyan-400 to-sky-600
            w-14 lg:w-18 h-8 p-1 rounded-full ml-4
            cursor-pointer
        `}>
            <div className={`
                flex items-center justify-center
                bg-white text-blue-600
                w-6 h-6
                rounded-full
            `}>
            </div>
            <div className={`
                hidden lg:flex items-center ml-2
                text-white
            `}>
            </div>
        </div>
    ) : (
        <div onClick={switchTheme} className={`toggletheme
            hidden sm:flex items-center justify-end
            bg-gradient-to-r from-rose-500 to-pink-700
            w-14 lg:w-18 h-8 p-1 rounded-full ml-4
            cursor-pointer
        `}>
            <div className={`
                hidden lg:flex items-center mr-2
                text-white
            `}>
            </div>
            <div className={`
                flex items-center justify-center
                bg-white text-red-600
                w-6 h-6
                rounded-full
            `}>
            </div>

        </div>
    )
}