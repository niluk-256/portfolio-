import Head from "next/head"
import { About } from "../components/About"
import { Background } from "../components/background"
import { Toppage } from "../components/Toppage"

const Home = () => {
  return (
    <div>
      <Head>
        <title>project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-accent-dark bg-cover bg-cat">
        <Toppage />
        <About />
      </div>
    </div>
  )
}

export default Home
