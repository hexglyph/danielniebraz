import Link from "next/link"

export default function Portfolio(props) {
    return (
        <div className={`flex w-full justify-items-start`}>
            <div className={`text-left text-gray-100 flex flex-col w-full p-2 mt-4 rounded-lg bg-slate-900`}>
                <h3 className={`text-lg w-full text-left font-semibold 
                    underline decoration-4 decoration-sky-500
                    pl-4 pr-5 mb-4 
                    rounded text-white`}>
                    Portfolio
                </h3>
                <div className={`flex w-full`}>
                    <div className={`flex w-full md:w-1/6 flex-col`}>
                        <h4 className={`text-base w-full text-left font-semibold 
                    underline decoration-4 decoration-sky-500
                    pl-4 pr-5 mb-4 
                    rounded text-white`}>
                            Clone
                        </h4>
                        <p className={`pl-4`}>Site cloned with TailwindCSS, ready to be customized and deployed.</p>
                        <Link href="https://clone.danielniebraz.dev/" passHref>
                            <a className={`text-white hover:text-slate-50
                        hover:bg-slate-50/10
                        rounded-lg
                        cursor-pointer
                        ring-1 p-2 my-2 mx-4 ring-slate-500 `} target="_blank">My version</a>
                        </Link>
                        <Link href="https://themechasnft.com/" passHref>
                            <a className={`text-white hover:text-slate-50
                        hover:bg-slate-50/10
                        rounded-lg
                        cursor-pointer
                        ring-1 p-2 my-2 mx-4 ring-slate-500`} target="_blank">Original Site</a>
                        </Link>
                    </div>
                </div>

            </div >
        </div >
    )
}