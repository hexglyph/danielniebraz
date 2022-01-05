import Link from "next/link"
import Bar from "./Bar"

export default function Hero(props) {
    return (
        <div className={`flex w-full justify-items-start gap-x-4`}>
            <div className={`text-left text-gray-100 flex flex-col w-1/6 ring-1 ring-sky-500/50 p-2 mt-4 rounded`}>
                <h3 className={`text-lg w-full text-left font-semibold 
                    underline decoration-4 decoration-sky-500
                    pl-4 pr-5 mb-4 
                    rounded text-white `}>
                    About
                </h3>
                <p className={`text-sm pl-4`}>
                    <span className={`text-base font-medium`}>Daniel NieBraz</span>
                    <br></br>Front End Dev - UI/UX
                    <br></br>São Paulo - Brazil
                    <br></br>daniel.niebraz@gmail.com
                    <br></br>Education background:
                    <br></br>- Digital Design Degree
                    <br></br>- Web Technologies and Innovation Graduate Certificate
                </p>
                <Link href="/resume.pdf" passHref>
                    <a className={`ring-1 ring-slate-500 w-full p-2 mt-4 rounded text-sm text-slate-200 hover:bg-slate-50 hover:text-slate-800`}>Download resume</a>
                </Link>

            </div>
            <div className={`text-left text-gray-100 flex flex-col w-1/5 ring-1 ring-sky-500/50 p-2 mt-4 rounded`}>
                <h3 className={`text-lg w-full text-left font-semibold 
                    underline decoration-4 decoration-sky-500
                    pl-4 pr-5 mb-4 
                    rounded text-white `}>
                    Code and Framework</h3>
                <div className={`flex w-full flex-col`}>
                    <Bar level={100} name='HTML' />
                    <Bar level={100} name='CSS / SASS' />
                    <Bar level={50} name='NextJS' />
                    <Bar level={50} name='VueJS' />
                    <Bar level={30} name='Flutter' />
                    <Bar level={70} name='TailwindCSS' />
                    <Bar level={100} name='Web Accessibility (WCAG)' />
                </div>
            </div>
            <div className={`text-left text-gray-100 flex flex-col w-1/5 ring-1 ring-sky-500/50 p-2 mt-4 rounded`}>
                <h3 className={`text-lg w-full text-left font-semibold 
                    underline decoration-4 decoration-sky-500
                    pl-4 pr-5 mb-4 
                    rounded text-white `}>
                    Tools</h3>
                <div className={`flex w-full flex-col`}>
                    <Bar level={100} name='Photoshop' />
                    <Bar level={100} name='Illustrator' />
                    <Bar level={75} name='Adobe XD' />
                    <Bar level={90} name='Clip Studio Paint' />
                </div>
            </div>
            <div className={`text-left text-gray-100 flex flex-col w-1/5 items-center ring-1 ring-sky-500/50 p-2 mt-4 rounded`}>
                <h3 className={`text-lg w-full text-left font-semibold 
                    underline decoration-4 decoration-sky-500
                    pl-4 pr-5 mb-4 
                    rounded text-white `}>
                    Experience</h3>
                <p>
                    PRODAM - São Paulo City ICT Company
                    <br></br>    Butantan Foundation
                    <br></br>    Teleperformance
                </p>
            </div>
        </div>
    )
}