"use client";
import BlurFade from "@/components/ui/blur-fade";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { AnimationConfig } from "@/lib/strategies/AnimationStrategy";

export function AboutSection() {
  const { t } = useLanguage();
  const { data } = usePortfolioData();

  return (
    <section id="about">
      <BlurFade delay={AnimationConfig.about.getSectionDelay()}>
        <h2 className="text-xl font-bold">
          <EncryptedText text={t("about.title")} />
        </h2>
      </BlurFade>
      <BlurFade delay={AnimationConfig.about.getSectionDelay() + 0.04}>
        <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          <EncryptedText text={data.summary} revealDelayMs={30} />
        </p>
      </BlurFade>
    </section>
  );
}
