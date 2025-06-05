import type React from "react"

interface CircleWithIconProps {
  size?: number
  backgroundColor?: string
  icon?: React.ReactNode
  className?: string
}

export const CircleWithIcon: React.FC<CircleWithIconProps> = ({
  size = 80,
  backgroundColor = "#F0F7F6",
  icon,
  className = "",
}) => {
  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
      {/* Background Circle */}
      <div
        className="rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor,
        }}
      />

      {/* Icon positioned at bottom left */}
      {icon && (
        <span
          className="absolute material-icons text-teal-500 text-3xl mb-4"
          style={{
            top: size * 0.6,
            left: size * 0.1,
            width: size * 1.5,
            height: size * 1.5,
          }}
        >
          {icon}
        </span>
      )}
    </div>
  )
}
