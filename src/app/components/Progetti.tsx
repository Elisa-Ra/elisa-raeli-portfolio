"use client"

import { useState } from "react"
import NavProgetti from "./NavProgetti"
import Image from "next/image"
import { projectData } from "../data/lista-progetti"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDesktop } from "@fortawesome/free-solid-svg-icons"
import Badge from "./Badge"
import Gallery from "./Gallery"

const categories = {
  Siti: ["Traveler's Notebook"],
  Videogiochi: ["Avventura nella Valle dei Templi"],
}

export type CategoryName = keyof typeof categories

export default function Progetti() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryName | null>(
    null,
  )
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const project = selectedProject ? projectData[selectedProject] : null

  return (
    <div className="flex flex-col h-full">
      <NavProgetti
        selectedCategory={selectedCategory}
        onSelectCategory={(c: CategoryName) => {
          setSelectedCategory(c)
          setSelectedProject(null)
        }}
      />

      <main className="flex-1 overflow-y-auto bg-amber-200 p-4">
        {!selectedCategory && (
          <p className="text-gray-700 text-lg text-center">
            Qui potrai visualizzare alcuni dei miei progetti preferiti.<br></br>
            La sezione è ancora in corso e verrà aggiornata presto con dei nuovi
            progetti. <br></br>
            Seleziona una categoria per iniziare!
          </p>
        )}

        {selectedCategory && !selectedProject && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            {categories[selectedCategory].map((project) => (
              <div
                key={project}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer flex flex-col items-center"
              >
                <div className="relative w-40 h-40 bg-white border border-gray-400 rounded shadow flex items-center justify-center">
                  <Image
                    src="/folder.svg"
                    alt="folder icon"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <span className="mt-2 text-sm">{project}</span>
              </div>
            ))}
          </div>
        )}

        {project && (
          <div className="space-y-4 bg-slate-100 p-4 rounded-lg">
            <h1 className="text-2xl font-bold text-center">
              {selectedProject}
            </h1>

            {project.image && (
              <div className="relative w-full max-w-[300px] aspect-video mx-auto">
                <Image
                  src={project.image}
                  alt={selectedProject || "project image"}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <div className="flex gap-4 justify-center my-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center 
         text-white text-xl transition transform hover:scale-110 hover:bg-black"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              )}
              <a
                href={project.link}
                target="_blank"
                className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center
             text-white text-xs font-bold tracking-[0.15em] uppercase
             transition transform hover:scale-110 hover:bg-green-700"
              >
                <FontAwesomeIcon icon={faDesktop} />
              </a>
            </div>

            <p className="text-gray-700 whitespace-pre-line">
              {project.description}
            </p>
            {project.gallery && project.gallery.length > 0 && (
              <Gallery images={project.gallery} />
            )}
            <div className="flex flex-wrap gap-2">
              {project.tec?.map((t) => (
                <Badge key={t} label={t} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
