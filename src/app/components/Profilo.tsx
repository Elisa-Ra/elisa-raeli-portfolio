"use client"

import Contatti from "./Contatti"
import SkillsPacman from "./SkillsPacman"

export default function Profilo() {
  return (
    <div className="flex flex-col h-full text-black ">
      {/* CONTENUTO SCORREVOLE */}
      <div className="flex-1 overflow-y-auto space-y-6 pr-0 bg-slate-100 p-2">
        {/* CHI SONO */}
        <section>
          <h2 className="text-xl font-bold mb-3 text-center">Chi sono</h2>
          <p className=" leading-relaxed">
            Sono Elisa, una full stack developer con un&apos;anima ibrida in cui
            trovano spazio sia il mondo dell&apos;arte e della cultura che
            quello della programmazione. <br></br>
            Trovo che la tecnologia sia uno strumento meraviglioso che va messo
            a servizio dell&apos;arte, dei contenuti. <br></br>
            Ho conseguito la laurea triennale in Informatica Umanistica presso
            l&apos;Università di Pisa, per poi continuare la mia missione
            specializzandomi ancora di più nella programmazione con un master di
            EPICODE Institute of Technology in Full-Stack Web Developer.
            un&apos;anima ibrida in cui trovano spazio sia la cultura che il
            coding.
          </p>
        </section>

        {/* COMPETENZE */}
        <section>
          <h2 className="text-xl font-bold mb-3 text-center">Competenze</h2>

          <SkillsPacman />
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
