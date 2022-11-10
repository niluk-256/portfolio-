import React from "react"
import Image from "next/image"
import Link from "next/link"

export function Card3({ img, info, projectname, resourceUrl = "" }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image className="w-full" src={img} alt="resources" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{projectname}</div>
        <p className="text-gray-700 text-base">{info}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Solidity
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Web3
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Resources
        </span>
        <Link href={resourceUrl} target="_blank">
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer border-y-emerald-100 border-4 hover:border-y-emerald-300">
            Link
          </p>
        </Link>
      </div>
    </div>
  )
}
