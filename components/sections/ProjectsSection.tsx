"use client";
import BlurFade from "@/components/ui/blur-fade";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { ProjectCard } from "@/components/molecules/project-card";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { PortfolioData } from "@/lib/repositories/interfaces";
import { AnimationConfig } from "@/lib/strategies/AnimationStrategy";

export function ProjectsSection() {
  const { t } = useLanguage();
  const { projects } = usePortfolioData();

  return (
    <section id="projects">
      <div className="space-y-8 w-full py-6">
        <BlurFade delay={AnimationConfig.projects.getSectionDelay()}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                <EncryptedText text={t("projects.title")} />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                <EncryptedText text={t("projects.subtitle")} />
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                <EncryptedText text={t("projects.description")} revealDelayMs={10} />
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {projects.map((project: PortfolioData["projects"][number], index: number) => (
            <BlurFade
              key={project.title}
              delay={AnimationConfig.projects.getItemDelay(index)}
            >
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video=""
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
