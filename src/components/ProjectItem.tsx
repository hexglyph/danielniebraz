import { useState } from "react";
import { Project } from "../types";

import Image from "next/image";
import Link from "next/link";

export default function ProjectItem(props: Project) {

    return (
        <div className={`flex flex-1 bg-white rounded-lg p-4`}>
            <div className="flex w-full flex-col">
                <div className="flex flex-col w-full">
                    <h3 className={`text-lg font-semibold`}>{props.name}</h3>
                    <Image
                        src={props.image_path}
                        alt={props.name}
                        className="h-40 rounded-lg"
                        layout="intrinsic"
                        height="150"
                        width="200"
                    />
                </div>
                <div className="flex w-full justify-between gap-2">
                    <div className="flex flex-col w-1/2">
                        <Link href={props.github_url} passHref>
                            <span className={`cursor-pointer p-2 mt-2 mb-2 ring-1 ring-black rounded-lg hover:bg-slate-200`}>Github</span>
                        </Link>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <Link href={props.deployed_url} passHref>
                            <span className={`cursor-pointer p-2 mt-2 mb-2 ring-1 ring-sky-700 rounded-lg text-sky-700 hover:bg-sky-200`}>Project deploy</span>
                        </Link>
                    </div>


                </div>
                <div className="flex flex-col w-full grow">
                    <p className={``}>{props.description}</p>
                </div>
                <div className={`flex w-full justify-start gap-2 pt-4 items-baseline`}>
                    {props.key_techs.map((tech) => (
                        <span
                            key={tech}
                            className={`text-slate-50 rounded-lg p-2 bg-slate-400`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )

}

