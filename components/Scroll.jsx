import React from "react"
import { AiOutlineArrowDown } from "react-icons/ai"

export function Scroll() {
  return (
    <div className="flex item-center justify-center z-10  ">
      <a href="#about">
        <AiOutlineArrowDown className="mt-9 border-2 w-8 h-8 border-slate-700 shadow-lg rounded-lg  hover:scale-125 animate-bounce" />
      </a>
    </div>
  )
}
