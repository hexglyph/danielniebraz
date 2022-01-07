import Menu from './Menu'
import Logo from './Logo'
import Accessibility from './Accessibility'

export default function Navbar(props) {
    return (
        <div className={`flex flex-col w-full justify-center items-baseline pb-8`}>
            <Accessibility />
            <h1 className={`text-7xl text-white font-extrabold mr-4`}>
                <span className={`bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400/90
                dark:bg-gradient-to-r dark:from-sky-500 dark:to-pink-300`}>
                    {props.title}
                </span>
            </h1>
            <h2 className={`text-2xl font-semibold text-slate-300`}>{props.subtitle}</h2>
            <Menu />
        </div>
    )
}