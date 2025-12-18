"use client";
import BlurFade from "@/components/ui/blur-fade";
import { EncryptedText } from "@/components/ui/encrypted-text";
import Marquee from "@/components/ui/marquee";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { AnimationConfig } from "@/lib/strategies/AnimationStrategy";
import { SkillIconFactory } from "@/lib/factories/SkillIconFactory";

export function SkillsSection() {
  const { t } = useLanguage();
  const { skills } = usePortfolioData();

  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={AnimationConfig.skills.getSectionDelay()}>
          <h2 className="text-xl font-bold">
            <EncryptedText text={t("skills.title")} />
          </h2>
        </BlurFade>
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-4">
          <Marquee pauseOnHover className="[--duration:40s]">
            {skills.map((skill: string) => {
              const icon = SkillIconFactory.getIcon(skill);
              return (
                <div key={skill} className="flex items-center gap-2 px-4">
                  {icon.render()}
                  <span className="text-lg font-medium">{skill}</span>
                </div>
              );
            })}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
