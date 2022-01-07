import { useState } from "react";
import { Project } from "../types";

import Image from "next/image";

export default function Teste(props: Project) {

    return (
        <div>
            <Image
                src={props.image_path}
                alt={props.name}
                className="cursor-pointer"
                layout="responsive"
                height="150"
                width="300"
            />

            <p className={``}>{props.project}{props.id}{props.name}</p>
            <a
                href={props.github_url}
                className={``}
            ><span>Github</span>
            </a>
            <a
                href={props.deployed_url}
                className={``}
            >
                <span>Project</span>
            </a>
            <h3 className={``}>{props.description}</h3>
            <div className={``}>
                {props.key_techs.map((tech) => (
                    <span
                        key={tech}
                        className={``}
                    >
                        {tech}
                    </span>
                ))}
            </div>

        </div>
    )

}

