"use client"

import { useState } from "react"
import NavProgetti from "./NavProgetti"
import Image from "next/image"
import { projectData } from "../data/lista-progetti"

export default function Progetti() {
  const [selected, setSelected] = useState<string | null>(null)
  const project = selected ? projectData[selected] : null

  return (
    <div className="flex flex-col h-full">
      {/* TOPBAR */}
      <NavProgetti onSelect={setSelected} />

      {/* MAIN */}
      <main className="flex-1 overflow-y-auto bg-white">
        {!project && (
          <p className="text-gray-500 text-lg">
            Seleziona un progetto per saperne di più!
          </p>
        )}

        {project && (
          <div className="space-y-4 flex flex-col bg-rose-300 px-3 h-screen">
            <h1 className="text-2xl font-bold text-center">{selected}</h1>
            <p className="text-gray-700">{project.description}</p>

            {project.image && (
              <Image
                src={project.image}
                alt={selected || "project image"}
                width={600}
                height={400}
                className="object-contain max-w-xs mx-auto"
              />
            )}
          </div>
        )}
      </main>
    </div>
  )
}
