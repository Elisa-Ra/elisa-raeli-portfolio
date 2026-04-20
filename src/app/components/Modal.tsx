"use client"

import Window from "./Window"

interface ModalProps {
  title: string
  onClose: () => void
  children?: React.ReactNode
}
// SCHERMATA CHE SI APRE QUANDO SI CLICCA SU UN'ICONA
export default function Modal({ title, onClose, children }: ModalProps) {
  return (
    // opacizzo lo sfondo dietro
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Richiamo la mia finestra stile window */}
      <Window title={title} className="w-11/12 h-11/12 max-w-3xl">
        <div className="p-4 text-black">
          {children}

          <button
            onClick={onClose}
            className="mt-6 px-4 py-2 bg-sky-200 rounded hover:bg-gray-300 transition "
          >
            Chiudi
          </button>
        </div>
      </Window>
    </div>
  )
}
