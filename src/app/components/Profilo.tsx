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
          <p className="leading-7 whitespace-pre-line">
            Ciao, io sono <b>Elisa Raeli</b>, vengo da Agrigento in Sicilia e
            sono appassionata di design, digital humanities e videogiochi.
            <br></br>
            <br></br> La mia formazione è un ponte tra due mondi: unisco una
            laurea in <b>Informatica Umanistica </b> presso{" "}
            <i>l&apos;Università di Pisa</i> e un Master{" "}
            <b>Full Stack Web Developer</b> presso{" "}
            <i>EPICODE - Institute of Technology</i> per progettare soluzioni
            tecnologiche capaci di dare valore reale ai contenuti. <br></br>
            <br></br>
            Questa visione ibrida mi permette di curare l&apos;intero ciclo di
            vita di un progetto: dalla solidità dell&apos;architettura backend,
            all&apos;armonia dell&apos;interfaccia frontend, fino alla strategia
            comunicativa del contenuto stesso. <br></br>
            Metto il codice al servizio della comunicazione e della creatività,
            trasformando la tecnologia in uno strumento capace di raccontare
            storie e connettere le persone in modo efficace e d&apos;impatto.
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
