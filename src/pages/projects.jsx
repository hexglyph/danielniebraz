import Head from 'next/head'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Hero from '../components/Hero'
import useAppData from '../data/hook/UseAppData'

export default function Projects() {
    const { theme } = useAppData()
    return (
        <div className={`${theme} `}>
            <Head>
                <title>Daniel NieBraz</title>
                <meta name="description" content="Daniel.NieBraz Portfolio " />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`flex bg-gradient-to-r from-amber-400 to-orange-600`}>
                <Navbar title="Daniel.NieBraz" subtitle="Front End Dev" />
                <Content>
                    <div className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800`}>
                        <h3>Projects</h3>
                        <Hero />

                    </div>
                </Content>


            </div>
        </div>
    )
}
