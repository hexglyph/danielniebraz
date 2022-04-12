import Link from "next/link"
import Bar from "./Bar"

export default function Hero(props) {
    return (
        <div className={`flex w-full justify-items-start gap-x-4 bg-slate-900 rounded-lg`}>
            <div className={`text-left text-gray-100 flex flex-col w-1/6 p-2 mt-4 rounded-lg`}>
                <h3 className={`text-lg w-full text-left font-semibold 
                    underline decoration-4 decoration-sky-500
                    pl-4 pr-5 mb-4 
                    rounded text-white`}>
                    About
                </h3>
                <ul className={`text-sm pl-4`}>
                    <span className={`text-base font-medium`}>Daniel NieBraz</span>
                    <li>Front End Dev - UI/UX</li>
                    <li>São Paulo - Brazil</li>
                    <li>daniel.niebraz@gmail.com</li>
                    <li>Education background:</li>
                    <li>- Digital Design Degree</li>
                    <li>- Web Technologies and Innovation Graduate Certificate</li>
                </ul>
                <Link href="/resume.pdf" passHref>
                    <a className={`text-white hover:text-slate-50
                        hover:bg-slate-50/10
                        rounded-lg
                        cursor-pointer
                        ring-1 p-2 my-2 mx-4 ring-slate-500`}>Download resume</a>
                </Link>

            </div>
            <div className={`text-left text-gray-100 flex flex-col w-1/5 p-2 mt-4 rounded-lg`}>
                <h3 className={`text-lg w-full text-left font-semibold 
                    underline decoration-4 decoration-sky-500
                    pl-4 pr-5 mb-4 
                    rounded text-white`}>
                    Code</h3>
                <div className={`flex w-full flex-col`}>
                    <Bar level={100} name='HTML' />
                    <Bar level={100} name='CSS/SASS' />
                    <Bar level={75} name='JS' />
                    <Bar level={75} name='TS' />
                    <Bar level={100} name='Web Accessibility (WCAG)' />
                </div>
            </div>
            <div className={`text-left text-gray-100 flex flex-col w-1/5 p-2 mt-4 rounded-lg`}>
                <h3 className={`text-lg w-full text-left font-semibold 
                    underline decoration-4 decoration-sky-500
                    pl-4 pr-5 mb-4 
                    rounded text-white`}>
                    Framework</h3>
                <div className={`flex w-full flex-col`}>
                    <Bar level={70} name='NextJS' />
                    <Bar level={50} name='VueJS' />
                    <Bar level={30} name='Flutter' />
                    <Bar level={70} name='TailwindCSS' />

                </div>
            </div>
            <div className={`text-left text-gray-100 flex flex-col w-1/5 p-2 mt-4 rounded-lg`}>
                <h3 className={`text-lg w-full text-left font-semibold 
                    underline decoration-4 decoration-sky-500
                    pl-4 pr-5 mb-4 
                    rounded text-white `}>
                    Tools</h3>
                <div className={`flex w-full flex-col`}>
                    <Bar level={100} name='Photoshop' />
                    <Bar level={100} name='Illustrator' />
                    <Bar level={75} name='Adobe XD' />
                    <Bar level={100} name='Web Accessibility (WCAG)' />
                    <Bar level={90} name='Clip Studio Paint' />
                </div>
            </div>
            <div className={`text-left text-gray-100 flex flex-col w-1/5 items-center p-2 mt-4 rounded-lg`}>
                <h3 className={`text-lg w-full text-left font-semibold 
                    underline decoration-4 decoration-sky-500
                    pl-4 pr-5 mb-4 
                    rounded text-white `}>
                    Experience</h3>
                <ul>
                    <li className={`ml-4 mr-4 mb-2 p-2 ring-1 ring-slate-500 rounded-lg`}>ICT Company - 7 yrs - Front End Dev</li>
                    <li className={`ml-4 mr-4 mb-2 p-2 ring-1 ring-slate-500 rounded-lg`}>Butantan Foundation - 2 yrs - Web Designer</li>
                    <li className={`ml-4 mr-4 mb-2 p-2 ring-1 ring-slate-500 rounded-lg`}>Teleperformance - 2 yrs - Web Designer</li>
                </ul>
            </div >
        </div >
    )
}