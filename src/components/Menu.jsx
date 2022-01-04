import MenuItem from './MenuItem'
import { LogoutIcon, HomeIcon, SettingsIcon, BellIcon } from './Icons'
import ToggleButton from './ToggleButton'
import useAppData from '../data/hook/UseAppData'

export default function Menu(props) {
    const { theme, switchTheme } = useAppData()

    return (
        <ul>
            <MenuItem url="/" text="Home" />
            <MenuItem url="/projects" text="projects" />
            <MenuItem url="https://github.com/hexglyph" text="github" />
            <MenuItem url="https://www.linkedin.com/in/danielniebraz/?locale=en_US" text="linkedin" />
            <ToggleButton theme={theme} switchTheme={switchTheme} />
        </ul>
    )
}