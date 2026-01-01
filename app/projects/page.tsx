import { AllProjectsSection } from "@/components/project/all-projects-section";
import SectionHeader from "@/components/shared/section-header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Explore my portfolio of web development projects built with React, Next.js, and modern frontend technologies.',
}


export default function ProjectsPage() {
    return (
        <div className="pb-16">
            <div className="py-8 md:py-10 px-6 md:px-8 max-w-3xl">
                <SectionHeader
                    title="Projects"
                    description={
                        <>A collection of projects built with <span className="font-semibold text-primary/80">Next.js, TypeScript, and Tailwind CSS</span>.
                            Each represents a practical problem I&apos;ve solved or a technology I wanted to explore in depth.
                        </>
                    }
                />
            </div>
            <AllProjectsSection />
        </div>
    )
}
