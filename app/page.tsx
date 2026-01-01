import { HeroSection } from "@/components/hero-sections";
import { ProjectsSection } from "@/components/project/projects-section";
import { TechnologiesSection } from "@/components/project/technologies-section";
export default function Home() {
  return (
    <div className="pb-20">
      <HeroSection />
      <ProjectsSection />
      <TechnologiesSection />
    </div>
  );
}