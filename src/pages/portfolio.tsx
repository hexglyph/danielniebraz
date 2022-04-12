import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import useAppData from '../data/hook/UseAppData'
import Head from 'next/head'
import { Category } from "../types";
import { projects as projectsData } from "../data/data";
import ProjectsNavbar from '../components/ProjectsNavbar'
import ProjectItem from '../components/ProjectItem'
import { useContext, useState } from 'react'
import AppContext from '../data/context/AppContext'

export default function Project() {
    const { theme } = useContext(AppContext)
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState("all");

    return (
        <div className={`${theme}`}>
            <div className={`flex w-full bg-slate-800 relative p-16 dark:bg-indigo-800 
      `}>
                <Head>
                    <title>Daniel NieBraz - Front End Dev</title>
                    <meta name="description" content="Portfolio" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className={`flex flex-col w-full`}>
                    <Navbar title="daniel.niebraz" subtitle="front end dev" />
                    <Content>
                        <div className={`flex flex-col`}>
                            <Projects />
                        </div>
                    </Content>
                </div >
            </div >
        </div>
    )
}
