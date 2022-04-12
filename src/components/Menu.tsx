import MenuItem from './MenuItem'
import { LogoutIcon, HomeIcon, SettingsIcon, BellIcon } from './Icons'

export default function Menu(props) {

    return (
        <ul className={`flex justify-end items-center mt-4 pt-4`}>
            <MenuItem url="https://github.com/hexglyph" target='_blank' text="github" />
            <MenuItem url="https://www.linkedin.com/in/danielniebraz/?locale=en_US" target='_blank' text="linkedin" />
        </ul>
    )
}