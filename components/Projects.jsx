import React from "react"
import { Card } from "./card"
import project1 from "./assets/p1.gif"
import project2 from "./assets/p2.gif"
export function Projects() {
  return (
    <div id="projects" className="w-full lg-h-screen text-center p-2">
      <div className="font-mono mt-8">Projects</div>
      <div className=" max-w-[1240px] mx-auto px-2 py-16  flex justify-center items-center flex-wrap">
        <div className="m-6">
          <Card
            info="Fundme project was created when studing Patrick Collins 32hrs course on solidity"
            img={project1}
            projectname="FundMe"
            projectUrl=""
          />
        </div>
        <div>
          <Card
            info="Created when doing Alchemy Weekly challenges"
            img={project2}
            projectname="Dapp to  fetch NFTS"
            projectUrl=""
          />
        </div>
      </div>
    </div>
  )
}
