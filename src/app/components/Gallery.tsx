"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons"

interface GalleryProps {
  images: string[]
  interval?: number
}

export default function Gallery({ images, interval = 3000 }: GalleryProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const [current, setCurrent] = useState(0)

  const total = images.length

  // Vai allo slide specifico
  const goToSlide = (index: number) => {
    if (!sliderRef.current) return
    const slideWidth = sliderRef.current.children[0].clientWidth
    sliderRef.current.style.transform = `translateX(-${index * slideWidth}px)`
  }

  // Slide avanti
  const nextSlide = () => {
    const newIndex = (current + 1) % total
    setCurrent(newIndex)
    goToSlide(newIndex)
  }

  // Slide indietro
  const prevSlide = () => {
    const newIndex = (current - 1 + total) % total
    setCurrent(newIndex)
    goToSlide(newIndex)
  }

  // Autoplay
  useEffect(() => {
    const auto = setInterval(nextSlide, interval)
    return () => clearInterval(auto)
  }, [current])

  // Aggiorna posizione quando cambia la dimensione della finestra
  useEffect(() => {
    const handleResize = () => goToSlide(current)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [current])

  return (
    <div className="w-full flex flex-col items-center">
      {/* SLIDER */}
      <div className="w-full max-w-3xl overflow-hidden relative">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
        >
          {images.map((src, i) => (
            <div key={i} className="w-full flex-shrink-0 relative aspect-video">
              <Image
                src={src}
                alt={`Slide ${i}`}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* BOTTONI SOTTO */}
      <div className="flex gap-4 mb-2 mt-1">
        <button
          onClick={prevSlide}
          className="p-2 border-yellow-600 bg-amber-300 rounded-full hover:bg-yellow-600 hover:text-white transition"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        <button
          onClick={nextSlide}
          className="p-2 border-yellow-600 bg-amber-300 rounded-full hover:bg-yellow-600 hover:text-white transition"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  )
}
