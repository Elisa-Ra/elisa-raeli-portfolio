import React from "react"
import Computer from "./Computer"
import Image from "next/image"

export interface Section {
  id: number
  title: string
  thumbnail: string
  component: React.ReactNode
}

interface WindowIconsProps {
  sections: Section[]
  onSelect: (section: Section) => void
}

export default function WindowIcons({ sections, onSelect }: WindowIconsProps) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-2 sm:p-6 bg-green-800">
      <Computer>
        {sections.map((p) => (
          <div
            key={p.id}
            onClick={() => onSelect(p)}
            className="w-full aspect-square cursor-pointer rounded-lg overflow-hidden "
          >
            <div className="relative w-full h-full ">
              <Image
                src={p.thumbnail}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </Computer>
    </div>
  )
}
