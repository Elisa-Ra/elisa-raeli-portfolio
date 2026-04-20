"use client"

import Contatti from "./Contatti"
import Skill from "./Skill"

export default function Profilo() {
  return (
    <div className="flex flex-col h-full text-black ">
      {/* CONTENUTO SCORREVOLE */}
      <div className="flex-1 overflow-y-auto space-y-6 pr-0 bg-slate-100 p-2">
        {/* CHI SONO */}
        <section>
          <h2 className="text-xl font-bold mb-3 text-center">Chi sono</h2>
          <p className=" leading-relaxed">
            Sono Elisa, una designer e developer che ama creare interfacce
            eleganti, pulite e con una forte attenzione ai dettagli. Mi piace
            unire estetica e funzionalità per dare vita a esperienze digitali
            coerenti e piacevoli.
          </p>
        </section>

        {/* COMPETENZE */}
        <section>
          <h2 className="text-xl font-bold mb-3 text-center">Competenze</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
            <Skill icon="/icons/w3_html5-icon.svg" label="HTML" />
            <Skill icon="/icons/w3_css-icon.svg" label="CSS" />
            <Skill icon="/icons/javascript-icon.svg" label="Javascript" />
            <Skill icon="/icons/getbootstrap-icon.svg" label="Bootstrap" />
            <Skill icon="/icons/reactjs-icon.svg" label="React" />
            <Skill icon="/icons/nextjs-icon.svg" label="Next.js" />
            <Skill icon="/icons/tailwindcss-icon.svg" label="Tailwind" />
            <Skill icon="/icons/java-icon.svg" label="Java" />
            <Skill icon="/icons/postgresql-icon.svg" label="PostgreSQL" />
            <Skill icon="/icons/python-icon.svg" label="Python" />
          </div>
        </section>
      </div>
      {/* Qua finisce la parte scrollabile */}

      {/* CONTATTI IN FONDO */}
      <section>
        <div className="pt-4 text-center">
          <h2 className="text-xl font-bold mb-2 text-white">I miei contatti</h2>
          <Contatti />
        </div>
      </section>
    </div>
  )
}
