import Image from "next/image"

interface IconsProgettiProps {
  icon: string
  label: string
}

export default function IconsProgetti({ icon, label }: IconsProgettiProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* QUADRATO ICONA */}
      <div className="w-40 h-40 bg-slate-100 rounded-xl shadow-md relative overflow-hidden">
        <Image src={icon} alt={label} fill className="object-contain" />
        {/* LABEL */}
      </div>
      <p className="text-sm font-semibold text-center">{label}</p>
    </div>
  )
}
