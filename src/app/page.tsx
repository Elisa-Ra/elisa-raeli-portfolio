"use client"

import { useState } from "react"
import WindowIcons, { Section } from "./components/WindowIcons"
import { sections } from "./data/sections"
import Modal from "./components/Modal"

// Pagina principale
export default function Page() {
  const [selected, setSelected] = useState<Section | null>(null)

  return (
    <>
      <WindowIcons sections={sections} onSelect={setSelected} />

      {selected && (
        <Modal title={selected.title} onClose={() => setSelected(null)}>
          {selected.component}
        </Modal>
      )}
    </>
  )
}
