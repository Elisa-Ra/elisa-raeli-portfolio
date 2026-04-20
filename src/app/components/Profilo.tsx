"use client"

import Contatti from "./Contatti"
import Skill from "./Skill"

export default function Profilo() {
  return (
    <div className="flex flex-col h-full text-black p-2 sm:p-4">
      {/* CONTENUTO SCORREVOLE */}
      <div className="flex-1 overflow-y-auto space-y-6 pr-2">
        {/* CHI SONO */}
        <section>
          <h2 className="text-xl font-bold mb-2">Chi sono</h2>
          <p className=" leading-relaxed">
            Sono Elisa, una designer e developer che ama creare interfacce
            eleganti, pulite e con una forte attenzione ai dettagli. Mi piace
            unire estetica e funzionalità per dare vita a esperienze digitali
            coerenti e piacevoli.
          </p>
        </section>

        {/* COMPETENZE */}
        <section>
          <h2 className="text-xl font-bold mb-2">Competenze</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <Skill icon="/icons/reactjs-icon.svg" label="React" />
            <Skill icon="/icons/nextjs-icon.svg" label="Next.js" />
            <Skill icon="/icons/tailwindcss-icon.svg" label="Tailwind" />
            <Skill icon="/icons/java-icon.svg" label="Java" />
            <Skill icon="/icons/postgresql-icon.svg" label="PostgreSQL" />
          </div>
        </section>
      </div>

      {/* CONTATTI IN FONDO */}
      <section>
        <div className="pt-4">
          <h2 className="text-xl font-bold mb-2">Contatti</h2>
          <Contatti />
        </div>
      </section>
    </div>
  )
}
