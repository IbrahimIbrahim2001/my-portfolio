"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react"
import { ReactNode } from "react";

export function AnimatedButton({ children }: { children: ReactNode }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.9, y: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
            <Button size="sm" className="gap-2 hover:border dark:hover:border-input hover:border-border hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 transition-all delay-75">
                {children}
            </Button>
        </motion.div>
    )
}
