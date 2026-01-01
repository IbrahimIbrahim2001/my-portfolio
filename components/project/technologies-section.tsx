import { Marquee } from "@/components/ui/marquee"
import { TextBox } from "../shared/text-box"
import { TechnologyType } from "@/types/technology-type";
import { technologies } from "@/helpers/technologies-array";

const firstRow = technologies.slice(0, technologies.length / 2)
const secondRow = technologies.slice(technologies.length / 2)

export function TechnologiesSection() {
    return (
        <div className="py-8 md:py-10 px-6 md:px-8">
            <TextBox text="Technologies I use" />
            <div className="relative">
                <Marquee pauseOnHover className="[--duration:30s]">
                    {firstRow.map((tech, i) => (
                        <TechnologyCard key={i} {...tech} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:30s]">
                    {secondRow.map((tech, i) => (
                        <TechnologyCard key={i} {...tech} />
                    ))}
                </Marquee>
                <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r" />
                <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l" />
            </div>
        </div>
    )
}

// technology card
function TechnologyCard({ icon, text, color }: TechnologyType) {
    const Icon = icon;
    return (
        <div className={`w-48 cursor-pointer overflow-hidden rounded-xl border p-4 shadow-2xl  opacity-80 ${color}`}>
            <div className="flex flex-row items-center gap-2">
                <Icon className="size-8" />
                <div className="flex flex-col">
                    <p className="text-lg font-semibold truncate">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}