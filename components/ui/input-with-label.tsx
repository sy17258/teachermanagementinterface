"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, label, error, ...props }, ref) => {
  const [focused, setFocused] = React.useState(false)

  return (
    <div className="relative">
      {label && (
        <motion.label
          className={cn(
            "absolute left-3 transition-all duration-200 pointer-events-none",
            focused || props.value
              ? "top-2 text-xs text-blue-600 dark:text-blue-400"
              : "top-4 text-sm text-gray-500 dark:text-gray-400",
          )}
          animate={{
            y: focused || props.value ? -8 : 0,
            scale: focused || props.value ? 0.85 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.label>
      )}
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          label && "pt-6 pb-2",
          error && "border-red-500 focus-visible:ring-red-500",
          className,
        )}
        ref={ref}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
      {error && (
        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-red-600 mt-1">
          {error}
        </motion.p>
      )}
    </div>
  )
})
Input.displayName = "Input"

export { Input }
