import { ReactNode } from "react";

interface SectionHeaderProps {
    title: string,
    description: ReactNode,
}
export default function SectionHeader({ title, description }: SectionHeaderProps) {
    return (
        <>
            <div className="text-3xl flex items-center gap-2 mb-4">
                <div className="h-2 w-8 bg-primary rounded-full" />
                <h2 className="leading-none font-semibold">{title}</h2>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground/60">
                {description}
            </p>
        </>
    )
}
