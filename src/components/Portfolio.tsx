import Link from "next/link"

export default function Portfolio(props) {
    return (
        <div className={`flex w-full justify-items-start`}>
            <div className={`text-left text-gray-100 flex flex-col w-full ring-1 ring-sky-500/50 p-2 mt-4 rounded-lg`}>
                <h3 className={`text-lg w-full text-left font-semibold 
                    underline decoration-4 decoration-sky-500
                    pl-4 pr-5 mb-4 
                    rounded text-white`}>
                    Portfolio
                </h3>
                <Link href="/resume.pdf" passHref>
                    <a className={`ring-1 ring-slate-500 w-full p-2 mt-4 rounded text-sm text-slate-200 hover:bg-slate-50 hover:text-slate-800`}>Download resume</a>
                </Link>

                <ul>
                    <li className={`ml-4 mr-4 mb-2 p-2 ring-1 ring-sky-500/25 rounded-lg`}>ICT Company - 7 yrs - Front End Dev</li>
                    <li className={`ml-4 mr-4 mb-2 p-2 ring-1 ring-sky-500/25 rounded-lg`}>Butantan Foundation - 2 yrs - Web Designer</li>
                    <li className={`ml-4 mr-4 mb-2 p-2 ring-1 ring-sky-500/25 rounded-lg`}>Teleperformance - 2 yrs - Web Designer</li>
                </ul>
            </div >
        </div >
    )
}