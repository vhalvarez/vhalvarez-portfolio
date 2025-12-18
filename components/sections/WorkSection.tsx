"use client";
import BlurFade from "@/components/ui/blur-fade";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { ResumeCard } from "@/components/molecules/resume-card";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { PortfolioData } from "@/lib/repositories/interfaces";
import { AnimationConfig } from "@/lib/strategies/AnimationStrategy";

export function WorkSection() {
  const { t } = useLanguage();
  const { work } = usePortfolioData();

  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={AnimationConfig.work.getSectionDelay()}>
          <h2 className="text-xl font-bold">
            <EncryptedText text={t("work.title")} />
          </h2>
        </BlurFade>
        {work.map((item: PortfolioData["work"][number], id: number) => (
          <BlurFade
            key={item.company}
            delay={AnimationConfig.work.getItemDelay(id)}
          >
            <ResumeCard
              logoUrl={item.logoUrl}
              altText={item.company}
              title={item.company}
              subtitle={item.title}
              href={item.href}
              badges={item.badges}
              period={`${item.start} - ${item.end}`}
              description={item.description}
              avatarClassName={item.company === "FIIIDT" ? "bg-red-600 border-none" : ""}
              imageClassName={item.company === "FIIIDT" ? "p-2" : ""}
              graduationPhotos={[]}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
