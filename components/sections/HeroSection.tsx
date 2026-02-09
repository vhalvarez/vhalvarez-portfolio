"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/ui/blur-fade";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { AnimationConfig } from "@/lib/strategies/AnimationStrategy";

export function HeroSection() {
  const { lang, t } = useLanguage();
  const { data } = usePortfolioData();

  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFade delay={AnimationConfig.hero.getSectionDelay()}>
              <EncryptedText
                text={`${t("hero.greeting")} ${data.name.split(" ")[0]} 👋`}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none inline-block mb-1"
                encryptedClassName="text-muted-foreground"
                revealedClassName="text-foreground"
                revealDelayMs={15}
              />
            </BlurFade>

            <EncryptedText
              className="max-w-[600px] md:text-xl text-muted-foreground"
              text={data.description}
              revealDelayMs={12}
            />

            <div className="flex items-center gap-2 mt-2">
              <EncryptedText
                className="text-sm md:text-base text-muted-foreground"
                text={`${data.location} • ${t("hero.location")}`}
                revealDelayMs={15}
              />
            </div>

            <BlurFade delay={AnimationConfig.hero.getSectionDelay()}>
              <a
                href={lang === "en" ? "/Victor_Alvarez_Resume.pdf" : "/Victor_Alvarez_CV.pdf"}
                target="_blank"
                className={cn(buttonVariants({ variant: "outline" }), "mt-4 gap-2")}
              >
                {t("hero.downloadResume")}
                <FileText className="size-4" />
              </a>
            </BlurFade>
          </div>

          <BlurFade delay={AnimationConfig.hero.getSectionDelay()}>
            <Avatar className="size-32 border md:size-40">
              <AvatarImage
                alt={data.name}
                className="object-cover object-top scale-x-[-1.1] scale-y-[1.1]"
                src={data.avatarUrl}
              />
              <AvatarFallback>{data.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
