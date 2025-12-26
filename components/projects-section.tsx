"use client";
import WrapperContainer from "@/components/wrapper";
import { projects } from "@/helpers/projects-array";
import Link from "next/link";
import { ProjectCard } from "./project-card";
import { AnimatedButton } from "./shared/animated-button";
import { TextBox } from "./text-box";

export function ProjectsSection() {
  const subProjects = projects.slice(0, 3); // get only the first 3 projects
  return (
    <div className="relative">
      <WrapperContainer>
        <TextBox text="I love building things " />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {subProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <AnimatedButton>
            <Link prefetch href="/projects" >
              View More
            </Link>
          </AnimatedButton>
        </div>
      </WrapperContainer>
    </div>
  )
}
