import React from "react"
import Image from "next/image"
import Link from "next/link"

export function Card2({ img, info, projectname }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image className="w-full" src={img} alt="projects" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{projectname}</div>
        <p className="text-gray-700 text-base">{info}</p>
      </div>
    </div>
  )
}
