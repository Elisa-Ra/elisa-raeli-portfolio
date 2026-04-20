"use client"

import { useRef, useEffect } from "react"
import Window from "./Window"

interface ModalProps {
  title: string
  onClose: () => void
  children?: React.ReactNode
}
// SCHERMATA CHE SI APRE QUANDO SI CLICCA SU UN'ICONA
export default function Modal({ title, onClose, children }: ModalProps) {
  const clickSound = useRef<HTMLAudioElement | null>(null)
  useEffect(() => {
    clickSound.current = new Audio("/click.mp3")
    clickSound.current.volume = 0.4
  }, [])

  const handleClose = () => {
    clickSound.current?.play()
    onClose()
  }

  return (
    // opacizzo lo sfondo dietro
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Richiamo la mia finestra stile window */}
      <Window title={title} className="w-11/12 h-11/12 max-w-3xl">
        <div className="py-1 text-black flex flex-col h-full">
          <div className="flex-1 overflow-auto">{children}</div>

          <button
            onClick={handleClose}
            className="mt-4 px-4 py-2 bg-sky-200 rounded hover:bg-gray-300 transition"
          >
            Chiudi
          </button>
        </div>
      </Window>
    </div>
  )
}
