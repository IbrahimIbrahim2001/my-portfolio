"use client"

import { cn } from "@/lib/utils"
import { TechnologyType } from "@/types/technology-type"
import { motion } from "motion/react"
import { useState } from "react"

interface IconGroupProps {
    icons: TechnologyType[]
}

export const IconGroup = ({ icons: Icons }: IconGroupProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    return (
        <div className="flex items-center">
            {Icons.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.div
                        key={index}
                        className={cn("relative flex items-center overflow-hidden border border-border/80 bg-background/80 rounded p-1", item.color)}
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        onTap={() => setHoveredIndex(() => hoveredIndex === index ? null : index)}
                        initial={false}
                        animate={{
                            width: hoveredIndex === index ? 120 : 40,
                            marginLeft: index === 0 ? 0 : -8,
                            zIndex: hoveredIndex === index ? 50 : Icons.length - index,
                            transition: {
                                duration: 0.4,
                                ease: [0.34, 1.56, 0.64, 1],
                                marginLeft: { duration: 0.3 },
                            },
                        }}
                        style={{
                            boxShadow:
                                hoveredIndex === index
                                    ? "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                                    : "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <div className="absolute inset-0 rounded-full ring-2 ring-background" />
                        <motion.div
                            className="size-8  p-1.5 absolute left-1 z-10  flex items-center justify-center"
                            animate={{
                                scale: hoveredIndex === index ? 1.1 : 1,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <Icon className="size-4" />
                        </motion.div>
                        <motion.span
                            initial={false}
                            animate={{
                                opacity: hoveredIndex === index ? 1 : 0,
                                x: hoveredIndex === index ? 0 : -20,
                                transition: {
                                    opacity: { duration: 0.3, delay: hoveredIndex === index ? 0.1 : 0 },
                                    x: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
                                },
                            }}
                            className="text-sm font-semibold whitespace-nowrap ml-10"
                        >
                            {item.text}
                        </motion.span>
                    </motion.div>
                )
            }
            )}
        </div>
    )
}
