"use client"

import { useState } from "react"
import WindowIcons, { Section } from "./components/WindowIcons"
import { sections } from "./data/sections"
import Modal from "./components/Modal"
import Footer from "./components/Footer"
import CozyStudioBackground from "./components/CozyStudioBackground"

// Pagina principale
export default function Page() {
  const [selected, setSelected] = useState<Section | null>(null)

  return (
    <>
      <main className="flex-1 relative">
        {/* sfondo con la scrivania */}
        <CozyStudioBackground />

        <div className="absolute inset-0">
          <WindowIcons sections={sections} onSelect={setSelected} />
        </div>

        {selected && (
          <Modal title={selected.title} onClose={() => setSelected(null)}>
            {selected.component}
          </Modal>
        )}
      </main>
      <Footer />
    </>
  )
}
