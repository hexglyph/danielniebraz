import ProjectItem from "./ProjectItem";

export default function Projects(props) {
    return (
        <div>
            <ProjectItem title='Projeto 1' img='/projects/admin' url='/projects/admin' tech='nextjs' date={2022} active />
            <ProjectItem title='Projeto 2' img='/projects/admin' url='/projects/admin' tech='nextjs' date={2022} active />
            <ProjectItem title='Projeto 3' img='/projects/admin' url='/projects/admin' tech='nextjs' date={2022} active />
            <ProjectItem title='Projeto 4' img='/projects/admin' url='/projects/admin' tech='nextjs' date={2022} active />
        </div>
    )
}