"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const Button = ({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string
  children: React.ReactNode
  as?: any
  containerClassName?: string
  borderClassName?: string
  duration?: number
  className?: string
  [key: string]: any
}) => {
  return (
    <Component
      className={cn("bg-transparent relative text-xl h-16 w-full p-[1px] overflow-hidden", containerClassName)}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div className="absolute inset-0" style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
        <motion.div
          className={cn(
            "h-full w-full absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500",
            borderClassName,
          )}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: duration || 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  )
}
