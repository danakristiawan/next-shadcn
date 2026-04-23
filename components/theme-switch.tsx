"use client"

// import { useTheme } from "next-themes"
import { useTheme } from "@/components/theme-provider"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        relative w-14 h-8 rounded-full transition-colors duration-300 scale-50 
        ${isDark ? "bg-black" : "bg-gray-300"}
      `}
    >
      {/* Thumb */}
      <div
        className={`
          absolute top-1 left-1 w-6 h-6 rounded-full
          flex items-center justify-center
          transition-transform duration-300
          ${isDark ? "translate-x-6 bg-white" : "translate-x-0 bg-black"}
        `}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-black" />
        ) : (
          <Sun className="w-4 h-4 text-white" />
        )}
      </div>
    </button>
  )
}