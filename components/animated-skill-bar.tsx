"use client"

import { useEffect, useState } from "react"

interface AnimatedSkillBarProps {
  skill: string
  percentage: number
  color?: string
  delay?: number
}

export function AnimatedSkillBar({ skill, percentage, color = "cyan", delay = 0 }: AnimatedSkillBarProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage)
    }, 100 + delay)

    return () => clearTimeout(timer)
  }, [percentage, delay])

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
        <span className="text-xs text-cyan-600 font-medium">{width}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`bg-gradient-to-r from-${color}-500 to-${color}-400 h-2.5 rounded-full transition-all duration-1000 ease-in-out`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  )
}
