interface SkillBarProps {
  skill: string
  percentage: number
  color?: string
}

export function SkillBar({ skill, percentage, color = "cyan" }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
        <span className="text-xs text-cyan-600 font-medium">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 group">
        <div
          className={`bg-gradient-to-r from-${color}-500 to-${color}-400 h-2.5 rounded-full transition-all duration-1000 ease-in-out`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}
