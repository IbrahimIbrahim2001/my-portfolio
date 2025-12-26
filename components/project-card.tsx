import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { IconGroup } from "./icons-group";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { BiSolidHourglass } from "react-icons/bi";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Project } from "@/types/project-type";

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="p-0 group cursor-pointer relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <CardContent className="p-0 relative w-full h-48 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <Image
                    src={project.lightImage}
                    alt="NexTap project-light screen"
                    className="transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 dark:hidden"
                    fill
                />
                <Image
                    src={project.darkImage}
                    alt="NexTap project-light screen"
                    className="transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 hidden dark:block"
                    fill
                />
                {/* view code & view demo icons section*/}
                <div className="flex gap-x-1 absolute bottom-4 w-full px-4">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href={project.github_href}
                                target="_blank"
                                className="backdrop-blur-md bg-background/90 dark:bg-background/80 border border-border/50 shadow-xl rounded-full p-2.5 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 z-10"
                            >
                                <SiGithub className="size-4 " />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            View Code
                        </TooltipContent>
                    </Tooltip>
                    {!project.disabled_demo_href ?
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={project.demo_href}
                                    target="_blank"
                                    className="backdrop-blur-md bg-background/90 dark:bg-background/80 border border-border/50 shadow-xl rounded-full p-2.5 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 z-10"
                                >
                                    <ExternalLink className="size-4" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                View Demo
                            </TooltipContent>
                        </Tooltip>
                        :
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div
                                    className="backdrop-blur-md bg-muted/90 cursor-not-allowed dark:bg-muted/80 border opacity-50 border-border/50 shadow-xl rounded-full p-2.5  z-10"
                                >
                                    <BiSolidHourglass className="size-4 animate-[spin_3s_ease-in-out_infinite]" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                Soon...
                            </TooltipContent>
                        </Tooltip>
                    }

                </div>
            </CardContent>
            <CardHeader className="relative">
                <CardTitle className="text-xl font-bold transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
                    {project.title}
                </CardTitle>
                <CardDescription className="h-20 transition-all duration-300  group-hover:text-foreground/80">
                    {project.description}
                </CardDescription>
            </CardHeader>
            {/* tech icons */}
            <CardFooter className="flex gap-x-2 max-sm:flex-col items-stretch mb-4">
                <IconGroup icons={project.techIcons} />
            </CardFooter>
        </Card >
    )
}