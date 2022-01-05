import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import useAppData from '../data/hook/UseAppData'
import Head from 'next/head'

export default function Home() {
  const { theme } = useAppData()
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
            <div className={`flex flex-col bg-slate-800 dark:bg-slate-800`}>

              <Hero />
              <Projects />

            </div>
          </Content>
        </div >
      </div >
    </div>
  )
}
