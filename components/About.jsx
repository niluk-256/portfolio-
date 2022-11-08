import React from "react"
import Image from "next/image"
import aboutpic from "./assets/about.jpg"

export function About() {
  return (
    <div id="about" className="w-full h-screen text-center">
      <div className="  p-6 rounded-lg  w-full h-full ">
        <div
          className={` w-full h-full  flex justify-center items-center flex-wrap shadow-2xl `}
        >
          <div>
            <div className="text-5xl font-mono text-cyan-700 ">About</div>
            <div className="mt-6 ml-4 mr-4 font-semibold">
              Hello I'm 19 year old self taught developer. <br />
              WEB3 Entusiast <br />
              Coding is my passion and I love it. <br />I love to learn about
              web3,Cryptography and Smart Contract CTF <br />
              Studing about web3 at <br />
              <a
                href="http://alchemy.com"
                target="_blank"
                className="text-blue-700"
              >
                @ALCHEMY
              </a>
              <br />
              <a href="https://university.alchemy.com/" target="_blank">
                @ALCHEMYLearn
              </a>
              <br />
              <a href="https://learnweb3.io" target={"_blank"}>
                @LEARNWEB3DAO
              </a>
            </div>
          </div>
          <div>
            <Image
              src={aboutpic}
              className=" h-52 w-52 ml-10 rounded-lg"
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
