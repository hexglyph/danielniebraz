import Menu from './Menu'
import Logo from './Logo'

export default function Navbar(props) {
    return (
        <div className={`flex flex-col w-full bg-gradient-to-r from-cyan-500 to-blue-500`}>
            <Logo title={props.title} src="/logo.png" />
            <h1 className='text-5xl text-cyan-400 font-bold'>{props.title}</h1>
            <h2>{props.subtitle}</h2>

            <Menu />
        </div>
    )
}