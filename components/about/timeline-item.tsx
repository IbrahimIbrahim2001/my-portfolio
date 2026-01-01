"use client";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Badge } from "../ui/badge";
import { Timeline } from "@/types/timeline-type";
import { motion } from "motion/react";
import { badgeVariants, containerVariants, iconVariants, itemVariants } from "@/animations/timeline-variants";

interface TimelineItemProps {
    item: Timeline
}

export default function TimelineItem({ item }: TimelineItemProps) {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6">
            <motion.div variants={badgeVariants}>
                <Badge variant="outline" className="px-4 shadow-2xl">
                    <p className="text-lg font-semibold">{item.year}</p>
                </Badge>
            </motion.div>
            {item.content.map((c, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-x-3 m-4 text-muted-foreground/80"
                >
                    <motion.div
                        className="flex items-center h-6"
                        variants={iconVariants}
                    >
                        <AiOutlineCheckCircle className="size-4" />
                    </motion.div>
                    <div className="space-y-1">
                        <p className="text-md font-semibold">{c.title}</p>
                        <p className="text-sm text-muted-foreground/60">
                            {c.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}
