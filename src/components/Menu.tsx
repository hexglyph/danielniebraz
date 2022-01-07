import MenuItem from './MenuItem'
import { LogoutIcon, HomeIcon, SettingsIcon, BellIcon } from './Icons'
import ToggleButton from './ToggleButton'
import useAppData from '../data/hook/UseAppData'

export default function Menu(props) {
    const { theme, switchTheme } = useAppData()

    return (
        <ul className={`flex justify-end items-center mt-4 pt-4`}>
            <MenuItem url="https://github.com/hexglyph" target='_blank' text="github" />
            <MenuItem url="https://www.linkedin.com/in/danielniebraz/?locale=en_US" target='_blank' text="linkedin" />
            <ToggleButton theme={theme} switchTheme={switchTheme} />
        </ul>
    )
}