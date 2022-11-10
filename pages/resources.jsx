import React from "react"
import { useRouter } from "next/router"
import { Card3 } from "../components/Card3"
import img1 from "../components/assets/pass.gif"
import img2 from "../components/assets/ing2.PNG"
import img3 from "../components/assets/aa.PNG"
// import { Card } from "../components/card"
export default function Resorces() {
  return (
    <div id="resources" className="w-full h-screen text-center">
      <div className="  flex justify-center items-center ">
        <div>
          <div className="">
            <br />
            <h2 className=" font-mono mt-28 ">Resources to learn about web3</h2>

            <hr />
            <br />
            <div className="p-10 flex flex-wrap">
              <div className="m-10">
                <Card3
                  img={img1}
                  info="Alchemy learn is a educational  platform you can learn about web3 with starting  with zero knowledge"
                  projectname="@AlchemyLearn"
                  resourceUrl="https://university.alchemy.com/"
                />
              </div>
              <div className="m-10">
                <Card3
                  img={img2}
                  info="ZERO to HERO full course 32 HRS on solidity best course on youtube about Blockchain development so far"
                  projectname="@Chainlink + Freecodecamp Solidity Course"
                  resourceUrl=" https://github.com/smartcontractkit/full-blockchain-solidity-course-js"
                />
              </div>
              <div className="m-10">
                <Card3
                  img={img3}
                  info="Amazing repository with really great valuble resources about Web3"
                  projectname="@FreeWeb3Resources"
                  resourceUrl="https://github.com/FrancescoXX/free-Web3-resources"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
