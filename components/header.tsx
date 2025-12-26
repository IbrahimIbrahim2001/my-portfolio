"use client";
import { MobileNav } from "@/components/mobile-nav";
import { buttonVariants } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatedButton } from "./shared/animated-button";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";


export const navLinks = [
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Projects",
        href: "/projects",
    },
    {
        label: "Contact",
        href: "#",
    },
];

export function Header() {
    const scrolled = useScroll(10);
    const pathname = usePathname();
    return (
        <header
            className={cn(
                "sticky top-0 z-50 mx-auto w-full max-w-4xl border-transparent border-b md:rounded-md md:border md:transition-all md:ease-out",
                {
                    "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-3xl md:shadow":
                        scrolled,
                }
            )}
        >
            <nav
                className={cn(
                    "flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out",
                    {
                        "md:px-2": scrolled,
                    }
                )}
            >
                <Link className="rounded-md p-2 hover:bg-accent" href="/">
                    {/* <Logo className="h-4.5" /> */}
                    Ibrahim
                </Link>
                <div className="hidden items-center gap-1 md:flex">
                    <AnimatedThemeToggler />
                    {navLinks.map((link, i) => {
                        const isActive = pathname.includes(link.href);
                        return (
                            <Link
                                className={cn(buttonVariants({ variant: "ghost" }),
                                    isActive && "text-primary font-semibold"
                                )}
                                href={link.href}
                                key={i}
                            >
                                {link.label}
                            </Link>
                        )
                    })}
                    <AnimatedButton>
                        Download Resume
                    </AnimatedButton>
                </div>
                <MobileNav />
            </nav>
        </header>
    );
}
