"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedButtonProps {
    children: ReactNode,
    variant?: VariantProps<typeof buttonVariants>["variant"],
}
export function AnimatedButton({ children, variant = "default" }: AnimatedButtonProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.9, y: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
            <Button asChild size="sm" variant={variant} className="gap-2 hover:border dark:hover:border-input hover:border-border hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50  transition-all delay-75">
                {children}
            </Button>
        </motion.div>
    )
}
