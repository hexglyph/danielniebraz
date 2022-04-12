import { EyeIcon, MinusIcon, PlusIcon, ResetIcon } from "./Icons";
import ToggleButton from './ToggleButton'
import useAppData from '../data/hook/UseAppData'

export default function Accessibility() {
    const { theme, switchTheme } = useAppData()
    return (
        <div className={`flex w-full pt-8 justify-end items-center text-white`}>
            <span className={`mr-4`}>Accessibility</span>
            {PlusIcon}
            {MinusIcon}
            {ResetIcon}
            <ToggleButton theme={theme} switchTheme={switchTheme} />
        </div>
    )
}