import Image from "next/image"

interface SkillProps {
  icon: string
  label: string
}

export default function Skill({ icon, label }: SkillProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* QUADRATO ICONA */}
      <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform">
        <Image src={icon} alt={label} width={32} height={32} />
      </div>

      {/* LABEL */}
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}
