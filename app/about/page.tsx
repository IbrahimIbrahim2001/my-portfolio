import { AboutSection } from "@/components/about/about-section";
import { TimelineAchievements } from "@/components/about/timeline-achievements";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
    description: 'Learn about my journey, skills, and passion for frontend development, React, and creating exceptional user experiences.',
}

export default function AboutPage() {
    return (
        <>
            <AboutSection />
            <TimelineAchievements />
        </>
    )
}