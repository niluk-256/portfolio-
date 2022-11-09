import React from "react"
import Image from "next/image"
import Link from "next/link"

export function Card2({ img, info, projectname }) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <Image class="w-full" src={img} alt="projects" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{projectname}</div>
        <p class="text-gray-700 text-base">{info}</p>
      </div>
    </div>
  )
}
