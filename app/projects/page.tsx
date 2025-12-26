import { AllProjectsSection } from "@/components/all-projects-section";
export default function ProjectsPage() {
    return (
        <div className="mb-12">
            <div className="py-8 md:py-10 px-6 md:px-8">
                <div className="text-3xl flex items-center gap-2 mb-4">
                    <div className="h-2 w-8 bg-primary rounded-full" />
                    <h2 className="leading-none font-semibold">Projects</h2>
                </div>
            </div>
            <AllProjectsSection />
        </div>
    )
}
