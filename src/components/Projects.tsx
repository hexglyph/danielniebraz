import ProjectItem from "./ProjectItem";
import { projects as projectsData } from "../data/data";
import { useState } from "react";


export default function Projects() {
    const [projetos, setProjects] = useState(projectsData)
    function render() {

        return (
            <div className={`flex flex-wrap w-full justify-start mt-4 gap-2`}>
                {projetos.map((project, i) => {
                    return (
                        <ProjectItem
                            key={`${i}-${project.name}`}
                            project={project.project}
                            name={project.name}
                            id={i}
                            description={project.description}
                            image_path={project.image_path}
                            deployed_url={project.deployed_url}
                            github_url={project.github_url}
                            key_techs={project.key_techs} />
                    )
                })}
            </div>
        );
    }

    return (
        <div>

            <div className={`flex w-full`}>

                {render()}


            </div>



        </div>
    )
}