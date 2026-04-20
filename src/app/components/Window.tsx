interface WindowProps {
  title?: string
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function Window({
  title = "Window",
  children,
  className = "",
  style = {},
}: WindowProps) {
  return (
    // finestra computer
    <div
      className={`flex flex-col bg-[#e5e5e5] rounded-lg shadow-lg overflow-hidden bg-blue-100 ${className}`}
      style={style}
    >
      {/* barra del titolo */}
      <div className="flex items-center justify-between bg-gradient-to-b from-red-200 via-rose-300 to-red-400 px-3 py-2 border-b border-gray-400">
        {/* titolo vero e proprio */}
        <span className="text-sm font-semibold text-gray-950">{title}</span>

        {/* cerchi colorati decorativi */}
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-yellow-400 rounded-md border border-gray-600"></div>
          <div className="w-3 h-3 bg-green-500 rounded-md border border-gray-600"></div>
          <div className="w-3 h-3 bg-red-500 rounded-md border border-gray-600"></div>
        </div>
      </div>

      {/* contenuto */}
      <div className="flex-1 overflow-auto mt-1 mx-1">{children}</div>
    </div>
  )
}
