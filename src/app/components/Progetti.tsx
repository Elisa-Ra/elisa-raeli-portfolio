"use client"

import IconsProgetti from "./IconsProgetti"

export default function Progetti() {
  return (
    <div className="flex flex-col h-full text-black p-2 sm:p-4">
      <div className="flex-1 overflow-y-auto space-y-6 pr-2">
        {/* PROGETTI */}
        <section>
          <h2 className="text-xl font-bold mb-2">I miei progetti</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <IconsProgetti
              icon="/avventura.svg"
              label="Avventura nella Valle dei Templi"
            />
            <IconsProgetti icon="/traveller.svg" label="Traveler's Notebook" />
          </div>
        </section>
      </div>
    </div>
  )
}
