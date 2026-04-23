"use client"
import type { CategoryName } from "./Progetti"

const categories = {
  Siti: ["Traveler's Notebook"],
  Videogiochi: ["Avventura nella Valle dei Templi"],
}

interface NavProgettiProps {
  selectedCategory: CategoryName | null
  onSelectCategory: (c: CategoryName) => void
}

export default function NavProgetti({
  selectedCategory,
  onSelectCategory,
}: NavProgettiProps) {
  return (
    <div className="w-full bg-yellow-500 border-b-2 border-yellow-600 rounded-md flex text-sm font-sans">
      {Object.keys(categories).map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category as CategoryName)}
          className={`flex-1 px-4 py-2 border-r-2 border-yellow-600 rounded-t-md hover:bg-amber-400
            ${selectedCategory === category ? "bg-amber-400" : "bg-amber-300"}
          `}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
