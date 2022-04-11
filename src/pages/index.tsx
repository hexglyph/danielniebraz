import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Projects from '../components/Projects'
import useAppData from '../data/hook/UseAppData'
import Head from 'next/head'
import Footer from '../components/Footer'

export default function Home() {
  const { theme } = useAppData()
  return (
    <div className={`${theme}`}>
      <div className={`flex w-full bg-slate-800 dark:bg-black 
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
              <Hero />
              <Portfolio />
              {/*<Projects />*/}
            </div>
          </Content>
          <Footer />
        </div >
      </div >
    </div>
  )
}
