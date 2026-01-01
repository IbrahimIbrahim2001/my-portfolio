"use client";
import WrapperContainer from "@/components/shared/wrapper";
import { projects } from "@/helpers/projects-array";
import Link from "next/link";
import { ProjectCard } from "./project-card";
import { AnimatedButton } from "../shared/animated-button";
import { TextBox } from "../shared/text-box";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function ProjectsSection() {
  const subProjects = projects.slice(0, 2); // get only the first 2 projects
  return (
    <div className="relative">
      <WrapperContainer>
        <TextBox text="I love building things " />
        <motion.div className="grid sm:grid-cols-2 gap-4 mb-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          {subProjects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center items-center">
          <AnimatedButton>
            <Link prefetch href="/projects">
              View More
            </Link>
          </AnimatedButton>
        </div>
      </WrapperContainer>
    </div>
  )
}
