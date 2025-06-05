import type React from "react"

interface StackedDiamondIconProps {
  size?: number
  color?: string
  backgroundColor?: string
  className?: string
}

export const StackedDiamondIcon: React.FC<StackedDiamondIconProps> = ({
  size = 80,
  color = "#4AADA3",
  backgroundColor = "#F0F7F6",
  className = "",
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Circle */}
        <circle cx="40" cy="40" r="40" fill={backgroundColor} />

        {/* Bottom Diamond */}
        <path d="M40 55L50 45L40 35L30 45L40 55Z" fill={color} fillOpacity="0.8" />

        {/* Middle Diamond */}
        <path d="M40 45L50 35L40 25L30 35L40 45Z" fill={color} fillOpacity="0.9" />

        {/* Top Diamond */}
        <path d="M40 35L50 25L40 15L30 25L40 35Z" fill={color} />
      </svg>
    </div>
  )
}
