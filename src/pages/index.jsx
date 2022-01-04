import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import useAppData from '../data/hook/UseAppData'

export default function Home() {
  const { theme } = useAppData()
  return (
    <div className={`${theme} flex h-screen w-screen bg-slate-800 relative`}>
      <div className={`flex w-full`}>
        <Navbar title="Daniel.NieBraz" subtitle="Front End Dev" />
        <Content>
          <div className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800`}>
            <Hero />
            <Projects />
          </div>
        </Content>
      </div>
    </div>
  )
}
