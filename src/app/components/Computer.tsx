"use client"

import React from "react"
import Image from "next/image"
import Window from "./Window"

interface ComputerProps {
  children?: React.ReactNode
}

export default function Computer({ children }: ComputerProps) {
  return (
    <div className="relative w-full sm:w-[95vw] md:w-[85vw] lg:w-[75vw] xl:w-[65vw] mx-auto max-w-[1400px] drop-shadow-2xl">
      {/* L'svg del computer */}
      <Image
        src="/computer2.svg"
        alt="computer"
        width={1600}
        height={1200}
        className="w-full h-auto pointer-events-none select-none"
        priority
      />

      {/* AREA CLICCABILE DELLO SCHERMO */}
      <div
        className="absolute"
        style={{
          top: "4%",
          left: "14.0%",
          width: "72.1%",
          height: "85%",
        }}
      >
        {/* Richiamo la finestra con il titolo */}
        <Window title="Elisa Raeli - Portfolio" className="w-full h-full">
          {/* Contenuto della finestra, le icone */}
          <div className="grid grid-cols-2 gap-3 p-3 w-full ">{children}</div>
        </Window>
      </div>
    </div>
  )
}
