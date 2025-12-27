import { AllProjectsSection } from "@/components/all-projects-section";
import SectionHeader from "@/components/section-header";
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
