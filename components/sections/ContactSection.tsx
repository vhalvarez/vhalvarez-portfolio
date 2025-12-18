"use client";
import BlurFade from "@/components/ui/blur-fade";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { LinkPreview } from "@/components/ui/link-preview";
import { useLanguage } from "@/contexts/LanguageContext";
import { DATA } from "@/data/resume";
import { AnimationConfig } from "@/lib/strategies/AnimationStrategy";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-6">
        <BlurFade delay={AnimationConfig.contact.getSectionDelay()}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              <EncryptedText text={t("contact.title")} />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              <EncryptedText text={t("contact.subtitle")} />
            </h2>
            <div className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              <span className="inline">
                <EncryptedText text={t("contact.description")} revealDelayMs={30} />
                <LinkPreview
                  url={DATA.en.contact.social.LinkedIn.url}
                  className="text-foreground hover:underline inline-block mx-1"
                >
                  <EncryptedText text={t("contact.linkedin")} revealDelayMs={30} />
                </LinkPreview>
                <EncryptedText text="." revealDelayMs={30} />
              </span>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
