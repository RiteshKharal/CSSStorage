'use client'

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ButtonOne } from "@/app/ElementSamples/Buttons/ButtonComponents"
import * as font from '@/app/font/fonts'
import { Elements } from "@/app/ElementDetails"
import { ArrowLeft, ClipboardList, ScanEye } from "lucide-react"

export default function Page() {

  const params = useParams()
  const router = useRouter()

  const ElementDetails = Elements[Number(params.ElementId) - 1]

  const [tab,setTab] = useState<string>("react")

  function copyCode(){
    navigator.clipboard.writeText(ElementDetails.code)
  }

  return (

  <div className="w-full min-h-screen text-foreground flex flex-col">

    {/* TOP BAR */}
    <div className={`flex items-center px-8 py-6 ${font.inconsolata.className}`}>

      <button
      onClick={()=>router.back()}
      className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition cursor-pointer group">

        <ArrowLeft className="group-hover:-translate-x-1 transition"/>

        <span>Back</span>

      </button>

    </div>


    {/* MAIN */}
    <div className="flex gap-20 p-10 max-w-300 w-full mx-auto flex-1">

      {/* PREVIEW */}
      <div className="flex flex-col gap-4 text-center mt-2">

        <div className="w-90 h-70 bg-foreground/5 rounded-xl flex items-center justify-center relative shadow-sm">

          <ButtonOne/>

          <ScanEye
          size={18}
          className="absolute bottom-4 left-4 opacity-50"
          />

        </div>

        <span className={`text-sm opacity-60 ${font.exo2.className}`}>
          Preview
        </span>

      </div>



      {/* CODE PANEL */}
      <div className="flex flex-col flex-1 bg-foreground/5 rounded-xl border border-border/30 overflow-hidden">

        {/* TAB BAR */}
        <div className="flex items-center gap-4 border-b border-border/30 px-5 py-3">

          <button
          onClick={()=>setTab("react")}
          className={`text-sm px-3 py-1 rounded-md transition
          ${tab==="react" ? "bg-foreground/10" : "opacity-60 hover:opacity-100"}
          ${font.inter.className}`}
          >
            React
          </button>

          <button
          onClick={copyCode}
          className="ml-auto flex items-center gap-2 text-sm px-3 py-1 rounded-md bg-foreground/10 hover:bg-foreground/15 transition cursor-pointer"
          >

            <ClipboardList size={16}/>

            Copy

          </button>

        </div>


        {/* CODE AREA */}
        <div className="flex-1 overflow-auto">

          <pre className="p-6 text-sm leading-6 font-semibold whitespace-pre-wrap text-foreground/90 ">
            <code>
              {ElementDetails.code}
            </code>
          </pre>

        </div>

      </div>

    </div>

  </div>

  )
}