import { Betterauth } from "@/components/logos/better-auth-logo";
import { ViteLogo } from "@/components/logos/vite-logo";
import nexTapDarkScreen from "@/public/projects/nexTap-screen-dark.png";
import nexTapLightScreen from "@/public/projects/nexTap-screen-light.png";
import { Project } from "@/types/project-type";
import { RiSupabaseFill } from "react-icons/ri";
import { SiDrizzle, SiHono, SiNextdotjs, SiReact, SiShadcnui } from "react-icons/si";


export const projects: Project[] = [
    {
        title: "NexTap",
        demo_href: "https://nex-tap-ten.vercel.app",
        github_href: "https://github.com/IbrahimIbrahim2001/NexTap",
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
        github_href: "https://github.com/IbrahimIbrahim2001/pulse",
        disabled_demo_href: true,
        description: "A full-featured social messaging platform with group chats, multimedia stories, and real-time communication",
        techIcons: [
            { icon: SiNextdotjs, text: "Next.js", color: "text-foreground" },
            { icon: SiShadcnui, text: "Shadcn UI", color: "text-foreground" },
            { icon: SiHono, text: "Hono", color: "text-[#e36002]" },
        ],
        lightImage: nexTapLightScreen,
        darkImage: nexTapDarkScreen
    },
    {
        title: "Vibify",
        demo_href: "https://vibify-chi.vercel.app/",
        github_href: "https://github.com/IbrahimIbrahim2001/cloned-apps/tree/main/Vibify",
        description: "A feature-rich music streaming service with AI-powered recommendations, playlist creation, and social sharing",
        techIcons: [
            { icon: ViteLogo, text: "Vite", color: "text-[#646cff]" },
            { icon: SiReact, text: "React", color: "text-[#58c4dc]" },
            { icon: RiSupabaseFill, text: "Supabase", color: "text-[#006239]" },
        ],
        lightImage: nexTapLightScreen,
        darkImage: nexTapDarkScreen
    }
]
