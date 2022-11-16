import React, { useState, useEffect } from "react"
import { TypeAnimation } from "react-type-animation"
import { Scroll } from "./Scroll"
// import { BoxesPage } from "./boxes"
export function Toppage() {
  // const [ver, verfunc] = useState(false)
  // useEffect(() => {
  //   const vard = () => {
  //     if (window.scrollY >= 90) {
  //       verfunc(true)
  //     } else {
  //       verfunc(false)
  //     }
  //   }
  //   window.addEventListener("scroll", vard)
  // }, [])
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className=" w-full h-full  flex justify-center items-center  sm:text-center md:text-center lg:text-center ">
        {/* <div className={ver ? "hidden " : ""}> */}
        <div>
          <div className="z-10">
            <div className="font-semibold p-2 m-2 text-slate-500">
              We all gonna make it
            </div>
            <TypeAnimation
              className="text-5xl font-md leading-normal mt-0 mb-2 text-sky-800 cursor-pointer sm:mx-8 "
              sequence={[
                "FreeCodeCamp",
                1000,
                "ChainLink",
                1000,
                "ALCHEMY",
                1000,
                "Learning How To BUIDL WEB3",
                1000,
              ]}
              speed={10}
              wrapper="h2"
              repeat={0}
            />
            <TypeAnimation
              className=" font-semibold text-md leading-normal mt-0 mb-2 text-slate-800"
              sequence={["I'm NELUKA DULNINDU", 1000]}
              speed={5}
              wrapper="h2"
              repeat={0}
            />
            <div className="font-semibold p-2 m-2 text-slate-600">
              I'm a 19 year old self-taught developer who just love to learn.
              WEB3 enthusiast
            </div>
          </div>
          <Scroll className="absolute top-8  " />
        </div>
      </div>
    </div>
  )
}
