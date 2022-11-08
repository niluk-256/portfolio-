import React, { useState, useEffect } from "react"
import { TypeAnimation } from "react-type-animation"

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
      <div className="max-w-[1240px] w-full h-full  flex justify-center items-center  sm:text-center md:text-center md:ml-24">
        {/* <div className={ver ? "hidden " : ""}> */}
        <div>
          <div className="">
            <div className="font-semibold p-2 m-2 text-slate-500">
              We All gonna make it
            </div>
            <TypeAnimation
              className="text-5xl font-bold leading-normal mt-0 mb-2 text-sky-800"
              sequence={[
                "ALCHEMYLEARN ",
                1000,
                "Learning How To BUIDL WEB3",
                1000,
              ]}
              speed={10}
              wrapper="h2"
              repeat={0}
            />
            <TypeAnimation
              className="text-2xl font-mono leading-normal mt-0 mb-2 text-slate-800"
              sequence={["I'm NELUKA DULNINDU", 1000]}
              speed={5}
              wrapper="h2"
              repeat={0}
            />
            <div className="font-semibold p-2 m-2 text-slate-600">
              I'm a 19 year old self-taught developer who just loves to learn
              WEB3 enthusiast
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
