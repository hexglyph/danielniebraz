import Link from 'next/link'

export default function MenuItem(props) {

    function renderMenuItem() {
        return (
            <a className={`
                flex flex-col justify-center items-center 
                h-20 w-20
                text-gray-600
                dark:text-gray-200
                ${props.className}
                `}>
                {props.icon}
                <span className={`text-xs font-light`}>
                    {props.text}
                </span>
            </a>
        )
    }

    return (
        <li onClick={props.onClick} className={`
            hover:bg-gray-100 
            dark:hover:bg-gray-700
            cursor-pointer`
        }>
            {props.url ? (
                <Link href={props.url}>
                    {renderMenuItem()}
                </Link>
            ) : (
                renderMenuItem()
            )
            }

        </li>
    )
}