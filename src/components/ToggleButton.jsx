import useAppData from '../data/hook/UseAppData'
import { MoonSolidIcon, SunSolidIcon } from './Icons'

export default function ToggleButton(props) {
    const { switchTheme } = useAppData()

    return props.theme === 'dark' ? (
        <div onClick={switchTheme} className={`
            hidden sm:flex items-center justify-start
            bg-gradient-to-r from-amber-400 to-orange-600
            w-14 lg:w-24 h-8 p-1 rounded-full
            cursor-pointer
        `}>
            <div className={`
                flex items-center justify-center
                bg-white text-orange-600
                w-6 h-6
                rounded-full
            `}>
                {SunSolidIcon}
            </div>
            <div className={`
                hidden lg:flex items-center ml-2
                text-white
            `}>
                <span className="text-sm">Ligth</span>
            </div>
        </div>
    ) : (
        <div onClick={switchTheme} className={`
            hidden sm:flex items-center justify-end
            bg-gradient-to-r from-blue-700 to-indigo-900
            w-14 lg:w-24 h-8 p-1 rounded-full
            cursor-pointer
        `}>
            <div className={`
                hidden lg:flex items-center mr-2
                text-white
            `}>
                <span className="text-sm">Dark</span>
            </div>
            <div className={`
                flex items-center justify-center
                bg-slate-900 text-blue-200
                w-6 h-6
                rounded-full
            `}>
                {MoonSolidIcon}
            </div>

        </div>
    )
}