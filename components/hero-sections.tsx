import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { Mail } from "lucide-react";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { AnimatedButton } from "./shared/animated-button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const GITHUB_ACCOUNT_LINK = process.env.NEXT_PUBLIC_GITHUB_ACCOUNT_LINK!
const LINKEDIN_ACCOUNT_LINK = process.env.NEXT_PUBLIC_LINKEDIN_ACCOUNT_LINK!
const MY_EMAIL = process.env.NEXT_PUBLIC_PERSONAL_EMAIL!;

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
                        words={["Software Engineer", "Front-end Developer", "React & Next Specialist"]}
                    />
                </div>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground/60 mt-4">I build fast, accessible web applications that deliver exceptional user experiences with  <strong className="text-primary/80">React</strong> and modern tooling.</p>
            <div>
            </div>
            {/* Contact buttons */}
            <div className="flex sm:flex-wrap mt-6 justify-center sm:justify-start gap-2 md:gap-3 px-6 sm:px-0">
                <Tooltip>
                    <AnimatedButton>
                        <div>
                            <TooltipTrigger asChild>
                                <Link
                                    href={`mailto:${MY_EMAIL}?subject=Portfolio Inquiry`} className="flex items-center gap-x-1">
                                    <Mail className="h-4 w-4" />
                                    Contact Me
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                Opens email to: {MY_EMAIL}
                            </TooltipContent>
                        </div>
                    </AnimatedButton>
                </Tooltip>
                <AnimatedButton variant={"outline"}>
                    <Link href={LINKEDIN_ACCOUNT_LINK} target="_blank" className="flex items-center gap-x-1">
                        <SiLinkedin className="size-4" />
                        LinkedIn
                    </Link>
                </AnimatedButton>
                <AnimatedButton variant={"outline"}>
                    <Link href={GITHUB_ACCOUNT_LINK} target="_blank" className="flex items-center gap-x-1">
                        <SiGithub className="size-4" />
                        GitHub
                    </Link>
                </AnimatedButton>
            </div>
        </div>
    )
}