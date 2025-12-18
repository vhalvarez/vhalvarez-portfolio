"use client";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FloatingDockSection } from "@/components/sections/FloatingDockSection";

export default function Home() {
  return (
    <TooltipProvider delayDuration={0}>
      <main className="flex flex-col min-h-[100dvh] space-y-6 mb-16">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <FloatingDockSection />
      </main>
    </TooltipProvider>
  );
}
