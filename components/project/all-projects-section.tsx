"use client";

import WrapperContainer from "@/components/shared/wrapper";
import { projects } from "@/helpers/projects-array";
import { motion } from "motion/react";
import { ProjectCard } from "./project-card";

export function AllProjectsSection() {
    return (
        <div className="relative">
            <WrapperContainer>
                <motion.div
                    className="grid sm:grid-cols-2 gap-4 mb-4">
                    {projects.map((project, index) => (
                        <motion.div key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                delay: index * 0.05,
                                type: "spring",
                                stiffness: 100,
                                damping: 12
                            }}>
                            <ProjectCard key={project.title} project={project} />
                        </motion.div>
                    ))}
                </motion.div>
            </WrapperContainer>
        </div>
    )
}
