"use client";
import { memo } from "react";
import BlurFade from "@/components/ui/blur-fade";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { LinkPreview } from "@/components/ui/link-preview";
import { useLanguage } from "@/contexts/LanguageContext";
import { DATA } from "@/data/resume";
import { AnimationConfig } from "@/lib/strategies/AnimationStrategy";
import { Linkedin, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = memo(function ContactSection() {
  const { t } = useLanguage();

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(DATA.en.url);
    const title = encodeURIComponent(`${DATA.en.name} - Full Stack Developer & Backend Architect`);
    const summary = encodeURIComponent("Check out this impressive portfolio showcasing 4+ years of experience building scalable microservices with Clean Architecture, DDD & CQRS!");
    
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      '_blank',
      'width=600,height=600'
    );
  };

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
            
            {/* LinkedIn Share Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
              <Button
                onClick={shareOnLinkedIn}
                className="gap-2 bg-[#0077B5] hover:bg-[#006399] text-white"
                size="lg"
              >
                <Share2 className="size-4" />
                {t("contact.shareLinkedIn") || "Share on LinkedIn"}
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="gap-2"
                size="lg"
              >
                <a
                  href={DATA.en.contact.social.LinkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="size-4" />
                  {t("contact.connectLinkedIn") || "Connect on LinkedIn"}
                </a>
              </Button>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
});
