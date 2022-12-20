import Head from "next/head"
import { About } from "../components/About"
import { Achievements } from "../components/Achievements "

import { Projects } from "../components/Projects"
import { Skills } from "../components/Skills"
import { Toppage } from "../components/Toppage"
import { useState, useEffect } from "react"
import { BoxesPage } from "../components/boxes"
import MyPC from "../components/Computer"

const Home = () => {
  const [cat, catfunc] = useState(true)
  useEffect(() => {
    window.onbeforeunload = function () {
      return catfunc(!cat)
    }

    return () => {
      window.onbeforeunload = null
    }
  }, [])

  return (
    <div>
      <Head>
        <title>my-portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="isolate">
        <div className={` bg-transparent  ${cat ? "" : "blur-sm "}`}>
          <div>
            <Toppage />
          </div>
          <div>
            <About />
          </div>
          <div>
            <Skills />
          </div>
          <div>
            <Projects />
          </div>

          <div>
            <Achievements />
          </div>
        </div>
        <div>
          {/* <BoxesPage /> */}
          <MyPC />
        </div>
      </div>
    </div>
  )
}

export default Home
