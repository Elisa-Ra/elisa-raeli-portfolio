"use client"

import { useState } from "react"

const categories = {
  Siti: ["Traveler's Notebook"],
  Videogiochi: ["Avventura nella Valle dei Templi"],
}

export default function NavProgetti({
  onSelect,
}: {
  onSelect: (p: string) => void
}) {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div className="w-full bg-yellow-500 border-b-2 border-yellow-600 rounded-md flex gap-0 text-sm font-sans">
      {Object.entries(categories).map(([category, projects]) => (
        <div key={category} className="relative flex-1">
          {/* CATEGORIA */}
          <button
            onClick={() => setOpen(open === category ? null : category)}
            className="w-full px-4 py-1 bg-linear-to-r from-amber-200 via-amber-300 to-amber-400 border-r-2 border-yellow-600 rounded-t-md active:border-white active:bg-[#D0D0D0]"
          >
            {category}
          </button>

          {/* MENU A TENDINA */}
          {open === category && (
            <div className="absolute left-0 mt-1 w-full bg-amber-200 border border-yellow-600 shadow-lg z-10 w-48">
              {projects.map((project) => (
                <div
                  key={project}
                  onClick={() => {
                    onSelect(project)
                    setOpen(null)
                  }}
                  className="px-3 py-2 hover:bg-[#000080] hover:text-white cursor-pointer"
                >
                  {project}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
