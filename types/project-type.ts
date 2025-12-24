import { StaticImageData } from "next/image"
import { TechnologyType } from "./technology-type"

export interface Project {
    title: string,
    demo_href: string,
    disabled_demo_href?: boolean,
    github_href: string,
    description: string,
    techIcons: TechnologyType[],
    lightImage: StaticImageData | string
    darkImage: StaticImageData | string
}