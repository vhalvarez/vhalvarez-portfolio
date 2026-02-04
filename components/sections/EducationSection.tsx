"use client";
import BlurFade from "@/components/ui/blur-fade";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { ResumeCard } from "@/components/molecules/resume-card";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { PortfolioData } from "@/lib/repositories/interfaces";
import { AnimationConfig } from "@/lib/strategies/AnimationStrategy";

export function EducationSection() {
  const { t } = useLanguage();
  const { education } = usePortfolioData();

  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={AnimationConfig.education.getSectionDelay()}>
          <h2 className="text-xl font-bold">
            <EncryptedText text={t("education.title")} />
          </h2>
        </BlurFade>
        {education.map((item: PortfolioData["education"][number], index: number) => (
          <BlurFade
            key={item.school}
            delay={AnimationConfig.education.getItemDelay(index)}
          >
            <ResumeCard
              href={item.href}
              logoUrl={item.logoUrl}
              altText={item.school}
              title={item.school}
              subtitle={item.degree}
              period={`${item.start} - ${item.end}`}
              graduationPhotos={item.graduationPhotos || []}
              viewPhotosLabel={t("education.viewPhotos")}
              hidePhotosLabel={t("education.hidePhotos")}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
