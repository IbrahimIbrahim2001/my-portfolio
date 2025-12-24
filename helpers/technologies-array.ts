import { Betterauth } from "@/components/logos/better-auth-logo"
import { ViteLogo } from "@/components/logos/vite-logo"
import { VsCodeLogo } from "@/components/logos/vs-code-logo"
import { TechnologyType } from "@/types/technology-type"
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi"
import { GrMysql } from "react-icons/gr"
import { IoLogoNodejs } from "react-icons/io"
import { IoLogoVercel } from "react-icons/io5"
import { RiSupabaseFill } from "react-icons/ri"

import {
    SiClerk, SiDocker,
    SiDrizzle,
    SiGithub,
    SiHono,
    SiI18Next,
    SiMongodb,
    SiNextdotjs,
    SiPnpm, SiPrisma,
    SiReact,
    SiReacthookform,
    SiReactquery,
    SiReactrouter,
    SiShadcnui,
    SiTailwindcss,
    SiTrpc,
    SiZod
} from "react-icons/si"
import { TbBrandRedux } from "react-icons/tb"

export const technologies: TechnologyType[] = [
    { icon: SiNextdotjs, text: "Next.js", color: "text-foreground" },
    { icon: SiReact, text: "React", color: "text-[#58c4dc]" },
    { icon: SiTailwindcss, text: "Tailwind CSS", color: "text-[#00a6f4]" },
    { icon: TbBrandRedux, text: "Redux toolkit", color: "text-[#ba8fff]" },
    { icon: SiReacthookform, text: "React hook form", color: "text-[#ec5990]" },
    { icon: SiReactquery, text: "Tanstack query", color: "text-[#fb2c36]" },
    { icon: SiTrpc, text: "TRPC", color: "text-[#398ccb]" },
    { icon: BiLogoTypescript, text: "Typescript", color: "text-[#3178c6]" },
    { icon: SiShadcnui, text: "Shadcn UI", color: "text-foreground" },
    { icon: SiHono, text: "Hono", color: "text-[#e36002]" },
    { icon: IoLogoNodejs, text: "Nodejs", color: "text-[#417e38]" },
    { icon: SiDrizzle, text: "Drizzle ORM", color: "text-yellow-400" },
    { icon: SiPrisma, text: "Prisma ORM", color: "text-foreground" },
    { icon: SiReactrouter, text: "React Router", color: "text-red-400" },
    { icon: SiMongodb, text: "Mongo DB", color: "text-[#4db33d]" },
    { icon: SiPnpm, text: "PNPM", color: "text-[#f69220]" },
    { icon: SiZod, text: "Zod", color: "text-[#9ecbff]" },
    { icon: SiClerk, text: "Clerk", color: "text-foreground" },
    { icon: Betterauth, text: "Better Auth", color: "text-foreground" },
    { icon: ViteLogo, text: "Vite", color: "text-[#646cff]" },
    { icon: SiDocker, text: "Docker", color: "text-[#2560ff]" },
    { icon: SiI18Next, text: "i18Next", color: "text-[#517772]" },
    { icon: IoLogoVercel, text: "Vercel", color: "text-foreground" },
    { icon: BiLogoPostgresql, text: "PostgreSQL", color: "text-[#699eca]" },
    { icon: RiSupabaseFill, text: "Supabase", color: "text-[#006239]" },
    { icon: GrMysql, text: "MySQL", color: "text-[#00758F]" },
    { icon: SiGithub, text: "Github", color: "text-foreground" },
    { icon: VsCodeLogo, text: "VsCode", color: "text-[#337ab7]" },
];
