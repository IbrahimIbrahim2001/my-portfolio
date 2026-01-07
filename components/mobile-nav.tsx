import { navLinks } from "@/components/header";
import { Button, buttonVariants } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { createPortal } from "react-dom";
import { AnimatedButton } from "./shared/animated-button";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

export function MobileNav() {
	const [open, setOpen] = React.useState(false);
	const { isMobile } = useMediaQuery();

	// 🚫 Disable body scroll when open
	React.useEffect(() => {
		if (open && isMobile) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		// Cleanup on unmount too
		return () => {
			document.body.style.overflow = "";
		};
	}, [open, isMobile]);

	return (
		<>
			<Button
				aria-controls="mobile-menu"
				aria-expanded={open}
				aria-label="Toggle menu"
				className="md:hidden"
				onClick={() => setOpen(!open)}
				size="icon"
				variant="outline"
			>
				{open ? (
					<XIcon className="size-4.5" />
				) : (
					<MenuIcon className="size-4.5" />
				)}
			</Button>
			{open &&
				createPortal(
					<div
						className={cn(
							"bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50",
							"fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t md:hidden"
						)}
						id="mobile-menu"
					>
						<div
							className={cn(
								"data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
								"size-full p-4"
							)}
							data-slot={open ? "open" : "closed"}
						>
							<div className="grid gap-y-2">
								{navLinks.map((link) => (
									<a
										className={buttonVariants({
											variant: "ghost",
											className: "justify-start",
										})}
										href={link.href}
										key={link.label}
									>
										{link.label}
									</a>
								))}
							</div>
							<div className="w-full flex items-center justify-center gap-x-4 mb-4">
								<div>
									<AnimatedThemeToggler className="w-full h-9 px-4 py-2 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50" />
								</div>
								<div>
									<Link href="/personal/Ibrahim_Ibrahim.pdf" download="Ibrahim_Ibrahim.pdf" passHref>
										<AnimatedButton>
											<span>
												Download Resume
											</span>
										</AnimatedButton>
									</Link>
								</div>
							</div>
						</div>
					</div>,
					document.body
				)}
		</>
	);
}
