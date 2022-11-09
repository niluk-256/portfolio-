import Head from "next/head"
import { About } from "../components/About"
import { Achievements } from "../components/Achievements "

import { Projects } from "../components/Projects"
import { Skills } from "../components/Skills"
import { Toppage } from "../components/Toppage"
import { useState, useEffect } from "react"

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
      <div>
        <div
          className={`bg-accent-dark bg-cover bg-cat px-2 py-16 ${
            cat ? "" : "blur-sm "
          }`}
        >
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
      </div>
    </div>
  )
}

export default Home
