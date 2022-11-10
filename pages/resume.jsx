import React from "react"
import { useRouter } from "next/router"
export default function Resume() {
  return (
    <div id="Resume" className="w-full h-screen text-center">
      <div className=" w-full h-full  flex justify-center items-center">
        <div>
          <div id="header"></div>
          <div class="left"></div>
          <div class="stuff">
            <br />
            <h1>Resume</h1>
            <h2>Nothing</h2>
            <hr />
            <br />
            <div className="border-2 p-10">
              <p class="head">Bulding in progress</p>
              <ul>
                <li>Programming</li>
              </ul>
              <p class="head">Skills</p>
              <ul></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
