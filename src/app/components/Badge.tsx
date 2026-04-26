"use client"

interface BadgeProps {
  label: string
  className?: string
}

export default function Badge({ label, className = "" }: BadgeProps) {
  return (
    <span
      className={
        "inline-block px-2 py-0.5  font-medium text-white " +
        "border rounded-md border-violet-600 bg-violet-400 " +
        +className
      }
    >
      {label}
    </span>
  )
}
