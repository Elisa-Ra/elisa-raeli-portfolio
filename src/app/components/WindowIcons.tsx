"use client"

import { useRef, useEffect } from "react"
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
  const clickSound = useRef<HTMLAudioElement | null>(null)
  const hoverSound = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    clickSound.current = new Audio("/click.mp3")
    clickSound.current.volume = 0.4

    hoverSound.current = new Audio("/switch.mp3")
    hoverSound.current.volume = 0.25
  }, [])

  const handleClick = (section: Section) => {
    clickSound.current?.play()
    onSelect(section)
  }

  const handleHover = () => {
    if (hoverSound.current) {
      hoverSound.current.currentTime = 0
      hoverSound.current.play()
    }
  }

  return (
    <div className="w-full h-full flex flex-1 items-center justify-center p-2 sm:p-6 bg-gradient-to-b from-amber-200 to-yellow-400">
      <Computer>
        {sections.map((p) => (
          <div
            key={p.id}
            onClick={() => handleClick(p)}
            onMouseEnter={handleHover}
            className="w-full aspect-square cursor-pointer rounded-lg overflow-hidden "
          >
            <div className="relative w-full h-full hover:scale-105">
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
