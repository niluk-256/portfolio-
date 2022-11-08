import React from "react"
import Hardhat from "./assets/hardhat.png"
import Ethers from "./assets/ethers.png"
import js from "./assets/javascript.png"
import Solidity from "./assets/solidity.png"
import Tailwind from "./assets/tailwind.png"
import NextJS from "./assets/nextjs.png"
import Image from "next/image"

export function Skills() {
  return (
    <div id="skills" className="w-full h-screen text-center">
      <div className="   rounded-lg  w-full h-full ">
        <div
          className={` w-full h-full  flex justify-center items-center flex-wrap shadow-2xl pb-3 `}
        >
          <div>
            <div className="text-5xl font-mono text-cyan-700 mt-11 ">
              Skills
            </div>
            <div className="mt-10 text-10px font-mono text-slate-700 ">
              Technologies
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={Hardhat} width="80px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Hardhat</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={Ethers} width="80px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Ethers</h3>
                  </div>
                </div>
              </div>

              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={Solidity} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Solidity</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={NextJS} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Next js</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={Tailwind} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Tailwind</h3>
                  </div>
                </div>
              </div>

              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={js} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Javascipt</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
