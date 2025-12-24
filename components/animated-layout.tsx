"use client";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

export function AnimatedLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }); //run in every rerender to re-animate
    return (
        <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20, rotateX: -10 }}
            animate={{ opacity: 0.5, y: 10 }}
            whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0
            }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                opacity: { duration: 0.3 },
                rotateX: { duration: 0.5 }
            }}
        >
            {children}
        </motion.div>
    );
}