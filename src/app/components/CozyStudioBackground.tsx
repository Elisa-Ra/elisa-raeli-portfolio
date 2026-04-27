"use client"

import Image from "next/image"

export default function CozyStudioBackground() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* SFONDO CON LA SCRIVANIA*/}
      <Image
        src="/bg9.png"
        alt="studio cozy"
        fill
        priority
        className="object-cover"
      />
    </div>
  )
}
