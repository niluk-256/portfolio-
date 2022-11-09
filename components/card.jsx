import React from "react"
import Image from "next/image"
import Link from "next/link"

export function Card({ img, info, projectname, projectUrl = "" }) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <Image class="w-full" src={img} alt="projects" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{projectname}</div>
        <p class="text-gray-700 text-base">{info}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Solidity
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Web3
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #EthersJs
        </span>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  )
}
