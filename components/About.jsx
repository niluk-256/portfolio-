import React from "react"
import Image from "next/image"
import aboutpic from "./assets/about.jpg"

export function About() {
  return (
    <div id="about" className="w-full lg-h-screen text-center p-2">
      <div>
        <div className="text-2xl font-mono text-cyan-700 ">About</div>
        <div className="max-w-[1240px] mx-auto px-2 py-16  flex justify-center items-center flex-wrap">
          <div>
            <div className="mt-6 ml-4 mr-4 font-semibold text-left ">
              Hello I'm 19 year old self taught developer. <br />
              During the pandemic in 2021,Staying alone inside my room , <br />
              Oneday I came to know about crypto when learning about trading and
              investments. <br />I just wanted to make some extra money. But
              when I started to <br />
              study more I understood that this is not just trading not just
              <br />
              Cryptocurrency this is an evolutionary stage of Web with massive
              <br />
              opportunities so I thought to become a developer and support the
              growth of web3 space .<br />
              Coding is my passion . <br />I love to learn about
              web3,Cryptography and Smart Contract CTF <br />
              Studing about web3 at <br />
              <a
                href="http://alchemy.com"
                target="_blank"
                className="text-blue-700"
              >
                @ALCHEMY
              </a>
              <a
                href="https://university.alchemy.com/"
                target="_blank"
                className="text-blue-700"
              >
                @ALCHEMYLearn
              </a>
              <br />
              <a
                href="https://learnweb3.io"
                target={"_blank"}
                className="text-blue-700"
              >
                @LEARNWEB3DAO
              </a>
            </div>
          </div>
          <div>
            <Image
              src={aboutpic}
              className=" h-52 w-52 ml-10 mb-20 rounded-lg hover:scale-50 duration-300 "
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
