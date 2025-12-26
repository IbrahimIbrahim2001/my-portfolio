import { buttonVariants } from "@/components/ui/button";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { AnimatedButton } from "./shared/animated-button";
import TextAnimate from "./ui/text-animate";

const GITHUB_ACCOUNT_LINK = process.env.NEXT_PUBLIC_GITHUB_ACCOUNT_LINK!
const LINKEDIN_ACCOUNT_LINK = process.env.NEXT_PUBLIC_LINKEDIN_ACCOUNT_LINK!

export function HeroSection() {
    return (
        <div className="mb-8 py-8 md:py-10 px-6 md:px-8">
            <div className="flex flex-col sm:flex-row gap-x-2">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Ibrahim <span className="text-primary">Ibrahim</span>
                </h1>
                <div className="mt-2 inline-flex items-center gap-2 text-lg text-muted-foreground">
                    <LayoutTextFlip
                        text=""
                        words={["Software Engineer", "Web Developer", "Front-end Developer", "Full-stack developer"]}
                    />
                </div>
            </div>
            <TextAnimate type="whipIn" text="Building exceptional digital experiences with modern web technologies." className="max-w-sm text-md text-muted-foreground/60 font-semibold mt-4" />
            <div>
            </div>
            {/* Contact buttons */}
            <div className="flex sm:flex-wrap gap-3 mt-6  lg:justify-start">
                <AnimatedButton>
                    <Mail className="h-4 w-4" />
                    Email Me
                </AnimatedButton>
                <Link target="_blank" href={LINKEDIN_ACCOUNT_LINK} className={cn("gap-2", buttonVariants({ variant: "outline", size: "sm" }))}>
                    <SiLinkedin className="size-4" />
                    LinkedIn
                </Link>
                <Link target="_blank" href={GITHUB_ACCOUNT_LINK} className={cn("gap-2", buttonVariants({ variant: "outline", size: "sm" }))}>
                    <SiGithub className="size-4" />
                    GitHub
                </Link>
            </div>
        </div>
    )
}