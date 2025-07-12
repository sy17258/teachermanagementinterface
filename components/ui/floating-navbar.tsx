"use client"
import { motion, AnimatePresence, type JSX } from "framer-motion"
import { cn } from "@/lib/utils"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
    completed?: boolean
    current?: boolean
  }[]
  className?: string
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className,
        )}
      >
        {navItems.map((navItem, idx) => (
          <div
            key={`link-${idx}`}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
              navItem.current && "text-blue-600 dark:text-blue-400",
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
            {navItem.completed && <div className="w-2 h-2 bg-green-500 rounded-full ml-1" />}
            {navItem.current && (
              <motion.div
                className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-full -z-10"
                layoutId="navbar-active"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
