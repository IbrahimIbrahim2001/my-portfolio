"use client";

import WrapperContainer from "@/components/wrapper";
import { ProjectCard } from "./project-card";
import { projects } from "@/helpers/projects-array";

export function AllProjectsSection() {
    return (
        <div className="relative">
            <WrapperContainer>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </WrapperContainer>
        </div>
    )
}
