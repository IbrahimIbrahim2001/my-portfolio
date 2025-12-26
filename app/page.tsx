import { HeroSection } from "@/components/hero-sections";
import { ProjectsSection } from "@/components/projects-section";
import { TechnologiesSection } from "@/components/technologies-section";

export default function Home() {
  return (
    <div className="pb-20">
      <HeroSection />
      <ProjectsSection />
      <TechnologiesSection />
    </div>
  );
}