import { useState } from "react";
import { Project } from "../types";

import Image from "next/image";
import Link from "next/link";

export default function ProjectItem(props: Project) {

    return (
        <div className={`flex-[1_1_20%] ring-1 ring-sky-500/75 p-2 rounded-lg`}>
            <div className="flex w-full flex-col">
                <div className="flex flex-col w-full text-white">
                    <h3 className={`text-lg font-semibold underline decoration-4 decoration-sky-500 mb-4`}>{props.name}</h3>
                    <Image
                        src={props.image_path}
                        alt={props.name}
                        className="h-40 rounded-lg"
                        layout="intrinsic"
                        height="150"
                        width="200"
                    />
                </div>
                <div className="flex w-full justify-between gap-2 text-white">
                    <div className="flex flex-col w-1/2">
                        <Link href={props.github_url} passHref>
                            <span className={`cursor-pointer p-2 mt-2 mb-2 ring-1 ring-black rounded-lg hover:text-black hover:bg-slate-200`}>Github</span>
                        </Link>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <Link href={props.deployed_url} passHref>
                            <span className={`cursor-pointer p-2 mt-2 mb-2 ring-1 ring-sky-700 rounded-lg hover:text-sky-700 hover:bg-sky-200`}>Project deploy</span>
                        </Link>
                    </div>


                </div>
                <div className="flex flex-col w-full grow text-white">
                    <p className={``}>{props.description}</p>
                </div>
                <div className={`flex w-full justify-start gap-2 pt-4 items-baseline`}>
                    {props.key_techs.map((tech) => (
                        <span
                            key={tech}
                            className={`text-slate-700 rounded-lg p-2 bg-slate-400 font-medium`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div >
    )

}

