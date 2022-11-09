import React from "react"
import { Card } from "./card"
import pass from "./assets/pass.gif"
import pass1 from "./assets/all.gif"
export function Achievements() {
  return (
    <div id="achievements" className="w-full h-screen text-center">
      <div className="font-mono text-lg ">Achievements And KUDOS!🎉</div>
      <div className="max-w-[1240px] mx-auto px-2 py-16 flex justify-center flex-wrap items-center">
        <div className="m-12">
          <Card
            info="Alchemy Pass"
            img={pass}
            projectname="Alchemy Early Acess"
            projectUrl=""
          />
        </div>
        <div className="m-12">
          <Card
            info="PROOF OF KNOWLEDGE"
            img={pass1}
            projectname="NFTS "
            projectUrl=""
          />
        </div>
      </div>
    </div>
  )
}
