"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Contatti() {
  return (
    <div className="flex gap-4 justify-center my-4">
      {/* LINKEDIN */}
      <a
        href="https://www.linkedin.com/in/elisa-raeli/"
        target="_blank"
        className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center 
                   text-white text-xl transition transform hover:scale-110 hover:bg-blue-700"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>

      {/* GITHUB */}
      <a
        href="https://github.com/Elisa-Ra"
        target="_blank"
        className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center 
                   text-white text-xl transition transform hover:scale-110 hover:bg-black"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>

      {/* EMAIL */}
      <a
        href="mailto:elyraptor22@gmail.com"
        className="w-10 h-10 rounded-lg bg-rose-400 flex items-center justify-center 
                   text-white text-xl transition transform hover:scale-110 hover:bg-rose-500"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>

      {/* CV */}
      <a
        href="/cv-elisa-raeli.pdf"
        target="_blank"
        className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center
             text-white text-xs font-bold tracking-[0.15em] uppercase
             transition transform hover:scale-110 hover:bg-red-700"
      >
        CV
      </a>
    </div>
  )
}
