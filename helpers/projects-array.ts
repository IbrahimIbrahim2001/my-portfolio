import nexTapDarkScreen from "@/public/projects/nexTap-screen-dark.png";
import nexTapLightScreen from "@/public/projects/nexTap-screen-light.png";
import vibifyScreen from "@/public/projects/vibify-screen.png";
import cryptoScreenLight from "@/public/projects/crypto-screen-light.png";
import cryptoScreenDark from "@/public/projects/crypto-screen-dark.png";
import pulseScreenLight from "@/public/projects/pulse-screen-light.png";
import pulseScreenDark from "@/public/projects/pulse-screen-dark.png";

import { Project } from "@/types/project-type";

import { Betterauth } from "@/components/logos/better-auth-logo";
import { ViteLogo } from "@/components/logos/vite-logo";
import { RiSupabaseFill } from "react-icons/ri";
import { SiClerk, SiDrizzle, SiHono, SiNextdotjs, SiPrisma, SiReact, SiShadcnui } from "react-icons/si";

const GITHUB_ACCOUNT_LINK = process.env.NEXT_PUBLIC_GITHUB_ACCOUNT_LINK!

export const projects: Project[] = [
    {
        title: "NexTap",
        demo_href: "https://nex-tap-ten.vercel.app",
        github_href: `${GITHUB_ACCOUNT_LINK}/NexTap`,
        description: "A collaborative rich-text editor, team workspaces, and email-based member invitations",
        techIcons: [
            { icon: SiNextdotjs, text: "Next.js", color: "text-foreground" },
            { icon: Betterauth, text: "Better Auth", color: "text-foreground" },
            { icon: SiDrizzle, text: "Drizzle ORM", color: "text-yellow-400" },
        ],
        lightImage: nexTapLightScreen,
        darkImage: nexTapDarkScreen
    },
    {
        title: "Pulse",
        demo_href: "",
        github_href: `${GITHUB_ACCOUNT_LINK}/pulse`,
        disabled_demo_href: true,
        description: "A full-featured social messaging platform with group chats, multimedia stories, and real-time communication",
        techIcons: [
            { icon: SiNextdotjs, text: "Next.js", color: "text-foreground" },
            { icon: SiShadcnui, text: "Shadcn UI", color: "text-foreground" },
            { icon: SiHono, text: "Hono", color: "text-[#e36002]" },
        ],
        lightImage: pulseScreenLight,
        darkImage: pulseScreenDark
    },
    {
        title: "Vibify",
        demo_href: "https://vibify-chi.vercel.app/",
        github_href: `${GITHUB_ACCOUNT_LINK}/cloned-apps/tree/main/Vibify`,
        description: "A feature-rich music streaming service with AI-powered recommendations, playlist creation, and social sharing",
        techIcons: [
            { icon: ViteLogo, text: "Vite", color: "text-[#646cff]" },
            { icon: SiReact, text: "React", color: "text-[#58c4dc]" },
            { icon: RiSupabaseFill, text: "Supabase", color: "text-[#006239]" },
        ],
        lightImage: vibifyScreen,
        darkImage: vibifyScreen
    },
    {
        title: "crypto-currency-project",
        demo_href: "https://crypto-currency-project-pi.vercel.app/",
        github_href: "https://github.com/IbrahimIbrahim2001/crypto-currency-project",

        "description": "Cryptocurrency tracker with real-time price data and currency conversion. news bookmarking, search functionality, and user authentication.",
        techIcons: [
            { icon: SiNextdotjs, text: "Next.js", color: "text-foreground" },
            { icon: SiClerk, text: "Clerk", color: "text-foreground" },
            { icon: SiPrisma, text: "Prisma ORM", color: "text-foreground" },
        ],
        lightImage: cryptoScreenLight,
        darkImage: cryptoScreenDark
    },
]
