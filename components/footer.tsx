import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

const GITHUB_ACCOUNT_LINK = process.env.NEXT_PUBLIC_GITHUB_ACCOUNT_LINK!
const LINKEDIN_ACCOUNT_LINK = process.env.NEXT_PUBLIC_LINKEDIN_ACCOUNT_LINK!

export function Footer() {
    return (
        <div className="w-full md:max-w-4xl mx-auto h-9 px-8 md:px-12 flex items-center justify-between bg-background border border-b-0 border-border/50 text-sm text-muted-foreground/70 z-10 ">
            <p className="">Built with love by <span className="text-primary text-pretty">Ibrahim Ibrahim</span></p>
            <div className="flex flex-wrap gap-3 justify-center">
                <Link target="_blank" href={LINKEDIN_ACCOUNT_LINK}>
                    <SiLinkedin className="size-4" />
                </Link>
                <Link target="_blank" href={GITHUB_ACCOUNT_LINK}>
                    <SiGithub className="size-4" />
                </Link>
            </div>
        </div>
    )
}
