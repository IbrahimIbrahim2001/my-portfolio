import { buttonVariants } from "@/components/ui/button";

import WrapperContainer from "@/components/wrapper";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ProjectCard } from "./project-card";
import { TextBox } from "./text-box";
import { projects } from "@/helpers/projects-array";

export function ProjectsSection() {
  return (
    <div className="relative">
      <WrapperContainer>
        <TextBox text="I love building things " />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {projects.map((project, index) => (
            <>
              <ProjectCard key={index} project={project} />
            </>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link prefetch href="/projects" className={cn(buttonVariants(), "hover:border dark:hover:border-input hover:border-border hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 transition-all delay-75")}>
            View More
          </Link>
        </div>
      </WrapperContainer>
    </div>
  )
}
