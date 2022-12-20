import React from "react"
import Hardhat from "./assets/hardhat.png"
import Ethers from "./assets/ethers.png"
import js from "./assets/javascript.png"
import Solidity from "./assets/solidity.png"
import Tailwind from "./assets/tailwind.png"
import NextJS from "./assets/nextjs.png"
import Three from "./assets/three.png"
import Image from "next/image"

export function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen text-center p-2">
      <div
        className={` max-w-[1240px] mx-auto flex flex-col justify-center h-full`}
      >
        <div>
          <div className="text-2xl font-mono text-cyan-700 mt-11 ">Skills</div>
          <div className="mt-10 text-10px font-mono text-slate-700 ">
            Technologies
          </div>
          {/* HARDHAT */}
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
            {/* ETHERS */}
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
          {/* SOLIDITY */}
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
            {/* NEXTJS */}
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
            {/* TAILWIND */}
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
                 {/* THREE */}
                 <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={Three} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>THREE Js</h3>
                </div>
              </div>
            </div>


                  {/* JAVASCRIPT */}
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
  )
}
