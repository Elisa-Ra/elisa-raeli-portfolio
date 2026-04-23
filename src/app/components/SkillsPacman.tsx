"use client"

import Skill from "./Skill"

const skills = [
  { icon: "/icons/w3_html5-icon.svg", label: "HTML" },
  { icon: "/icons/w3_css-icon.svg", label: "CSS" },
  { icon: "/icons/javascript-icon.svg", label: "Javascript" },
  { icon: "/icons/getbootstrap-icon.svg", label: "Bootstrap" },
  { icon: "/icons/reactjs-icon.svg", label: "React" },
  { icon: "/icons/nextjs-icon.svg", label: "Next.js" },
  { icon: "/icons/tailwindcss-icon.svg", label: "Tailwind" },
  { icon: "/icons/java-icon.svg", label: "Java" },
  { icon: "/icons/postgresql-icon.svg", label: "PostgreSQL" },
  { icon: "/icons/python-icon.svg", label: "Python" },
]

export default function SkillsPacman() {
  return (
    <div className="overflow-hidden w-full py-4">
      <div className="flex animate-marquee gap-8">
        {/* Lista originale */}
        <div className="flex gap-8">
          {skills.map((s) => (
            <Skill key={s.label} icon={s.icon} label={s.label} />
          ))}
        </div>

        {/* Lista duplicata */}
        <div className="flex gap-8">
          {skills.map((s) => (
            <Skill key={s.label + "-copy"} icon={s.icon} label={s.label} />
          ))}
        </div>
      </div>
    </div>
  )
}
